# modern-thermostat V2.5.2

- Fixed the HACS/Marketplace package structure by placing the card and translations in `dist/` and making the default branch installable for review.
- Kept the built-in trend independent from `mini-graph-card`, with setpoint history, threshold colors, extrema, times, and localized hover details.
- Prevented unsupported off requests from replacing the target with the thermostat's minimum temperature; the previous target is restored when Home Assistant reports that fallback.
- Added availability-based humidity, valve position, Pi heat demand, and battery percentage displays.
- Improved Boost sizing, active coloring, and remaining-time display when supported by the climate entity.
- Refined compact mode and temperature/humidity alignment; unavailable values stay hidden.
- Updated localized editor labels, humidity units, and trend hover text across nine languages; added README previews for the card layouts and editor.

The HACS distribution is in `dist/`. The release workflow creates a manual-install ZIP with `modern-thermostat.js` and `translations/` at its root.
