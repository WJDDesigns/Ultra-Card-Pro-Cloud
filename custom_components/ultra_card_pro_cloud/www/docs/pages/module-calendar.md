# Calendar

> Module type: `calendar` · Category: Data · **Pro**

Display calendar events with multiple view options.

## Features

- Pull events from any HA `calendar.*` entity (Google, CalDAV, Local, etc.)
- Multiple views: **month**, **week**, **day**, **agenda**
- Custom event colors per calendar
- Show all-day events
- Configurable date format / locale
- Today highlighting
- Click an event for more details

## Configuration

### Calendars

- Add one or more `calendar.*` entities.
- Per-calendar: custom display name and color.

### View

- Default view — month / week / day / agenda
- View switcher visibility (let user toggle in-place)
- First day of week — Sun / Mon
- Date format — locale-aware

### Display

- Show all-day events
- Show event times
- Show calendar source name
- Compact mode

### Actions / Logic / Design

Standard 4-tab editor.

## Tips

- Combine with **[Module Activity Feed](#uc-doc-module-activity-feed)** for "things happening now / next" panels.
- For just an "events today" count, use a template-driven **[Module Info](#uc-doc-module-info)** instead.
