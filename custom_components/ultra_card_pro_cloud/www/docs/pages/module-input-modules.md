# Input Modules

> Category: Input · Free

Ultra Card includes nine **input modules** that bind directly to Home Assistant `input_*` and `counter` helpers, plus toggle / switch entities. They're the visual UI for HA's helper system.

| Module | Type | Bound to |
|---|---|---|
| **Text Input** | `text_input` | `input_text.*` |
| **Date/Time Input** | `datetime_input` | `input_datetime.*` |
| **Number Input** | `number_input` | `input_number.*` |
| **Slider Input** | `slider_input` | `input_number.*` (range slider style) |
| **Select Input** | `select_input` | `input_select.*` |
| **Boolean Input** | `boolean_input` | `input_boolean.*` or `switch.*` |
| **Button Input** | `button_input` | `input_button.*` |
| **Counter Input** | `counter_input` | `counter.*` (increment / decrement / reset) |
| **Color Input** | `color_input` | `input_text.*` (storing hex) or `light.*` |

---

## Common configuration

All input modules share a similar pattern:

### General

- **Entity** — the HA helper to bind
- **Custom name** — override the entity friendly name
- **Show name / show icon** — toggles
- **Custom icon** (optional)

### Visual style

- Style preset — flat / glass / outline / minimal / accent
- Background, border, radius via [Design System](#uc-doc-design-system)

### Behavior

- **Confirmation on change** — optional dialog for destructive ops
- **Debounce** — milliseconds before sending the change

### Actions / Logic / Design

Standard 4-tab editor.

---

## Per-module quirks

### Text Input
- Single line by default; **multiline** flag for `textarea`-style.
- **Pattern** for client-side validation.

### Date/Time Input
- Mode: `date` / `time` / `datetime` (matches the helper's `has_date` / `has_time`).
- Locale-aware format.

### Number Input
- Stepper buttons (`+` / `−`) on either side, plus typed input.
- **Hide stepper** — text-only entry.
- Min / max / step pulled from the helper, overridable.

### Slider Input
- Range slider only (drag to set).
- For full slider styling and split layouts, prefer **[Module Slider Control](#uc-doc-module-slider-control)** with `entity_type: input_number`.

### Select Input
- Two display modes: **dropdown** or **chip**.
- Chip mode shows all options at once — best for 2–4 options.

### Boolean Input
- Toggle switch styled to match HA themes.
- Works on both `input_boolean.*` and `switch.*` entities.

### Button Input
- A single press button calling `input_button.press`.
- Custom label / icon / hold action.

### Counter Input
- `+` / `−` / **Reset** buttons.
- Reset confirmation recommended.
- Min / max from the counter helper.

### Color Input
- Color picker storing hex in `input_text.*`, **or** controlling `light.*` directly.
- When bound to a light, calls `light.turn_on` with the picked color.

---

## When to use vs. native HA cards

These input modules give you Ultra Card's full design system, conditional logic, and template support on top of HA helpers — useful when:

- You want a consistent look across your whole dashboard.
- You want to hide / show inputs based on state.
- You want template-driven labels or icons.

For minimal setups, HA's built-in **Entities card** with `input_*` rows is also fine.

---

## Examples

- **Quick note** — Text Input bound to `input_text.note`, multiline, used as a sticky note on a kitchen tablet.
- **Lock auto-close timer** — Number Input bound to `input_number.lock_delay` with min 0, max 60, step 5, used by an automation.
- **Mode picker** — Select Input bound to `input_select.house_mode` with chip display showing Home/Away/Vacation.
- **Wake-up alarm** — Date/Time Input bound to `input_datetime.alarm_time` — automation reads this for the alarm.
- **Visit counter** — Counter Input bound to `counter.fridge_opens`, with daily reset.
