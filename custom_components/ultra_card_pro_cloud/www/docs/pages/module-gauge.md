# Gauge

> Module type: `gauge` · Category: Content · Free

Display sensor values as customizable gauges with multiple styles, color modes, and pointer options.

## Gauge styles

| Style | Look |
|---|---|
| **Basic** | Clean and simple |
| **Modern** | Contemporary with smooth animations |
| **Speedometer** | 270° car-style |
| **Arc** | 180° semi-circle |
| **Radial** | 360° full circle |
| **Lines** | Individual line segments |
| **Block** | Discrete blocks |
| **Minimal** | Ultra-clean circular |
| **Inset** | Depth/shadow effect |
| **3D** | 3D visual effects |
| **Digital** | LCD-style display |

## Pointer styles

`needle` · `triangle` · `arrow` · `line` · `circle` (line + dot)

## Color modes

| Mode | Behavior |
|---|---|
| **Solid** | Single color across the gauge. |
| **Gradient** | Multi-stop, position 0–100, smooth blend. |
| **Segments** | Discrete colored segments with from/to ranges (e.g. *Low* / *Normal* / *High*) and optional labels. |

## Value sources

- **Entity state** — direct numeric state.
- **Entity attribute** — a numeric attribute value.
- **Template** — Jinja2 expression returning a number.

## Display options

- Show / hide value, format string (e.g. `%.1f°C`, `%.0f%%`)
- Value position — top / center / bottom / none
- Show / hide name; name position
- Show / hide min / max
- Tick marks with optional labels

## Animations

- Enable / disable smooth transitions
- Duration 100–5000ms
- Easing — linear / ease in / ease out / ease in-out / bounce

## Configuration example (YAML)

```yaml
type: gauge
entity: sensor.battery_level
gauge_style: modern
min_value: 0
max_value: 100
color_mode: gradient
gradient_stops:
  - { position: 0,   color: '#e53935' }
  - { position: 50,  color: '#fdd835' }
  - { position: 100, color: '#43a047' }
value_format: '%.0f%%'
```

For the full reference, see [`docs/GAUGE_MODULE.md`](https://github.com/WJDDesigns/Ultra-Card/blob/main/docs/GAUGE_MODULE.md).

## Related

- Linear progress → [Module Bar](#uc-doc-module-bar)
- Historical chart → [Module Graphs](#uc-doc-module-graphs)
- Just a number → [Module Info](#uc-doc-module-info)
