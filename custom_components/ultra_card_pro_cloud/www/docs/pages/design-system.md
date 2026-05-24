# Design System

The **Design** tab is the visual styling surface. It exists at three levels — global card, per-row/column, and per-module — and they all share the same controls.

---

## Anatomy of the Design tab

### Background
- **Background color** (Ultra Card color picker — supports custom variables)
- **Background image** — *none*, *upload*, *URL*, or *entity attribute*
- **Background size** — `cover`, `contain`, `auto`, or custom (`100px 200px`)
- **Background position** — 9-point grid + custom string
- **Background repeat** — `repeat`, `no-repeat`, `repeat-x`, `repeat-y`
- **Background overlay** — color + opacity, layered on top of the image
- **Gradient editor** — multi-stop, with angle / direction picker

### Spacing
- **Margin** — top / bottom / left / right (px)
- **Padding** — top / bottom / left / right (px)

### Border
- **Border style** — `none`, `solid`, `dashed`, `dotted`
- **Border width** — px
- **Border color** — Ultra Card color picker
- **Border radius** — uniform or per-corner

### Shadow
- **Color**, **blur**, **spread**, **offset X**, **offset Y**
- **Inset** option for inner shadows
- Multi-shadow support (stack effects)

### Typography
- **Font family** (with HA font fallback)
- **Font size** (px or rem)
- **Font weight** (100 – 900)
- **Color**
- **Line height**
- **Text align** (left / center / right / justify)
- **Text transform** (none / uppercase / lowercase / capitalize)
- **Letter spacing**
- **Decoration** (underline / strikethrough)

### Hover effects
- **None** — default
- **Color change** — fade to a hover color
- **Scale** — grow or shrink
- **Glow** — outer-glow shadow
- **Lift** — translate-Y + shadow
- **Fade** — opacity change

Each effect has timing controls (duration, easing).

### Animations
Where supported (Icon, Bar, Button, Image, etc.):

- **Pulse**, **bounce**, **shake**, **fade**, **spin**, **wobble**, **heartbeat**, **slide-in**, etc.
- **Trigger** — always, on entity state, on attribute, or override conditions.

---

## Three levels of Design

The **same** Design tab appears at three scopes:

| Level | How to open |
|---|---|
| **Global card** | Card gear icon → **Global Design** tab |
| **Row / Column** | Click row or column → **Design** tab |
| **Module** | Click module → **Design** tab |

Settings cascade and override:

```
Global → Row → Column → Module
```

A module-level setting wins over its column, which wins over its row, which wins over the card.

---

## Color picker

Ultra Card's color picker (`uc-color-picker.ts`) supports:

- **Hex** (`#1a73e8`)
- **RGB / RGBA**
- **HSL**
- **CSS named colors**
- **Theme tokens** — `var(--primary-color)`, `var(--accent-color)`, etc.
- **Custom variables** — `$primary`, `$accent_blue`, etc. (see [Custom Variables](#uc-doc-custom-variables))
- **Favorites** — save colors for reuse, synced via Pro Cloud across instances

A **gradient editor** (`uc-gradient-editor.ts`) extends the color picker with stops, angles, and presets.

---

## Responsive overrides

Every Design field is independently overridable per breakpoint. The Design tab includes a breakpoint selector:

| Breakpoint | Container width |
|---|---|
| **Mobile** | ≤ 768px |
| **Tablet** | 769 – 1199px |
| **Desktop** | ≥ 1200px |

You can:

- Set a **base** value (applies to all breakpoints).
- Override individual fields per breakpoint (e.g. larger font on desktop, smaller padding on mobile).
- Combine with **Logic → Hidden on devices** to fully hide a module on a breakpoint.

---

## Typography defaults

Set typography defaults at the **Global** level so every text-bearing module inherits them. Useful for matching your HA theme without configuring 50 modules individually.

---

## Global CSS

For one-off styles you can't express through the UI, drop raw CSS in **Global Design → Custom CSS**. The CSS is scoped to the current Ultra Card instance:

```css
.module--info .info-name {
  letter-spacing: 0.05em;
}
```

> Use sparingly — Custom CSS is not version-protected. A future internal class rename can break it.

---

## Best practices

- **Style at the highest level you can.** A typography rule on the card cascades to every module — much easier to maintain than per-module overrides.
- **Use [Custom Variables](#uc-doc-custom-variables) for repeated values** (colors, font families, spacing tokens). Change one variable, every module updates.
- **Use `var(--accent-color)` and HA theme tokens** so your card automatically respects light/dark themes.
- **Test all 3 breakpoints** before saving. The breakpoint preview switcher in the editor makes this fast.
- **Avoid `!important` in Global CSS.** Ultra Card's per-module styles can lose to it and you'll wonder why.
