# Markdown

> Module type: `markdown` · Category: Content · Free

Rich text content with full markdown formatting.

## Features

- Headers, lists, links, emphasis, code blocks
- Optional HTML tags inside markdown
- Markdown table syntax
- Code highlighting
- Full Jinja2 template support — markdown body is evaluated as a template before rendering

## Configuration

### General

- **Content** — markdown text (with templates).
- **Enable HTML** — allow raw HTML inside markdown (off by default for safety).
- **Enable tables** — markdown table syntax.
- **Code highlighting** — syntax highlighting in `\`\`\`code\`\`\`` fences.

### Design / Logic / Actions

Standard 4-tab editor. See [Design System](#uc-doc-design-system), [Logic and Conditions](#uc-doc-logic-and-conditions), [Actions](#uc-doc-actions).

## Examples

### Dashboard header

```markdown
# Welcome Home

Today is **{{ now().strftime('%A, %B %d') }}**

Current temperature: {{ states('sensor.outdoor_temperature') }}°F
```

### Status list

```markdown
## System Status

- ✅ Internet: Connected
- ✅ Security: Armed
- ⚠️ Backup: {{ states('sensor.backup_status') }}
```

### Information panel with table

```markdown
### Quick info

| Sensor | Value |
| --- | --- |
| Temperature | {{ states('sensor.temperature') }}°F |
| Humidity | {{ states('sensor.humidity') }}% |
| Pressure | {{ states('sensor.pressure') }} hPa |
```

## Tips

- For *just* a value with a label, use **[Module Info](#uc-doc-module-info)** — less typing.
- HTML is sanitized via **DOMPurify** for safety. If you need very specific HTML, embed via the **[Module Native Card](#uc-doc-module-native-card)** with a `markdown` card type — but Ultra Card's own module is usually enough.
- All standard HA template helpers work — `expand()`, `area_entities()`, `relative_time()`, etc.
