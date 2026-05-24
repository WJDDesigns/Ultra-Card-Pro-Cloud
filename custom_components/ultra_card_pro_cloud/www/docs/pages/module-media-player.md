# Media Player

> Module type: `media_player` · Category: Interactive · Free

Full-featured media player control with album art, progress bar, playback controls, and animated visualizers.

## Layout modes

| Layout | Best for |
|---|---|
| **Compact** | Dashboards — horizontal bar, expandable. |
| **Card** | Music dashboard — full controls visible. |
| **Mini** | Sidebar — one-line player with thumbnail. |

## Features

- Album art with configurable border radius
- Track title + artist + album name (where available)
- Interactive progress bar (seek)
- Play / pause / stop / skip prev / skip next
- Volume slider with mute
- Shuffle / repeat
- Source selection
- Sound mode selector
- Dynamic colors from album art
- Blurred album-art background
- 10 animated visualizers (Rings, Bars, Wave, Dots, Spectrum, Pulse, Orbit, Spiral, Equalizer, Particles)

## Configuration

### Entity

- `media_player.*` entity
- Custom name (optional)

### Display

| Option | Default |
|---|---|
| Show album art | On |
| Show track info | On |
| Show album name | On |
| Show progress bar | On |
| Show duration | On |
| Show controls | On |
| Show volume | On |
| Show stop button | Off |
| Show source selector | Off |
| Show shuffle button | Off |
| Show repeat button | Off |
| Show sound mode | Off |

### Behavior

- **Enable seek** — click progress bar to seek
- **Auto-hide when off** — hide module when player is `off` / `idle`
- **Expandable** — compact layout can expand to reveal full controls

### Visual

- **Blurred background** — use album art as a blurred backdrop
  - Blur amount (5–60px), opacity (10–80%), expand past card edges
- **Dynamic colors** — extract accent colors from album art
- **Animated visuals** — pick from 10 visualizers; auto-uses dynamic colors when enabled

### Color customization

When dynamic colors is off:
- Progress bar color
- Progress background
- Button color
- Active button color (shuffle, repeat)

### Icon customization

Customize all control icons (play, pause, prev, next, volume mute/low/med/high, fallback).

## Spotify-specific features

- Album name display
- Spotify-branded source selector
- Full playback controls including shuffle and repeat
- Device selection across Spotify Connect targets
- Stop button hidden (not supported by Spotify — use pause)
- Volume control (note: mute is unsupported by Spotify)

## Examples

- **Living room speaker** — compact layout, volume + source, expandable.
- **Music dashboard** — card layout, shuffle + repeat, animated visuals.
- **Sidebar mini player** — mini layout, just album art + play/pause.

## Tips

- The container has a default opacity of 0.9 for visual integration; adjust via Design tab.
- Some controls only appear if your media player supports them (`features` attribute).
- For multi-room audio, place multiple Media Player modules in a Tabs layout.
- For a static album cover image only, use **[Module Image](#uc-doc-module-image)** with `attribute: entity_picture`.
