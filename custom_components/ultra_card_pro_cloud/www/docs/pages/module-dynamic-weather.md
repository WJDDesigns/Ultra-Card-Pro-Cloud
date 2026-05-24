# Dynamic Weather

> Module type: `dynamic_weather` · Category: Media · **Pro**

Animated weather effects (rain, snow, fog, sun beams) overlaid on your dashboard view.

## Features

- **Rain** — varying intensity, drop size, wind angle
- **Snow** — flake size, density, wind drift
- **Fog** — opacity, layer count, drift speed
- **Sun beams** — ray count, intensity, color
- **Clouds** — drifting cloud layers
- **Lightning** — random flashes (rain + storm modes)
- Driven by a HA `weather.*` entity, `sensor.*` template, or manual selection
- Overlay opacity to balance with dashboard readability
- Conditional via [Logic and Conditions](#uc-doc-logic-and-conditions) (e.g. "snow only on snow-day input")

## Configuration

### Source

- **Weather entity** — `weather.*` whose state drives the effect
- **Manual** — pick a fixed effect
- **Template** — Jinja2 expression returning the effect name

### Per-effect

- Intensity (1–10)
- Particle size
- Color
- Wind direction / speed
- Layer count

### Display

- Overlay opacity
- Bring-to-front toggle (default off — sits behind content)

### Logic / Design

Standard 4-tab editor.

## Examples

- **Auto-weather** — bind to `weather.home`, automatically rains when state is `rainy`, snows when `snowy`.
- **Cozy winter mode** — manual snow + sun beams when `input_boolean.cozy_mode` is on.
- **Storm visualization** — heavy rain + occasional lightning when severe storm sensor is active.

## Notes

- Implemented via Three.js (`three@0.181.1`) particle systems. Rendering scales to viewport size.
- Performance is configurable — reduce **layer count** and **intensity** on slower devices.
- Hide on mobile via Logic → Hidden on devices to save battery.
