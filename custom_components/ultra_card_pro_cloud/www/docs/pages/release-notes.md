# Release Notes

Full release notes are maintained in [`RELEASE_NOTES.md`](https://github.com/WJDDesigns/Ultra-Card/blob/main/RELEASE_NOTES.md) at the root of the repository. They're kept in the source so they can be reviewed alongside code changes.

For a high-level summary of recent versions:

- **v3.4.0-beta1** (current development) — see `RELEASE_NOTES.md` for full notes
- **v3.3.x** — see release tags
- **v3.2.x** — see release tags

---

## Where to find releases

- **GitHub Releases** — [Ultra Card releases page](https://github.com/WJDDesigns/Ultra-Card/releases)
- **HACS** — auto-detects new releases. Update from HACS → Frontend → Ultra Card → **Update**.
- **Tagged versions** — every release is a git tag in the form `vX.Y.Z` (or `vX.Y.Z-betaN` for prereleases).

---

## Versioning

Ultra Card follows [Semantic Versioning](https://semver.org/):

- **Major** (`v3 → v4`) — breaking changes (rare; we try to migrate config automatically).
- **Minor** (`v3.3 → v3.4`) — new features, modules, capabilities.
- **Patch** (`v3.4.0 → v3.4.1`) — bug fixes only.
- **Prerelease** (`v3.4.0-beta1`) — opt-in betas, not the HACS default.

The single source of truth for version is [`src/version.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/version.ts).

---

## Migration & compatibility

Ultra Card auto-migrates older configs via [`src/utils/template-migration.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/utils/template-migration.ts). The `_config_version` field on every config tracks which migrations have run:

- `v1` — implicit 8px top/bottom margin defaults
- `v2` — explicit per-module margins (`design.margin_*`)
- `v3` — repair pass for v2 partial-margin migration edge cases

If you ever roll back to an older Ultra Card version, your already-migrated config will still load — but new fields introduced post-rollback won't render.

---

## Changelogs

For per-version detail (added modules, fixed bugs, breaking changes):

- The full text lives in **`RELEASE_NOTES.md`**.
- Each tagged release on GitHub also has a copy of that version's notes.
- Significant releases (especially betas) sometimes include `.release-changelog-betaXX.txt` in the repo root for a curated digest.
