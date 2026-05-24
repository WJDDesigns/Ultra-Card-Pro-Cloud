# Toggle

> Module type: `toggle` · Category: Interactive · Free

Interactive toggles and multi-state switchers with custom actions per state.

## Features

- **Binary toggle** — classic on/off switch styled to match your dashboard
- **Multi-state segmented switcher** — 2+ options, each with its own label, icon, color, and action
- Custom on/off colors and icons
- Animations on state change
- Per-state action override

## Configuration

### Mode

- **Binary** — single entity toggle
- **Segmented** — multiple manual options (each with state matcher, label, icon, action)

### Binary mode

- **Entity** — entity to toggle
- **On color** / **Off color**
- **On icon** / **Off icon** (optional)
- **Tap action** — defaults to `toggle`; can be overridden

### Segmented mode

For each option:
- Label
- Icon
- Active state matcher (compared to a master entity, or independent)
- Action when selected

### Logic / Design

Standard 4-tab editor.

## Examples

- **HVAC mode switcher** — segmented: Heat / Cool / Off, each calling `climate.set_hvac_mode`.
- **Scene picker** — segmented: Day / Movie / Sleep, each calling `scene.turn_on`.
- **Simple light** — binary, entity `light.bedroom`, tap toggles.

## Related

- **[Module Button](#uc-doc-module-button)** — single button with action.
- **[Module Dropdown](#uc-doc-module-dropdown)** — many options without taking horizontal space.
- **[Module Slider Control](#uc-doc-module-slider-control)** — for continuous values.
