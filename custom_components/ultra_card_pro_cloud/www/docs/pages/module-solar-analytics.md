# Solar Analytics

> Module type: `solar_analytics` · Category: Data · **Pro**

Live solar power, grid balance, battery state, and daily energy totals in one glanceable widget.

## Features

- Real-time solar production (W / kW)
- Grid import vs. export with arrow direction
- Battery state-of-charge with charging / discharging indicator
- Daily energy totals (produced, consumed, exported, imported)
- Self-consumption %
- Mini sparkline of today's production curve
- Threshold-based color coding

## Configuration

### Entities

- **Solar production** — `sensor.*` (e.g. `sensor.solar_power`)
- **Grid import / export** — net or split sensors
- **Battery state** — battery percentage sensor (optional)
- **Battery power** — charging/discharging W sensor (optional)
- **Home consumption** — total consumption sensor (optional, derived if missing)

### Display

- Show / hide each section (production / grid / battery / totals)
- Sparkline length (last 1h / 6h / 24h)
- Color thresholds (e.g. battery red < 20%, green > 60%)
- Card style — light / dark / accent

### Actions / Logic / Design

Standard 4-tab editor.

## Tips

- Pair with **[Module Energy Display](#uc-doc-module-energy-display)** for the full Sankey flow visualization.
- Use [Logic and Conditions](#uc-doc-logic-and-conditions) to hide the battery section after sundown if you don't have a battery system.
- Numbers respect the unit on the source sensor — check yours is in `W` (or `kW`) consistently.
