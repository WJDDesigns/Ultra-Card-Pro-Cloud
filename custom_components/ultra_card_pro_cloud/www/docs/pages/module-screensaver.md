# Screensaver

> Module type: `screensaver` · Category: Media · **Pro**

Kiosk screensaver that activates after idle, with clock, weather, and image slideshow.

## Features

- Activates after a configurable idle timeout
- Cleared by tap / click / mouse-move / key-press
- Built-in elements:
  - Large clock with multiple styles
  - Current weather
  - Image slideshow (upload / URLs / entity image / random Unsplash topic)
- Smooth fade-in / fade-out transitions
- Conditional via [Logic and Conditions](#uc-doc-logic-and-conditions) (only enable in kiosk mode, etc.)

## Configuration

### Activation

- **Idle timeout** (sec) — how long before activating
- **Activate on dashboard route only** — limit to current view
- **Pause when entity is on** — e.g. `media_player.tv` is playing

### Elements

For each:
- Show / hide
- Position
- Style (clock font, weather layout, image transition)

#### Image slideshow

- **Sources** — upload / URLs / entity / Unsplash topic
- **Interval** between transitions
- **Transition** — fade / slide / Ken Burns

### Display

- Background color / blur
- Opacity ramp
- Tap-anywhere-to-dismiss vs. specific dismiss button

### Logic / Design

Standard 4-tab editor.

## Examples

- **Living room TV dashboard** — 60s timeout, clock + slideshow of family photos.
- **Kitchen tablet** — 5min timeout, weather + clock only.
- **Bedside clock** — 30s timeout, large clock only, dim mode at night.

## Tips

- Use a long idle timeout (5+ min) on devices people frequently glance at.
- Hide the dismiss button — the "tap to dismiss" gesture is enough.
- Combine with **[Module Background](#uc-doc-module-background)** for a different look behind the screensaver elements.
