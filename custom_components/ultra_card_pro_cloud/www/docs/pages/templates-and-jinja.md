# Templates and Jinja

Ultra Card has full support for **Home Assistant Jinja2 templates**. Templates are evaluated by HA itself via the `render_template` WebSocket subscription, so they always reflect live state and have access to the full HA template API.

---

## Where templates work

Almost every text-style field accepts templates:

- **Text** module → content
- **Markdown** module → markdown body
- **Info** module → value template, custom name, custom state
- **Bar** module → value template, left/right side labels, percentage
- **Icon** module → state-based icon, color, name
- **Camera** module → camera entity selector (dynamic camera switching)
- **Gauge** module → value, name, min/max
- **Button** / **Toggle** → custom labels
- **Logic** tab → template condition (any module)
- **Dynamic List** module → entire module-generation template (loops over entities/areas/lists)
- **QR Code** module → encoded string
- **Navigation** module → JS template hooks (gated, see below)
- **Animated Weather / Forecast / Clock** → entity selectors
- **Sports Score**, **Activity Feed**, **Solar Analytics**, etc. — wherever a template input is offered

Anything that **isn't** a template field is a plain selector (entity, area, color, etc.).

---

## Template editor

Click the **{{ }} template** toggle next to most fields to switch from plain text to template mode. The editor:

- Uses **CodeMirror** with Jinja2 syntax highlighting
- Has a **cheatsheet** dropdown (`uc-template-cheatsheet.ts`) with common HA functions
- Shows live evaluation results below the editor while you type
- Supports auto-completion of entity IDs

---

## Common patterns

### State value with formatting

```jinja
{{ states('sensor.temperature') | round(1) }}°C
```

### Conditional content

```jinja
{% if is_state('binary_sensor.front_door', 'on') %}
  🔓 Front door is open
{% else %}
  🔒 Front door is closed
{% endif %}
```

### Time-of-day greeting

```jinja
{% set h = now().hour %}
{% if h < 12 %}Good morning{% elif h < 18 %}Good afternoon{% else %}Good evening{% endif %}
```

### Loop summary

```jinja
{{ expand('group.lights_living_room')
   | selectattr('state', 'eq', 'on')
   | list | count }} of
{{ expand('group.lights_living_room') | list | count }} lights on
```

### Color from state

In a color field with template mode:

```jinja
{% if states('sensor.cpu_temp') | float > 80 %}#e53935{% else %}#43a047{% endif %}
```

### State-driven icon

In an icon field:

```jinja
{% if is_state('sensor.weather', 'rainy') %}mdi:weather-rainy{% else %}mdi:weather-sunny{% endif %}
```

### Dynamic camera switching

```jinja
{% if states('input_boolean.front_camera') == 'on' %}camera.front{% else %}camera.back{% endif %}
```

### Dynamic List — generate one Info module per door

```jinja
{% for sensor in states.binary_sensor
   | selectattr('attributes.device_class', 'eq', 'door') %}
- type: info
  entity: {{ sensor.entity_id }}
{% endfor %}
```

---

## HA template features that work

Everything Home Assistant supports — these are evaluated by HA, not Ultra Card:

- All `states()`, `state_attr()`, `is_state()`, `is_state_attr()`
- `expand()`, `area_entities()`, `device_entities()`
- `now()`, `today_at()`, `relative_time()`
- Filters: `round`, `float`, `int`, `default`, `selectattr`, `regex_search`, etc.
- Custom user-defined `template` macros via HA's `template:` integration

See HA's [Templating documentation](https://www.home-assistant.io/docs/configuration/templating/) for the complete reference.

---

## Custom variables in templates

You can reference Ultra Card [Custom Variables](#uc-doc-custom-variables) using `$var_name` syntax inside any template field. They are pre-processed before the string is sent to HA, so they behave like plain string substitution.

```jinja
{# $primary resolves to the card's primary color value #}
color: $primary
```

Custom variables also work in **entity pickers** for dynamic entity selection — handy when reusing a preset across rooms.

---

## Caching & performance

- Each unique template subscribes **once** with HA. Reuse the same template string and you get only one subscription regardless of how many modules render it.
- Results are cached for **1 second** to avoid re-evaluation on rapid hass updates.
- A signature includes the entities referenced in your `variables` context, so when a referenced entity's state changes, the template re-evaluates immediately.
- See `src/services/template-service.ts` if you want the implementation details.

---

## Navigation JS templates (sandboxed, gated)

The **Navigation** module supports inline JavaScript templates wrapped in `[[...](#uc-doc-[...)]`. These run in a sandbox **only** when the card's `_contentOrigin` is `local` (your own dashboard). Imported configs (`imported`, `preset_community`) cannot run JS, by design.

To globally disable JS templates regardless of origin, set:

```yaml
type: custom:ultra-card
disable_navigation_js_templates: true
```

See [`docs/navigation-js-templates.md`](https://github.com/WJDDesigns/Ultra-Card/blob/main/docs/navigation-js-templates.md) for the trust model.

---

## Troubleshooting templates

| Symptom | Likely cause |
|---|---|
| `unknown` or empty result | Entity may be unavailable. Add `\| default('---')`. |
| Template doesn't update live | Template doesn't reference any HA state — add a state lookup or restart HA. |
| Infinite loop / high CPU | Template references a state that the template itself triggers. Re-architect. |
| Different result in HA Developer Tools vs Ultra Card | Ultra Card passes a `variables` context with module entity. Use HA's *Render template* tool with the same variables. |
