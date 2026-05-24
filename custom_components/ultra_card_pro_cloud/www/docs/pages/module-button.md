# Button

> Module type: `button` · Category: Interactive · Free

Interactive buttons with multiple visual styles, icons, and three-way action configurations (tap / hold / double-tap).

## Visual styles

`flat` · `glossy` · `embossed` · `gradient` · `neon` · `glass` · `metallic`

## Features

- Optional icon **before** or **after** the text
- Hover effects: color change · scale · glow · lift
- Independent **tap / hold / double-tap** actions
- Alignment: left / center / right / full-width justify

## Configuration

### Basic

- **Button text**
- **Button style**
- **Alignment**

### Icon

- **Show icon**
- **Icon** (MDI)
- **Icon position** — `before` / `after`

### Colors

- **Background color**
- **Text color**

### Hover effects

- **Effect** — `none` / `color-change` / `scale` / `glow` / `lift`
- **Hover color** / **glow color**

### Actions

Tap / hold / double-tap. Each independent. See [Actions](#uc-doc-actions) for the full reference.

### Logic / Design

Standard 4-tab editor.

## Examples

- **Light toggle** — tap → toggle `light.living_room`.
- **Scene activation** — tap → perform-action `scene.movie_night`.
- **Navigation** — tap → navigate `/lovelace/energy`.
- **Confirmation-protected reboot** — tap → perform-action `script.reboot_router` with a confirmation dialog.

## Related

- For state-based icons → [Module Icon](#uc-doc-module-icon).
- For multi-state switching → [Module Toggle](#uc-doc-module-toggle).
