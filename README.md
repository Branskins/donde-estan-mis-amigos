# @portfolio/ui

A minimal, high-contrast, monospace-driven design system — component library + design tokens for a personal portfolio (home, projects, blog, CV). This repo is the design system only; the portfolio site itself lives in a separate repo ([branskins.github.io](https://github.com/Branskins/branskins.github.io)), which consumes this package as a git dependency.

**Sources:** none — built from scratch (no existing codebase, Figma, or brand assets attached). All tokens, type, and components are original decisions made for this system; revise freely.

## What's here

- `src/` — component source: `Button`, `LinkButton`, `Badge`, `ProjectCard`, `Nav`, `Footer`, plus the Foundations components (`ColorPalette`, `TypeScale`, `Iconography`, `SpacingScale`, `RadiusShadow`, `BrandMark`). Plain CSS classes (`ds-*`, BEM-ish), no CSS Modules, no framework coupling — every component renders standalone.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`: the custom-property source of truth, imported by `src/styles.css`.
- `docs/` — one usage doc per component (props, examples, category) — also what design-sync folds into each component's generated `.prompt.md`.
- `guidelines/` — empty. Every specimen that used to live here as static HTML (colors, type, spacing, radius/shadow, iconography, brand mark) is now a real Foundations component instead (see below) — nothing left with no component equivalent.
- `gallery/` — local dev tool (Vite), renders every component together from live `src/` — not deployed, just a visual sanity check.
- `.design-sync/` — config, notes, and the hand-authored conventions header for syncing this library into a [Claude Design](https://claude.ai/design) project (see below).
- `styles.css` — legacy root stylesheet importing the three token files directly. `src/styles.css` is the real package entry.

## Developing

```sh
npm install
npm run build      # compile src/ -> dist/ (ESM + .d.ts + CSS), via tsup
npm run gallery     # Vite dev server, every component rendered live from src/ (no rebuild needed)
```

## Using this library elsewhere

This package isn't deployed as an app — it's consumed as a git dependency:

```json
"@portfolio/ui": "github:Branskins/donde-estan-mis-amigos"
```

npm runs this package's `prepare` script (`tsup`) automatically on install, so `dist/` is built fresh — no publishing step, no registry.

```tsx
import "@portfolio/ui/styles.css";
import { Button, Badge, ProjectCard, Nav, Footer } from "@portfolio/ui";
```

`Nav` is the one component built for composition: pass `linkComponent` to wire it to a router's Link (e.g. Next.js `next/link`); it defaults to a plain `<a>`.

## Content fundamentals

- **Voice:** direct, low-ego, technical. Short sentences. Write like commit messages or a terminal prompt, not marketing copy.
- **Casing:** sentence case for body copy; UPPERCASE with wide letter-spacing for eyebrows/labels/nav (e.g. `// SELECTED WORK`).
- **Person:** first person for bio/about ("I build…"), direct address for CTAs ("Get in touch").
- **Punctuation motifs:** double-slash `//` comment prefix for section labels, underscore `_` as a personal signature glyph, en dash for meta separators (`Developer — Portfolio v1.0`).
- **Emoji:** none. Technical/precise tone reads better without them.
- **Numbers:** zero-padded index numbers for lists (`01`, `02`, `03`) — reinforces the technical, systems feel. `Nav` and `ProjectCard` both use this.

## Visual foundations

- **Palette:** high-contrast black/white base (`--black #0a0a0a`, `--white`, 11-step gray ramp) carries nearly all surface and text color. Two accents used sparingly: **vintage grape** (`--accent-primary`, #90659a) for primary actions/focus, **sandy brown** (`--accent-secondary`, #f0780f) for links/secondary emphasis. Never both accents in the same component at full strength — pick one per context.
- **Typography:** single family, JetBrains Mono, used for everything (headings, body, labels) — reinforces the technical identity rather than pairing with a humanist sans. Hierarchy comes from size/weight/tracking, not typeface switching. Tight tracking on large display type, wide/uppercase tracking on micro labels.
- **Spacing:** 4px base scale (`--space-1` … `--space-24`). Generous whitespace; layouts should feel like well-formatted code, not cramped.
- **Corners:** sharp by default. `--radius-none`/`--radius-xs` (0–2px) for cards and containers; `--radius-sm` (4px) is the practical max for interactive controls. Never fully rounded except `--radius-full` for true pills (tags/badges only).
- **Borders vs shadows:** borders do most of the work (1px hairline `--border-default`, black `--border-strong` for emphasis) — flat, technical, blueprint-like. Shadows are reserved for true elevation (dialogs, tooltips, dropdowns) and stay subtle (`--shadow-sm`/`md`).
- **Backgrounds:** flat only — no gradients, no textures, no photography-driven hero treatments. Black is used as a full-bleed inverse surface for section breaks (e.g. `Footer`) with white text.
- **Hover/press states:** hover darkens accent fills one step (`--accent-primary-hover`) or adds a bottom border/underline on ghost/text elements; press darkens one step further. Disabled controls drop to 50% opacity with `cursor: not-allowed`. No scale/shrink transforms — motion stays understated (`--duration-fast` 120ms, `--ease-standard`).
- **Animation:** minimal — opacity/transform fades only, no bounce/spring easing. Reinforces precision over playfulness.
- **Imagery:** none provided. Use plain rectangular placeholders (no icon-in-a-circle placeholder art) until real project screenshots/photos are supplied.

## Iconography

- **System:** [Lucide](https://lucide.dev), 2px stroke, `currentColor`, outline only — no fills/duotone/emoji. In components, via the `lucide-react` package (`ProjectCard`, `Footer`, `Iconography`).
- No logo/brand mark asset was provided. `BrandMark` renders a wordmark-only treatment (`YOUR_NAME_` placeholder, `name` prop to override) — never draw a logo from scratch.

## Components

| Component | Description |
|---|---|
| `Button` / `LinkButton` | Primary/secondary/ghost action control — native `<button>` or `<a>`. |
| `Badge` | Small uppercase pill for tags, statuses, tech-stack chips. |
| `ProjectCard` | Project showcase card — index, title, description, tags, repo/live links. |
| `Nav` | Sticky top nav with zero-padded index labels and an active-link underline; framework-agnostic. |
| `Footer` | Inverse (black) site footer with a meta line and icon links. |
| `ColorPalette` | Foundation — renders the full neutral/primary/secondary/semantic color system. Authoritative reference for color decisions. |
| `TypeScale` | Foundation — renders the full type scale plus the micro-label idiom. Authoritative reference for typography decisions. |
| `Iconography` | Foundation — renders the working Lucide icon set. Authoritative reference for icon decisions. |
| `SpacingScale` | Foundation — renders the 4px spacing scale (`space-1`–`space-16`). Authoritative reference for spacing decisions. |
| `RadiusShadow` | Foundation — renders the radius/border/shadow reference. Authoritative reference for corner, border, and elevation decisions. |
| `BrandMark` | Foundation — the wordmark treatment on the inverse (black) surface; the brand mark, since no logo asset exists. |

The 6 Foundations components take no props (except `BrandMark`'s optional `name`) — they always render the live current token/icon set, so they can't drift the way a written reference doc can. They replaced every static specimen that used to live in `guidelines/` (now empty).

See each component's `docs/<Name>.md` for props and usage examples.

## Syncing to claude.ai/design

This repo is synced via the `design-sync` skill into a Claude Design project, so the design agent builds with these real components instead of generic ones. `.design-sync/config.json` holds the sync target and build config; `.design-sync/NOTES.md` holds sync-specific gotchas (font loading, card-mode overrides, the fixes made during the first import); `.design-sync/conventions.md` is what gets taught to the design agent about this system's styling idiom.
