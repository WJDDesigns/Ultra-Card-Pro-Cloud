# Presets and Marketplace

Presets let you save modules, rows, or entire cards as reusable templates and share them with the community.

---

## Local presets

### Saving a preset

1. In the editor, hover over any **module / row / column** → click the **save preset** icon.
2. Give it a name and (optional) tags.
3. The preset is saved to your **local presets** library, available in the **Presets** selector tab.

You can save:

- A single **module** (e.g. a fully styled gauge)
- A **row** (with all its columns/modules)
- An entire **card** layout

### Using a saved preset

1. **Layout Builder** → **Add from Preset** (or open the **Presets** selector tab).
2. Pick from your local library.
3. Insert at the cursor position. The preset's modules now live in your card and can be edited freely.

### Managing local presets

Open the **Presets** selector tab → **My Presets** to:

- Rename / delete presets
- Edit tags
- Mark as favorites
- Export / import individual presets as JSON files

---

## The Marketplace

The Marketplace is a community-driven library of presets hosted on UltraCard.io.

### Browsing

- **Editor → Presets tab → Browse Marketplace**.
- Filter by category, tag, popularity, or search.
- Each preset shows a preview, description, author, and rating.

### Installing

1. Click a preset → **Preview** to see how it looks.
2. Click **Install** to add it to your local library, then drop it into any card.

### Submitting

If you have an UltraCard.io account:

1. Save the preset locally first.
2. **My Presets → ⋮ → Submit to Marketplace**.
3. Add a description, category, and tags.
4. Once approved, it appears in everyone's Marketplace browser.

> **Privacy:** When submitting, Ultra Card automatically strips entity IDs, image URLs, and other identifying data via `uc-privacy-service.ts`. Sensitive info never leaves your machine.

### Reporting / quality

- Use the **report** button on any preset to flag inappropriate or broken content.
- Ratings and downloads inform the discovery feed.

---

## How presets are stored

- **Local presets:** `localStorage` keyed under the Ultra Card namespace + (when logged in) cloud-synced via `uc-presets-service.ts`.
- **Marketplace presets:** WordPress REST API on `ultracard.io` (see `wordpress-presets-api.ts`).

Both shapes are JSON serializations of the Ultra Card config tree, with a `_contentOrigin` flag that:

- Marks community presets so navigation `[[...](#uc-doc-[...)]` JS templates are **not** executed for safety.
- See [Templates and Jinja](#uc-doc-templates-and-jinja) § *Navigation JS templates*.

---

## Variable mapping when installing

If a preset uses [Custom Variables](#uc-doc-custom-variables) you don't have, you'll be prompted via the **Variable Mapping** dialog (`uc-variable-mapping-dialog.ts`):

- Auto-detect existing variables that match.
- Bind the preset's `$accent` to your existing `$primary`, etc.
- Or create new variables on the fly.

Same for entity references — the **Entity Replace** dialog (`uc-entity-replace-dialog.ts`) walks you through swapping the preset's hard-coded entities for yours.

---

## Preset wizard

For complex multi-entity presets (room dashboards, kiosk views), the preset author can include a **Preset Wizard** definition. On install, the wizard (`uc-preset-wizard-dialog.ts`) walks the user through:

1. Picking the area to use.
2. Selecting key entities (light, climate, sensor, etc.).
3. Picking a color palette.

The wizard then writes those answers into the preset's variables, so the dashboard works immediately without manual editing.

---

## Versioning

Presets carry a `_config_version` field. When Ultra Card defaults change between releases (margins, design schema, etc.), presets are auto-migrated by `template-migration.ts`. You can usually install older presets without issues — but very old presets may need manual fixes.

---

## Best practices for preset authors

- **Lean on `$variables`** for colors and entity references. Hard-coded entity IDs make presets useless to other users.
- **Test on a fresh install** before submitting — make sure no theme / variable / entity is implicitly assumed.
- **Use descriptive names**: "Living Room Dashboard (3-column)" beats "Test 1".
- **Add a wizard** for any preset that needs more than 1–2 entity choices.
- **Tag aggressively** — categories / room type / mood / theme. Helps discovery.
