import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { cardStyles } from './styles';
import { createLocalizer, type Localizer } from './localize';
import { evaluateAlerts, getBatteryInfo } from './alerts';
import {
  extractThermostatState,
  formatTemp,
  clamp,
  roundToStep,
  mdiIcon,
  isDualSetpoint,
  HVAC_MODE_ICONS,
  validateConfig,
  getValveIcon,
  parseNumericState,
} from './utils';
import type {
  HomeAssistant,
  ModernThermostatConfig,
  ThermostatState,
  HvacMode,
  ClimateEntity,
  SensorConfig,
  AlertState,
} from './types';

// ─────────────────────────────────────────────────────────────────────────────
// Version & Build metadata
// ─────────────────────────────────────────────────────────────────────────────
const CARD_VERSION = '1.7.2';
const CARD_BUILD_DATE = '2026-10-23';
const CARD_COMMIT = 'auto';  // replaced by CI/CD if available

console.info(
  `%c MODERN-THERMOSTAT %c v${CARD_VERSION} `,
  'background:#ff6b35;color:#fff;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;',
  'background:#1c2128;color:#ff6b35;font-weight:600;border-radius:0 4px 4px 0;padding:2px 6px;'
);

// ─────────────────────────────────────────────────────────────────────────────
// Register card
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    customCards?: Array<{
      type: string; name: string; description: string;
      preview?: boolean; documentationURL?: string;
    }>;
  }
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: 'modern-thermostat',
  name: 'Modern Thermostat',
  description: 'Modern TRV thermostat card with alert system and optional temperature graph.',
  preview: true,
});

// ─────────────────────────────────────────────────────────────────────────────
// Panel type
// ─────────────────────────────────────────────────────────────────────────────

type ActivePanel = 'none' | 'temp' | 'hvac';

// ─────────────────────────────────────────────────────────────────────────────
// Main Card
// ─────────────────────────────────────────────────────────────────────────────

