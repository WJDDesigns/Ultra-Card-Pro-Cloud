# Logic and Conditions

The **Logic** tab on every module / row / column / card lets you show or hide it based on Home Assistant state, time, or templates. This is one of Ultra Card's most powerful features — your dashboard can rearrange itself dynamically.

---

## How logic is evaluated

Each block (module, row, column, or the whole card) can have multiple **display conditions**, combined in one of two modes:

| Mode | Semantics |
|---|---|
| **Always** | Always visible (default) — ignore conditions. |
| **Every (AND)** | All conditions must be true. |
| **Any (OR)** | At least one condition must be true. |

If the combined result is **true**, the block is visible. Otherwise it is hidden (and removed from the layout, not just made invisible).

---

## Condition types

There are four types of conditions:

### 1. Entity state

```
entity:    light.living_room
operator:  =
value:     on
```

Available operators:

| Operator | Meaning |
|---|---|
| `=` | Exactly equals |
| `!=` | Not equal |
| `>` `>=` `<` `<=` | Numeric comparison (auto-cast) |
| `has_value` | State is not `unknown` / `unavailable` / empty |
| `no_value` | State is `unknown` / `unavailable` / empty |
| `contains` | String contains substring |
| `not_contains` | String does not contain substring |

### 2. Entity attribute

Same as state, but compares against a specific attribute:

```
entity:    media_player.bedroom
attribute: media_artist
operator:  contains
value:     Beatles
```

### 3. Time

```
time_from: 22:00
time_to:   06:00
```

Visible if the current time is within the range. Wraps around midnight automatically.

### 4. Template (Jinja2)

```
template: |
  {{ states('sensor.battery_level') | int < 20
     and is_state('binary_sensor.charging', 'off') }}
```

Truthy result → visible. Use this when state/attribute conditions aren't expressive enough. See [Templates and Jinja](#uc-doc-templates-and-jinja).

> **Tip:** Templates are subscribed via HA's `render_template` WebSocket — they update live, no polling.

---

## Hidden on devices

Independent of the conditions above, every block has a **Hidden on devices** toggle that lets you hide it on specific breakpoints:

- **Mobile** (≤768px container width)
- **Tablet** (769–1199px)
- **Desktop** (≥1200px)

This is purely responsive — useful for hiding labels on mobile or hiding a giant chart on small screens.

---

## Visibility transitions

When a module's visibility changes, Ultra Card runs a **fade animation** by default (configurable). This avoids the dashboard "popping" when entities change.

---

## Global card logic

The **whole card** has a Logic tab too — useful for a card that should only render for certain users, certain times, or certain entity states. Open the card settings (gear icon) → **Global Logic** tab.

---

## Examples

### Hide low-battery info during charging

Module: **Info** (showing battery percentage)

```
Mode: Every (AND)
Conditions:
  1. entity: sensor.phone_battery_level    operator: <    value: 20
  2. entity: binary_sensor.phone_charging  operator: =    value: off
```

### Show "Good Morning" greeting only between 5 AM and noon

Module: **Text** with content `Good Morning, {{ user }}`

```
Mode: Every
Conditions:
  1. type: time, time_from: 05:00, time_to: 12:00
```

### Different layouts per device

Use **Hidden on devices**:
- Detailed gauge → hidden on mobile
- Compact info module → hidden on tablet/desktop

### Template: hide module if any door is open

```jinja
{{ expand('group.exterior_doors')
   | selectattr('state', 'eq', 'on')
   | list | count == 0 }}
```

### Show alert tile only when a sensor crosses a threshold

```
entity:   sensor.co2_living_room
operator: >
value:    1200
```

---

## Performance notes

- **Template subscriptions** are shared across the whole dashboard. If the same template appears on many modules, it only counts as one HA subscription.
- **Entity-only conditions** (state/attribute/time) are evaluated locally — no WebSocket round-trip per change.
- A logic service (`logic-service.ts`) tracks live consumer counts and tears down subscriptions only when the last card unmounts.

If you suspect logic is causing CPU usage, see [FAQ and Troubleshooting](#uc-doc-faq-and-troubleshooting) § *Performance*.
