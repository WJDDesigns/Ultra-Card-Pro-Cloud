# Area / Room Summary

> Module type: `area_summary` · Category: Data · Free

A smart room tile that auto-discovers entities by Home Assistant **Area** and renders them as quick-action shortcuts. The fastest way to build a "rooms" dashboard.

## What it does

- Loads area, device, and entity registries via the HA WebSocket API.
- Finds entities linked to the area (directly or via devices in the area).
- Renders:
  - Room title (area name or override)
  - Optional climate / humidity summary
  - **Quick actions** — circular shortcuts for lights, climate, motion, doors, media, people, covers, fans, locks, switches
  - Optional **entity name** under each shortcut
- Picks one of four **style presets**:
  - Iconic soft
  - Graph glow
  - Compact controls
  - Photo overlay

## Setup

1. In **HA → Settings → Areas & zones**, assign devices and/or entities to the correct area.
2. In Ultra Card, add the **Area / Room Summary** module.
3. Pick the **Area** in the General tab. Everything else fills in automatically.

## Options

| Option | Description |
|---|---|
| **Area** | Required. Drives auto-discovery. |
| **Title override** | Defaults to the area name. |
| **Temperature / humidity entity overrides** | Force the source for the climate summary. |
| **Room icon** | Large MDI icon on the tile. |
| **Accent color** | Highlights and active quick actions. |
| **Style preset** | Iconic / Graph glow / Compact / Photo overlay. |
| **Max quick actions** | 1–12 circular shortcuts. |
| **Tile border radius** | 0–48 px. |
| **Show entity names** | Show friendly name under each shortcut. |
| **Photo background** | (Photo overlay) — none / upload / entity image / URL. |
| **Background overlay %** | Darken photo for readability. |
| **Discovery toggles** | Enable / disable per category (lights, climate, motion, doors, media, locks, fans, covers, switches, people). |
| **Pinned entities** | Always show first when present in the area. |
| **Hidden entities** | Always exclude — beats both auto-discovery and pinned. |

## Style presets

| Preset | Look |
|---|---|
| **Iconic soft** | Pastel chips, large room icon, friendly. |
| **Graph glow** | Dark background, neon accent strokes, mini sparklines where appropriate. |
| **Compact controls** | Includes a "Lights" pill (`light.turn_on/off` targeting the area) and a "Climate" pill (more-info on first climate). |
| **Photo overlay** | Background photo + frosted overlay. |

## Actions

- **Tap** (whole tile): defaults to **more-info** on a primary entity. Resolution order: climate → temperature sensor → first light → first quick entity. Override in the Actions tab.
- **Quick action taps**: `toggle` for `light` / `switch` / `fan`; `more-info` for everything else.

## Troubleshooting

| Symptom | Fix |
|---|---|
| "Could not load area" / registry errors | Ensure HA is reachable and your account can use the entity registry WebSocket commands. Click **Retry**. |
| Empty quick row | Widen discovery toggles, remove hidden entities, increase **Max quick actions**. |
| Wrong entities | Add to **Hidden entities** to exclude; **Pin** the ones you want first. |
| Climate summary missing | Confirm a `climate.*` entity is in the area, or use **Temperature entity override**. |

## Tips

- For a multi-room dashboard, drop one Area Summary per area in a horizontal layout — that's a working dashboard in five minutes.
- Combine with **[Module Navigation](#uc-doc-module-navigation)** for a tabbed-by-floor experience.