@customElement('modern-thermostat')
export class ModernThermostat extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: ModernThermostatConfig;
  @state() private _error?: string;

  private _localizer: Localizer = createLocalizer();
  private _lastLanguage?: string;

  @state() private _optimisticTarget?: number;
  @state() private _optimisticHigh?: number;
  @state() private _optimisticLow?: number;
  private _optimisticTimer?: ReturnType<typeof setTimeout>;

  @state() private _activePanel: ActivePanel = 'none';

  

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  public setConfig(config: ModernThermostatConfig): void {
    try { validateConfig(config); } catch (e) { this._error = (e as Error).message; return; }
    this._config = {
      show_hvac_modes: true,
      show_header: true,
      show_window_status: true,
      show_valve_position: true,
      show_current_temperature: true,
      show_battery_warning: true,
      compact: false,
      step: 0.5,
      decimals: 1,
      hours_to_show: 24,
      graph_line_width: 2,
      battery_warning_level: 25,
      show_version: false,
      show_debug_info: false,
      ...config,
    };
    if (config.temperature_control?.default_open) this._activePanel = 'temp';
    else if (config.hvac_control?.default_open) this._activePanel = 'hvac';
    else this._activePanel = 'none';
    this._error = undefined;

    }

  public getCardSize(): number {
    if (!this._config) return 3;
    let size = this._config.compact ? 2 : 3;
    if (this._config.show_graph) size += 2;
    return size;
  }

  public static async getConfigElement(): Promise<HTMLElement> {
    await import('./editor');
    return document.createElement('modern-thermostat-editor');
  }

  public static getStubConfig(): ModernThermostatConfig {
    return {
      type: 'custom:modern-thermostat',
      entity: 'climate.example',
      step: 0.5,
      show_hvac_modes: true,
      show_window_status: true,
      show_valve_position: true,
      show_battery_warning: true,
      battery_warning_level: 25,
    };
  }

  public getVersion(): string { return CARD_VERSION; }

  private _refreshLocalizer(): Localizer {
    const lang = this.hass?.language;
    if (lang !== this._lastLanguage) {
      this._localizer.update(this.hass);
      this._lastLanguage = lang;
    }
    return this._localizer;
  }

  private _togglePanel(panel: 'temp' | 'hvac'): void {
    this._activePanel = this._activePanel === panel ? 'none' : panel;
  }

  // ── Render ────────────────────────────────────────────────────────────────

  protected render(): TemplateResult | typeof nothing {
    if (this._error) {
      return html`<ha-card><div class="mt-error"><ha-icon icon="mdi:alert-circle"></ha-icon>${this._error}</div></ha-card>`;
    }
    if (!this._config || !this.hass) return nothing;

    const l = this._refreshLocalizer();

    const entity = this.hass.states[this._config.entity] as ClimateEntity | undefined;
    if (!entity) {
      return html`<ha-card><div class="mt-error"><ha-icon icon="mdi:help-circle"></ha-icon>${this._config.entity}</div></ha-card>`;
    }
    if (entity.state === 'unavailable') {
      return html`
        <ha-card>
          <div class="mt-unavailable">
            <ha-icon icon="mdi:thermometer-off"></ha-icon>
            <div>${this._config.name ?? entity.attributes.friendly_name ?? this._config.entity} – ${l.unavailable()}</div>
          </div>
        </ha-card>`;
    }

    const ts = extractThermostatState(entity, this._config);
    const action = ts.hvacAction ?? 'off';
    const isOff = ts.hvacMode === 'off';
    const dual = isDualSetpoint(ts);

    // ── Evaluate alert priority system ────────────────────────────────────
    const activeAlert = evaluateAlerts(this._config, this.hass, l);

    // ── Battery info ──────────────────────────────────────────────────────
    const batteryInfo = getBatteryInfo(this._config, this.hass);

    // ── Valve / Humidity / Battery ────────────────────────────────────────
    const valveEntity = this._config.valve_position_entity ? this.hass.states[this._config.valve_position_entity] : undefined;
    const valvePos = valveEntity ? parseNumericState(valveEntity.state) : null;

    const humidityEntity = this._config.humidity_entity ? this.hass.states[this._config.humidity_entity] : undefined;
    const humidity = humidityEntity ? parseNumericState(humidityEntity.state) : null;

    // ── Status label: alert overrides normal action label ─────────────────
    // Priority: alert message > normal action label
    const statusLabel = activeAlert?.rawMessage ?? l.action(action);

    const showGraph = this._config.show_graph === true && !!this._config.graph_entity;
    const hoursToShow = this._config.hours_to_show ?? 24;

    const cardClasses = classMap({
      [`action-${action}`]: true,
      [`mode-${ts.hvacMode}`]: true,
      compact: !!this._config.compact,
      'has-graph': showGraph,
      'has-alert': !!activeAlert,
    });

    const displayTarget = this._optimisticTarget !== undefined ? this._optimisticTarget : ts.targetTemp;
    const decimals = this._config.decimals ?? 1;

    const hvacIcon = HVAC_MODE_ICONS[ts.hvacMode] ?? 'mdi:thermostat';
    const hvacLabel = l.mode(ts.hvacMode);
    const tempLabel = l.setTemperature();

    const hvacBtnClass = classMap({
      'mt-main-btn': true,
      [`active-${ts.hvacMode === 'heat_cool' ? 'auto' : ts.hvacMode}`]: true,
      open: this._activePanel === 'hvac',
    });

    const tempBtnClass = classMap({
      'mt-main-btn': true,
      'active-temp': this._activePanel === 'temp',
      open: this._activePanel === 'temp',
    });

    const showStatusBar = humidity !== null || valvePos !== null || batteryInfo.level !== null || (this._config.sensors?.length ?? 0) > 0;

    return html`
      <ha-card class=${cardClasses}>

        ${this._config.show_header !== false
          ? this._renderHeader(ts, statusLabel, activeAlert)
          : nothing}

        <div class="mt-temp-center">
          <div class="mt-ist">
            ${ts.currentTemp !== null
              ? formatTemp(ts.currentTemp, decimals)
              : html`<span style="opacity:0.35">—</span>`}
          </div>
          <span class="mt-ist-unit">${ts.unit}</span>
        </div>

        ${this._activePanel === 'none' && displayTarget !== null
          ? html`
              <div class="mt-soll-row">
                <ha-icon icon="mdi:thermometer-chevron-up"></ha-icon>
                <span class="mt-soll-val">
                  ${isOff
                    ? html`<span style="opacity:0.38">${formatTemp(displayTarget, decimals)}${ts.unit}</span>`
                    : html`${formatTemp(displayTarget, decimals)}${ts.unit}`}
                </span>
              </div>
            `
          : nothing}

        <div class=${classMap({ 'mt-panel-slot': true, open: this._activePanel !== 'none' })}>
          ${this._activePanel === 'temp'
            ? (dual ? this._renderDualSetpoint(ts, l) : this._renderTempControl(ts, isOff, decimals, l))
            : nothing}
          ${this._activePanel === 'hvac'
            ? this._renderModes(ts, l)
            : nothing}
        </div>

        <div class="mt-btn-row">
          ${this._config.show_hvac_modes !== false && ts.availableModes.length > 1
            ? html`
                <button class=${hvacBtnClass}
                  aria-expanded=${this._activePanel === 'hvac'}
                  aria-label=${l.aria('set_mode')}
                  @click=${() => this._togglePanel('hvac')}>
                  <ha-icon icon=${mdiIcon(hvacIcon)}></ha-icon>
                  ${hvacLabel}
                  <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
                </button>
              `
            : nothing}

          <button class=${tempBtnClass}
            aria-expanded=${this._activePanel === 'temp'}
            aria-label=${l.aria('increase')}
            @click=${() => this._togglePanel('temp')}>
            <ha-icon icon="mdi:thermometer-plus"></ha-icon>
            ${tempLabel}
            <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
          </button>
        </div>

        

      ${showGraph ? this._renderGraph(hoursToShow, action) : nothing}
    `;
  }

  // ── Header ────────────────────────────────────────────────────────────────
  // Status line shows highest-priority alert or normal action label

  private _renderHeader(
    ts: ThermostatState,
    statusLabel: string,
    activeAlert: AlertState | null
  ): TemplateResult {
    const icon = this._config!.icon ?? HVAC_MODE_ICONS[ts.hvacMode] ?? 'mdi:thermometer';

    // Determine status line CSS class based on alert severity
    const statusClass = classMap({
      'mt-status': true,
      'alert-error':    activeAlert?.severity === 'critical' || activeAlert?.severity === 'error',
      'alert-warning':  activeAlert?.severity === 'warning',
      'alert-info':     activeAlert?.severity === 'info',
      'window-open':    activeAlert?.messageKey === 'window_open',
    });

    const statusIcon = activeAlert?.icon ?? null;

    return html`
      <div class="mt-header">
        <div class="mt-header-icon">
          <ha-icon icon=${mdiIcon(icon)}></ha-icon>
        </div>
        <div class="mt-header-text">
          <div class="mt-name">${ts.name}</div>
          <div class=${statusClass}>
            ${statusIcon
              ? html`<ha-icon icon=${mdiIcon(statusIcon)}></ha-icon>`
              : nothing}
            ${statusLabel}
          </div>
        </div>
      </div>
    `;
  }

  // ── Temperature control ───────────────────────────────────────────────────

  private _renderTempControl(
    ts: ThermostatState,
    isOff: boolean,
    decimals: number,
    l: Localizer
  ): TemplateResult {
    const displayTarget = this._optimisticTarget !== undefined ? this._optimisticTarget : ts.targetTemp;

    return html`
      <div class="mt-temp-control">
        <button class="mt-adj-btn"
          aria-label=${l.aria('decrease')}
          ?disabled=${isOff || displayTarget === null || displayTarget <= ts.minTemp}
          @click=${() => this._adjustTemp(-ts.step, ts)}>
          <ha-icon icon="mdi:minus"></ha-icon>
        </button>
        <div class="mt-soll-display">
          <div class="mt-soll-big">
            ${displayTarget !== null
              ? html`${formatTemp(displayTarget, decimals)}<span class="mt-soll-big-unit">${ts.unit}</span>`
              : html`<span style="opacity:0.35">—</span>`}
          </div>
          <div class="mt-soll-sub">${l.setpoint()}</div>
        </div>
        <button class="mt-adj-btn"
          aria-label=${l.aria('increase')}
          ?disabled=${isOff || displayTarget === null || displayTarget >= ts.maxTemp}
          @click=${() => this._adjustTemp(ts.step, ts)}>
          <ha-icon icon="mdi:plus"></ha-icon>
        </button>
      </div>
    `;
  }

  // ── Dual Setpoint ─────────────────────────────────────────────────────────

  private _renderDualSetpoint(ts: ThermostatState, l: Localizer): TemplateResult {
    const decimals = this._config!.decimals ?? 1;
    const high = this._optimisticHigh !== undefined ? this._optimisticHigh : ts.targetTempHigh;
    const low  = this._optimisticLow  !== undefined ? this._optimisticLow  : ts.targetTempLow;

    return html`
      <div class="mt-dual">
        <div class="mt-dual-group">
          <div class="mt-dual-label" style="color:#4fc3f7">${l.sensor('cool_setpoint')}</div>
          <div class="mt-dual-ctrl">
            <button class="mt-dual-btn" aria-label=${l.aria('decrease')}
              @click=${() => this._adjustDual('low', -ts.step, ts)}
              ?disabled=${low === null || low <= ts.minTemp}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>
            <div class="mt-dual-val" style="color:#4fc3f7">${formatTemp(low, decimals)}</div>
            <button class="mt-dual-btn" aria-label=${l.aria('increase')}
              @click=${() => this._adjustDual('low', ts.step, ts)}
              ?disabled=${low === null || (high !== null && low >= high - ts.step)}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          </div>
        </div>
        <div class="mt-dual-divider"></div>
        <div class="mt-dual-group">
          <div class="mt-dual-label" style="color:#ff6b35">${l.sensor('heat_setpoint')}</div>
          <div class="mt-dual-ctrl">
            <button class="mt-dual-btn" aria-label=${l.aria('decrease')}
              @click=${() => this._adjustDual('high', -ts.step, ts)}
              ?disabled=${high === null || (low !== null && high <= low + ts.step)}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>
            <div class="mt-dual-val" style="color:#ff6b35">${formatTemp(high, decimals)}</div>
            <button class="mt-dual-btn" aria-label=${l.aria('increase')}
              @click=${() => this._adjustDual('high', ts.step, ts)}
              ?disabled=${high === null || high >= ts.maxTemp}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ── HVAC Mode Pills ───────────────────────────────────────────────────────

  private _renderModes(ts: ThermostatState, l: Localizer): TemplateResult {
    const modeConfigs = this._config!.hvac_modes ?? {};
    const visibleModes = ts.availableModes.filter((mode) => {
      const cfg = modeConfigs[mode];
      return cfg !== false && (cfg as { hidden?: boolean } | undefined)?.hidden !== true;
    });

    return html`
      <div class="mt-modes">
        ${visibleModes.map((mode) => {
          const cfg = modeConfigs[mode] as { name?: string; icon?: string } | undefined;
          const icon = cfg?.icon ?? HVAC_MODE_ICONS[mode] ?? 'mdi:help';
          const label = cfg?.name ?? l.mode(mode);
          const isActive = ts.hvacMode === mode;
          return html`
            <button
              class=${classMap({ 'mt-mode-pill': true, active: isActive })}
              data-mode=${mode}
              aria-pressed=${isActive}
              aria-label="${l.aria('set_mode')}: ${label}"
              @click=${() => this._setMode(mode)}>
              <ha-icon icon=${mdiIcon(icon)}></ha-icon>
              ${label}
            </button>
          `;
        })}
      </div>
    `;
  }

  // ── Temperature Graph ─────────────────────────────────────────────────────

  private _renderGraph(hoursToShow: number, action: string): TemplateResult {
    const graphEntity = this._config!.graph_entity!;
    const lineWidth = this._config!.graph_line_width ?? 2;

    const colorThresholds = [
      { value: 17, color: '#0000FF' },
      { value: 18, color: '#2A00D4' },
      { value: 19, color: '#5500AA' },
      { value: 20, color: '#800080' },
      { value: 21, color: '#AA0055' },
      { value: 22, color: '#D4002A' },
      { value: 24, color: '#FF0000' },
    ];

    const lang = this.hass?.language ?? 'en';
    const hour24 = !lang.toLowerCase().startsWith('en-us');

    const graphConfig = {
      type: 'custom:mini-graph-card',
      entities: [{ entity: graphEntity }],
      hours_to_show: hoursToShow,
      points_per_hour: 2,
      line_width: lineWidth,
      hour24,
      group: false,
      color_thresholds: colorThresholds,
      show: { extrema: true, fill: 'fade', icon: false, labels: false, name: false, state: false },
    };

    const isHeating = action === 'heating';
    const isCooling = action === 'cooling';
    const wrapperClass = classMap({
      'mt-graph-wrapper': true,
      'action-heating': isHeating,
      'action-cooling': isCooling,
    });

    return html`
      <div class=${wrapperClass}>
        <mini-graph-card .config=${graphConfig} .hass=${this.hass}></mini-graph-card>
      </div>
    `;
  }

  // ── Status Bar ────────────────────────────────────────────────────────────
  // Battery shown in red when below warning threshold

  private _renderStatusBar(
    humidity: number | null,
    valvePos: number | null,
    batteryInfo: { level: number | null; isLow: boolean }
  ): TemplateResult {
    const sensors = this._config!.sensors ?? [];

    return html`
      <div class="mt-status-bar">
        ${humidity !== null
          ? html`<div class="mt-stat"><ha-icon icon="mdi:water-percent"></ha-icon><span class="mt-stat-val">${humidity}%</span></div>`
          : nothing}
        ${valvePos !== null && this._config!.show_valve_position !== false
          ? html`<div class="mt-stat"><ha-icon icon=${getValveIcon(valvePos)}></ha-icon><span class="mt-stat-val">${valvePos}%</span></div>`
          : nothing}
        ${batteryInfo.level !== null
          ? html`
              <div class=${classMap({ 'mt-stat': true, 'battery-low': batteryInfo.isLow })}>
                <ha-icon icon=${batteryInfo.isLow ? 'mdi:battery-alert' : 'mdi:battery'}></ha-icon>
                <span class="mt-stat-val">${batteryInfo.level}%</span>
              </div>
            `
          : nothing}
        ${sensors.map((sensor: SensorConfig) => {
          const entity = this.hass?.states[sensor.entity];
          if (!entity) return nothing;
          const value = entity.state;
          const unit = sensor.unit ?? (entity.attributes['unit_of_measurement'] as string | undefined) ?? '';
          const icon = sensor.icon ?? (entity.attributes['icon'] as string | undefined) ?? 'mdi:information-outline';
          const decimals = sensor.decimals;
          const displayValue = decimals !== undefined && !isNaN(Number(value)) ? Number(value).toFixed(decimals) : value;
          return html`
            <div class="mt-stat" title=${sensor.name ?? ''}>
              <ha-icon icon=${mdiIcon(icon)}></ha-icon>
              <span class="mt-stat-val">${displayValue}${unit}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  // ── Actions ───────────────────────────────────────────────────────────────

  private _adjustTemp(delta: number, ts: ThermostatState): void {
    const current = this._optimisticTarget !== undefined ? this._optimisticTarget : ts.targetTemp;
    if (current === null) return;
    const next = clamp(roundToStep(current + delta, ts.step), ts.minTemp, ts.maxTemp);
    this._optimisticTarget = next;
    this._clearOptimisticTimer();
    this._optimisticTimer = setTimeout(() => { this._optimisticTarget = undefined; }, 5000);
    this.hass!.callService('climate', 'set_temperature', { entity_id: this._config!.entity, temperature: next });
  }

  private _adjustDual(which: 'high' | 'low', delta: number, ts: ThermostatState): void {
    const currentHigh = this._optimisticHigh !== undefined ? this._optimisticHigh : ts.targetTempHigh;
    const currentLow  = this._optimisticLow  !== undefined ? this._optimisticLow  : ts.targetTempLow;
    if (currentHigh === null || currentLow === null) return;
    let newHigh = currentHigh, newLow = currentLow;
    if (which === 'high') newHigh = clamp(roundToStep(currentHigh + delta, ts.step), currentLow + ts.step, ts.maxTemp);
    else newLow = clamp(roundToStep(currentLow + delta, ts.step), ts.minTemp, currentHigh - ts.step);
    this._optimisticHigh = newHigh; this._optimisticLow = newLow;
    this._clearOptimisticTimer();
    this._optimisticTimer = setTimeout(() => { this._optimisticHigh = undefined; this._optimisticLow = undefined; }, 5000);
    this.hass!.callService('climate', 'set_temperature', { entity_id: this._config!.entity, target_temp_high: newHigh, target_temp_low: newLow });
  }

  private _setMode(mode: HvacMode): void {
    if (!this.hass || !this._config) return;
    this.hass.callService('climate', 'set_hvac_mode', { entity_id: this._config.entity, hvac_mode: mode });
    setTimeout(() => { if (this._activePanel === 'hvac') this._activePanel = 'none'; }, 320);
  }

  private _clearOptimisticTimer(): void {
    if (this._optimisticTimer !== undefined) { clearTimeout(this._optimisticTimer); this._optimisticTimer = undefined; }
  }

  

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._clearOptimisticTimer();
  }
}