# Alarm Panel

> Module type: `alarm_panel` · Category: Interactive · **Pro**

Arm, disarm, and monitor your security alarm with a PIN-pad and status ring.

## Features

- 10-key PIN pad
- Status ring with color-coded modes (disarmed, armed_home, armed_away, armed_night, armed_vacation, pending, triggered)
- Visible / hidden PIN input
- "Last triggered by" log
- Per-mode color theming
- Sensor list (optional) — what's preventing arming
- Triggered-state alarm animation

## Configuration

### Entity

- `alarm_control_panel.*` entity
- Custom name (optional)

### Display

- Show PIN pad (toggle)
- Show status ring
- Show sensor list (open zones)
- Show recent triggered events

### Modes

Per supported mode:
- Color
- Icon
- Show / hide button

### Actions / Logic / Design

Standard 4-tab editor.

## Examples

- **Hallway tablet kiosk** — full alarm panel with PIN pad, large status ring.
- **Status indicator** — sensor list only (no buttons), shows what's open before bed.

## Tips

- Enable [Actions](#uc-doc-actions) **confirmation dialogs** on disarm so a misclick on the screen doesn't disarm the alarm.
- Combine with **[Module Alert Center](#uc-doc-module-alert-center)** to surface pre-arm warnings.
- For a hub view, place inside a **[Module Tabs](#uc-doc-module-tabs)** with cameras and door sensors.
