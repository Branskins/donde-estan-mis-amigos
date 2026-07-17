# design-sync notes

## Setup

- The synced package is `@portfolio/ui` at `packages/ui/` — a real npm workspace member, not a
  copy. The Next.js app (`app/`, `components/site-nav.tsx`) imports the same package, so what's
  synced is exactly what's shipped. Build it with `npm run build -w @portfolio/ui` before
  re-running the converter (`buildCmd` isn't set in config since this is a manual two-step:
  workspace build, then converter build — see "Re-sync" below).
- `cssEntry: "dist/index.css"` is required — tsup emits CSS as a sibling file to `dist/index.js`
  with no import between them (by design, `injectStyle: false`), so the converter's default
  candidate list (`dist/styles.css`, `styles.css`, etc.) never finds it without this override.
- Tokens (`tokens/colors.css`, `typography.css`, `spacing.css` at the repo root) are NOT
  duplicated into the package — `packages/ui/src/styles.css` imports them via relative path
  (`../../../tokens/*.css`) so there's one source of truth. If those root token files move,
  update the relative import in `packages/ui/src/styles.css`.
- `docsDir: "docs"` (`packages/ui/docs/*.md`) supplies per-component prompt source + `category`
  frontmatter for grouping. These same files also get swept into `guidelines/` by the default
  `guidelinesGlob` (`docs/*.md` matches) — harmless duplication, not worth excluding.

## Fixes made during this sync (now in the shipped component, not just the preview)

- Added `.ds-btn:disabled { opacity: 0.5; cursor: not-allowed; }` — the disabled `Button` state
  was visually identical to enabled before this.
- Added `text-decoration: none` to every anchor-rendering class (`ds-btn`, `ds-card__link`,
  `ds-nav__mark`, `ds-nav__link`, `ds-footer__link`) — none of them reset the browser-default
  underline, so `LinkButton`, `Nav`, and `Footer` all rendered underlined links until this fix.
  The app previously masked this via its own `app/globals.css` `a { text-decoration: none }`
  reset — the component library needed its own reset since it now ships standalone.

## Known render warns

None — render check and all 6 authored previews passed clean on the first post-fix pass.

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
