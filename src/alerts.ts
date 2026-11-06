import type {
  HomeAssistant,
  ModernThermostatConfig,
  AlertState,
  AlertSeverity,
  CustomAlertConfig,
} from './types';
import type { Localizer } from './localize';

// ─────────────────────────────────────────────────────────────────────────────
// Alert priority order (lower index = higher priority)
// ─────────────────────────────────────────────────────────────────────────────

const SEVERITY_ORDER: AlertSeverity[] = [
  'critical',  // 0 – highest
  'error',     // 1
  'warning',   // 2
  'info',      // 3
  'normal',    // 4 – lowest
];

function severityRank(s: AlertSeverity): number {
  return SEVERITY_ORDER.indexOf(s);
}

// ─────────────────────────────────────────────────────────────────────────────
// Known state value sets
// ─────────────────────────────────────────────────────────────────────────────

const CALIBRATION_STATES = new Set([
  'calibration', 'calibrating', 'kalibrierung', 'kalibrierfahrt',
  'calibration_drive', 'reference_drive', 'referenzfahrt',
  'valve_calibration', 'motor_calibration',
]);

const VALVE_ERROR_STATES = new Set([
  'valve_error', 'valve_blocked', 'valve_position_error',
  'position_mismatch', 'motor_error', 'motor_blocked',
  'ventilfehler', 'ventil_blockiert',
]);

const FAULT_STATES = new Set([
  'fault', 'error', 'failure', 'stoerung', 'fehler',
  'sabotage', 'tamper', 'alarm',
]);

const COMMUNICATION_ERROR_STATES = new Set([
  'unavailable', 'unknown', 'timeout', 'offline',
  'not_reachable', 'communication_error',
]);

const FIRMWARE_UPDATE_STATES = new Set([
  'update', 'updating', 'firmware_update', 'ota',
]);

// ─────────────────────────────────────────────────────────────────────────────
// Evaluate all alerts – returns highest-priority active alert or null
// ─────────────────────────────────────────────────────────────────────────────

