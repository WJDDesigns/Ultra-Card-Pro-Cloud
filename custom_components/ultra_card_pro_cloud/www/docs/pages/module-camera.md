# Camera

> Module type: `camera` · Category: Content · Free

Live camera feeds with controls, crop, name overlay, and template-based camera switching.

## Features

- Live streams via the HA `stream` integration
- Still-image mode with auto-refresh interval
- Crop controls (focus on a region)
- Aspect ratio link / explicit dimensions
- Name overlay with positioning
- Template mode for dynamic camera selection

## Configuration

### Camera

| Field | Notes |
|---|---|
| **Camera entity** | A `camera.*` entity (or any `mjpeg_camera`). |
| **Camera name** | Override (default: entity friendly name). |
| **Show name** | Toggle name overlay. |

### Display

| Field | Notes |
|---|---|
| **Live view** | Use HA stream (requires the `stream` integration). |
| **Auto refresh** | For still mode — refresh interval. |
| **Refresh interval** | Seconds. |

### Dimensions

- Width (100–1000px)
- Height (100–1000px)
- Link aspect ratio — preserves W:H when one changes

### Name position

`top-left` · `top-right` · `center` · `bottom-left` · `bottom-right`

### Crop

`left`, `right`, `top`, `bottom` — percentage to trim each edge.

### Template mode

```jinja
{% if states('input_boolean.front_camera') == 'on' %}camera.front{% else %}camera.back{% endif %}
```

Useful to:
- Switch between indoor/outdoor camera based on time of day or sun
- Cycle through cameras
- Pick the camera that matches a current alarm zone

## Examples

- **Front door camera** — live view + name overlay top-left.
- **Garage cam still** — refresh every 30s.
- **Driveway template** — outdoor camera during day, IR camera at night.

## Notes

- Live streaming requires the **stream** integration in HA.
- Some camera integrations (especially ONVIF) emit poor still snapshots — try refresh-interval = 5s or longer if the still image is delayed.
- For privacy, use **[Logic and Conditions](#uc-doc-logic-and-conditions)** to hide cameras based on `input_boolean` toggles ("guest mode" hides bedroom cams, etc.).
