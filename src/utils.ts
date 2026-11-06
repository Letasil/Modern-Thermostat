import type {
  HvacMode,
  HvacAction,
  ClimateEntity,
  ThermostatState,
  ModernThermostatConfig,
} from './types';

// ─────────────────────────────────────────────────────────────────────────────
// HVAC Mode → Icon mapping
// ─────────────────────────────────────────────────────────────────────────────

export const HVAC_MODE_ICONS: Record<HvacMode, string> = {
  off: 'mdi:power',
  heat: 'mdi:fire',
  cool: 'mdi:snowflake',
  auto: 'mdi:thermostat-auto',
  heat_cool: 'mdi:autorenew',
  fan_only: 'mdi:fan',
  dry: 'mdi:water-off',
};

export const HVAC_MODE_LABELS: Record<HvacMode, string> = {
  off: 'Off',
  heat: 'Heat',
  cool: 'Cool',
  auto: 'Auto',
  heat_cool: 'Heat/Cool',
  fan_only: 'Fan',
  dry: 'Dry',
};

// ─────────────────────────────────────────────────────────────────────────────
// HVAC Action → icon
// ─────────────────────────────────────────────────────────────────────────────

export const HVAC_ACTION_ICONS: Record<HvacAction, string> = {
  heating: 'mdi:fire',
  cooling: 'mdi:snowflake',
  drying: 'mdi:water-off',
  fan: 'mdi:fan',
  idle: 'mdi:thermometer',
  off: 'mdi:power',
};

// ─────────────────────────────────────────────────────────────────────────────
// Extract thermostat state from HA entity
// ─────────────────────────────────────────────────────────────────────────────

export function extractThermostatState(
  entity: ClimateEntity,
  config: ModernThermostatConfig
): ThermostatState {
  const attrs = entity.attributes;

  const currentTemp =
    typeof attrs.current_temperature === 'number'
      ? attrs.current_temperature
      : null;

  const targetTemp =
    typeof attrs.temperature === 'number' ? attrs.temperature : null;

  const targetTempHigh =
    typeof attrs.target_temp_high === 'number' ? attrs.target_temp_high : null;

  const targetTempLow =
    typeof attrs.target_temp_low === 'number' ? attrs.target_temp_low : null;

  const hvacMode = (entity.state as HvacMode) ?? 'off';
  const hvacAction = (attrs.hvac_action as HvacAction) ?? null;
  const availableModes = (attrs.hvac_modes as HvacMode[]) ?? ['off', 'heat'];
  const minTemp = typeof attrs.min_temp === 'number' ? attrs.min_temp : 5;
  const maxTemp = typeof attrs.max_temp === 'number' ? attrs.max_temp : 35;

  const step =
    config.step ??
    (typeof attrs.target_temp_step === 'number' ? attrs.target_temp_step : 0.5);

  const name =
    config.name ??
    (typeof attrs.friendly_name === 'string'
      ? attrs.friendly_name
      : entity.entity_id);

  const unit =
    config.unit ??
    (typeof attrs.unit_of_measurement === 'string'
      ? attrs.unit_of_measurement
      : '°C');

  return {
    entity,
    currentTemp,
    targetTemp,
    targetTempHigh,
    targetTempLow,
    hvacMode,
    hvacAction,
    availableModes,
    minTemp,
    maxTemp,
    step,
    name,
    unit,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Format temperature value
// ─────────────────────────────────────────────────────────────────────────────

export function formatTemp(value: number | null, decimals = 1): string {
  if (value === null || value === undefined) return '—';
  return value.toFixed(decimals);
}

// ─────────────────────────────────────────────────────────────────────────────
// Clamp & round helpers
// ─────────────────────────────────────────────────────────────────────────────

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function roundToStep(value: number, step: number): number {
  return Math.round(value / step) * step;
}

// ─────────────────────────────────────────────────────────────────────────────
// MDI icon helper
// ─────────────────────────────────────────────────────────────────────────────

export function mdiIcon(icon: string): string {
  return icon.startsWith('mdi:') ? icon : `mdi:${icon}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Dual setpoint detection
// ─────────────────────────────────────────────────────────────────────────────

export function isDualSetpoint(state: ThermostatState): boolean {
  return (
    state.hvacMode === 'heat_cool' &&
    state.targetTempHigh !== null &&
    state.targetTempLow !== null
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Validate config
// ─────────────────────────────────────────────────────────────────────────────

export function validateConfig(config: ModernThermostatConfig): void {
  if (!config.entity) {
    throw new Error('[modern-thermostat] Missing required field: entity');
  }
  if (!config.entity.startsWith('climate.')) {
    throw new Error(
      `[modern-thermostat] Entity must be a climate entity, got: ${config.entity}`
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Valve position helpers
// ─────────────────────────────────────────────────────────────────────────────

export function getValveIcon(position: number | null): string {
  if (position === null) return 'mdi:valve';
  if (position === 0) return 'mdi:valve-closed';
  if (position >= 100) return 'mdi:valve-open';
  return 'mdi:valve';
}

export function parseNumericState(state: string): number | null {
  const n = parseFloat(state);
  return isNaN(n) ? null : n;
}