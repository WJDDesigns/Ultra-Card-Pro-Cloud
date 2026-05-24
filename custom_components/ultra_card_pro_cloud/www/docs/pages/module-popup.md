# Popup

> Module type: `popup` · Category: Layout · Free

Modal popup container with a customizable trigger and nested content.

## Features

- Trigger element — button, icon, or template-rendered HTML
- Modal content — any modules nested inside
- Backdrop / blur
- Open programmatically via popup-trigger registry
- Auto-close on backdrop click
- Custom width / height / position
- Animation (fade / slide / scale)

## Configuration

### Trigger

- **Trigger style** — button / icon / hidden (open programmatically)
- **Label** / **Icon** / **Color**
- **Tap behavior** — open popup (default) or call a custom action

### Popup

- **Width** / **Height** (px or %)
- **Position** — center / top / bottom / left / right
- **Backdrop** — color, blur amount, click-to-close toggle
- **Animation** — fade / slide / scale
- **Close button** — show / hide / position

### Contents

Standard nested module list.

### Logic / Design

Standard 4-tab editor.

## Programmatic open / close

Other modules can open / close popups by emitting events on the popup-trigger registry (`popup-trigger-registry.ts`). Useful from custom **Navigation** entries:

```yaml
type: navigation
items:
  - label: Settings
    action:
      action: perform-action
      perform_action: ultra_card.open_popup
      data:
        popup_id: settings_popup
```

## Examples

- **Settings drawer** — popup with config controls, opened from a gear icon.
- **Camera lightbox** — small camera thumbnail in dashboard, popup shows full-size live view.
- **Confirm panic** — alarm panic button opens a "are you sure?" popup with countdown.