export function evaluateAlerts(
  config: ModernThermostatConfig,
  hass: HomeAssistant,
  l: Localizer
): AlertState | null {
  const candidates: AlertState[] = [];

  // ── 1. Fault entity (binary_sensor) ──────────────────────────────────────
  if (config.fault_entity) {
    const e = hass.states[config.fault_entity];
    if (e?.state === 'on') {
      candidates.push({
        active: true,
        severity: 'error',
        icon: 'mdi:alert-circle',
        messageKey: 'fault',
        rawMessage: l.alert('fault'),
      });
    }
  }

  // ── 2. Error entity (sensor) ──────────────────────────────────────────────
  if (config.error_entity) {
    const e = hass.states[config.error_entity];
    if (e && e.state !== 'none' && e.state !== 'ok' && e.state !== 'normal'
        && e.state !== 'off' && e.state !== '0') {
      const stateL = e.state.toLowerCase();
      if (VALVE_ERROR_STATES.has(stateL)) {
        candidates.push({ active: true, severity: 'error', icon: 'mdi:alert-circle', messageKey: 'valve_error', rawMessage: l.alert('valve_error') });
      } else if (CALIBRATION_STATES.has(stateL)) {
        candidates.push({ active: true, severity: 'warning', icon: 'mdi:sync', messageKey: 'calibration', rawMessage: l.alert('calibration') });
      } else if (COMMUNICATION_ERROR_STATES.has(stateL)) {
        candidates.push({ active: true, severity: 'error', icon: 'mdi:wifi-alert', messageKey: 'communication_error', rawMessage: l.alert('communication_error') });
      } else if (FIRMWARE_UPDATE_STATES.has(stateL)) {
        candidates.push({ active: true, severity: 'info', icon: 'mdi:update', messageKey: 'firmware_update', rawMessage: l.alert('firmware_update') });
      } else {
        candidates.push({ active: true, severity: 'error', icon: 'mdi:alert-circle', messageKey: 'fault', rawMessage: e.state });
      }
    }
  }

  // ── 3. Status entity (sensor) ─────────────────────────────────────────────
  if (config.status_entity) {
    const e = hass.states[config.status_entity];
    if (e && e.state !== 'normal' && e.state !== 'ok' && e.state !== 'idle'
        && e.state !== 'off' && e.state !== '0') {
      const stateL = e.state.toLowerCase();
      if (CALIBRATION_STATES.has(stateL) || stateL.includes('calibrat') || stateL.includes('kalibrierung')) {
        candidates.push({ active: true, severity: 'warning', icon: 'mdi:sync', messageKey: 'calibration', rawMessage: l.alert('calibration') });
      } else if (VALVE_ERROR_STATES.has(stateL)) {
        candidates.push({ active: true, severity: 'error', icon: 'mdi:alert-circle', messageKey: 'valve_error', rawMessage: l.alert('valve_error') });
      } else if (COMMUNICATION_ERROR_STATES.has(stateL)) {
        candidates.push({ active: true, severity: 'error', icon: 'mdi:wifi-alert', messageKey: 'communication_error', rawMessage: l.alert('communication_error') });
      } else if (FIRMWARE_UPDATE_STATES.has(stateL)) {
        candidates.push({ active: true, severity: 'info', icon: 'mdi:update', messageKey: 'firmware_update', rawMessage: l.alert('firmware_update') });
      } else if (FAULT_STATES.has(stateL)) {
        candidates.push({ active: true, severity: 'error', icon: 'mdi:alert-circle', messageKey: 'fault', rawMessage: l.alert('fault') });
      }
    }
  }

  // ── 4. Operating state entity (Homematic IP etc.) ─────────────────────────
  if (config.operating_state_entity) {
    const e = hass.states[config.operating_state_entity];
    if (e) {
      const stateL = e.state.toLowerCase();
      if (CALIBRATION_STATES.has(stateL) || stateL.includes('calibrat') || stateL.includes('kalibrierung')) {
        candidates.push({ active: true, severity: 'warning', icon: 'mdi:sync', messageKey: 'operating_state_calibration', rawMessage: l.alert('operating_state_calibration') });
      } else if (stateL.includes('reference') || stateL.includes('referenz')) {
        candidates.push({ active: true, severity: 'info', icon: 'mdi:sync', messageKey: 'operating_state_reference', rawMessage: l.alert('operating_state_reference') });
      }
    }
  }

  // ── 5. Firmware update entity ─────────────────────────────────────────────
  if (config.update_entity) {
    const e = hass.states[config.update_entity];
    if (e?.state === 'on') {
      candidates.push({ active: true, severity: 'info', icon: 'mdi:update', messageKey: 'firmware_update', rawMessage: l.alert('firmware_update') });
    }
  }

  // ── 6. Window entity ──────────────────────────────────────────────────────
  if (config.window_entity && config.show_window_status !== false) {
    const e = hass.states[config.window_entity];
    if (e?.state === 'on') {
      candidates.push({ active: true, severity: 'warning', icon: 'mdi:window-open', messageKey: 'window_open', rawMessage: l.windowOpen() });
    }
  }

  // ── 7. Battery warning ────────────────────────────────────────────────────
  if (config.battery_entity && config.show_battery_warning !== false) {
    const e = hass.states[config.battery_entity];
    if (e) {
      const level = parseFloat(e.state);
      const threshold = config.battery_warning_level ?? 25;
      if (!isNaN(level) && level <= threshold) {
        candidates.push({ active: true, severity: 'warning', icon: 'mdi:battery-alert', messageKey: 'battery_low', rawMessage: l.alert('battery_low') });
      }
    }
  }

  // ── 8. Custom user-defined alerts ─────────────────────────────────────────
  if (config.alerts?.length) {
    for (const alertCfg of config.alerts) {
      const e = hass.states[alertCfg.entity];
      if (!e) continue;
      const triggerState = alertCfg.state ?? 'on';
      if (e.state !== triggerState) continue;

      // Resolve localised message: prefer language-specific, fall back to en/generic
      const langKey = `message_${l.lang}` as keyof CustomAlertConfig;
      const localMsg = (alertCfg[langKey] as string | undefined)
        ?? alertCfg.message_en
        ?? alertCfg.message
        ?? alertCfg.entity;

      candidates.push({
        active: true,
        severity: alertCfg.severity ?? 'warning',
        icon: alertCfg.icon ?? 'mdi:alert',
        messageKey: 'fault',
        rawMessage: localMsg,
      });
    }
  }

  // ── Select highest-priority alert ─────────────────────────────────────────
  if (candidates.length === 0) return null;

  return candidates.reduce((best, current) =>
    severityRank(current.severity) < severityRank(best.severity) ? current : best
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Battery info helper
// ─────────────────────────────────────────────────────────────────────────────

export interface BatteryInfo {
  level: number | null;
  isLow: boolean;
}

export function getBatteryInfo(
  config: ModernThermostatConfig,
  hass: HomeAssistant
): BatteryInfo {
  if (!config.battery_entity) return { level: null, isLow: false };
  const e = hass.states[config.battery_entity];
  if (!e) return { level: null, isLow: false };
  const level = parseFloat(e.state);
  if (isNaN(level)) return { level: null, isLow: false };
  const threshold = config.battery_warning_level ?? 25;
  return { level, isLow: level <= threshold };
}