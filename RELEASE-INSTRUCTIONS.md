# GitHub Release für Modern Thermostat

## Version 2.5.0

1. Die Dateien aus diesem Paket in das öffentliche Repository `Letasil/Modern-Thermostat` übernehmen.
2. Prüfen, dass die Karte unter `dist/modern-thermostat.js` und alle neun Sprachdateien unter `dist/translations/` liegen.
3. Unter **Actions → Release → Run workflow** die Version `2.5.0` ohne `v` eingeben.
4. Den Entwurf mit Tag `v2.5.0`, Titel `modern-thermostat V2.5.0`, Release-Notizen und ZIP-Datei kontrollieren.
5. Den Release-Entwurf veröffentlichen.

## Künftige Releases

Version in `dist/modern-thermostat.js`, `VERSION.txt`, README und Changelog gemeinsam erhöhen. Danach im Release-Workflow die neue Versionsnummer ohne `v` angeben. Der Workflow erstellt ein überprüfbares Release-Entwurfsobjekt; HACS erkennt Versionen nach Veröffentlichung des Releases.