# Grid

> Module type: `grid` · Category: Data · Free

Display entities in a customizable grid of tiles — quick way to render "all my lights" or "all sensors in the kitchen" without manually placing each module.

## Features

- Multi-column grid (2 / 3 / 4 / auto)
- Per-tile customization (icon, name, action override)
- Multiple display styles (minimal, glass, neumorphic, etc.)
- State-driven coloring
- Compact / large tile sizes
- Long-press for more-info, tap for default action

## Configuration

### Entities

- Add explicit entities, **or**
- Pull from area (`include_area`)
- Pull from domain (`include_domain`)
- `hidden_entities` blocklist

### Layout

- Columns — 2 / 3 / 4 / auto-fit
- Tile size (height in px)
- Gap between tiles
- Tile border radius

### Tile style

- **Minimal** — flat color
- **Glass** — frosted blur
- **Neumorphic** — soft shadow
- **Accent** — colored border in active state

### State coloring

- Active state list (e.g. `on, home, opened`)
- Active color / Inactive color
- Active animation (optional)

### Actions / Logic / Design

Standard 4-tab editor. Tap → toggle (lights/switches/covers) or more-info for the rest.

## Examples

- **All lights grid** — area-based, 3 columns, glass style, glow on active.
- **Sensor wall** — domain-based on `binary_sensor`, minimal, color-coded.
- **Scene picker** — explicit list of `scene.*` entities, large tiles, tap-to-activate.

## Related

- **[Module Area Summary](#uc-doc-module-area-summary)** for a single tile per room.
- **[Module Dynamic List](#uc-doc-module-dynamic-list)** for full-template-driven module generation.
