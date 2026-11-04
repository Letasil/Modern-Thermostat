# Modern Thermostat Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/your-org/modern-thermostat.svg)](https://github.com/your-org/modern-thermostat/releases)

An alternative version of the thermostat map for the Home Assistant Lovelace interface. The goal is to create a map with simpler interactions that is more user-friendly, takes up less space, and also offers greater modularity for customization. For example, it allows you to embed sensor readings relevant to your thermostat (such as humidity, valve position, battery status, and—optionally—a temperature history, etc.)

---

Temperature Trend

<img width="370" height="368" alt="modern-thermostat-v1 7 2 Temperaturverlauf" src="https://github.com/user-attachments/assets/4dcf262b-4e1d-4589-ae59-f99eb5a5bdeb" />

Normal Mode

<img width="372" height="235" alt="modern-thermostat-v1 7 2 normal mode" src="https://github.com/user-attachments/assets/60b53135-fb44-435c-be6e-2f994938c6eb" />

 Compact mode
 
<img width="234" height="194" alt="modern-thermostat-v1 7 2 Compact Mode" src="https://github.com/user-attachments/assets/f8254cd6-dba1-4ba6-9368-d60a2acf1019" />

## ✨ Features

- 🌡️ **Current Temperature** large central display
- 🔥❄️ **All HVAC modes** – Off / Heat / Cool / Auto / Fan / Dry
- 🚨 **Alert priority system** – valve errors, calibration, battery, window, custom alerts
- 📈 **Optional temperature graph** via mini-graph-card
- 🌍 **5 languages** – DE, EN, FR, NL, ES (auto-detected from HA)
- 🎨 **Dark & Light theme** – full HA CSS variable support
- 📱 **Compact mode** – for grid dashboards and mobile
- ⚡ **Optimistic updates** – instant UI response
- 🔧 **GUI config editor** – no YAML required for basic setup
- ✅ **HACS compatible** – automatic update detection

## 📦 Requirements

- Operating System 18.4
- Install `mini-graph-card` from <a href="https://github.com/kalkih/mini-graph-card"  rel="nofollow">GitHub</a> or via <a href="https://hacs.xyz/" rel="nofollow">HACS</a>

## 📦 Installation via HACS

### Method 1 – HACS Custom Repository (recommended)

1. Open **HACS** → **Frontend**
2. Click **⋮** → **Custom repositories**
3. Add: `https://github.com/Letasil/modern-thermostat`  
   Category: **Dashboard**
4. Click **Install**
5. **Reload** browser

### Method 2 – Manual

