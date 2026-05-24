# Accordion

> Module type: `accordion` · Category: Layout · Free

Collapsible container with a customizable header. Tap the header to expand or collapse the nested modules.

## Features

- Custom header — text, icon, color, alignment
- Open / closed by default
- Smooth expand/collapse animation
- Per-accordion Logic (hide the whole accordion if needed)
- Nestable inside other containers

## Configuration

### Header

- **Title** (text or template)
- **Icon** (optional)
- **Header background** / **text color**
- **Chevron position** — start / end
- **Chevron icon** — custom (default `mdi:chevron-down`)

### Behavior

- **Default state** — open / closed
- **Animation duration** (ms)
- **Persist state** — remember open/closed across reloads (localStorage)

### Contents

Standard nested module list — each module gets its own 4-tab editor.

### Logic / Design

Standard 4-tab editor.

## Examples

- **Advanced settings** — collapse complex options away from main controls.
- **Per-room sections** — accordion per room, each with that room's controls.
- **FAQ-style help** — markdown modules in nested accordions.

## Tips

- Pair with [Module Markdown](#uc-doc-module-markdown) for FAQ panels.
- Don't nest accordions more than 2 deep — UI gets confusing.
