# Horizontal Layout

> Module type: `horizontal` · Category: Layout · Free

Container module that arranges child modules side-by-side in a row, with flex alignment and gap controls.

## Features

- Place modules horizontally
- Flexible alignment (horizontal + vertical)
- Spacing between items (positive or negative)
- Wrap to next line when exceeding width
- Nestable — combine with [Module Vertical](#uc-doc-module-vertical) for complex grids

## Configuration

### Layout

- **Horizontal alignment** — left / center / right / space-between / space-around / justify
- **Vertical alignment** — top / center / bottom / stretch / baseline
- **Allow wrapping** — when on, modules wrap to a new line if the row overflows

### Gap

- **Gap between items** (rem) — supports **negative** values to overlap modules

### Logic / Design

Standard 4-tab editor.

## Examples

- **Icon row** — 4 icon modules with 1rem gap, centered.
- **Info bar** — temp/humidity/pressure info modules with space-between.
- **Button group** — 3 buttons stretched to fill (justify).

## Related

- **[Module Vertical](#uc-doc-module-vertical)** — stack instead of row.
- **[Module Tabs](#uc-doc-module-tabs)** — switchable instead of always-visible.
- For top-level rows, use the **Row → Column** structure (see [Layout System](#uc-doc-layout-system)) — the horizontal module is for nesting *inside* a column.
