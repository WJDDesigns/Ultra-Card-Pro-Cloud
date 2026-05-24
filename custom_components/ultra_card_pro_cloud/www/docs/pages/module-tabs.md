# Tabs

> Module type: `tabs` · Category: Layout · Free

Tabbed container — multiple sections, only one visible at a time, switchable via tab strip.

## Features

- Multiple tabs, each with label, icon, and contents
- Tab strip at top / bottom / left / right
- Optional default tab on load
- Sticky tab strip
- Per-tab Logic (hide whole tabs conditionally)
- Smooth transitions between tabs

## Configuration

### Tabs

For each tab:
- Label
- Icon (optional)
- Default tab (only one)
- Modules — full nested 4-tab editor for each module in the tab

### Strip

- Position — top / bottom / left / right
- Style — pill / underline / segmented
- Show icons / show labels / both

### Behavior

- Default tab on load
- Remember last tab (persist via localStorage)
- Animate transitions

### Logic / Design

Standard 4-tab editor.

## Examples

- **Multi-camera viewer** — one tab per camera, label = location.
- **Energy dashboard** — tabs: *Now* / *Today* / *Week* / *Month*.
- **Family dashboard** — tabs per person, each with their info.

## Related

- **[Module Slider](#uc-doc-module-slider)** — swipeable carousel instead of tabbed.
- **[Module Accordion](#uc-doc-module-accordion)** — collapsible instead of tabbed.
