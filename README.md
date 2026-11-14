# Modern Thermostat Card 
[![GitHub release](https://img.shields.io/github/v/release/Letasil/modern-thermostat?label=Latest%20Release)](https://github.com/Letasil/modern-thermostat/releases)

An alternative version of the thermostat map for the Home Assistant Lovelace interface. The goal is to create a map with simpler interactions that is more user-friendly, takes up less space, and also offers greater modularity for customization. For example, it allows you to embed sensor readings relevant to your thermostat (such as humidity, valve position, battery status, and—optionally—a temperature history, etc.)

The Modern Thermostat is available in two views: Compact Mode and Standard View. 

In Standard View, you can show or hide the trend graph.

---

Normal view

<img width="496" height="187" alt="modern-thermostat" src="https://github.com/user-attachments/assets/fc96e1f1-e8ee-41ce-9bfa-207abadf23e5" />

Trend view

<img width="494" height="362" alt="modern-thermostat-trend" src="https://github.com/user-attachments/assets/aa69556c-3c6e-4e55-b5c2-1985f47824b8" />

---

Compact view

<img width="495" height="163" alt="modern-thermostat-compact" src="https://github.com/user-attachments/assets/334bbd27-8c4c-4003-9093-924cfb7756ea" />

---

Setting the Setpoint

<img width="495" height="246" alt="modern-thermostat-setpoint" src="https://github.com/user-attachments/assets/1ed3c606-379f-4a00-85eb-941208da00cb" />

---

Setting the Heating Mode

<img width="493" height="287" alt="modern-thermostat-mode" src="https://github.com/user-attachments/assets/f9f21094-fc4a-4232-b45a-a2d543def0c1" />



## ✨ Features

- 🌡️ **Current Temperature** large central display
- 🔥❄️ **All HVAC modes** – Off / Heat / Cool / Auto / Fan / Dry
- 🚨 **Alert priority system** – valve errors, calibration, battery, window, custom alerts
- 📈 **Built-in temperature trend** with smoothed gradient curve, setpoint history and localized hover; no mini-graph-card dependency
- 🌍 **9 languages** – DE, EN, ES, FR, NL, TR, RU, AR, PL (auto-detected from HA)
- 🎨 **Dark & Light theme** – full HA CSS variable support and colored status icons
- 📱 **Compact mode** – for grid dashboards and mobile
- ⚡ **Optimistic updates** – instant UI response
- 🔴 **Setpoint mismatch indicator** – the requested setpoint uses the heating icon color until the climate entity reports the same value
- 🪟 **Optional window-contact protection** with separate open and close delays
- 🔥 **Optional Pi heat-demand and battery-voltage displays**, hidden when their value is unavailable
- 🔧 **GUI config editor** – no YAML required for basic setup
- ✅ **HACS Dashboard plugin** – update detection through published GitHub releases

## 📦 Requirements

- Home Assistant with Lovelace dashboard support.

## 📦 Installation

### Method 1 – HACS Custom Repository (recommended)

1. Open **HACS** and choose **Custom repositories** from the menu.
2. Add: `https://github.com/Letasil/modern-thermostat`  
   Category: **Dashboard**
3. Click **Install**.
4. Add the resource `/hacsfiles/modern-thermostat/modern-thermostat.js` as a JavaScript module.
5. **Reload** the browser.

> [!NOTE]
> HACS is a third-party community store and is not included in Home Assistant by default.

[![Open your Home Assistant instance and open this repository in HACS or the Marketplace.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Letasil&repository=modern-thermostat&category=plugin)

### Method 2 – Manual

1. Download `modern-thermostat-v2.5.0.zip` from the [release](https://github.com/Letasil/Modern-Thermostat/releases).
2. Copy `modern-thermostat.js` and the complete `translations/` folder into `config/www/community/modern-thermostat/`.
3. Add this Lovelace resource as a JavaScript module:

```yaml
resources:
  - url: /local/community/modern-thermostat/modern-thermostat.js?v=2.5.0
    type: module
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
entity: climate.xxxxxxxx
name: Raumname
step: 0.5
show_hvac_modes: true
show_window_status: true
show_valve_position: false
show_battery_warning: false
battery_warning_level: 25
window_entity: binary_sensor.xxxxxxxx
humidity_entity: sensor.xxxxxxxx_luftfeuchtigkeit
compact: false
show_graph: true
graph_entity: sensor.xxxxxxxx_temperatur
hours_to_show: 24
graph_line_width: 2
show_header: true
battery_entity: sensor.xxxxxxxx_betriebsspannungspegel
battery_voltage_entity: sensor.xxxxxxxx_batteriespannung
show_target_humidity: true
show_preset: true
show_fan_mode: true
show_swing_mode: true
show_heating_demand: false
show_humidity: true
humidity_warning_level: 70
manual_on_temperature_change: false
show_control_mode: true
window_auto_off: false
window_open_delay: 1
window_close_delay: 1
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

## 🚀 GitHub Release Workflow

The repository includes a manually started GitHub Actions release workflow. It creates a draft release so the files and release notes can be reviewed before publication.

1. Commit the complete release files to the `main` branch.
2. In GitHub, open **Actions → Release → Run workflow**.
3. Enter the version without a `v` prefix, for example `2.5.0`.
4. Check the generated draft release. It uses tag `v2.5.0`, title `modern-thermostat V2.5.0`, and the release notes from `GITHUB_RELEASE_NOTES.md`.
5. Publish the draft when it is ready. HACS detects published releases for repositories installed through HACS.

The release archive contains `modern-thermostat.js` and the complete `translations/` folder. The card trend is built in; `mini-graph-card` is not required.
## 📋 All Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **required** | Climate entity ID |
| 
ame` | string | entity name | Display name |
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
