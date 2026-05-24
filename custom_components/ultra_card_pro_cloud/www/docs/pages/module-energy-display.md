# Energy Display

> Module type: `energy_display` · Category: Data · **Pro**

Visualize energy flow between grid, solar, battery, home, and devices — Sankey-style.

## Features

- Source / sink nodes for grid, solar, battery, home loads, individual devices
- Animated flow particles indicating direction and intensity
- Auto-balanced widths (thicker = more power)
- Color per source (e.g. solar yellow, grid blue, battery green)
- Hover for exact watts / kilowatts
- Configurable threshold to hide tiny flows

## Configuration

### Nodes

- **Solar** — production sensor
- **Grid** — import + export sensors (or net)
- **Battery** — charge/discharge power + state-of-charge
- **Home** — total consumption (or derived)
- **Devices** — individual high-power devices (EV charger, AC, oven)

### Display

- Layout — horizontal / radial
- Animated flow speed
- Min flow threshold (W) to render
- Color per node
- Show numbers on flows

### Actions / Logic / Design

Standard 4-tab editor.

## Tips

- For best visuals, set realistic device caps so the smallest flows aren't invisible.
- Pair with **[Module Solar Analytics](#uc-doc-module-solar-analytics)** for an at-a-glance summary.
- Energy flow updates can be busy — the module throttles internally, but if you have many high-frequency sensors, consider a `template:` integration to smooth them out before display.
