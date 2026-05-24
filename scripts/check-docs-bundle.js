#!/usr/bin/env node

/**
 * Verify bundled documentation is present and optionally warn when stale vs wiki.
 * Set DOCS_STRICT=1 to fail when the bundle is older than the wiki commit timestamp.
 */

const fs = require("fs");
const path = require("path");

const DOCS_DIR = path.join(
  __dirname,
  "..",
  "custom_components/ultra_card_pro_cloud/www/docs"
);
const INDEX_PATH = path.join(DOCS_DIR, "index.json");
const SEARCH_PATH = path.join(DOCS_DIR, "search-index.json");
const STRICT = process.env.DOCS_STRICT === "1";
const MAX_AGE_DAYS = Number(process.env.DOCS_MAX_AGE_DAYS || "0");

function fail(message) {
  console.error(message);
  process.exit(1);
}

function warn(message) {
  console.warn(message);
}

if (!fs.existsSync(INDEX_PATH)) {
  fail(`Missing documentation index: ${INDEX_PATH}`);
}

if (!fs.existsSync(SEARCH_PATH)) {
  fail(`Missing documentation search index: ${SEARCH_PATH}`);
}

const index = JSON.parse(fs.readFileSync(INDEX_PATH, "utf8"));
const pageCount = Array.isArray(index.pages) ? index.pages.length : 0;
if (pageCount < 1) {
  fail("Documentation index has no pages");
}

console.log(`Docs bundle OK: ${pageCount} pages, ${index.sections?.length ?? 0} sections`);

if (index.wiki_last_commit_at && index.synced_at) {
  const wikiTime = new Date(index.wiki_last_commit_at).getTime();
  const syncTime = new Date(index.synced_at).getTime();
  if (!Number.isNaN(wikiTime) && !Number.isNaN(syncTime) && wikiTime > syncTime + 60_000) {
    const msg =
      "Documentation bundle is older than the wiki (run npm run docs:sync before release)";
    if (STRICT) fail(msg);
    warn(`::warning::${msg}`);
  }
}

if (MAX_AGE_DAYS > 0 && index.synced_at) {
  const ageMs = Date.now() - new Date(index.synced_at).getTime();
  const maxMs = MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
  if (!Number.isNaN(ageMs) && ageMs > maxMs) {
    const msg = `Documentation bundle synced_at is older than ${MAX_AGE_DAYS} days`;
    if (STRICT) fail(msg);
    warn(`::warning::${msg}`);
  }
}
