# modern-thermostat V2.5.3

- Persist the last confirmed setpoint per climate entity in browser storage so it survives dashboard and browser reloads.
- Restore the saved target after the thermostat returns from off to an active HVAC mode when its integration reset the target to the minimum.
- Apply the same recovery to the optional window-contact automation and retry briefly until Home Assistant reports the restored target.
- Add release checks for version consistency, identical root/dist card files, and matching valid translation files.

The HACS distribution is in `dist/`. The release workflow creates a manual-install ZIP with `modern-thermostat.js` and `translations/` at its root.
