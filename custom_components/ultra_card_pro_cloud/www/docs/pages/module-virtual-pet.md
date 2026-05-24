# Virtual Pet

> Module type: `virtual_pet` · Category: Interactive · **Pro**

A digital pet whose mood is driven by your smart home data. Tamagotchi vibes, but the food is `sensor.cpu_temperature`.

## Features

- Animated pet sprite with multiple moods (happy, sad, hungry, sleepy, sick, angry)
- Mood is driven by **mood rules** — entity state and threshold pairs you define
- Tap interactions (pet, feed, play)
- Per-mood animations and sounds (where supported)
- Daily care reminders (optional)

## Configuration

### Pet

- **Pet name**
- **Pet type / sprite** — pick a character
- **Personality** — affects animation cadence

### Mood rules

Each rule maps an entity condition to a mood:

```
entity:    sensor.cpu_temp_living_room
when:      > 30
mood:      angry
```

Multiple rules combine — first matching rule wins (configurable priority).

### Actions

Tap the pet → custom action (defaults to `nothing`). Long-press for "feed" / "play" interactions.

### Logic / Design

Standard 4-tab editor.

## Examples

- "Get sad if the dishwasher hasn't been run in 3 days"
- "Get angry if CO₂ is above 1200 ppm"
- "Be happy when all the doors are locked"

## Notes

- This module is intentionally whimsical. Use [Logic and Conditions](#uc-doc-logic-and-conditions) to keep it on a kid-facing dashboard, or hide it during work hours.
- The sprite is cached locally — first load downloads the asset.
