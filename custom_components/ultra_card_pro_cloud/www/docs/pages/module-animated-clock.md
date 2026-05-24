# Animated Clock

> Module type: `animated_clock` · Category: Content · **Pro**

A flip-clock with smooth animations — digits roll over with a satisfying flip motion.

## Features

- 12-hour or 24-hour format
- Optional seconds
- Custom date below the clock
- Multiple flip styles (classic, modern, neon, retro)
- Color theming
- Configurable size (small to billboard)
- Optional AM/PM indicator

## Configuration

### Format

- **24-hour** vs. 12-hour
- **Show seconds**
- **Show date** + format

### Style

- **Flip style** — classic / modern / neon / retro
- **Digit color**
- **Background color**
- **Border radius**
- **Font** — serif / sans / mono / custom
- **Size** — small / medium / large / huge

### Logic / Design

Standard 4-tab editor.

## Examples

- **Dashboard hero clock** — huge size, modern style, hidden on mobile.
- **Sleep clock** — dim color, 24-hour, no seconds, on a black background.
- **Kitchen wall** — large, retro flip style, with date.

## Notes

- Clock is updated by `clock-update-service.ts` — a single 1Hz tick shared across every animated clock on the page.
- For a regular CSS clock, you can also build one with **[Module Text](#uc-doc-module-text)** + Jinja `now().strftime()` — but you lose the flip animation.
