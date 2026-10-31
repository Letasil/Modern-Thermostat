#!/usr/bin/env python3
"""
Modern Thermostat Card – Automated Build & Release Script
=========================================================
Usage:
  python build.py                  # Build with current version
  python build.py --bump patch     # Bump patch (1.3.0 → 1.3.1)
  python build.py --bump minor     # Bump minor (1.3.0 → 1.4.0)
  python build.py --bump major     # Bump major (1.3.0 → 2.0.0)
  python build.py --version 1.5.0  # Set explicit version
"""

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import zipfile
from datetime import datetime
from pathlib import Path

# ── Paths ──────────────────────────────────────────────────────────────────
ROOT        = Path(__file__).parent
PACKAGE_JSON = ROOT / "package.json"
HACS_JSON    = ROOT / "hacs.json"
CHANGELOG    = ROOT / "CHANGELOG.md"
MAIN_TS      = ROOT / "src" / "modern-thermostat.ts"
DIST_JS      = ROOT / "dist" / "modern-thermostat.js"
DIST_DIR     = ROOT / "dist"
RELEASE_DIR  = ROOT / "release"

# ── Helpers ────────────────────────────────────────────────────────────────

def run(cmd: list[str], cwd: Path = ROOT) -> str:
    """Run a command and return stdout. Raises on failure."""
    result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"❌ Command failed: {' '.join(cmd)}")
        print(result.stderr)
        sys.exit(1)
    return result.stdout.strip()


def read_version() -> str:
    with open(PACKAGE_JSON) as f:
        return json.load(f)["version"]


def bump_version(current: str, bump: str) -> str:
    parts = [int(x) for x in current.split(".")]
    if bump == "major":
        parts = [parts[0] + 1, 0, 0]
    elif bump == "minor":
        parts = [parts[0], parts[1] + 1, 0]
    elif bump == "patch":
        parts = [parts[0], parts[1], parts[2] + 1]
    return ".".join(str(p) for p in parts)


def write_version_everywhere(version: str) -> None:
    """Update version in package.json, hacs.json, and main TypeScript file."""

    # package.json
    with open(PACKAGE_JSON) as f:
        pkg = json.load(f)
    pkg["version"] = version
    with open(PACKAGE_JSON, "w") as f:
        json.dump(pkg, f, indent=2)
    print(f"  ✓ package.json → {version}")

    # hacs.json
    with open(HACS_JSON) as f:
        hacs = json.load(f)
    hacs["version"] = version
    with open(HACS_JSON, "w") as f:
        json.dump(hacs, f, indent=2)
    print(f"  ✓ hacs.json → {version}")

    # TypeScript source – update CARD_VERSION constant
    ts_content = MAIN_TS.read_text()
    ts_updated = re.sub(
        r"const CARD_VERSION\s*=\s*'[^']*';",
        f"const CARD_VERSION = '{version}';",
        ts_content,
    )
    if ts_updated == ts_content:
        print("  ⚠️  CARD_VERSION not found in modern-thermostat.ts – skipping")
    else:
        MAIN_TS.write_text(ts_updated)
        print(f"  ✓ src/modern-thermostat.ts → CARD_VERSION = '{version}'")


def build_js() -> None:
    """Run rollup to produce dist/modern-thermostat.js."""
    print("\n🔨 Building JavaScript bundle...")
    run(["npx", "rollup", "-c", "rollup.config.js"])
    size_kb = DIST_JS.stat().st_size / 1024
    print(f"  ✓ dist/modern-thermostat.js ({size_kb:.1f} KB)")


def create_zip(version: str) -> Path:
    """Create a versioned ZIP file for HACS release."""
    RELEASE_DIR.mkdir(exist_ok=True)
    zip_name = f"modern-thermostat-v{version}.zip"
    zip_path = RELEASE_DIR / zip_name

    # Remove old zip if exists
    if zip_path.exists():
        zip_path.unlink()

    # Files to include in the release ZIP
    include_files = [
        DIST_JS,
        ROOT / "hacs.json",
        ROOT / "README.md",
        ROOT / "CHANGELOG.md",
        ROOT / "index.html",
    ]

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for file_path in include_files:
            if file_path.exists():
                zf.write(file_path, file_path.name)
                print(f"  + {file_path.name}")
            else:
                print(f"  ⚠️  Missing: {file_path.name}")

    size_kb = zip_path.stat().st_size / 1024
    print(f"\n  ✓ {zip_name} ({size_kb:.1f} KB)")
    return zip_path


