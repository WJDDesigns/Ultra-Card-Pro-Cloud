# Vacuum Control

> Module type: `vacuum` · Category: Interactive · **Pro**

Interactive vacuum control with map, stats, and animations.

## Features

- Start / pause / stop / return-to-base / locate buttons
- Live map (where the integration provides one)
- Battery percentage with charging indicator
- Cleaning stats — area, duration, runs
- Custom command palette (zone clean, room select, fan speed)
- Animated cleaning indicator

## Configuration

### Entity

- `vacuum.*` entity
- Custom name (optional)

### Display

- Show map (if supported by integration)
- Show stats (area, duration, last run)
- Show fan-speed selector
- Show custom command buttons (e.g. "Clean kitchen")

### Custom commands

Add buttons that call `vacuum.send_command` with a JSON payload — useful for room-segment cleaning on Roborock/Xiaomi.

### Actions / Logic / Design

Standard 4-tab editor.

## Tips

- Live maps depend on your vacuum integration. If you don't see a map, the integration likely doesn't expose one (e.g. some Eufy / Shark models).
- For an over-time history of cleaning runs, pair with **[Module Activity Feed](#uc-doc-module-activity-feed)** (Pro) or **[Module Graphs](#uc-doc-module-graphs)**.
