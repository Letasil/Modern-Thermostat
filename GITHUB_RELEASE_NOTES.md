# modern-thermostat V2.6.0

- Preserve the previous setpoint across connection loss, incomplete climate updates and off/on transitions. Automatic recovery only raises a reported minimum after the device reports valid limits.

- Show unconfirmed setpoints in red until Home Assistant reports the requested temperature, including during automatic recovery.

- Press and hold a reading to open its history. Entity readings use Home Assistant’s history view, and attribute readings show recorded values for the selected attribute. Mode labels and control tooltips are aligned across all nine languages.
