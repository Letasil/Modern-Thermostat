# Changelog

All notable changes to **Modern Thermostat Card** are documented here.

Format: `major.minor.patch` — [Semantic Versioning](https://semver.org/)

---
## 2.5.2 - 2026-11-20

- Corrected the HACS dashboard layout: the card and all runtime translations are now under `dist/`, the default branch is available for review installs, and repository validation checks the same layout.
- Kept the built-in trend dependency-free, with threshold-colored temperature, setpoint history, extrema, times, and localized hover details.
- Preserved the last confirmed setpoint and restored it when an unsupported off request drops the target to the minimum value.
- Added availability-based sensor pills for humidity, valve position, Pi heat demand, and battery percentage; missing values remain hidden.
- Improved Boost sizing, active coloring, and remaining-time display when the entity exposes timing data.
- Refined standard and compact temperature/humidity alignment; compact mode keeps only the room/status, temperature, available humidity, and HVAC/setpoint controls.
- Localized editor labels, humidity units, and trend hover text across nine languages; stacked the window-delay sliders and removed the Design section.
- Added current README previews for standard mode, compact mode, and the configuration editor.

## 2.5.1 - 2026-11-14

- Fixed HACS/Marketplace installation by placing the card and translations in the repository root and declaring `content_in_root`.

## 2.5.0 - 2026-11-14

This release bundled the development changes since the published 2.4.0 release.

- Added a built-in, full-width temperature trend with mini-graph-card-style smoothing, threshold colors, fading fill, extrema, times, setpoint history, and localized hover. No external graph card is required.
- Highlighted the displayed setpoint while it differs from the climate entity's reported target.
- Added optional window-contact shutdown with separate adjustable open and close delays.
- Restored the optional Pi heat-demand display beside valve position and added battery-voltage display.
- Added translations for German, English, Spanish, French, Dutch, Turkish, Russian, Arabic, and Polish.
- Swapped the positions of Heat and Boost in the mode chooser when both are available.
- Fixed trend rendering, localized hover fallbacks, and kept the hover panel inside the graph frame.
