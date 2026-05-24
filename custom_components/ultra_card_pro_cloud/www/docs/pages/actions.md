# Actions

The **Actions** tab on every module / row / card lets you wire up interactions — what happens on tap, hold, or double-tap.

---

## Three triggers

Each block can have three independent action configurations:

| Trigger | When |
|---|---|
| **Tap action** | Single tap or click |
| **Hold action** | Press-and-hold (~500 ms by default) |
| **Double-tap action** | Two taps within ~250 ms |

If a trigger has no action configured, the corresponding gesture does nothing.

> Some modules (e.g. **Slider Control**, **Light**, **Media Player**) consume their own taps for in-place controls; the container action only fires for taps outside the active control.

---

## Action types

```ts
type ActionType =
  | 'default'         // module-specific default
  | 'more-info'       // open HA more-info dialog
  | 'toggle'          // toggle entity state
  | 'navigate'        // navigate to dashboard path
  | 'url'             // open URL
  | 'perform-action'  // call any HA service
  | 'assist'          // open HA Assist (voice)
  | 'nothing';        // explicitly do nothing
```

### `default` — module decides

- **Info / Icon / Bar / Gauge** → opens **more-info** for the module's entity.
- **Button** → calls **toggle** on the entity if set, otherwise nothing.
- **Camera** → opens **more-info** on the camera.
- **Area Summary** → opens **more-info** on the most relevant entity in the area (climate → temp sensor → first light → first quick entity).
- **Native / 3rd-party card** → defers to the embedded card's own behavior.

### `toggle`

Calls `homeassistant.toggle` on the configured entity (or the module's entity if blank).

### `more-info`

Opens HA's standard more-info dialog.

### `navigate`

Navigates to a dashboard path:

```
navigation_path: /lovelace/0    # view-index style
navigation_path: /lovelace/security
```

Supports relative paths (`./`) and absolute paths.

### `url`

Opens a URL. Honors target rules:

- External URL (different origin) → new tab.
- Same origin → same tab (configurable per action).

### `perform-action`

Calls any Home Assistant service:

```
perform_action: light.turn_on
target:
  entity_id: light.living_room
data:
  brightness_pct: 50
  rgb_color: [255, 100, 0]
```

The Action editor includes a service picker with parameter auto-completion.

### `assist`

Opens HA Assist with optional configuration:

```
pipeline_id: my_assist_pipeline   # optional, uses default if blank
start_listening: true             # auto-start microphone
```

### `nothing`

Explicitly suppress any default action (useful for read-only displays).

---

## Confirmation dialogs

Any action can require a **confirmation prompt** before execution. Configure on the action:

- **Title** (default: "Are you sure?")
- **Message** (custom or auto-generated)
- **Confirm text** (default: "Confirm")
- **Cancel text** (default: "Cancel")

Useful for destructive actions like calling `script.reboot_router` or `vacuum.return_to_base`.

---

## Targets and data

For `perform-action`, you have full control:

| Field | Format |
|---|---|
| `target.entity_id` | string or array — entities to target |
| `target.device_id` | string or array — devices (rare) |
| `target.area_id` | string or array — areas (e.g. `kitchen`) |
| `data` | free-form key/value sent to the service |
| `service_data` | legacy alias for `data` |

This means you can call **any HA service**, even ones for custom integrations.

---

## Per-button actions vs container actions

Most interactive modules expose their **own** action editors for sub-elements:

- **Button** → tap/hold/double on the button itself.
- **Icon** → per-state actions (different action when entity is on vs off).
- **Spinbox** → increment/decrement do their own service calls.
- **Dropdown** → each option configures its own action.
- **Toggle** → tap action depends on which state is active.
- **Slider Control** → drags adjust the entity directly; container actions trigger when tapping the empty area.

The **container action** (Actions tab on the module itself) fires on the **outer wrapper** — handy for "long-press anywhere on this tile to open more-info".

---

## Global card action

The whole card has its own Actions tab — handy if a "click anywhere" should open a dashboard.

---

## Examples

### Tap = toggle, hold = more-info

```
Tap action:    toggle (entity: light.kitchen)
Hold action:   more-info (entity: light.kitchen)
```

### Trigger an automation with a confirmation

```
Tap action:    perform-action: automation.trigger
                target.entity_id: automation.lock_everything
                confirmation: "Lock all doors and windows?"
```

### Open Sonos UI on double-tap

```
Double-tap:    url (https://my-sonos.local/now-playing)
```

### Send Assist command with custom pipeline

```
Tap action:    assist
                pipeline_id: kitchen_assist
                start_listening: true
```

---

## Programmatic action service

All actions ultimately go through `UcActionService.handleAction()` (`src/services/uc-action-service.ts`), which:

1. Resolves `default` to the module's actual default for its type.
2. Runs the confirmation dialog when configured.
3. Delegates to `UltraLinkComponent.handleAction()` (which knows how to dispatch each action type to HA).

Module developers can call `ucActionService.handleAction(action, hass, element, config, moduleEntity, module)` from their own click handlers — see [Development](#uc-doc-development) § *Adding a module*.
