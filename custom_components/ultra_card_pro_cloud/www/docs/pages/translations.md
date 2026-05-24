# Translations

Help make Ultra Card accessible worldwide. PRs welcome from anyone.

## Currently supported

| Code | Language |
|---|---|
| `ca` | Catalan |
| `cs` | Czech |
| `da` | Danish |
| `de` | German |
| `en-GB` | British English |
| `en` | **English (base/source)** |
| `es` | Spanish |
| `fr` | French |
| `it` | Italian |
| `nb` | Norwegian Bokmål |
| `nl` | Dutch |
| `nn` | Norwegian Nynorsk |
| `no` | Norwegian |
| `pl` | Polish |
| `sv` | Swedish |

`en.json` is the source of truth. Other languages inherit any missing keys.

---

## How to contribute

### Option 1 — GitHub web UI (easiest)

1. Go to [`src/translations/`](https://github.com/WJDDesigns/Ultra-Card/tree/main/src/translations).
2. Click your language file (e.g. `de.json`).
3. Click the pencil icon to edit.
4. Translate values (right side of the colon). Don't touch keys (left side).
5. Commit at the bottom — GitHub will offer to create a PR.

### Option 2 — Fork & clone

```bash
git clone https://github.com/YOUR-USERNAME/Ultra-Card.git
cd Ultra-Card
# edit src/translations/<lang>.json
npm install
npm run validate:translations   # optional but recommended
git add src/translations/
git commit -m "Translation: Update [Language] translations"
git push origin main
```

Then open a PR from your fork.

---

## Rules

### DO

- Translate **values only** (right side of `:`).
- Keep the **JSON structure** identical to `en.json`.
- Keep placeholders **unchanged** — `{count}`, `{value}`, `{ratio}`, etc.
- Keep HTML tags **unchanged** — `<br/>`, `<strong>`, etc.
- Match Home Assistant's UI tone for your language.
- Validate the JSON in [JSONLint](https://jsonlint.com/) before submitting.

### DON'T

- Modify keys (left side of `:`).
- Translate "Home Assistant", "Jinja2", "YAML", "MDI", etc.
- Remove or rename placeholders.
- Add or remove top-level sections.
- Edit files in `dist/`.

---

## Example

**English (`en.json`):**
```json
{
  "editor": {
    "modules": {
      "icons_configured": "{count} icons configured"
    }
  }
}
```

**German (`de.json`):**
```json
{
  "editor": {
    "modules": {
      "icons_configured": "{count} Symbole konfiguriert"
    }
  }
}
```

---

## Adding a new language

1. Copy `src/translations/en.json` to `src/translations/<code>.json`. Use ISO 639-1 codes (`pt`, `ja`, `ko`, …).
2. Translate values systematically.
3. Open a PR titled `Translation: Add [Language] support`.

The card auto-detects HA's language and falls back to `en`. New languages are picked up on the next release.

---

## PR title conventions

- New language: `Translation: Add [Language] support`
- Updates: `Translation: Update [Language] translations`
- Fixes: `Translation: Fix [Language] translation errors`

---

## Helpful scripts

```bash
npm run validate:translations    # Verify JSON structure + key parity vs. en.json
npm run translations:stats       # Coverage % per language
```

See [`CONTRIBUTING_TRANSLATIONS.md`](https://github.com/WJDDesigns/Ultra-Card/blob/main/CONTRIBUTING_TRANSLATIONS.md) in the repo for the canonical reference.

---

## Recognition

All contributors are credited in release notes and the README. Thanks for helping make Ultra Card useful to more people.
