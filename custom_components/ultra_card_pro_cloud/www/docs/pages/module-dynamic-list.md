# Dynamic List

> Module type: `dynamic-list` · Category: Layout · Free

Generate a list of modules dynamically using a Jinja2 template. The most powerful module in Ultra Card — anything that's a list of similar things, this can render.

## How it works

You write a Jinja2 template that yields a YAML/JSON list of module configs. Ultra Card evaluates the template, then renders each item as a real module.

## Configuration

### Template

A multi-line template that produces a list of module configs:

```jinja
{% for s in states.binary_sensor
   | selectattr('attributes.device_class', 'eq', 'door') %}
- type: info
  entity: {{ s.entity_id }}
{% endfor %}
```

### Layout wrapper

The generated modules are wrapped in either a horizontal or vertical container, with configurable gap and alignment.

### Re-evaluation

The template is subscribed via HA's `render_template` WebSocket — it re-evaluates on any state change to the entities it references.

### Logic / Design

Standard 4-tab editor (applies to the wrapper, not individual generated modules).

## Examples

### One Info per door sensor

```jinja
{% for s in states.binary_sensor
   | selectattr('attributes.device_class', 'eq', 'door') %}
- type: info
  entity: {{ s.entity_id }}
  show_icon: true
{% endfor %}
```

### One Slider Control per dimmable light in the area

```jinja
{% for e in area_entities('living_room') %}
{% if e.startswith('light.') and 'brightness' in (state_attr(e, 'supported_features') | bitwise_and(1)) %}
- type: slider_control
  entity: {{ e }}
  layout_mode: overlay
  slider_style: minimal
{% endif %}
{% endfor %}
```

### One People card per family member

```jinja
{% for p in states.person %}
- type: people
  people:
    - entity: {{ p.entity_id }}
{% endfor %}
```

## Notes

- The generated modules are full Ultra Card modules — they get the same 4-tab features. But you **can't edit them in the visual editor** — they're driven by your template. Edit the template instead.
- You **cannot** use Pro-only modules in a Dynamic List unless you're signed in.
- For complex per-row styling, generate `horizontal` containers with their own Design.
- High-cardinality lists (>50 items) may slow render — paginate via your template.

## Related

- **[Module Grid](#uc-doc-module-grid)** — pre-built grid for entity tiles when you don't need a full template.
- **[Templates and Jinja](#uc-doc-templates-and-jinja)** — Jinja reference.
