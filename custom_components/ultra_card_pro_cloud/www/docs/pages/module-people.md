# People

> Module type: `people` · Category: Data · Free

Display person information with customizable data items — presence, location, battery, last-seen, and any custom attribute.

## Features

- Multi-person grid or list
- Avatar from `person.*` entity image (`entity_picture`)
- Configurable data items per person:
  - **Presence** (home / not_home / zone)
  - **Battery** (auto-detects related device tracker)
  - **Last seen** (relative time)
  - **Location** (zone or coordinates)
  - **Any custom attribute** from any related entity
- Color rules — presence colors, battery thresholds

## Configuration

### People

For each person:
- `person.*` entity
- Custom name (optional)
- Avatar override (optional URL or attribute)
- List of **data items** (presence / battery / last-seen / custom)

### Display

- Layout — grid / list / compact
- Avatar size
- Show / hide labels
- Background per-person (color or theme)

### Per-data-item

- Custom label
- Color rules
- Format (e.g. show battery as % vs. icon vs. bar)

### Actions / Logic / Design

Standard 4-tab editor. Tap on a person → more-info by default.

## Examples

- **Family presence panel** — 4-person grid with home/away color and battery %.
- **Driver dashboard** — single-person card with current zone + last-seen + battery.
- **Geofence monitor** — show only people with `state == 'not_home'` via Logic tab.

## Related

- **[Module Map](#uc-doc-module-map)** — geographic view of people.
- **[Module Activity Feed](#uc-doc-module-activity-feed)** — chronological "who arrived/left" history (Pro).
