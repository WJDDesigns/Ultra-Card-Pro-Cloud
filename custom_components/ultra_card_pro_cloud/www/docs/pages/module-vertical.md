# Vertical Layout

> Module type: `vertical` · Category: Layout · Free

Container module that stacks child modules vertically with alignment and gap controls.

## Features

- Stack modules vertically
- Vertical alignment options
- Spacing between items (positive or negative)
- Nestable — combine with [Module Horizontal](#uc-doc-module-horizontal) for complex grids

## Configuration

### Layout

- **Vertical alignment** — top / center / bottom / space-between / space-around / stretch

### Gap

- **Gap between items** (rem) — supports **negative** values to overlap modules

### Logic / Design

Standard 4-tab editor.

## Examples

- **Status column** — multiple Info modules stacked with 8px gap.
- **Control panel** — buttons + bar + slider stacked.
- **Dashboard section** — group of related modules with shared background.

## Related

- **[Module Horizontal](#uc-doc-module-horizontal)** — side-by-side instead.
- **[Module Accordion](#uc-doc-module-accordion)** — collapsible vertical group with header.
- **[Module Tabs](#uc-doc-module-tabs)** — switchable vertical groups.
