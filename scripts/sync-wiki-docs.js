#!/usr/bin/env node

/**
 * Sync Ultra Card documentation from the GitHub wiki into the integration bundle.
 * Source of truth: https://github.com/WJDDesigns/Ultra-Card/wiki
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const os = require("os");

const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(
  ROOT,
  "custom_components/ultra_card_pro_cloud/www/docs"
);
const PAGES_DIR = path.join(OUT_DIR, "pages");
const WIKI_REPO =
  process.env.ULTRA_CARD_WIKI_REPO ||
  "https://github.com/WJDDesigns/Ultra-Card.wiki.git";
const WIKI_SOURCE_URL = "https://github.com/WJDDesigns/Ultra-Card/wiki";

const SKIP_WIKI_FILES = new Set(["_footer.md", "_sidebar.md"]);

function slugify(filename) {
  const base = filename.replace(/\.md$/i, "");
  return base.toLowerCase().replace(/_/g, "-");
}

function wikiLinkToSlug(linkTitle) {
  return linkTitle.trim().toLowerCase().replace(/_/g, "-");
}

function titleFromMarkdown(content, fallback) {
  const match = content.match(/^#\s+(.+)$/m);
  if (match) {
    return match[1].trim();
  }
  return fallback
    .replace(/\.md$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function rewriteWikiMarkdown(content) {
  let out = content;
  out = out.replace(/\[\[([^\]]+)\]\]/g, (_, raw) => {
    const slug = wikiLinkToSlug(raw);
    const label = raw.replace(/-/g, " ");
    return `[${label}](#uc-doc-${slug})`;
  });
  out = out.replace(
    /https:\/\/github\.com\/WJDDesigns\/Ultra-Card\/wiki\/([A-Za-z0-9_.-]+)/g,
    (_, page) => {
      const slug = wikiLinkToSlug(page);
      return `#uc-doc-${slug}`;
    }
  );
  return out;
}

/**
 * Parse _Sidebar.md into sections with optional subsections.
 */
function parseSidebar(sidebarContent, knownSlugs) {
  const sections = [];
  let currentSection = null;
  let currentSubsection = null;

  const lines = sidebarContent.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === "---") continue;

    const h4 = trimmed.match(/^#{4,6}\s+(.+)$/);
    if (h4) {
      currentSection = { title: h4[1].trim(), slugs: [], subsections: [] };
      currentSubsection = null;
      sections.push(currentSection);
      continue;
    }

    const boldSub = trimmed.match(/^\*\*(.+)\*\*$/);
    if (boldSub && currentSection) {
      currentSubsection = { title: boldSub[1].trim(), slugs: [] };
      currentSection.subsections.push(currentSubsection);
      continue;
    }

    const linkMatch = trimmed.match(/^\-\s+\[\[([^\]]+)\]\]/);
    if (linkMatch) {
      const slug = wikiLinkToSlug(linkMatch[1]);
      if (!knownSlugs.has(slug)) continue;
      if (currentSubsection) {
        currentSubsection.slugs.push(slug);
      } else if (currentSection) {
        currentSection.slugs.push(slug);
      }
    }
  }

  return sections.filter(
    (s) => s.slugs.length > 0 || s.subsections.some((sub) => sub.slugs.length > 0)
  );
}

function buildFallbackSections(pages) {
  const slugs = pages.map((p) => p.slug);
  const used = new Set();
  const sections = [];

  const addSection = (title, predicate) => {
    const matched = slugs.filter((s) => predicate(s) && !used.has(s));
    if (matched.length === 0) return;
    matched.forEach((s) => used.add(s));
    sections.push({ title, slugs: matched, subsections: [] });
  };

  if (slugs.includes("home")) {
    used.add("home");
    sections.push({ title: "Home", slugs: ["home"], subsections: [] });
  }

  addSection("Getting started", (s) =>
    ["installation", "quick-start", "the-editor", "faq-and-troubleshooting", "architecture", "development"].includes(s)
  );
  addSection("Core concepts", (s) =>
    s.startsWith("layout-") ||
    s.startsWith("logic-") ||
    s.includes("template") ||
    s === "actions" ||
    s === "design-system" ||
    s.includes("custom-variables") ||
    s.includes("preset") ||
    s.includes("pro-and-cloud")
  );
  addSection("Modules", (s) => s.startsWith("module-") || s === "modules-overview");
  addSection("Reference", (s) =>
    ["translations", "release-notes", "actions"].includes(s) ||
    (s === "architecture" && !used.has(s))
  );

  const remaining = slugs.filter((s) => !used.has(s));
  if (remaining.length > 0) {
    sections.push({ title: "More", slugs: remaining, subsections: [] });
  }

  return sections;
}