1. Download `modern-thermostat.js` from the [latest release](https://github.com/Letasil/modern-thermostat/releases)
2. Create a Folder `modern-thermostat` on path `config/www/community/`
3. Copy to `config/www/community/modern-thermostat/modern-thermostat.js`
4. Add to Lovelace resources:

```yaml
resources:
  - url: /local/community/modern-thermostat/modern-thermostat.js?v=x.x.xx (x.x.xx=Version)
    type: JavaScript-Module    
```

---

## ⚙️ Configuration

### Minimal

```yaml
type: custom:modern-thermostat
entity: climate.wohnzimmer
```

### Full Example

```yaml
type: custom:modern-thermostat
entity: climate.wohnzimmer
name: Wohnzimmer
step: 0.5
show_hvac_modes: true
show_window_status: true
show_valve_position: true
show_battery_warning: true
battery_warning_level: 25
window_entity: binary_sensor.hm_sec_sco_neq1798400
humidity_entity: sensor.wohnzimmer_luftfeuchtigkeit
compact: false
show_graph: true
graph_entity: sensor.wohnzimmer_temperatur
hours_to_show: 24
graph_line_width: 2
show_header: true
valve_position_entity: sensor.wohnzimmer_level
battery_entity: sensor.wohnzimmer_betriebsspannungspegel

```

---

## 🚨 Alert Priority System

Alerts are evaluated in priority order. Only the highest-priority active alert is shown:

| Priority | Condition | Icon | Colour |
|---|---|---|---|
| 1 | `fault_entity = on` | mdi:alert-circle | 🔴 Red |
| 2 | `error_entity` = valve/motor error | mdi:alert-circle | 🔴 Red |
| 3 | `status_entity` = calibration | mdi:sync | 🟠 Orange |
| 4 | `operating_state_entity` = Kalibrierfahrt | mdi:sync | 🟠 Orange |
| 5 | `update_entity = on` | mdi:update | 🔵 Blue |
| 6 | `window_entity = on` | mdi:window-open | 🔴 Red |
| 7 | Battery ≤ threshold | mdi:battery-alert | 🟠 Orange |
| 8 | Custom `alerts[]` | configurable | configurable |
| 9 | Normal operation | — | action colour |

---

## 🔧 Development

```bash
# Install dependencies
npm install

# Development build (watch mode)
npm run dev

# Production build
npm run build

# Type check
npm run typecheck

# Local release (bump patch)
npm run release:patch

# Local release (bump minor)
npm run release:minor
```

---

## 🚀 GitHub Release Workflow

This repository uses **GitHub Actions** to automate the entire release process.

### How to release a new version

**Step 1 – Make your changes**

```bash
git add .
git commit -m "feat: add new feature"
git push
```

**Step 2 – Update version numbers**

Use the local build script to bump the version:

```bash
# Patch release (bug fixes): 1.7.1 → 1.7.2
python3 build.py --bump patch --changes "Fixed layout bug"

# Minor release (new features): 1.7.1 → 1.8.0
python3 build.py --bump minor --changes "Added new feature"

# Major release (breaking changes): 1.7.1 → 2.0.0
python3 build.py --bump major
```

This automatically updates:
- `package.json` version
- `hacs.json` version
- `src/modern-thermostat.ts` CARD_VERSION
- `CHANGELOG.md`

**Step 3 – Commit the version bump**

```bash
git add .
git commit -m "chore: bump version to 1.8.0"
git push
```

**Step 4 – Create and push the Git tag**

```bash
git tag v1.8.0
git push origin v1.8.0
```

**That's it!** GitHub Actions automatically:

1. ✅ Validates version consistency (package.json = hacs.json = tag)
2. 🔨 Installs dependencies
3. 💉 Injects build metadata (version, date, commit hash)
4. 📦 Builds production bundle
5. 🗜️ Creates `modern-thermostat-v1.8.0.zip` (HACS install)
6. 🗜️ Creates `modern-thermostat-source-v1.8.0.zip` (source code)
7. 📋 Extracts release notes from `CHANGELOG.md`
8. 🎉 Creates GitHub Release with both ZIPs attached

### HACS Update Detection

After the GitHub Release is published, HACS automatically detects the new version:

```
Installed:  1.7.1
Available:  1.8.0
```

Users can update with one click in HACS → Frontend.

---

## 📋 All Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **required** | Climate entity ID |
| `name` | string | entity name | Display name |
| `icon` | string | auto | MDI icon override |
| `step` | number | `0.5` | Temperature step |
| `decimals` | number | `1` | Decimal places |
| `show_hvac_modes` | boolean | `true` | Show mode buttons |
| `compact` | boolean | `false` | Compact layout |
| `window_entity` | string | — | Window contact entity |
| `show_window_status` | boolean | `true` | Show window alert |
| `humidity_entity` | string | — | Humidity sensor |
| `valve_position_entity` | string | — | Valve position sensor |
| `show_valve_position` | boolean | `true` | Show valve in status bar |
| `battery_entity` | string | — | Battery sensor |
| `battery_warning_level` | number | `25` | Warning threshold % |
| `show_battery_warning` | boolean | `true` | Show battery alert |
| `status_entity` | string | — | TRV status sensor |
| `error_entity` | string | — | Error sensor |
| `fault_entity` | string | — | Binary fault sensor |
| `operating_state_entity` | string | — | Operating state sensor |
| `update_entity` | string | — | Firmware update sensor |
| `alerts` | list | `[]` | Custom alert definitions |
| `show_graph` | boolean | `false` | Show temperature graph |
| `graph_entity` | string | — | Temperature sensor for graph |
| `hours_to_show` | number | `24` | Graph time range |
| `graph_line_width` | number | `2` | Graph line width |
| `show_version` | boolean | `false` | Show version in footer |
| `show_debug_info` | boolean | `false` | Show debug info |

---

## 🤝 Compatibility

| Integration | Status |
|---|---|
| Homematic IP | ✅ |
| Shelly BLU TRV | ✅ |
| Zigbee2MQTT | ✅ |
| ZHA | ✅ |
| Z-Wave JS | ✅ |
| Generic Thermostat | ✅ |
| ESPHome Climate | ✅ |

---

## 📄 License

MIT — see [LICENSE](LICENSE)
