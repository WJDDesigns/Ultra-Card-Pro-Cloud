# Slider Control

> Module type: `slider_control` · Category: Interactive · Free

A premium, customizable slider for any controllable entity — lights, covers, fans, climate, input numbers.

## Supported entities

- **Light** — brightness or color temperature (or both)
- **Cover** — position
- **Fan** — speed percentage
- **Input number** — generic numeric value
- **Climate** — target temperature

## Layout modes

### Overlay

Info (icon, name, value) sits on top of the slider bar. Compact and clean.

- Position: left / center / right
- Bar fill: 50–100% of module width

### Split

Slider and info side-by-side or top/bottom in separate sections.

- Bar position: left / right / top / bottom
- Info alignment: left / center / right
- Split ratio: 10–90%

## Slider styles (11)

`flat` · `glossy` · `embossed` · `inset` · `gradient-overlay` · `neon-glow` · `outline` · `glass` · `metallic` · `neumorphic` · `minimal`

## Display elements

| Element | Notes |
|---|---|
| **Icon** | Custom or entity default. Sizes 16–48px. |
| **Name** | Custom or entity default. Bold toggle. |
| **Value** | Numeric value. Custom suffix (e.g. `%`, `°C`). |

## Toggle integration

Optional on/off toggle alongside the slider:

- Position: left / right / top / bottom
- Custom on/off colors
- Size 20–48px
- Works with lights, fans, switches, covers

## Advanced

| Feature | Notes |
|---|---|
| **Custom value range** | min/max/step overrides |
| **Animation** | Smooth transitions, 100–1000ms |
| **Haptic feedback** | Vibration on mobile interaction |
| **Light control mode** | brightness / color_temp / both |
| **Cover invert** | Reverse direction |

## YAML examples

### Light brightness

```yaml
type: slider_control
entity: light.living_room
orientation: horizontal
layout_mode: overlay
slider_style: glossy
show_toggle: true
```

### Cover position with split layout

```yaml
type: slider_control
entity: cover.bedroom_blinds
layout_mode: split
split_bar_position: left
split_ratio: 60
cover_invert: false
show_toggle: true
value_suffix: '%'
```

### Climate temperature

```yaml
type: slider_control
entity: climate.thermostat
min_value: 16
max_value: 30
step: 0.5
slider_style: metallic
value_suffix: '°C'
show_toggle: false
```

### Vertical desk lamp

```yaml
type: slider_control
entity: light.desk_lamp
orientation: vertical
slider_height: 200
layout_mode: overlay
overlay_position: center
slider_style: gradient-overlay
```

## Tips

- For dim-only lights, set `light_control_mode: brightness` to hide the color-temp slider.
- For RGB color, combine with **[Module Light](#uc-doc-module-light)** (full picker) — Slider Control doesn't expose color picker.
- Disable `animate_on_change` if you experience lag on slow devices.
- For a stack of sliders (one per light), put them in a **[Module Vertical](#uc-doc-module-vertical)** with consistent heights.

See [`docs/modules/slider-control.md`](https://github.com/WJDDesigns/Ultra-Card/blob/main/docs/modules/slider-control.md) for the full reference.
