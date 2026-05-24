# Activity Feed

> Module type: `activity_feed` · Category: Data · **Pro**

Real-time home activity feed with timeline and social views.

## Features

- Subscribes to entity state changes and renders them as a timeline.
- Two layouts: **timeline** (vertical, time-grouped) and **social** (cards with avatars/icons).
- Per-entity formatting — custom name, icon, and "what happened" text template.
- Filter by domain, area, or explicit entity list.
- Configurable retention window.

## Configuration

### Sources

- **Tracked entities** — explicit allowlist
- **Areas** — include all entities in selected areas
- **Domains** — include all entities in selected domains
- **Hidden entities** — always exclude

### Display

- Layout — `timeline` / `social`
- Time format — relative (`5m ago`) or absolute
- Group by — day / hour / none
- Max events — 1–200
- Show entity icons

### Per-entity rules

Define how each entity's state change should appear:

```
entity:    binary_sensor.front_door
on text:   Front door opened
off text:  Front door closed
icon:      mdi:door
```

### Actions / Logic / Design

Standard 4-tab editor.

## Examples

- **Daily timeline** — show only motion + door events, grouped by hour.
- **Family social feed** — `person.*` and `device_tracker.*` only, social layout.
- **Mute mode** — Logic tab template hides feed during quiet hours.

## Notes

- The feed reads from HA's recorder/history. Make sure the entities you track are recorded (default).
- Feeds with too many events can affect rendering; cap with **Max events** and a tight retention window.
