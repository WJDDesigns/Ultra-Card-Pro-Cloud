# Animated Forecast

> Module type: `animated_forecast` · Category: Content · **Pro**

Multi-day weather forecast with animated icons.

## Features

- Configurable number of days (1–10)
- Animated icons per day
- High / low temperature
- Precipitation chance
- Wind / humidity (optional, where supported)
- Day label (e.g. *Mon*) or date label
- Highlight today

## Configuration

### Source

- `weather.*` entity
- Forecast type — `daily` (default) or `hourly` (where supported)

### Display

- **Number of days** — 1–10
- Show high / low / both
- Show precipitation
- Show wind
- Show humidity
- Day label format
- Layout — horizontal cards / vertical list / compact strip
- Highlight today

### Style

- Background color
- Icon size
- Text alignment

### Logic / Design

Standard 4-tab editor.

## Examples

- **Weekly forecast strip** — horizontal cards, 7 days, today highlighted.
- **Compact 3-day** — minimal compact strip on a mobile dashboard.
- **Detailed daily** — vertical list, 10 days, with wind and humidity.

## Notes

- Some `weather.*` entities only expose 5 days — the module gracefully clamps.
- For `hourly` forecasts, consider showing a smaller number of slots so it doesn't overflow.

## Related

- **[Module Animated Weather](#uc-doc-module-animated-weather)** for current conditions.
- **[Module Calendar](#uc-doc-module-calendar)** (Pro) for events.