def create_source_zip(version: str) -> Path:
    """Create a full source ZIP (for development/backup)."""
    zip_name = f"modern-thermostat-v{version}-source.zip"
    zip_path = RELEASE_DIR / zip_name

    if zip_path.exists():
        zip_path.unlink()

    # Directories/files to exclude
    exclude_dirs = {"node_modules", ".git", "release", "__pycache__"}
    exclude_exts = {".pyc"}

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for file_path in ROOT.rglob("*"):
            if file_path.is_file():
                # Check exclusions
                parts = set(file_path.relative_to(ROOT).parts)
                if parts & exclude_dirs:
                    continue
                if file_path.suffix in exclude_exts:
                    continue
                arcname = f"modern-thermostat/{file_path.relative_to(ROOT)}"
                zf.write(file_path, arcname)

    size_kb = zip_path.stat().st_size / 1024
    print(f"  ✓ {zip_name} ({size_kb:.1f} KB)")
    return zip_path


def update_changelog(version: str, changes: list[str] | None = None) -> None:
    """Prepend a new version entry to CHANGELOG.md."""
    today = datetime.now().strftime("%Y-%m-%d")

    if changes:
        change_lines = "\n".join(f"- {c}" for c in changes)
    else:
        change_lines = "- See commit history for details"

    new_entry = f"""## v{version} – {today}

### Changed
{change_lines}

---

"""
    if CHANGELOG.exists():
        existing = CHANGELOG.read_text()
        # Insert after the header (first two lines)
        lines = existing.split("\n")
        # Find the first ## heading
        insert_at = 0
        for i, line in enumerate(lines):
            if line.startswith("## "):
                insert_at = i
                break
        lines.insert(insert_at, new_entry)
        CHANGELOG.write_text("\n".join(lines))
    else:
        CHANGELOG.write_text(f"# Changelog\n\n{new_entry}")

    print(f"  ✓ CHANGELOG.md updated with v{version}")


# ── Main ───────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(description="Modern Thermostat Card build script")
    parser.add_argument("--bump", choices=["patch", "minor", "major"],
                        help="Bump version automatically")
    parser.add_argument("--version", help="Set explicit version (e.g. 1.5.0)")
    parser.add_argument("--no-changelog", action="store_true",
                        help="Skip CHANGELOG update")
    parser.add_argument("--changes", nargs="*",
                        help="Changelog entries for this release")
    args = parser.parse_args()

    print("=" * 56)
    print("  Modern Thermostat Card – Build & Release")
    print("=" * 56)

    # ── Determine version ──────────────────────────────────
    current_version = read_version()
    print(f"\n📌 Current version: {current_version}")

    if args.version:
        new_version = args.version
    elif args.bump:
        new_version = bump_version(current_version, args.bump)
    else:
        new_version = current_version

    if new_version != current_version:
        print(f"🔼 New version:     {new_version}")
    else:
        print(f"ℹ️  Building version: {new_version} (no bump)")

    # ── Step 1: Write version everywhere ──────────────────
    print("\n📝 Step 1 – Updating version strings...")
    write_version_everywhere(new_version)

    # ── Step 2: Build JS ───────────────────────────────────
    print("\n🔨 Step 2 – Building JavaScript bundle...")
    build_js()

    # ── Step 3: Update CHANGELOG ───────────────────────────
    if not args.no_changelog and new_version != current_version:
        print("\n📋 Step 3 – Updating CHANGELOG.md...")
        update_changelog(new_version, args.changes)
    else:
        print("\n📋 Step 3 – Skipping CHANGELOG update")

    # ── Step 4: Create release ZIP ─────────────────────────
    print(f"\n📦 Step 4 – Creating release ZIP...")
    release_zip = create_zip(new_version)

    # ── Step 5: Create source ZIP ──────────────────────────
    print(f"\n📦 Step 5 – Creating source ZIP...")
    source_zip = create_source_zip(new_version)

    # ── Summary ────────────────────────────────────────────
    print("\n" + "=" * 56)
    print("  ✅ Build complete!")
    print("=" * 56)
    print(f"\n  Version:      v{new_version}")
    print(f"  Release ZIP:  {release_zip.relative_to(ROOT)}")
    print(f"  Source ZIP:   {source_zip.relative_to(ROOT)}")
    print(f"\n  HACS install: copy dist/modern-thermostat.js")
    print(f"                to config/www/modern-thermostat.js")
    print()


if __name__ == "__main__":
    main()