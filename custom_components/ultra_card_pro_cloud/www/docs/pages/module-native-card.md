# Native HA Card

> Module type: `native_card` · Category: Content · Free

Embed any built-in Home Assistant card inside an Ultra Card layout — Entities card, Glance, Conditional, History Graph, Map, Markdown, etc.

## Why

You get HA's polished native cards plus Ultra Card's:
- Drag-and-drop layout
- Logic conditions wrapping the card
- Per-breakpoint hiding
- Background / border / shadow styling around the card
- Custom variables substitution

## Configuration

### Card type

Pick from the dropdown of built-in HA cards (`entities`, `glance`, `gauge`, `light`, `media-control`, `picture-glance`, `history-graph`, `weather-forecast`, `calendar`, `map`, `markdown`, `thermostat`, etc.).

### Card config

The standard YAML config for that card type. Ultra Card validates it and shows the card's normal editor where possible.

### Logic / Design

Standard 4-tab editor — applies to the **wrapper**, not the embedded card. The native card decides its own internal styling.

## Notes

- HA's own card editor may not work in-place for every card type. If you can't edit visually, switch to YAML mode for that module.
- The embedded card is a real HA element under the hood (`<hui-card>`-like), so it gets HA themes for free.
- Multiple instances of the same card type can be embedded across one Ultra Card.

## Related

- **[Module 3rd Party Card](#uc-doc-module-3rd-party-card)** — embed any 3rd-party Lovelace card (Bubble, Mushroom, ApexCharts, …).
