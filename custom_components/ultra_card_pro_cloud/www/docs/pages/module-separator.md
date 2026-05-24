# Separator

> Module type: `separator` · Category: Content · Free

Visual dividers and spacers for organizing dashboard layouts.

## Styles

| Style | Look |
|---|---|
| **Solid line** | Simple straight line. |
| **Double line** | Two parallel lines. |
| **Dotted line** | Dotted pattern. |
| **Double dotted** | Two dotted lines. |
| **Shadow** | Shadow effect, no visible line. |
| **Blank space** | Invisible spacer (just creates a gap). |

## Configuration

### Appearance

- **Thickness** (px)
- **Width** (% of container)
- **Color**

### Text (optional)

- **Show title** — text in the middle of the line
- **Text content**
- **Font size** / **color**
- **Bold / italic / underline / uppercase / strikethrough**

### Spacer mode

- **Height** (px) — for `Blank space` style

### Logic / Design

Standard 4-tab editor.

## Examples

- **Section divider** — solid line between dashboard sections.
- **Labeled section** — separator with text "Lights" centered.
- **Visual spacer** — Blank-space style with 24px height for breathing room.

## Tips

- For text-heavy section headers, prefer **[Module Text](#uc-doc-module-text)** with a Design border-bottom — gives more typography control.
