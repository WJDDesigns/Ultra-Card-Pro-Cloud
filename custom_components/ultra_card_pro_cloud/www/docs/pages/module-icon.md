# Icon

> Module type: `icon` · Category: Interactive · Free

Interactive status icons with state-based styling, animations, and tap actions.

## Features

- **State-based display** — different icon, color, size, and animation per active/inactive state
- **Animations** — pulse, spin, bounce, shake, fade, heartbeat, wobble, etc.
- **Background shapes** — circle, square, or none
- **Tap actions** — toggle, more-info, navigate, perform-action
- **Template mode** — drive icon, color, name, and visibility from Jinja2

## Configuration

### General

- **Entity** — the entity this icon represents
- **Active states** / **Inactive states** — comma-separated state values to consider active / inactive
- **Active icon** / **Inactive icon** — different MDI icons per state
- **Active color** / **Inactive color**
- **Active size** / **Inactive size** — px
- **Custom name** — override the entity friendly name
- **Background shape** — `none` / `circle` / `square`
- **Background color** — per-state

### Animations

- **Active animation** — runs while in an active state (pulse, spin, …).
- **Inactive animation** — runs while in an inactive state.

### Template mode (advanced)

Switch to template mode to drive the icon from a single Jinja expression:

```jinja
{% if states('sensor.weather') == 'rainy' %}mdi:weather-rainy
{% elif states('sensor.weather') == 'sunny' %}mdi:weather-sunny
{% else %}mdi:weather-cloudy{% endif %}
```

The same module supports template-driven `icon_color`, `name`, `state_text`, and visibility.

### Actions

Tap / hold / double-tap. Default action is **toggle** (or **more-info** for non-toggleable entities).

### Logic / Design

Standard 4-tab pattern. See [Logic and Conditions](#uc-doc-logic-and-conditions) and [Design System](#uc-doc-design-system).

## Examples

### Light toggle with pulse-on glow

- Entity: `light.living_room`
- Active icon: `mdi:lightbulb`
- Inactive icon: `mdi:lightbulb-outline`
- Active color: `#fdd835`
- Active animation: `pulse`
- Tap action: `toggle`

### Battery health

- Entity: `sensor.phone_battery_level`
- Template mode → icon: `mdi:battery-{{ (states('sensor.phone_battery_level') | int / 10) | round(0) | int * 10 }}`
- Template color: `{% if states('sensor.phone_battery_level') | int < 20 %}#e53935{% else %}#43a047{% endif %}`

### Security armed indicator

- Entity: `alarm_control_panel.home`
- Active states: `armed_home, armed_away, armed_night`
- Active animation: `heartbeat`
- Tap action: `more-info`

## Related

- For just-text labels, see [Module Text](#uc-doc-module-text).
- For an entity tile with name + value, see [Module Info](#uc-doc-module-info).
- For action-styled buttons, see [Module Button](#uc-doc-module-button).
