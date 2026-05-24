# Sports Score

> Module type: `sports_score` · Category: Data · **Pro**

Live sports scores, upcoming games, and team info for your favorite teams.

## Supported leagues

- **NFL** (American football)
- **NBA** (basketball)
- **MLB** (baseball)
- **NHL** (hockey)
- **Soccer / football** (multiple leagues)
- More added as the data provider expands

## Features

- Live in-game scores with quarter/period/inning indicators
- Upcoming games schedule
- Team logos and colors
- Multi-team display
- Auto-refresh during live games
- "Next game" countdown

## Configuration

### Teams

- Pick league
- Pick team(s) — multiple supported

### Display

- Layout — single game card / list of upcoming / scoreboard
- Show team logos
- Show records (W-L)
- Show network broadcasting the game (where available)
- Time format — local time / relative

### Actions / Logic / Design

Standard 4-tab editor. Tap a game → opens league's official URL by default.

## Notes

- Data is sourced through `sports-data-service.ts` from public sports data providers. Live updates have a small built-in delay to respect provider rate limits.
- Use [Logic and Conditions](#uc-doc-logic-and-conditions) to hide the module out-of-season or when there's no upcoming game.
