# Alert Center

> Module type: `alert_center` · Category: Data · Free

Active Home Assistant alerts in one prioritized card.

## What it monitors

- `alert.*` entities (the HA `alert:` integration)
- `binary_sensor.*` with alert-relevant `device_class` (smoke / gas / leak / problem / safety / motion / window / door / lock / etc.)
- Lock entities (alert states)
- Alarm panel entities (active alert states)

Sorted by severity so critical issues appear first.

## Options

| Option | Type | Default | Notes |
|---|---|---|---|
| `title` | string | `Alert Center` | Card heading. |
| `show_title` | boolean | `true` | Show / hide header. |
| `max_alerts` | number | `6` | 1–30. |
| `show_state` | boolean | `true` | Show entity state under name. |
| `show_all_clear` | boolean | `true` | Show "All clear" fallback when nothing is active. |
| `include_alert_domain` | boolean | `true` | Monitor `alert.*`. |
| `include_binary_sensors` | boolean | `true` | Monitor alert-relevant `binary_sensor.*`. |
| `include_lock_alerts` | boolean | `true` | Monitor lock alert states. |
| `include_alarm_panel_alerts` | boolean | `true` | Monitor alarm panel states. |
| `include_entities` | string[] | `[]` | Manual allowlist. |
| `hidden_entities` | string[] | `[]` | Blocklist (always wins). |
| `accent_color` | string | theme | Accent for header / highlights. |
| `tile_border_radius` | number | `20` | Px. |

## Behavior

- Auto-detection only surfaces entities currently in an **active** alert state.
- Manually included entities are still state-checked — inactive ones are not shown.
- Hidden entities **always** take precedence.
- Tap any alert row → more-info dialog for that entity.

## Examples

### Critical-only mode

- `include_alert_domain: false`
- `include_binary_sensors: true`
- `hidden_entities`: noisy motion sensors you don't want surfaced
- Use [Logic and Conditions](#uc-doc-logic-and-conditions) template to hide the whole module when there are no critical alerts:
  ```jinja
  {{ states.binary_sensor
     | selectattr('attributes.device_class', 'in', ['smoke','gas','leak','problem'])
     | selectattr('state', 'eq', 'on')
     | list | count > 0 }}
  ```

### Always-visible status board

- Default settings + `show_all_clear: true` so it shows "All clear" when nothing's wrong.

## Related

- For a per-entity activity feed → [Module Activity Feed](#uc-doc-module-activity-feed) (Pro).
- For a single alert → [Module Status Summary](#uc-doc-module-status-summary).
