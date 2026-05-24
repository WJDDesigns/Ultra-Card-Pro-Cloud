# Cover

> Module type: `cover` · Category: Interactive · Free

Modern control for `cover.*` entities — blinds, garage doors, shutters, awnings.

## Features

- Open / close / stop buttons
- Position slider (where supported)
- Tilt slider (where supported)
- State icon that reflects current position
- Live position percentage

## Configuration

### Entity

- `cover.*` entity
- Custom name (optional)
- **Invert direction** — useful when the device's "open = 0" convention is reversed

### Display

- Show open/close/stop buttons
- Show position slider
- Show tilt slider
- Style — flat / glassy / outline

### Actions / Logic / Design

Standard 4-tab editor.

## Examples

- **Bedroom blinds** — position slider only.
- **Garage door** — open/close/stop buttons, no slider.
- **Living room awning** — position + tilt sliders.

## Related

- For just open/closed status with no controls, use **[Module Info](#uc-doc-module-info)** with `binary_sensor.*` (door/garage classes).
- For a single position dial, **[Module Slider Control](#uc-doc-module-slider-control)** with `entity_type: cover`.
