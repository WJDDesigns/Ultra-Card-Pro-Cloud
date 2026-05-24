# Climate

> Module type: `climate` · Category: Interactive · **Pro**

Interactive circular thermostat for HA `climate.*` entities.

## Features

- Circular dial with current temperature, target temperature, and HVAC mode indicator
- Drag to set target temperature
- Mode picker — heat / cool / auto / off / fan_only / dry / heat_cool
- Fan / preset selectors
- Animated indicators for active heating / cooling
- Color theming per mode
- Min/max temperature clamps

## Configuration

### Entity

- `climate.*` entity
- Custom name (optional)

### Display

- Show current temperature
- Show target temperature
- Show humidity (if available)
- Show HVAC mode indicator
- Show fan / preset pills
- Dial size

### Colors

- Per-mode colors (heat, cool, auto, off)
- Animated heating / cooling effects

### Actions / Logic / Design

Standard 4-tab editor.

## Tips

- For multi-thermostat homes, place one Climate module per zone.
- Combine with **[Module Slider Control](#uc-doc-module-slider-control)** (`entity_type: climate`) for an alternate control style.
- For HVAC stats / runtime hours, use **[Module Info](#uc-doc-module-info)** or **[Module Graphs](#uc-doc-module-graphs)** alongside.
