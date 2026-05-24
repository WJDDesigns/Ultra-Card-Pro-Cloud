# Light

> Module type: `light` · Category: Interactive · Free

Advanced light control with color picker, color-temperature, brightness, effects, and group support.

## Features

- Brightness slider (0–100% or custom range)
- Color picker — RGB / HS / XY (whatever the light supports)
- Color temperature slider (warm ↔ cool, with kelvin labels)
- Effect picker — pulls from `effect_list` attribute
- White-mode toggle
- Quick on/off
- Multiple display styles

## Configuration

### Entity

- **Light entity** — `light.*`
- **Custom name**
- **Use group target** — when bound to a group, calls service against the group as a whole

### Display

- **Layout** — compact / card / detailed
- **Show brightness slider**
- **Show color picker**
- **Show color temperature**
- **Show effects**
- **Show on/off toggle**

### Color customization

- **Color wheel style** — full / triangle / strip
- **Default to last color** when turning on

### Actions

Tap container = more-info by default; brightness slider, color picker, and effects are direct controls.

### Logic / Design

Standard 4-tab editor.

## Examples

- **Bedroom lamp** — compact layout, brightness only.
- **Living room ambient** — full color picker + effects.
- **Group all lights** — bind to `light.living_room_all`, controls all members at once.

## Tips

- For a dial-style brightness slider, use **[Module Slider Control](#uc-doc-module-slider-control)** with `light_control_mode: brightness`.
- For state-based icons (lightbulb-on vs lightbulb-off), use **[Module Icon](#uc-doc-module-icon)**.
- For multi-light grids, **[Module Grid](#uc-doc-module-grid)**.
