# Architecture

A high-level tour of how Ultra Card is built. Useful if you're contributing, debugging, or just curious.

---

## Tech stack

| Area | Tech |
|---|---|
| **UI framework** | [Lit 3](https://lit.dev/) (web components) |
| **Language** | TypeScript |
| **Bundler** | webpack 5 |
| **Charts** | Custom SVG / canvas + Three.js (`three@0.181.1`) for WebGL |
| **Drag & drop** | [Pragmatic drag-and-drop](https://atlassian.design/components/pragmatic-drag-and-drop/) |
| **Code editor** | CodeMirror 6 (Jinja2 syntax) |
| **Markdown** | `marked@16` + DOMPurify |
| **WYSIWYG** | TipTap |
| **Maps** | Leaflet 1.9 |
| **Carousels** | Swiper 12 |
| **HA integration** | `home-assistant-js-websocket`, `custom-card-helpers` |
| **State** | Lit's reactive properties + service singletons |
| **Tests** | Vitest |

See `package.json` for the exact dependency versions.

---

## High-level structure

```
src/
├── cards/             Top-level <ultra-card> Lit element
├── modules/           74+ module implementations + registry
├── editor/            Visual editor (4 tabs + selectors)
├── tabs/              Reusable Actions / Logic / Design tab implementations
├── components/        Reusable UI pieces (color picker, dialogs, …)
├── services/          Cross-cutting services (templates, logic, cloud)
├── translations/      15 locale JSON files
├── utils/             Helpers (template processor, layout utils)
├── pro/               Pro/Cloud-gated features
├── panels/            Ultra Card Hub sidebar panel (separate bundle)
├── workers/           Web Worker(s) for heavy computation
├── types.ts           Single source of truth for config types
└── version.ts         Version constant (single source of truth)
```

---

## Module system

### Manifest

[`src/modules/module-manifest-data.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/modules/module-manifest-data.ts) is the static metadata table — the single source of truth for module type, title, icon, category, and tags. **No implementation is loaded** to read this.

The selector and editor use the manifest to render the module library without bundling every module's implementation upfront.

### Registry

[`src/modules/module-registry.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/modules/module-registry.ts) and `module-loaders.ts` provide:

- A `Map<ModuleType, BaseUltraModule>` populated lazily.
- A loader that dynamically imports a module's implementation on first use.

### Base class

[`src/modules/base-module.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/modules/base-module.ts) defines `BaseUltraModule` — the contract every module implements:

```ts
abstract class BaseUltraModule {
  abstract metadata: ModuleMetadata;
  abstract createDefault(): CardModule;
  abstract renderGeneralTab(...): TemplateResult;
  abstract renderModule(...): TemplateResult;
  // optional: renderActionsTab, renderLogicTab, renderDesignTab, getStyles
}
```

A canonical pattern for `renderGeneralTab` is documented in [`/.cursor/rules/module-general-tab.mdc`](https://github.com/WJDDesigns/Ultra-Card/blob/main/.cursor/rules/module-general-tab.mdc).

### Lazy loading

Webpack code-splits each module — they ship as separate chunks (`uc-*.js`) loaded on demand. This is why **all release assets must be installed**, not just `ultra-card.js`. See [Installation](#uc-doc-installation).

A preload scheduler (`uc-module-preload-scheduler.ts`) opportunistically warms chunks based on the layout, so the first interaction with any module type is instant.

---

## Service layer

Core services live in `src/services/`. They're singletons attached as cross-cutting concerns:

| Service | Purpose |
|---|---|
| `LogicService` | Evaluates display conditions, owns template subscriptions |
| `TemplateService` | Wraps HA `render_template` WebSocket subs with caching, dedupe, signature-based reuse |
| `UcActionService` | Centralized action dispatcher (toggle / nav / service call / assist) with confirmation dialogs |
| `ucCloudAuthService` / `ucCloudSyncService` / `ucSnapshotService` | Pro Cloud features |
| `ucNavigationService` | Tracks current dashboard path for active-route highlighting |
| `responsiveDesignService` | Resolves the active breakpoint (mobile/tablet/desktop) per card |
| `ucModulePreviewService` | Editor-only preview throttling for heavy modules |
| `ucCustomVariablesService` | `$variable` resolution |
| `ucFavoriteColorsService` | Saved colors, cloud-synced for Pro |
| `clockUpdateService` | Single 1Hz tick shared across all clock-bearing modules |
| `ucPresetsService` / `wordpressPresetsApi` | Local + Marketplace preset I/O |
| `ucExportImportService` | Card-level export/import with privacy stripping |
| `ucPrivacyService` | Strips entity IDs / IPs / tokens before share |
| `externalCardContainerService` | Manages 3rd-party card containers |

---

## Editor

The visual editor lives in `src/editor/`:

- `ultra-card-editor.ts` — the main `<ultra-card-editor>` element
- `uc-modules-selector-tab.ts` — module library
- `uc-card-selector-tab.ts` — native + 3rd-party card library
- `uc-presets-selector-tab.ts` — local + Marketplace presets
- `uc-favorites-selector-tab.ts` — favorited modules / colors
- `uc-module-selector-shell.ts` — the container that hosts the live preview alongside the selector

Each module's per-tab content is rendered by the module class itself (`renderGeneralTab`, etc.), with shared **Actions**, **Logic**, and **Design** tabs implemented in `src/tabs/`.

---

## Config schema

The card config is a single tree:

```
UltraCardConfig
├─ type: 'custom:ultra-card'
├─ _config_version: number    (migration version)
├─ _contentOrigin: 'local' | 'imported' | 'preset_*'
├─ disable_navigation_js_templates: bool
├─ global_css, card_background, card_border_*, card_padding, card_margin, card_overflow
├─ card_shadow_*, ...other card-level design fields
└─ layout
   └─ rows: [
        {
          columns: [
            {
              modules: [ CardModule, ... ],
              ...row/column design + logic
            }
          ],
          ...row design + logic
        }
      ]
```

Where `CardModule` is the discriminated union of all 74 module types. See [`src/types.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/types.ts) for the full definition (~7000 lines — it's the contract for the whole project).

### Migration

[`src/utils/template-migration.ts`](https://github.com/WJDDesigns/Ultra-Card/blob/main/src/utils/template-migration.ts) bumps `_config_version` and runs migrations for old configs:

- `v1` → modules rely on implicit 8px top/bottom margin default
- `v2` → default margin removed; modules carry explicit `design.margin_*`
- `v3` → repair pass for v2 partial-margin migration edge cases

---

## Trust model & content origin

`_contentOrigin` tags every config with its source:

- `local` — created in this dashboard
- `imported` — imported via paste / file
- `preset_standard` — installed from a vetted marketplace preset
- `preset_community` — installed from the community marketplace

Some features (Navigation JS templates, custom CSS evaluation) only run when origin is `local`. See [`docs/navigation-js-templates.md`](https://github.com/WJDDesigns/Ultra-Card/blob/main/docs/navigation-js-templates.md).

---

## Performance design

- **Template subscriptions are deduped** — same template string = one HA subscription.
- **Clock ticks are shared** — one `setInterval` for all visible clocks.
- **Modules code-split** — first paint loads only modules in use.
- **Animations pause** when the dashboard tab is hidden.
- **Service workers** (`src/workers/`) offload heavy parsing where appropriate.
- **Selectors throttle** the editor preview when many modules are visible.

If you find performance issues, see [FAQ and Troubleshooting](#uc-doc-faq-and-troubleshooting) § *Performance*.

---

## Where to learn more

- [Development](#uc-doc-development) — local setup and common tasks
- [`docs/`](https://github.com/WJDDesigns/Ultra-Card/tree/main/docs) — per-module reference docs (used as the basis of the `Module-*` wiki pages)
- [`/.cursor/rules/`](https://github.com/WJDDesigns/Ultra-Card/tree/main/.cursor/rules) — internal patterns for contributors
- The TypeScript source — Ultra Card has aggressive JSDoc comments where things get subtle.
