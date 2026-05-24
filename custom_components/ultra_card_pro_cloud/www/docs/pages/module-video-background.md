# Video Background

> Module type: `video_bg` · Category: Media · **Pro**

Dynamic video backgrounds for your dashboard view, from YouTube, Vimeo, or local MP4.

## Features

- Sources: **YouTube**, **Vimeo**, direct **MP4 URL**, **Upload**
- Mute (default), loop, playback rate
- Conditional via [Logic and Conditions](#uc-doc-logic-and-conditions) — different videos based on entity state, time, weather
- Overlay color + opacity for readability of overlaid widgets
- Auto-pause when off-screen / view inactive
- Cover / contain / fill positioning

## Configuration

### Source

- **YouTube URL** — auto-strips controls
- **Vimeo URL**
- **MP4 URL**
- **Upload** — local MP4 (limited size for embed)

### Behavior

- **Loop** (default on)
- **Mute** (default on, browser autoplay requires it)
- **Playback rate** — 0.25× to 4×
- **Pause when hidden**

### Display

- Overlay color + opacity
- Position / size

### Logic / Design

Standard 4-tab editor — particularly useful for time-of-day swaps.

## Examples

- **Cooking dashboard** — fireplace video looping in background.
- **Weather mood** — sunny day video swap with rainy day video via Logic on `weather.home`.
- **Party mode** — ambient music video when `input_boolean.party_mode` is on.

## Notes

- Browser policies require muted autoplay — enabling sound requires user interaction.
- Embed providers (YouTube, Vimeo) may show their own UI briefly during load. The module strips controls where possible.
- See `uc-video-bg-service.ts` for source resolution and lifecycle.
