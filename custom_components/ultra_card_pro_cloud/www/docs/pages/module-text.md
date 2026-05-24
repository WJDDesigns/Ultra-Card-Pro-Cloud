# Text

> Module type: `text` · Category: Content · Free

The Text module displays static or template-driven text with full typography control.

## What it does

Renders a string of text. The string can be:

- **Static** — a literal string typed into the editor.
- **Template-driven** — a Jinja2 template that re-renders live as HA state changes. See [Templates and Jinja](#uc-doc-templates-and-jinja).

## Configuration

### General

| Field | Notes |
|---|---|
| **Content** | The text or Jinja2 template to render. |
| **Template mode** | Toggle to enable Jinja2 template editor. |
| **Show icon** | Optional MDI icon before or after the text. |
| **Icon position** | `before` / `after` |
| **Icon gap** | Pixels between icon and text. |

### Design

Standard [Design System](#uc-doc-design-system) controls apply: typography, color, alignment, background, padding, border, shadow, animations, hover effects, per-breakpoint overrides.

### Actions

Tap / hold / double-tap actions. By default, no action.

### Logic

Show / hide based on entity state, attribute, time, or template. See [Logic and Conditions](#uc-doc-logic-and-conditions).

## Examples

**Heading**
```
Welcome home, John
```

**Live temperature**
```jinja
{{ states('sensor.outdoor_temperature') | round(1) }}°C outside
```

**Time-of-day greeting**
```jinja
{% set h = now().hour %}
{% if h < 12 %}Good morning{% elif h < 18 %}Good afternoon{% else %}Good evening{% endif %}
```

**Label with HA token color** — set the **Color** field in Design to `var(--primary-color)` so the label respects HA themes automatically.

## Tips

- For multi-line content with formatting, prefer **[Module Markdown](#uc-doc-module-markdown)**.
- For displaying *just* an entity value, **[Module Info](#uc-doc-module-info)** has a more polished layout.
- Use [Custom Variables](#uc-doc-custom-variables) like `$primary` to maintain consistent colors across all your text modules.
