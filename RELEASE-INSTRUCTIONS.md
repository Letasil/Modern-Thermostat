# GitHub release for Modern Thermostat

## Version 2.5.1

1. Commit the complete package to `Letasil/Modern-Thermostat`.
2. Confirm `modern-thermostat.js` and the nine JSON files under `translations/` are in the repository root layout.
3. Confirm `hacs.json` contains `"filename": "modern-thermostat.js"` and `"content_in_root": true`.
4. Under **Actions → Release → Run workflow**, enter `2.5.1` without the `v` prefix.
5. Review the draft tag `v2.5.1`, title `modern-thermostat V2.5.1`, release notes, and ZIP file.
6. Publish the release so HACS/Marketplace detects the update.

For future releases, update the version in `modern-thermostat.js`, `VERSION.txt`, README, and changelog together. Keep the card and its `translations/` folder in the repository root and update the workflow input version.