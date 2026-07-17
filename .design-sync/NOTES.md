# design-sync notes

## Setup

- **Repo layout changed 2026-07-16**: this repo used to be a Next.js portfolio app with the
  design system nested at `packages/ui/` (npm workspace member). It's now restructured to be
  *only* the design system — `packages/ui/{src,docs,package.json,tsconfig.json,tsup.config.ts}`
  were promoted straight to the repo root. The portfolio app moved to a separate repo,
  `branskins.github.io`, which consumes this repo as a git dependency
  (`"@portfolio/ui": "github:Branskins/donde-estan-mis-amigos"` — npm runs this package's
  `prepare` script, i.e. `tsup`, automatically on install, so no publishing step is needed).
- Build with `npm run build` before re-running the converter (`buildCmd` isn't set in config
  since this is a manual two-step: package build, then converter build — see "Re-sync" below).
- `cssEntry: "dist/index.css"` is required — tsup emits CSS as a sibling file to `dist/index.js`
  with no import between them (by design, `injectStyle: false`), so the converter's default
  candidate list (`dist/styles.css`, `styles.css`, etc.) never finds it without this override.
- Tokens (`tokens/colors.css`, `typography.css`, `spacing.css` at the repo root) are NOT
  duplicated into the package — `src/styles.css` imports them via relative path
  (`../tokens/*.css`, one level up now that `src/` is at repo root) so there's one source of
  truth. If those root token files move, update the relative import in `src/styles.css`.
- `docsDir: "docs"` (`docs/*.md` at repo root) supplies per-component prompt source + `category`
  frontmatter for grouping. These same files also get swept into `guidelines/` by the default
  `guidelinesGlob` (`docs/*.md` matches) — harmless duplication, not worth excluding.
- `gallery/` (Vite, `npm run gallery`) is a local-only dev tool that renders every component
  live from `src/` — unrelated to design-sync, just a faster visual check than round-tripping
  through the converter.

## Fixes made during this sync (now in the shipped component, not just the preview)

- Added `.ds-btn:disabled { opacity: 0.5; cursor: not-allowed; }` — the disabled `Button` state
  was visually identical to enabled before this.
- Added `text-decoration: none` to every anchor-rendering class (`ds-btn`, `ds-card__link`,
  `ds-nav__mark`, `ds-nav__link`, `ds-footer__link`) — none of them reset the browser-default
  underline, so `LinkButton`, `Nav`, and `Footer` all rendered underlined links until this fix.
  The app previously masked this via its own `app/globals.css` `a { text-decoration: none }`
  reset — the component library needed its own reset since it now ships standalone.

## Known render warns

None — render check and all 9 authored previews passed clean on the first post-fix pass.

## Foundations components (ColorPalette, TypeScale, Iconography)

- Added 2026-07-16 at the user's request, to make the `guidelines/colors-*.html`,
  `guidelines/type-*.html`, and `guidelines/iconography.html` specimens available to the design
  agent as real, live components (group `Foundations`) rather than only as static docs it never
  reads. `docsDir` frontmatter (`category: Foundations`) drives the grouping.
- All three take no props by design — deterministic, single-cell (`Default`) previews. Don't add
  props just to give them a variant axis; they're meant to always show the live current token
  set, not a curated subset.
- The redundant static specimens (`colors-neutrals.html`, `colors-primary.html`,
  `colors-semantic.html`, `type-scale.html`, `type-labels.html`, `iconography.html`) were
  deleted 2026-07-16 once the components existed — no more dual-maintenance risk between a
  hand-authored HTML snapshot and the live component.
- `radius-shadow.html`, `spacing-scale.html`, and `brand-overview.html` were NOT turned into
  components (out of scope of the original ask — colors/typography/icons only) and are still in
  `guidelines/`. Candidates for the same treatment if asked.

## Re-sync log

- **2026-07-16 (repo restructure re-sync):** after promoting `packages/ui/*` to the repo root,
  a re-sync correctly reported `verification.unchanged` for all 6 components (source content
  identical) but still triggered a canary spot-check (`render_churn`) because the rebuilt
  artifact *bytes* differ from the anchor — expected, since absolute paths embedded during the
  build changed. Spot-checked 5/6 components by eye against their kept grades; all matched
  exactly, no drift. This is a one-time effect of the path move, not something to expect on
  ordinary re-syncs.
- The project also carries a `templates/portfolio-home/` folder (with its own `support.js`,
  `.thumbnail`, `PortfolioHome.dc.html`, `ds-base.js`) — this is NOT something design-sync
  writes; it's a starter template the claude.ai/design app auto-provisions on the project.
  Leave it alone (reconciliation deletes never touch `templates/`).

## Re-sync risks

- If `packages/ui/src` changes, you must run `npm run build -w @portfolio/ui` yourself before
  re-running the converter — there's no `buildCmd` wired up to do this automatically (two
  separate build steps: the workspace package, then the DS converter).
- JetBrains Mono is loaded via a remote Google Fonts `@import` (`[FONT_REMOTE]`, non-blocking) —
  not bundled. If Google Fonts is ever swapped for a self-hosted font, this will need
  `cfg.extraFonts` wired up and will start firing `[FONT_MISSING]` instead.
- `Nav` and `Footer` are configured `cardMode: column` (full-width bars) — if either is
  redesigned to a narrower/inline component, remove the override so it doesn't force an
  unnecessarily wide card.
- Only 5 real components exist right now (6 exports incl. `LinkButton`). All were authored
  solo, not fanned out — no subagent-wave learnings to fold.
