# Custom Variables

Ultra Card has its own variable system, separate from but compatible with HA theme variables. Define a variable once at the card level and reference it anywhere in the card.

---

## Why custom variables?

Three big reasons:

1. **Single source of truth.** Set `$primary` once, every module's primary-colored text and buttons use it. Change the value, everything updates.
2. **Reusable presets / templates.** A preset that says "background = `$primary`" is portable across cards and themes.
3. **Reusable across entity references.** Use `$living_room_light` to reference the same entity in 20 modules — change rooms by changing one variable.

---

## Where you define them

**Card gear icon → Custom Variables tab.** The manager (`uc-custom-variables-manager.ts`) lets you add/edit/delete variables.

A variable has:

| Field | Notes |
|---|---|
| **Name** | Identifier — must start with a letter, alphanumeric + underscores. Reference as `$name`. |
| **Type** | `color` / `text` / `entity` / `number` / `template` |
| **Value** | The actual value |
| **Description** | (Optional) Tooltip to help future-you |

---

## Where you use them

Almost every input in the editor accepts `$variable` syntax:

| Field type | Accepts |
|---|---|
| **Color picker** | `$primary`, `$accent_blue` etc. — the picker shows the resolved color. |
| **Text / template** | `$site_name`, `$tagline`, etc. Replaced before template evaluation. |
| **Entity picker** | `$main_light` resolves to a real entity (must be type `entity`). |
| **Number** | `$default_padding` resolves to a numeric value. |

Custom-variable–aware entity pickers are auto-detected at runtime — see `uc-form-utils.ts` and `uc-custom-variables-service.ts` for details.

---

## Example: theme palette

Define at the card level:

| Name | Type | Value |
|---|---|---|
| `primary` | color | `#1a73e8` |
| `accent` | color | `#ff5722` |
| `surface` | color | `var(--card-background-color)` |
| `text_main` | color | `var(--primary-text-color)` |
| `text_dim` | color | `rgba(255,255,255,0.6)` |

Then every module can reference `$primary`, `$accent`, etc. To rebrand the whole card, change those five variables.

---

## Example: room reuse

Define at the card level:

| Name | Type | Value |
|---|---|---|
| `room_light` | entity | `light.living_room` |
| `room_climate` | entity | `climate.living_room` |
| `room_temp_sensor` | entity | `sensor.living_room_temperature` |

Build the card with `$room_light`, `$room_climate`, `$room_temp_sensor` everywhere.

When you copy this card to your bedroom dashboard, change those three variables — done.

---

## Example: numeric token

| Name | Type | Value |
|---|---|---|
| `radius_sm` | number | 8 |
| `radius_md` | number | 16 |
| `radius_lg` | number | 24 |

Use `$radius_md` in any **Border radius** input.

---

## Variables in templates

Inside a Jinja2 field, `$variable` is replaced **before** the template is evaluated by HA. So:

```jinja
{# $primary resolves to '#1a73e8' literally before HA sees the template #}
color: $primary
```

This makes them feel like compile-time constants from the template's perspective.

---

## Cloud-synced favorites

Pro users can also sync favorite colors via the cloud (`uc-favorite-colors-service.ts`). These appear in the color picker's favorites strip and are not the same as custom variables — they're per-user color presets, not per-card.

---

## Best practices

- **Name variables for purpose, not value.** `$primary` is better than `$blue_color` — your brand color may not always be blue.
- **Don't go variable-crazy.** A handful of tokens (3–8) is more maintainable than 30.
- **Document with descriptions.** Future-you will thank you.
- **Group by intent**: colors, spacing, entity references — keep them separated mentally.
