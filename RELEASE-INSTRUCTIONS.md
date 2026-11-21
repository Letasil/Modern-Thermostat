# GitHub release for Modern Thermostat

## Version 2.5.3

The release workflow is manual and is not triggered by pushes to the default branch. It creates a draft release for review.

When the reviewed files are approved for release:

1. Open **Actions → Release → Run workflow**.
2. Enter `2.5.3` without a `v` prefix.
3. Review the generated draft release: tag `v2.5.3`, title `modern-thermostat V2.5.3`, and asset `modern-thermostat-v2.5.3.zip`.
4. Publish the draft only after the package and installation have been checked.

The workflow creates a manual-install ZIP from the root `modern-thermostat.js` and `translations/`. HACS dashboard files are also available in `dist/` with `content_in_root` disabled.
