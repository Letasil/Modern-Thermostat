## modern-thermostat V2.5.1

This patch fixes installation through HACS and the Home Assistant Marketplace. The card file and translations are now stored in the repository root layout expected by the Marketplace.

- HACS manifest explicitly declares `content_in_root: true` and `modern-thermostat.js`.
- The card and all nine translation files are included together, preserving the relative `translations/` path used by the card.
- No external `mini-graph-card` dependency is required.

Install via HACS/Marketplace, then reload the Home Assistant frontend. Manual resource path: `/local/community/Modern-Thermostat/modern-thermostat.js`.