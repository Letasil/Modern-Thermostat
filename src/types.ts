// ─────────────────────────────────────────────────────────────────────────────
// Home Assistant Core Types
// ─────────────────────────────────────────────────────────────────────────────

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
  context: { id: string; parent_id: string | null; user_id: string | null; };
}

export interface ClimateEntityAttributes {
  friendly_name?: string;
  hvac_modes?: HvacMode[];
  hvac_action?: HvacAction;
  current_temperature?: number;
  temperature?: number;
  target_temp_high?: number;
  target_temp_low?: number;
  min_temp?: number;
  max_temp?: number;
  target_temp_step?: number;
  preset_mode?: string;
  preset_modes?: string[];
  unit_of_measurement?: string;
  supported_features?: number;
}

export interface ClimateEntity extends HassEntity {
  attributes: ClimateEntityAttributes & Record<string, unknown>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  language: string;
  locale: { language: string; number_format: string; time_format: string; };
  themes: { darkMode: boolean; theme: string; };
  callService(domain: string, service: string, serviceData?: Record<string, unknown>): Promise<void>;
  localize(key: string, ...args: unknown[]): string;
  formatEntityState(entity: HassEntity): string;
  formatEntityAttributeValue(entity: HassEntity, attribute: string): string;
}

// ─────────────────────────────────────────────────────────────────────────────
// HVAC Types
// ─────────────────────────────────────────────────────────────────────────────

export type HvacMode = 'off' | 'heat' | 'cool' | 'auto' | 'heat_cool' | 'fan_only' | 'dry';
export type HvacAction = 'off' | 'idle' | 'heating' | 'cooling' | 'drying' | 'fan';

// ─────────────────────────────────────────────────────────────────────────────
// Alert / Warning priority levels
// ─────────────────────────────────────────────────────────────────────────────

export type AlertSeverity = 'critical' | 'error' | 'warning' | 'info' | 'normal';

export interface AlertState {
  active: boolean;
  severity: AlertSeverity;
  icon: string;
  /** Translation key used to look up the message in Localizer */
  messageKey: string;
  /** Fallback raw message (used for custom alerts) */
  rawMessage?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Config sub-types
// ─────────────────────────────────────────────────────────────────────────────

export interface SensorConfig {
  entity: string;
  name?: string;
  icon?: string;
  unit?: string;
  decimals?: number;
}

export interface HvacModeConfig {
  name?: string;
  icon?: string;
  hidden?: boolean;
}

export interface CollapsibleConfig {
  collapsible?: boolean;
  default_open?: boolean;
}

/**
 * Custom alert definition – user-defined entity-based warnings.
 * Supports per-language messages for full localisation.
 */
export interface CustomAlertConfig {
  /** Entity to monitor */
  entity: string;
  /** State value that triggers the alert (default: "on") */
  state?: string;
  /** MDI icon (e.g. mdi:window-open) */
  icon?: string;
  /** Severity level (default: "warning") */
  severity?: AlertSeverity;
  /** Localised messages – at least one language required */
  message_de?: string;
  message_en?: string;
  message_fr?: string;
  message_nl?: string;
  message_es?: string;
  /** Generic fallback message if no language-specific one is found */
  message?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Card Configuration
// ─────────────────────────────────────────────────────────────────────────────

export interface ModernThermostatConfig {
  type: string;
  entity: string;

  // Display
  name?: string;
  icon?: string;
  decimals?: number;
  unit?: string;

  // Temperature control
  step?: number;
  temperature_control?: CollapsibleConfig;

  // HVAC modes
  show_hvac_modes?: boolean;
  hvac_control?: CollapsibleConfig;
  hvac_modes?: Partial<Record<HvacMode, HvacModeConfig | false>>;

  // Window contact
  window_entity?: string;
  show_window_status?: boolean;

  // Valve position
  valve_position_entity?: string;
  show_valve_position?: boolean;

  // Humidity
  humidity_entity?: string;

  // Battery
  battery_entity?: string;
  /** Battery level below which a warning is shown (default: 25) */
  battery_warning_level?: number;
  /** Show battery warning in the status line (default: false) */
  show_battery_warning?: boolean;

  // Device status / error entities
  /** Generic status sensor (e.g. sensor.trv_status) */
  status_entity?: string;
  /** Error/fault sensor (e.g. sensor.trv_error) */
  error_entity?: string;
  /** Binary fault sensor (e.g. binary_sensor.fault) */
  fault_entity?: string;
  /** Operating state sensor (e.g. sensor.operating_state) */
  operating_state_entity?: string;
  /** Firmware update binary sensor */
  update_entity?: string;

  // Custom user-defined alerts (arbitrary entity monitoring)
  alerts?: CustomAlertConfig[];

  // Legacy sensor list
  sensors?: SensorConfig[];

  // Layout
  compact?: boolean;
  show_header?: boolean;
  show_current_temperature?: boolean;

  // Temperature graph (mini-graph-card)
  show_graph?: boolean;
  graph_entity?: string;
  hours_to_show?: number;
  graph_line_width?: number;

  // ── Version display ──────────────────────────────────────────────────────
  /** Show installed card version in the card footer (default: false) */
  show_version?: boolean;
  /** Show debug info: version, build date, commit (default: false) */
  show_debug_info?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Internal State
// ─────────────────────────────────────────────────────────────────────────────

export interface ThermostatState {
  entity: ClimateEntity;
  currentTemp: number | null;
  targetTemp: number | null;
  targetTempHigh: number | null;
  targetTempLow: number | null;
  hvacMode: HvacMode;
  hvacAction: HvacAction | null;
  availableModes: HvacMode[];
  minTemp: number;
  maxTemp: number;
  step: number;
  name: string;
  unit: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Lovelace Card Interfaces
// ─────────────────────────────────────────────────────────────────────────────

export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: ModernThermostatConfig): void;
  getCardSize(): number;
}

export interface LovelaceCardEditor extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: ModernThermostatConfig): void;
}