function collectSectionSlugs(sections) {
  const set = new Set();
  for (const section of sections) {
    section.slugs.forEach((s) => set.add(s));
    section.subsections?.forEach((sub) => sub.slugs.forEach((s) => set.add(s)));
  }
  return set;
}

function appendUnlistedPages(sections, pages) {
  const listed = collectSectionSlugs(sections);
  const unlisted = pages
    .map((p) => p.slug)
    .filter((s) => !listed.has(s) && s !== "home");
  if (unlisted.length === 0) return sections;
  const more = sections.find((s) => s.title === "More");
  if (more) {
    more.slugs.push(...unlisted);
  } else {
    sections.push({ title: "More", slugs: unlisted, subsections: [] });
  }
  return sections;
}

function buildSearchIndex(pages, pageContents) {
  return pages.map((page) => {
    const raw = pageContents.get(page.slug) || "";
    const headings = [];
    for (const match of raw.matchAll(/^#{1,3}\s+(.+)$/gm)) {
      headings.push(match[1].trim());
    }
    const excerpt = raw
      .replace(/^#.+$/gm, "")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/[#*>`\-]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 200);
    return {
      slug: page.slug,
      title: page.title,
      excerpt,
      headings,
    };
  });
}

function main() {
  console.log("Syncing Ultra Card wiki documentation…\n");

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "ultra-card-wiki-"));
  try {
    execSync(`git clone --depth 1 "${WIKI_REPO}" "${tempDir}"`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error("Failed to clone wiki repository:", error.message);
    process.exit(1);
  }

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(PAGES_DIR, { recursive: true });

  const wikiFiles = fs
    .readdirSync(tempDir)
    .filter(
      (name) =>
        name.endsWith(".md") &&
        !name.startsWith(".") &&
        !SKIP_WIKI_FILES.has(name.toLowerCase())
    );

  const pages = [];
  const pageContents = new Map();
  const knownSlugs = new Set();

  for (const filename of wikiFiles.sort()) {
    const slug = slugify(filename);
    knownSlugs.add(slug);
    const srcPath = path.join(tempDir, filename);
    const raw = fs.readFileSync(srcPath, "utf8");
    const content = rewriteWikiMarkdown(raw);
    const title = titleFromMarkdown(raw, filename);
    const outFile = `pages/${slug}.md`;

    fs.writeFileSync(path.join(OUT_DIR, outFile), content, "utf8");
    pages.push({ slug, title, file: outFile });
    pageContents.set(slug, raw);
  }

  let sections = [];
  const sidebarPath = path.join(tempDir, "_Sidebar.md");
  if (fs.existsSync(sidebarPath)) {
    const sidebarContent = fs.readFileSync(sidebarPath, "utf8");
    sections = parseSidebar(sidebarContent, knownSlugs);
  }
  if (sections.length === 0) {
    sections = buildFallbackSections(pages);
  }
  sections = appendUnlistedPages(sections, pages);

  pages.sort((a, b) => {
    if (a.slug === "home") return -1;
    if (b.slug === "home") return 1;
    return a.title.localeCompare(b.title);
  });

  const searchIndex = buildSearchIndex(pages, pageContents);

  let wikiLastCommitAt = null;
  try {
    wikiLastCommitAt = execSync(`git -C "${tempDir}" log -1 --format=%cI`, {
      encoding: "utf8",
    }).trim();
  } catch {
    /* shallow clone may omit history on some hosts */
  }

  const index = {
    synced_at: new Date().toISOString(),
    wiki_last_commit_at: wikiLastCommitAt,
    source: WIKI_SOURCE_URL,
    pages,
    sections,
  };

  fs.writeFileSync(
    path.join(OUT_DIR, "index.json"),
    JSON.stringify(index, null, 2) + "\n",
    "utf8"
  );

  fs.writeFileSync(
    path.join(OUT_DIR, "search-index.json"),
    JSON.stringify(searchIndex, null, 2) + "\n",
    "utf8"
  );

  fs.rmSync(tempDir, { recursive: true, force: true });

  console.log(`Synced ${pages.length} wiki pages → ${OUT_DIR}`);
  console.log(`Sections: ${sections.length}, search entries: ${searchIndex.length}\n`);
}

main();
