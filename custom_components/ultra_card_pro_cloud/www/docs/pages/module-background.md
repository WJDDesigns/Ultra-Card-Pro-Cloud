# Background

> Module type: `background` · Category: Media · Free

Add custom background images to your dashboard view. Renders behind everything else as a full-card or full-view background.

## Features

- Upload image, URL, or entity attribute source
- Position / size / repeat controls (same as a CSS `background-image`)
- Overlay color with opacity
- Per-breakpoint overrides (e.g. mobile vs. desktop)
- Conditional via [Logic and Conditions](#uc-doc-logic-and-conditions)

## Configuration

### Source

- **Upload** / **URL** / **Entity** / **Entity attribute**

### Layout

- **Size** — cover / contain / auto / custom
- **Position** — 9-point grid + custom string
- **Repeat** — repeat / no-repeat / repeat-x / repeat-y
- **Overlay** — color + opacity (darken/lighten the image)

### Logic / Design

Standard 4-tab editor.

## Examples

- **Time-of-day backgrounds** — three Background modules, each gated by a Logic time condition (morning/afternoon/evening).
- **Weather-driven background** — template-conditional via Logic to swap between sunny/cloudy/rainy hero images.
- **Brand banner** — single static image with a 30% dark overlay for readability.

## Related

- **[Module Image](#uc-doc-module-image)** — inline image inside a column.
- **[Module Video Background](#uc-doc-module-video-background)** (Pro) — video backgrounds.
- **[Module Living Canvas](#uc-doc-module-living-canvas)** (Pro) — animated WebGL backgrounds.
- **[Module Dynamic Weather](#uc-doc-module-dynamic-weather)** (Pro) — weather-driven particle effects.
