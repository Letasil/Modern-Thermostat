import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { css } from 'lit';
import type { HomeAssistant, ModernThermostatConfig } from './types';

@customElement('modern-thermostat-editor')
export class ModernThermostatEditor extends LitElement {
  static styles = css`
    .editor { padding: 16px; display: flex; flex-direction: column; gap: 14px; }
    .section-title { font-size: 12px; font-weight: 600; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: -6px; }
    .row { display: flex; align-items: center; gap: 10px; }
    .row > * { flex: 1; }
    ha-formfield { display: flex; align-items: center; }
    .divider { height: 1px; background: var(--divider-color); }
  `;

  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: ModernThermostatConfig;

  public setConfig(config: ModernThermostatConfig): void { this._config = { ...config }; }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config) return nothing;
    const cfg = this._config;

    return html`
      <div class="editor">

        <div class="section-title">Entität</div>
        <ha-entity-picker .hass=${this.hass} .value=${cfg.entity ?? ''} .includeDomains=${['climate']} allow-custom-entity
          @value-changed=${(e: CustomEvent) => this._set('entity', e.detail.value)}></ha-entity-picker>

        <div class="section-title">Anzeige</div>
        <div class="row">
          <ha-textfield label="Name" .value=${cfg.name ?? ''} @change=${(e: Event) => this._set('name', (e.target as HTMLInputElement).value || undefined)}></ha-textfield>
          <ha-textfield label="Icon" .value=${cfg.icon ?? ''} placeholder="mdi:thermometer" @change=${(e: Event) => this._set('icon', (e.target as HTMLInputElement).value || undefined)}></ha-textfield>
        </div>
        <div class="row">
          <ha-textfield label="Schrittweite" type="number" .value=${String(cfg.step ?? 0.5)} min="0.1" max="5" step="0.1"
            @change=${(e: Event) => this._set('step', parseFloat((e.target as HTMLInputElement).value))}></ha-textfield>
          <ha-textfield label="Nachkommastellen" type="number" .value=${String(cfg.decimals ?? 1)} min="0" max="2" step="1"
            @change=${(e: Event) => this._set('decimals', parseInt((e.target as HTMLInputElement).value, 10))}></ha-textfield>
        </div>

        <div class="section-title">Optionen</div>
        <ha-formfield label="HVAC-Modi anzeigen">
          <ha-switch .checked=${cfg.show_hvac_modes !== false} @change=${(e: Event) => this._set('show_hvac_modes', (e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Header anzeigen">
          <ha-switch .checked=${cfg.show_header !== false} @change=${(e: Event) => this._set('show_header', (e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Compact Mode">
          <ha-switch .checked=${cfg.compact === true} @change=${(e: Event) => this._set('compact', (e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>

        <div class="divider"></div>

        <div class="section-title">Fensterkontakt</div>
        <ha-entity-picker .hass=${this.hass} .value=${cfg.window_entity ?? ''} .includeDomains=${['binary_sensor']} allow-custom-entity
          @value-changed=${(e: CustomEvent) => this._set('window_entity', e.detail.value || undefined)}></ha-entity-picker>
        <ha-formfield label="Fensterstatus anzeigen">
          <ha-switch .checked=${cfg.show_window_status !== false} @change=${(e: Event) => this._set('show_window_status', (e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>

        <div class="divider"></div>

        <div class="section-title">Sensoren</div>
        <ha-entity-picker .hass=${this.hass} .value=${cfg.humidity_entity ?? ''} .includeDomains=${['sensor']} allow-custom-entity
          label="Luftfeuchtigkeit"
          @value-changed=${(e: CustomEvent) => this._set('humidity_entity', e.detail.value || undefined)}></ha-entity-picker>

        <ha-entity-picker .hass=${this.hass} .value=${cfg.valve_position_entity ?? ''} .includeDomains=${['sensor']} allow-custom-entity
          label="Ventilstellung"
          @value-changed=${(e: CustomEvent) => this._set('valve_position_entity', e.detail.value || undefined)}></ha-entity-picker>
        <ha-formfield label="Ventilstellung anzeigen">
          <ha-switch .checked=${cfg.show_valve_position !== false} @change=${(e: Event) => this._set('show_valve_position', (e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>

        <ha-entity-picker .hass=${this.hass} .value=${cfg.battery_entity ?? ''} .includeDomains=${['sensor']} allow-custom-entity
          label="Batterie"
          @value-changed=${(e: CustomEvent) => this._set('battery_entity', e.detail.value || undefined)}></ha-entity-picker>

        <div class="divider"></div>

        <div class="section-title">Temperatursteuerung</div>
        <ha-formfield label="Eingeklappt starten">
          <ha-switch .checked=${cfg.temperature_control?.collapsible !== false} @change=${(e: Event) => this._setNested('temperature_control','collapsible',(e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Standardmäßig geöffnet">
          <ha-switch .checked=${cfg.temperature_control?.default_open === true} @change=${(e: Event) => this._setNested('temperature_control','default_open',(e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>

        <div class="section-title">HVAC-Steuerung</div>
        <ha-formfield label="Eingeklappt starten">
          <ha-switch .checked=${cfg.hvac_control?.collapsible !== false} @change=${(e: Event) => this._setNested('hvac_control','collapsible',(e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Standardmäßig geöffnet">
          <ha-switch .checked=${cfg.hvac_control?.default_open === true} @change=${(e: Event) => this._setNested('hvac_control','default_open',(e.target as HTMLInputElement).checked)}></ha-switch>
        </ha-formfield>

      </div>
    `;
  }

  private _set<K extends keyof ModernThermostatConfig>(key: K, value: ModernThermostatConfig[K]): void {
    if (!this._config) return;
    this._config = { ...this._config, [key]: value };
    this._fire();
  }

  private _setNested(section: 'temperature_control' | 'hvac_control', key: string, value: boolean): void {
    if (!this._config) return;
    this._config = { ...this._config, [section]: { ...(this._config[section] ?? {}), [key]: value } };
    this._fire();
  }

  private _fire(): void {
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
  }
}