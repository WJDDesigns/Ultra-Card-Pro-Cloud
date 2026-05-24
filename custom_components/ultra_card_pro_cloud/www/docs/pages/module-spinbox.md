# Spinbox

> Module type: `spinbox` · Category: Interactive · Free

Number input with increment / decrement buttons and a center value display.

## Features

- `−` / `+` buttons that step a value
- Configurable step size, min, max
- Bind to `input_number.*`, `counter.*`, `climate.*`, or any numeric entity
- Visual styles to match your design
- Optional unit suffix (e.g. `°C`, `%`)

## Configuration

- **Entity** — numeric entity (HA helper or custom)
- **Min value** / **Max value** — clamps
- **Step** — increment per press
- **Hold-to-repeat** — toggle
- **Suffix** — text after value
- **Style** — flat / glossy / minimal / outline

### Actions / Logic / Design

Standard 4-tab editor.

## Examples

- **Thermostat fine-tune** — entity `climate.living_room` (`set_temperature`), step `0.5°C`.
- **Counter** — entity `counter.coffee_cups`, step `1`.
- **Timer length** — entity `input_number.cook_time`, step `5 min`.

## Related

- **[Module Slider Control](#uc-doc-module-slider-control)** for drag-to-set values.
- **[Module Number Input](#uc-doc-module-number-input)** (see [Module Input Modules](#uc-doc-module-input-modules)) for direct keyboard input bound to `input_number`.
