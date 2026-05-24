# Fan

> Module type: `fan` · Category: Interactive · Free

Modern fan control with speed slider, preset modes, oscillation, and direction.

## Features

- Speed control — slider + percentage
- Preset modes (`auto`, `eco`, `turbo`, etc., where the entity supports them)
- Oscillation toggle
- Direction toggle (forward / reverse)
- On/off toggle

## Configuration

### Entity

- `fan.*` entity
- Custom name (optional)

### Display

- Show speed slider
- Show preset selector
- Show oscillation toggle
- Show direction toggle
- Style — flat / glass / outline / minimal

### Actions / Logic / Design

Standard 4-tab editor.

## Tips

- Some fans report `percentage` while others use `speed_count`. Ultra Card adapts automatically.
- For ceiling fans with limited modes, hide unused controls to keep the UI clean.
- For speed control only, **[Module Slider Control](#uc-doc-module-slider-control)** with `entity_type: fan` is more compact.
