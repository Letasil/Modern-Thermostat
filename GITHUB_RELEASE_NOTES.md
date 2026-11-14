## modern-thermostat V2.5.0

Dieses Release bündelt die Änderungen seit der veröffentlichten Version 2.4.0.

- Integrierte Trendanzeige ohne `mini-graph-card` mit Farbverlauf, Verlauf des Sollwerts, Min-/Max-Angaben, Zeiten und lokalisiertem Hover.
- Sollwert wird in Heiz-Icon-Rot hervorgehoben, solange der angeforderte Wert vom aktuell gemeldeten Climate-Sollwert abweicht.
- Übersetzte Oberfläche und Trend-Hover für neun Sprachen.
- Fensterkontakt-Schutz mit getrennten Zeitverzögerungen für Öffnen und Schließen.
- Pi-Wärmebedarf neben der Stellgröße; Anzeige ausgeblendet, wenn kein verwendbarer Sensorwert existiert.
- Batteriespannung über erkannte oder ausgewählte Sensor-Entität.
- Farbige Status- und Modus-Icons.

HACS-Repository als **Dashboard** hinzufügen. Die Karte liegt unter `/hacsfiles/Modern-Thermostat/modern-thermostat.js`.