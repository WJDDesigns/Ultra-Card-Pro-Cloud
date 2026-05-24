# Image

> Module type: `image` · Category: Media · Free

Display images with responsive sizing, hover effects, filters, and multiple source options.

## Image sources

| Source | Use when |
|---|---|
| **Upload** | You have a local image file. |
| **URL** | Pulling from a CDN, weather radar, etc. |
| **Entity** | Use a person/camera entity's `entity_picture`. |
| **Attribute** | Pull a URL from a specific entity attribute (e.g. cover art). |

## Sizing

- **Width** — percentage of the container.
- **Height** — pixels.
- **Crop & fit** — `cover`, `contain`, `fill`, `scale-down`, `none`.

## Effects

- **Filters** — blur, brightness, contrast, saturation sliders.
- **Hover effects** — scale, rotate, fade, blur, brightness, glow, slide.
- **Border radius** — uniform or per-corner from the Design tab.

## Configuration

### General

- Image source picker (upload / URL / entity / attribute)
- Width / height / aspect ratio
- Crop & fit mode
- Optional alt text

### Design

Plus standard [Design System](#uc-doc-design-system) (background, border, shadow, animations, per-breakpoint).

### Actions

Tap / hold / double-tap. Common patterns:
- **More-info** on the entity image is showing.
- **URL** to open a full-size version.
- **Navigate** for thumbnail-style navigation.

### Logic

Hide / show by [Logic and Conditions](#uc-doc-logic-and-conditions).

## Examples

**Profile picture from person entity**
- Source: `entity` → `person.john`

**Weather radar with hover-zoom**
- Source: `URL` → e.g. National Weather Service radar tile
- Hover effect: `scale 1.1`

**Album art from media player**
- Source: `attribute` → entity `media_player.living_room`, attribute `entity_picture`
- Tap: `more-info`

## Tips

- Cropping/cover positioning is determined by the source image's aspect ratio. Use **scale-down** if you don't want the image upscaled.
- For album art with player controls, use **[Module Media Player](#uc-doc-module-media-player)** instead — it handles refresh and progress for you.
- For full-card backgrounds, prefer **[Module Background](#uc-doc-module-background)** (Free) or **[Module Video Background](#uc-doc-module-video-background)** (Pro).
