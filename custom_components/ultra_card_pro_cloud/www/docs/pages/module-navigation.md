# Navigation

> Module type: `navigation` · Category: Layout · Free

A global navigation bar with routes, popups, and media-player controls. Best used at the top or bottom of a card to provide app-like navigation across multiple views.

## Features

- N items, each with label + icon + action
- Routes (navigate / URL / popup-open)
- Active-route highlighting based on the current dashboard path
- Sticky behavior (top / bottom)
- Compact / expanded modes
- Embedded media-player control widget
- Glass / flat / accent styles

## Configuration

### Items

For each navigation item:

- **Label**
- **Icon**
- **Action** — `navigate` / `url` / `popup-open` / `perform-action` / `nothing`
- **Active when** — path expression or template

### Behavior

- **Sticky** — top / bottom / none
- **Compact threshold** (px) — collapse to icons only on narrow viewports
- **Highlight active** — auto-detect current route

### Style

- **Background** / **border** / **shadow**
- **Active item color**
- **Icon size**

### Embedded controls

- Optional media player widget (compact, mini)

### Logic / Design

Standard 4-tab editor.

## Routes & active state

Active highlighting compares the navigation item's `navigation_path` to the dashboard's current path. Templates can also gate "active":

```jinja
{{ '/lovelace/security' in current_path }}
```

## JS templates (`[[ ... ](#uc-doc-[ ...)]`)

The Navigation module supports inline JavaScript inside `[[...](#uc-doc-[...)]`. These run **only** when the card's `_contentOrigin` is `local` — imported / community presets cannot run JS by design. To globally disable JS templates, set `disable_navigation_js_templates: true` on the card.

See [`docs/navigation-js-templates.md`](https://github.com/WJDDesigns/Ultra-Card/blob/main/docs/navigation-js-templates.md) for the trust model.

## Examples

- **Bottom app-bar** — Home / Lights / Climate / Security / Settings, sticky bottom, compact on mobile.
- **Top breadcrumb** — current view + back link.
- **Floor switcher** — buttons for each floor that navigate to the corresponding view.
