# Quick Start

This page walks you through building your first Ultra Card in five minutes.

> **Prerequisite:** Ultra Card is installed. See [Installation](#uc-doc-installation) if not.

---

## 1. Add an Ultra Card to a dashboard

1. Open a Lovelace dashboard, click **Edit dashboard** (top right).
2. Click **Add card** → search **Ultra Card** → select **Custom: Ultra Card**.
3. The visual editor opens with an empty layout.

---

## 2. Add your first row + column + module

Ultra Card uses a three-level layout:

```
Row → Column → Module
```

1. In the **Layout Builder**, click **Add Row**.
2. Inside the row, click **Add Column** (you can have multiple columns per row).
3. Inside the column, click **Add Module** and pick a module type — try **Info** for a quick test.

A live preview renders to the right of the editor on every change.

---

## 3. Configure the module — the 4 tabs

Click any module in the layout builder to open its editor. Every module has the **same four tabs**:

| Tab | What it controls |
|---|---|
| **General** | Module-specific options (entity, text, icon, layout) |
| **Actions** | Tap, hold, double-tap actions (toggle, more-info, navigate, call service, URL, assist) |
| **Logic** | When to **show or hide** the module (entity state, attribute, time, or Jinja template) |
| **Design** | Colors, typography, spacing, borders, shadow, gradients, animations, and **per-breakpoint** overrides |

> **Same four tabs everywhere.** Once you learn the editor on one module, you've learned it on all of them.

---

## 4. Try a real example

Build an **Area / Room Summary** tile in 30 seconds:

1. **Add Module → Area / Room Summary**.
2. **General tab → Area:** pick any HA area (e.g. *Living Room*).
3. The tile auto-discovers lights, climate, motion, doors, media, locks, fans for that area.
4. **Design tab:** change accent color, border radius, or pick a style preset (Iconic / Graph glow / Compact / Photo overlay).
5. Click **Save**.

You now have a smart room tile that updates live as your home state changes.

---

## 5. Multiple cards at once

A single Ultra Card can hold dozens of modules across many rows/columns. To split a dashboard across multiple cards:

- **Same view:** add multiple Ultra Cards as separate cards in your view.
- **Different views:** use the **Navigation** module ([Module Navigation](#uc-doc-module-navigation)) to build a global navbar, or stick with HA's view tabs.

---

## 6. Save & share

- **Edit YAML** mode: every Ultra Card is just YAML/JSON — copy and paste it into another dashboard if needed.
- **Presets**: any module or row can be saved as a **preset** for reuse, or shared via the **Marketplace**. See [Presets and Marketplace](#uc-doc-presets-and-marketplace).
- **Cloud sync** (Pro): your full configuration syncs automatically across HA instances. See [Pro and Cloud](#uc-doc-pro-and-cloud).

---

## Where to next?

- Want every module explained → [Modules Overview](#uc-doc-modules-overview)
- Want to wire up logic → [Logic and Conditions](#uc-doc-logic-and-conditions)
- Want to use Jinja2 → [Templates and Jinja](#uc-doc-templates-and-jinja)
- Want to go visually wild → [Design System](#uc-doc-design-system)
