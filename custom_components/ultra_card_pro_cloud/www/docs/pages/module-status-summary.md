# Status Summary

> Module type: `status_summary` · Category: Data · Free

Display entity activity with timestamps and customizable color coding. Designed as a compact "what changed recently" panel.

## Features

- Add multiple entities, each with custom name, icon, and color.
- Color rules per entity (e.g. green when `on`, red when `off`).
- Show last-changed timestamp (relative or absolute).
- Group entities by category.
- Sortable by recency or by config order.

## Configuration

### Entities

For each tracked entity:

- Entity ID
- Custom name (optional)
- Custom icon (optional)
- Color rules — list of `(state matcher → color)` pairs

### Display

- Show timestamps — toggle + relative/absolute mode
- Show icons — per-entity colors
- Compact / spaced layout

### Actions / Logic / Design

Standard 4-tab editor.

## Examples

- **Door / window status** — list of contact sensors with green when closed, red when open, last-changed timestamps for "open since 5m ago".
- **Outdoor sensors** — temperature, wind, rain — color-coded thresholds.
- **Family location** — `person.*` entities with home / not_home colors.

## Related

- **[Module Alert Center](#uc-doc-module-alert-center)** for prioritized active alerts.
- **[Module Activity Feed](#uc-doc-module-activity-feed)** for a timeline view (Pro).
- **[Module Area Summary](#uc-doc-module-area-summary)** if entities all belong to one room.
