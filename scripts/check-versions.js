#!/usr/bin/env node

/**
 * Fail when version.py, package.json, and manifest.json disagree.
 */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function readVersionPy() {
  const content = fs.readFileSync(path.join(root, "version.py"), "utf8");
  const match = content.match(/__version__\s*=\s*["'](.+?)["']/);
  if (!match) {
    throw new Error("Could not parse __version__ from version.py");
  }
  return match[1];
}

function readPackageJson() {
  return JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version;
}

function readManifest() {
  const manifest = JSON.parse(
    fs.readFileSync(
      path.join(root, "custom_components/ultra_card_pro_cloud/manifest.json"),
      "utf8"
    )
  );
  return manifest.version;
}

const versions = {
  "version.py": readVersionPy(),
  "package.json": readPackageJson(),
  "manifest.json": readManifest(),
};

const unique = [...new Set(Object.values(versions))];
if (unique.length !== 1) {
  console.error("Version mismatch detected:");
  for (const [file, value] of Object.entries(versions)) {
    console.error(`  ${file}: ${value}`);
  }
  process.exit(1);
}

console.log(`All version files agree: ${unique[0]}`);
