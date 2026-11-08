# Changelog

All notable changes to **Modern Thermostat Card** are documented here.

Format: `major.minor.patch` — [Semantic Versioning](https://semver.org/)

---
## v2.0.7 - 2026-11-06

### Changed
- Moisture indicator enlarged
- Moisture threshold added
- Color changes to yellow when the threshold is exceeded

## v2.0.6 - 2026-11-06

### Changed
- A long press on the room name opens the details window

## v2.0.5 - 2026-11-06

### Changed
- Added a hover function to the trend display
- Display error fixed

## v1.7.2 – 2026-10-23

### Changed
- Added GitHub Actions release workflow (.github/workflows/release.yml)
- Automatic build, ZIP creation and GitHub Release on git tag push
- Build metadata injection: version, build date, commit hash
- Version consistency validation in CI (package.json = hacs.json = tag)
- Added LICENSE file (MIT)
- Updated README with complete release workflow documentation
- Added npm release scripts: release:patch, release:minor, release:major

---


## v1.7.1 – 2026-10-23

### Changed
- Removed automatic GitHub update check (HACS handles updates)
- Removed check_for_updates and github_repo config options
- Removed update notice banner and related CSS
- Kept show_version and show_debug_info for local version display
- HACS-compatible: version management via GitHub Releases only

---


## v1.7.0 – 2026-10-23

### Changed
- show_version: true – displays card version in footer
- show_debug_info: true – shows version, build date, commit
- check_for_updates: true – checks GitHub for newer releases
- github_repo: configurable repository for update check
- Update notice: animated mdi:update icon, localised text
- All version strings fully localised (DE/EN/FR/NL/ES)
- Silent fail: update check never breaks the card
- Version badge: minimal, unobtrusive footer display

---


## v1.6.2 – 2026-10-23

### Changed
- Added automatic version check to index.html (non-blocking, silent fail)
- Version check shows orange update badge in topbar when newer release available
- All files now consistently on same version

---


## v1.6.1 – 2026-10-23

### Changed
- Updated index.html to v1.6.0
- Added alert system demo cards to index.html

---


## v1.6.0 – 2026-10-23

### Changed
- Alert priority system: critical > error > warning > info > normal
- Battery warning: red icon + text when below threshold (default 25%)
- show_battery_warning: true shows alert in status line
- battery_warning_level: configurable threshold
- status_entity: auto-detect calibration/valve/comm errors
- error_entity: sensor-based error detection
- fault_entity: binary_sensor fault detection
- operating_state_entity: Homematic IP operating state
- update_entity: firmware update detection
- Custom alerts: alerts[] list with per-language messages
- All alert messages fully localised (DE/EN/FR/NL/ES)
- Alert overrides normal status label (highest priority wins)
- Shelly BLU TRV + Homematic IP state detection

---


## v1.5.2 – 2026-10-23

### Changed
- Removed graph-separator divider line between card and graph
- Fixed index.html setMode() button label bug (operator precedence)

---


## v1.5.1 – 2026-10-23

### Changed
- Dynamic card height: content-driven, no wasted space, no fixed min-height
- Status bar sits directly below buttons without gap (no margin-top:auto)
- Seamless graph integration: card loses bottom radius when graph active
- Graph wrapper inherits action border colour (heating=orange, cooling=blue)
- Compact mode: tighter padding for all elements
- Grid uses align-items:start so cards dont stretch to equal height
- index.html: shows both with-graph and without-graph side by side

---


## v1.5.0 – 2026-10-23

### Changed
- Optional temperature graph via mini-graph-card (show_graph: true)
- Temperature gradient: cold blue to warm red (7 color stops)
- Graph entity configurable via graph_entity
- Hours configurable via hours_to_show (default: 24)
- Graph supported in compact mode
- CSS variables for gradient color overrides
- Full localisation: all UI texts use hass.language automatically
- No hardcoded strings – all via Localizer class
- Status labels use l.action() – never raw HA values

---


## v1.4.1 – 2026-10-23

### Changed
- Full localisation: all UI texts use hass.language automatically
- No hardcoded strings in TypeScript – all via Localizer class
- Status labels use l.action() – never raw HA values like 'heating'
- Button labels use l.setTemperature() and l.mode() – fully translated
- Window status uses l.windowOpen() from translation JSON
- Dual setpoint labels use l.sensor() – localised Cool/Heat
- ARIA labels fully localised via l.aria()
- Fallback to English when language not available
- Translations updated: de/en/fr/nl/es with ui{} and action{} sections

---


## v1.4.0 – 2026-10-23

### Changed
- HVAC panel now uses same shared slot as temperature control – never open simultaneously
- Window status replaces action label inline – no extra box or banner
- Status bar always sticks to bottom via flex column + margin-top:auto
- Unified panel slot: temp and HVAC share one collapsible area above buttons
- Auto-close HVAC panel after mode selection

---


## v1.3.2 – 2026-10-23

### Changed
- Added index.html – standalone browser preview with all card states
- Fixed CARD_VERSION regex in build.py
- index.html now included in release ZIP

---


## v1.3.1 – 2026-10-23

### Changed
- Added CARD_VERSION constant with console.info() logging
- Added getVersion() method for DevTools access
- Build script now auto-updates version in TypeScript source

---


## v1.3.0 – 2026-10-23

### Added
- **Compact Mode** (`compact: true`) – smaller card height, optimised for grid dashboards and mobile
- **Valve position** (`valve_position_entity`) – displays TRV valve opening percentage with `mdi:valve` icon
- **Humidity entity** (`humidity_entity`) – dedicated humidity sensor entity
- **Battery entity** (`battery_entity`) – dedicated battery sensor entity
- **Window warning** – orange/red alert shown directly below room name only when window is open; hidden when closed
- **Side-by-side buttons** – HVAC and Temperature buttons always displayed next to each other
- **Temperature panel above buttons** – setpoint control slides in above the button row
- **User-friendly status labels** – `heating` → "Heizen", `idle` → "Bereitschaft", etc. (all 5 languages)
- **console.info() version logging** – card version logged to browser console on load
- **`getVersion()` method** – accessible via browser DevTools for bug reports

### Changed
- **IST-Temperatur** is now the large central display (no label text)
- **Sollwert** shown as compact row below IST-Temp when temperature panel is collapsed
- **Window status** removed from status bar; now shown as inline warning only when open
- **Status bar** now shows: 💧 Humidity · 🚰 Valve · 🔋 Battery
- **HVAC panel** auto-collapses after mode selection
- **Card minimum width** set to 260px to ensure buttons always sit side-by-side

### Fixed
- Off-state: setpoint remains visible (dimmed) instead of disappearing
- Optimistic temperature updates no longer flicker on slow connections

---

## v1.2.0 – 2026-10-22

### Added
- **Collapsible temperature control** – `temperature_control.collapsible: true`
- **Collapsible HVAC control** – `hvac_control.collapsible: true`
- **Toggle button** for mode pills with animated chevron
- **Dual setpoint** support for `heat_cool` mode (separate heat/cool targets)
- **Window entity** (`window_entity`) – binary sensor for window contact
- **Valve position entity** (`valve_position_entity`) – initial implementation

### Changed
- IST-Temperatur moved to central display
- Sollwert displayed below IST-Temp in collapsed state

---

## v1.1.0 – 2026-10-22

### Added
- **Localisation system** – automatic language detection from Home Assistant settings
- **5 languages** – German (de), English (en), French (fr), Dutch (nl), Spanish (es)
- **3-tier translation priority**: HA localize() → bundled JSON → raw key
- **Mode pills toggle button** – show/hide HVAC mode pills with animated chevron
- **Off-state improvement** – setpoint stays visible (dimmed) when thermostat is off

### Changed
- All UI strings now use `hass.language` for automatic localisation
- HVAC mode labels use HA's own translations when available

---

## v1.0.0 – 2026-10-22

### Initial Release

- **LitElement 3** + **TypeScript strict mode**
- **HACS compatible** – single JS bundle, no external dependencies
- **GUI config editor** – no YAML required for basic setup
- **Dynamic colours** – heating (orange), cooling (blue), idle (neutral)
- **HVAC mode pills** – Off / Heat / Cool / Auto / Heat-Cool / Fan / Dry
- **Sensor row** – configurable additional sensors
- **Dark & Light theme** – full HA CSS variable support
- **Responsive** – tablet, phone, desktop
- **Optimistic updates** – instant UI response without HA round-trip delay
- **Compatible with**: Homematic IP, Shelly BLU TRV, Zigbee2MQTT, ZHA, Z-Wave JS, Generic Thermostat, ESPHome, Nest, ecobee
