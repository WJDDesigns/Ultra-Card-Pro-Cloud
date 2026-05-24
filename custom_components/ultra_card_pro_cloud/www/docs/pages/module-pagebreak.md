# Page Break

> Module type: `pagebreak` · Category: Layout · Free

A separator that splits content into pages inside a **[Module Slider](#uc-doc-module-slider)**. It has no visible output of its own — it's a marker.

## Configuration

The Page Break has no settings beyond optional Logic / Design (rare). Simply drop it inside a Slider module to begin a new page.

## Usage

```
Slider
├── Module A    ← Page 1
├── Module B    ← Page 1
├── Pagebreak   ← Page divider
├── Module C    ← Page 2
├── Module D    ← Page 2
├── Pagebreak
├── Module E    ← Page 3
```

## Notes

- Pagebreaks are only meaningful inside a `slider` module. Outside, they render as nothing.
- You can wrap a Pagebreak with [Logic and Conditions](#uc-doc-logic-and-conditions) to conditionally remove a page (e.g. "skip the kids page during work hours") — the pages renumber automatically.
