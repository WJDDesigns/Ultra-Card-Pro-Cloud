# Map

> Module type: `map` · Category: Content · Free

Interactive map with custom markers and location tracking, powered by Leaflet.

## Features

- Add multiple entities (people, devices, zones) as markers
- Custom marker icons and colors
- Zoom and center controls
- Optional zone overlays
- Auto-fit to entity bounds
- Live updates as entities move

## Configuration

### Entities

- Add `person.*`, `device_tracker.*`, `zone.*`, or any entity with `latitude` / `longitude` attributes.
- Per-entity: marker icon, color, label, custom tooltip.

### View

- **Default zoom** — initial zoom level
- **Auto-fit** — automatically pan/zoom to show all markers
- **Center on** — entity to recenter on, or a fixed lat/long

### Style

- **Map theme** — light, dark, or satellite (where supported)
- Marker style (pin, circle, custom icon)

### Actions / Logic / Design

Standard 4-tab editor. Tap on a marker → more-info on that entity by default.

## Tips

- For multi-person tracking, also add the home **zone** so context is clear.
- The map uses Leaflet (`leaflet@1.9.4`); attribution must remain visible per Leaflet's license.
- Large numbers of markers (>50) can affect rendering; consider filtering by area.
