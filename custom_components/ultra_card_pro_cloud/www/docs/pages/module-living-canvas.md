# Living Canvas

> Module type: `living_canvas` · Category: Media · **Pro**

A full-view WebGL background — like Dynamic Weather but for general-purpose ambient art. Built on Three.js.

## Features

- Library of presets (aurora, plasma, particles, gradient flow, neon mesh, …)
- Each preset has its own parameters (speed, color palette, density, distortion)
- **Entity drivers** — bind colors / speed / density to live entity values for a "the canvas reflects my home" effect
- Color theme — palette presets or custom 4-color palette
- Performance scaling — reduce particle count on slow devices

## Configuration

### Preset

- Pick a preset from the library
- Each preset shows a live thumbnail

### Parameters

- **Speed**
- **Density**
- **Distortion** / amplitude
- **Color palette** — preset or custom 4 colors

### Entity drivers (optional)

For each parameter, optionally bind to an entity:

```
parameter:  speed
entity:     sensor.cpu_load
mapping:    0–100% → 0.5–4.0
```

Means: when CPU load is high, the canvas animates faster. Have fun with it.

### Display

- Z-order (front / back)
- Opacity

### Logic / Design

Standard 4-tab editor.

## Examples

- **Music-reactive aurora** — bind speed and color shift to the media player's `media_position` and album art colors.
- **Calm-when-clean** — bind density to dust sensor — clean air = sparse canvas.
- **CPU stress visualizer** — bind distortion to CPU temperature for a "the house is on fire" vibe.

## Performance notes

- WebGL — requires a modern browser. Not supported on legacy WebView.
- Mobile rendering can hit framerate limits — reduce density or hide on mobile via Logic.
- Living Canvas runs on the main thread but uses requestAnimationFrame; it pauses when the dashboard tab is backgrounded.

See `uc-living-canvas-service.ts` for the lifecycle.
