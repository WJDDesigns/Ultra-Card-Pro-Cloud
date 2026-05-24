# Animated Weather

> Module type: `animated_weather` · Category: Content · **Pro**

Current-conditions weather display with animated icons (rain falls, snow swirls, sun rotates, lightning flashes).

## Features

- Animated weather icons matching the entity state
- Temperature display with custom format
- Optional "feels like" temperature
- Wind speed / direction indicator
- Humidity / pressure / UV index
- Custom layout (compact / detailed / minimal)

## Configuration

### Source

- `weather.*` entity (any HA weather integration — Met.no, OpenWeatherMap, AccuWeather, etc.)

### Display

- Layout — compact / detailed / minimal
- Show feels-like
- Show wind / humidity / pressure / UV
- Temperature format (°C / °F / both)
- Animated icon size

### Style

- Background color / gradient
- Icon color theme — auto / custom
- Text alignment

### Logic / Design

Standard 4-tab editor.

## Examples

- **Today widget** — compact, with feels-like and wind.
- **Hero weather panel** — detailed, large icon, all metrics.
- **Mobile minimal** — minimal layout, icon + temperature only, hidden on desktop.

## Related

- **[Module Animated Forecast](#uc-doc-module-animated-forecast)** for multi-day.
- **[Module Dynamic Weather](#uc-doc-module-dynamic-weather)** for full-screen weather effects.
