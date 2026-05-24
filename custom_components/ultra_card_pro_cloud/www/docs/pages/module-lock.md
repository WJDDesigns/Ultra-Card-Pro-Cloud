# Lock

> Module type: `lock` · Category: Interactive · Free

Modern lock control with lock / unlock / open buttons (where supported).

## Features

- Lock / unlock buttons
- "Open" button (for `lock.open` capable devices)
- Status indicator with color
- Optional confirmation dialog (recommended)
- Last-changed timestamp

## Configuration

### Entity

- `lock.*` entity
- Custom name (optional)

### Display

- Show lock / unlock buttons
- Show **open** button (if `lock.open` is supported)
- Show status text
- Style — flat / glass / outline

### Actions / Logic / Design

Standard 4-tab editor. **Strongly recommended** to enable confirmation dialogs on the unlock and open actions ([Actions](#uc-doc-actions) § *Confirmation dialogs*).

## Examples

- **Front door** — lock + unlock + open, with confirmation.
- **Status indicator** — show button only when state is `unlocked` (use [Logic and Conditions](#uc-doc-logic-and-conditions)).

## Related

- For a security overview, see **[Module Alarm Panel](#uc-doc-module-alarm-panel)** (Pro).
- For door + lock combo with sensors, see **[Module Status Summary](#uc-doc-module-status-summary)**.
