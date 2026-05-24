# Graphs

> Module type: `graphs` · Category: Data · Free

Historical data visualization with multiple chart types and customization.

## Chart types

| Type | Best for |
|---|---|
| **Line** | Continuous trends over time |
| **Bar** | Discrete-period comparison |
| **Pie** | Part-to-whole |
| **Donut** | Pie with center space |

## Data sources

- Add multiple entities to a single chart.
- Optional custom **display name** per series.
- Use entity state or a specific **attribute**.
- **Use as card info** — show entity info in the card header.

## Display options

- **Chart title** (toggle + text)
- **Time period** — `1h`, `3h`, `6h`, `12h`, `24h`, `2d`, `7d`, `30d`, `90d`, `365d`
- **Normalize values** — scale series with different units to a 0–1 range
- **Chart height** (px), **width** (%), **alignment**

## Chart options

- Show / hide legend, legend position (top / bottom / left / right / hidden)
- Show / hide grid, tooltips
- Background color

## Line chart options

- Show points
- Fill area under line
- Line style — solid / dashed / dotted
- Line width
- Smooth (curved) lines

## Pie / donut options

- Show title in slice
- Show value in slice
- Add slice gap (px)

## Examples

- **Temperature trend** — line chart, last 24h, smooth lines, fill area on
- **Energy usage** — bar chart, last 7d, stacked
- **Sensor comparison** — multi-line chart with normalize values to compare temp + humidity
- **Device active time** — pie chart from a binary_sensor over 30d

## Tips

- `pie` / `donut` work well for binary states (e.g. % of time a sensor was `on`).
- Normalize values when overlaying e.g. CPU temp (°C) and CPU load (%).
- For **statistics** rather than raw history, point at HA's statistics-backed sensors (`sensor.energy_…_daily`) — Graphs reads HA recorder/statistics where appropriate.
- Heavy charts (long ranges, many series) can slow the editor preview — use the breakpoint preview switcher to test on the breakpoint where the chart actually renders.
