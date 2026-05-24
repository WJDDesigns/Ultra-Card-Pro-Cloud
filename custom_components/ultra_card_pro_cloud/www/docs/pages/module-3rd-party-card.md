# 3rd Party Card

> Module type: `external_card` · Category: Interactive · Free

Embed any 3rd-party Home Assistant card — Bubble Card, Mushroom Cards, ApexCharts, Mini Graph Card, Vacuum Card, anything from HACS — inside an Ultra Card layout.

> **Free + unlimited.** Both free and Pro tiers can embed unlimited 3rd-party cards.

## Why

- Use community cards you love + Ultra Card's design system
- Wrap them in conditions, breakpoint visibility, custom backgrounds
- Compose card-of-cards layouts you can't get any other way

## Configuration

### Card type

A free-form text input (or picker, where the registry detects installed cards). Examples:

- `custom:bubble-card`
- `custom:mushroom-template-card`
- `custom:apexcharts-card`
- `custom:mini-graph-card`
- `custom:vacuum-card`

### Card config

The YAML config the 3rd-party card expects. Ultra Card passes it through as-is.

### Logic / Design

Standard 4-tab editor — applies to the wrapper.

## Detection

Ultra Card scans your Lovelace resources to detect installed cards (`uc-external-cards-service.ts`). Detected cards appear in a dropdown. If your card isn't detected, you can still type the type manually.

## Notes

- The 3rd-party card runs in your dashboard's normal scope and gets HA's theme.
- Some cards depend on additional Lovelace resources — install them via HACS as you normally would.
- If the embedded card has issues, check its own console output — Ultra Card surfaces the error visually but does not modify the card's behavior.
- Card containers (`external-card-container-service.ts`) handle hass-prop wiring and lifecycle.

## Related

- **[Module Native Card](#uc-doc-module-native-card)** — for built-in HA cards.
- The full **Card Selector** tab in the editor browses cards by category and shows previews.
