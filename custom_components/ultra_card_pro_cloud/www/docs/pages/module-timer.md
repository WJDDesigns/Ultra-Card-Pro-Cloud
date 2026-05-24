# Timer

> Module type: `timer` · Category: Interactive · Free

Countdown timer with optional action when time runs out. Bind to a HA `timer.*` helper, or run a free-standing timer.

## Features

- Countdown display (HH:MM:SS or MM:SS)
- Start / pause / cancel buttons
- Optional progress ring around the timer
- Action when timer expires (call any service)
- Bind to a HA `timer.*` helper or run independently
- Sound / notification on expiry (where supported)

## Configuration

### Source

- **HA timer helper** — bind to a `timer.*` entity
- **Standalone** — pick a duration, the module runs its own countdown

### Display

- Layout — circular ring / linear bar / digital only
- Show start/pause/cancel buttons
- Time format — HH:MM:SS or MM:SS

### Action on expiry

Any HA service call. Examples:
- `script.turn_on` (run a script)
- `notify.mobile_app_phone` (send a notification)
- `tts.cloud_say` (speak it on a speaker)
- `light.turn_off` (turn off a light)

### Actions / Logic / Design

Standard 4-tab editor.

## Examples

- **Cooking timer** — bind `timer.oven`, ring with red color, on-expiry plays a TTS announcement.
- **Pomodoro** — standalone 25min, on-expiry turns kitchen light pink.
- **Bedtime routine** — bind `timer.kids_bedtime`, on-expiry calls `script.bedtime_routine`.
