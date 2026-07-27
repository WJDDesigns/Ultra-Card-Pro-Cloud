#!/usr/bin/env node

/**
 * Verify Ultra Card Hub panel assets under www/ match panel-assets.json hashes.
 * Fail when the manifest is missing, hashes drift, or orphan uc-* chunks remain.
 *
 * Usage:
 *   npm run panel:check
 *   PANEL_WRITE_MANIFEST=1 npm run panel:check   # bootstrap manifest from current www/
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const WWW_DIR = path.join(
  __dirname,
  "..",
  "custom_components/ultra_card_pro_cloud/www"
);
const MANIFEST_PATH = path.join(WWW_DIR, "panel-assets.json");
const PANEL_JS = path.join(WWW_DIR, "ultra-card-panel.js");
const WRITE = process.env.PANEL_WRITE_MANIFEST === "1";

function fail(message) {
  console.error(message);
  process.exit(1);
}

function sha256File(filePath) {
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(filePath));
  return hash.digest("hex");
}

function listManagedAssets() {
  const names = [];
  for (const file of fs.readdirSync(WWW_DIR)) {
    if (file === "ultra-card-panel.js") names.push(file);
    if (file.startsWith("uc-") && (file.endsWith(".js") || file.endsWith(".js.LICENSE.txt"))) {
      names.push(file);
    }
  }
  return names.sort();
}

if (!fs.existsSync(PANEL_JS)) {
  fail(`Missing panel bundle: ${PANEL_JS}`);
}

if (WRITE || !fs.existsSync(MANIFEST_PATH)) {
  if (!WRITE && !fs.existsSync(MANIFEST_PATH)) {
    fail(
      `Missing ${MANIFEST_PATH}. Run Ultra Card "npm run sync:panel" (or PANEL_WRITE_MANIFEST=1 npm run panel:check to bootstrap).`
    );
  }
  if (WRITE) {
    const files = {};
    for (const name of listManagedAssets()) {
      files[name] = sha256File(path.join(WWW_DIR, name));
    }
    const manifest = {
      synced_at: new Date().toISOString(),
      ultra_card_version: process.env.ULTRA_CARD_VERSION || "bootstrap",
      ultra_card_commit: null,
      files,
    };
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
    console.log(
      `Wrote panel-assets.json with ${Object.keys(files).length} files (bootstrap)`
    );
  }
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
if (!manifest.files || typeof manifest.files !== "object") {
  fail("panel-assets.json missing files map");
}

const listed = Object.keys(manifest.files);
if (!listed.includes("ultra-card-panel.js")) {
  fail("panel-assets.json does not list ultra-card-panel.js");
}

let errors = 0;
for (const [name, expected] of Object.entries(manifest.files)) {
  const full = path.join(WWW_DIR, name);
  if (!fs.existsSync(full)) {
    console.error(`Missing listed asset: ${name}`);
    errors++;
    continue;
  }
  const actual = sha256File(full);
  if (actual !== expected) {
    console.error(`Hash mismatch for ${name}`);
    console.error(`  expected: ${expected}`);
    console.error(`  actual:   ${actual}`);
    errors++;
  }
}

const managed = listManagedAssets();
for (const name of managed) {
  if (!manifest.files[name]) {
    console.error(`Orphan panel asset not in manifest (stale chunk?): ${name}`);
    errors++;
  }
}

if (errors > 0) {
  fail(
    `panel:check failed with ${errors} error(s). Rebuild Ultra Card and run npm run sync:panel.`
  );
}

const chunkCount = managed.filter((n) => n.startsWith("uc-") && n.endsWith(".js")).length;
console.log(
  `Panel bundle OK: ${listed.length} hashed files, ${chunkCount} uc-*.js chunks` +
    (manifest.ultra_card_version ? `, card ${manifest.ultra_card_version}` : "")
);
