---
version: alpha
name: "@portfolio/ui"
description: Minimal, high-contrast, monospace-driven design system for a personal portfolio — component library plus tokens, consumed as a git dependency.
colors:
  # base neutrals
  black: "#0a0a0a"
  white: "#ffffff"
  gray-50: "#f7f7f5"
  gray-100: "#ededea"
  gray-200: "#dcdcd6"
  gray-300: "#c2c2ba"
  gray-400: "#9c9c92"
  gray-500: "#78786e"
  gray-600: "#58584f"
  gray-700: "#3d3d36"
  gray-800: "#262622"
  gray-900: "#161613"
  # accent ramp — vintage grape
  grape-50: "#f4f0f5"
  grape-100: "#e9e0eb"
  grape-300: "#bda2c3"
  grape-500: "#90659a"
  grape-600: "#74517b"
  grape-700: "#573c5d"
  # accent ramp — sandy brown
  sandy-50: "#fdf2e7"
  sandy-100: "#fce4cf"
  sandy-300: "#f6ae6f"
  sandy-500: "#f0780f"
  sandy-600: "#c0600c"
  sandy-700: "#904809"
  # status
  success: "#1a7f37"
  danger: "#d1242f"
  warning: "#9a6700"
  # semantic roles (CSS: --accent-primary / --accent-secondary)
  primary: "{colors.grape-500}"
  primary-hover: "{colors.grape-600}"
  primary-active: "{colors.grape-700}"
  primary-subtle: "{colors.grape-50}"
  secondary: "{colors.sandy-500}"
  secondary-hover: "{colors.sandy-600}"
  secondary-active: "{colors.sandy-700}"
  secondary-subtle: "{colors.sandy-50}"
  focus-ring: "{colors.grape-500}"
  # semantic surfaces & text
  surface-page: "{colors.white}"
  surface-raised: "{colors.white}"
  surface-sunken: "{colors.gray-50}"
  surface-inverse: "{colors.black}"
  text-primary: "{colors.black}"
  text-secondary: "{colors.gray-600}"
  text-muted: "{colors.gray-400}"
  text-inverse: "{colors.white}"
  text-on-accent: "{colors.white}"
  border-default: "{colors.gray-200}"
  border-strong: "{colors.black}"
  border-inverse: "{colors.gray-700}"
typography:
  display:
    fontFamily: JetBrains Mono
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 2.5rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: JetBrains Mono
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.02em
  title:
    fontFamily: JetBrains Mono
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.02em
  brand-mark:
    fontFamily: JetBrains Mono
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.02em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.04em
  label-meta:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.14em
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 10px
  full: 999px
spacing:
  base: 4px
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-5: 20px
  space-6: 24px
  space-8: 32px
  space-10: 40px
  space-12: 48px
  space-16: 64px
  space-20: 80px
  space-24: 96px
  container-max: 960px
  container-gutter: 24px
  border-hairline: 1px
  border-thick: 2px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-on-accent}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-strong}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-secondary-hover:
    backgroundColor: "{colors.surface-sunken}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
  button-ghost-hover:
    textColor: "{colors.text-primary}"
    borderColor: "{colors.text-primary}"
  badge:
    backgroundColor: transparent
    textColor: "{colors.text-secondary}"
    borderColor: "{colors.border-default}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 4px
  card:
    backgroundColor: "{colors.surface-page}"
    borderColor: "{colors.border-default}"
    rounded: "{rounded.xs}"
    padding: 24px
  card-hover:
    borderColor: "{colors.border-strong}"
  card-title:
    textColor: "{colors.text-primary}"
    typography: "{typography.title}"
  card-body:
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-sm}"
  card-link:
    textColor: "{colors.text-primary}"
    typography: "{typography.body-sm}"
  card-link-hover:
    textColor: "{colors.secondary-active}"
  nav:
    backgroundColor: "{colors.surface-page}"
    borderColor: "{colors.border-default}"
    padding: 16px
  nav-mark:
    textColor: "{colors.text-primary}"
    typography: "{typography.brand-mark}"
  nav-link:
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-sm}"
  nav-link-active:
    textColor: "{colors.text-primary}"
    borderColor: "{colors.primary}"
  footer:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.text-inverse}"
    padding: 48px
  footer-meta:
    textColor: "{colors.gray-400}"
    typography: "{typography.label-meta}"
  footer-link:
    textColor: "{colors.gray-300}"
    typography: "{typography.body-sm}"
  footer-link-hover:
    textColor: "{colors.white}"
---

# @portfolio/ui

## Overview

This is the design system for a developer's personal portfolio (home, projects, blog, CV). It ships as a standalone component library — the site itself lives in a separate repo and consumes this package as a git dependency — so every component must render correctly with no host stylesheet, reset, or theme provider beneath it.

The personality is **technical, low-ego, precise**. The reference feeling is well-formatted source code or an engineering drawing: everything monospaced, aligned to a strict grid, structured with hairline rules rather than boxes and fills. It should read as competent rather than expressive; the work in the cards is meant to be the interesting thing on screen, not the chrome around it. Spacious over dense — generous whitespace is the main luxury signal, since there are no gradients, illustrations, or photography to carry mood.

Voice follows the same rule: short declarative sentences, sentence case for prose, UPPERCASE with wide tracking for labels, no emoji. Punctuation motifs are borrowed from code — `_` is the signature glyph, en dashes separate meta fields (`Developer — Portfolio v1.0 — 2026`).

When a rule isn't specified here, choose the flatter, quieter, more structural option.

> **Reference note.** An editorial exhibition poster was supplied as directional reference: near-black ink on warm off-white paper, a single ochre accent, black meta panels with knockout text, and micro-labels set vertically up the outer margin. It shares this system's flat, hairline, high-contrast vocabulary, so what transfers is layout rhythm and accent temperature — not illustration. Each section below ends with a note on what that reference would change. Nothing in those notes is implemented; the tokens above are the current truth.

## Colors

The system is near-monochrome by construction. Black, white, and a ten-step warm gray ramp carry essentially every surface and text decision; the accents are punctuation, not identity.

- **Primary — Vintage Grape (`#90659a`):** the single interactive accent. Primary button fills, the active nav underline, the brand-mark highlight, and the focus ring. Muted and slightly dusty rather than saturated, so it reads as considered instead of decorative.
- **Secondary — Sandy Brown (`#f0780f`):** warm emphasis for link hover states and secondary highlights. Used at roughly a tenth the frequency of primary.
- **Neutral — Warm Gray (`#f7f7f5` → `#161613`):** the ramp is warm-tinted rather than blue-gray, which is what keeps an all-monospace interface from reading as a code editor.
- **Status — `success` / `danger` / `warning`:** defined in tokens, not yet consumed by any component.

Token names in the front matter are the CSS custom property names with the `--` prefix dropped, with one deliberate exception: the spec's recommended `primary` / `secondary` names are aliases of `--accent-primary` / `--accent-secondary` in `tokens/colors.css`. Both point at the same ramp step.

Compose against the semantic aliases (`surface-*`, `text-*`, `border-*`), never against raw ramp steps — the ramp is the implementation, the aliases are the API. Each accent carries `-hover` (one step darker), `-active` (two steps darker), and a `-subtle` 50-level tint for washes.

**Contrast status.** White on `primary` measures 4.65:1 — passing AA for normal text, but with almost no margin; don't darken the text or lighten the fill. Two current pairings fail AA and are tracked as bugs rather than intent: `--accent-secondary` (`#f0780f`) as link-hover text on white is **2.8:1**, and `--text-muted` (`#9c9c92`) on white is **2.8:1**. The component token above therefore specifies `secondary-active` (`#904809`, 6.7:1) as the correct link-hover value; the CSS in `src/styles.css` still uses `secondary` and needs updating to match.

There is no dark mode. Tokens are declared once on `:root` with no `prefers-color-scheme` block and no `[data-theme]` hook; adding one means re-aliasing the semantic layer only, leaving ramps and accents untouched.

> **Reference note.** The poster runs a single warm ochre (~`#c9a227`) against ink and paper — one accent, not two, and warmer than either of ours. The tempting moves are swapping `secondary` from sandy brown to ochre (a small change: sandy already occupies the warm slot, ochre just drops saturation) and shifting `surface-page` from pure white to `gray-50`, which is what makes the poster's black panels read as ink rather than as UI. Grape has no poster equivalent; the honest version of that direction is one accent, not three.

## Typography

**One family, everywhere.** JetBrains Mono — loaded from Google Fonts in `tokens/typography.css`, falling back to `ui-monospace, SF Mono, Menlo, Consolas` — for headings, body, labels, and numerals alike. There is no humanist pairing by design: the monospace grid *is* the identity, and hierarchy comes from size, weight, and tracking rather than from switching typeface. Every component sets `font-family` on its own root instead of inheriting, so components stay standalone.

- **Display / headlines** (`display`, `headline-lg/md/sm`) are page-level levels owned by the consuming app. They take tight tracking (−0.02em) and tight leading — large monospace type needs negative tracking to stop looking gappy.
- **Title / brand-mark** (1.25rem) are the largest levels any component in this library actually renders: the card title at weight 600 and the nav wordmark at 700.
- **Body** (`body-lg/md/sm`) uses relaxed leading (1.7). Monospace needs more leading than a proportional face at the same size; `body-sm` at 0.875rem is the working size for card copy, nav links, and footer links.
- **Labels** (`label-md`, `label-caps`, `label-meta`) carry the system's signature idiom. `label-meta` — 0.75rem, uppercase, 0.14em tracking — is one unit, not three independent choices; the same goes for `label-caps` at 0.04em on badges.

Tracking is the primary hierarchy lever: tight for large type, zero for body, wide for small caps-ish elements, widest for uppercase micro labels. Casing follows it — sentence case for everything except eyebrows, labels, and badges, which are uppercase and always paired with wide or widest tracking. Weight does the rest: 500 on buttons, 600 on titles, 700 reserved for the brand mark.

> **Reference note.** The poster's hierarchy is almost pure scale contrast — one enormous centered mark against 6–8pt caps at very wide tracking, with nothing in between. This scale has the range (`display` to `label-meta` is a 5.3× jump) but no component exercises it; everything in the library clusters between 0.75rem and 1.25rem. That gap is the consuming app's to fill with a display treatment, not a token change.

## Layout

The layout model is a **single fixed-max-width column**: `container-max` 960px, centered, with `container-gutter` (24px) of side padding. `.ds-nav__inner` and `.ds-footer__inner` each declare that trio independently — there is no shared container class or component, so anything new that needs the page measure repeats those three declarations. Extracting a container primitive is the obvious next refactor.

Spacing runs on a **4px base**, `space-1` through `space-24`. The scale deliberately skips 7, 9, and 11 and goes coarse above 24px (32, 40, 48, 64, 80, 96) so large rhythm can't drift. Every gap and pad uses a scale token; raw pixel values appear only as optical nudges already in the CSS, such as the 2px offset under an active nav link.

Conventions in use: `space-1`/`space-2` for icon-to-label pairs and tag rows, `space-4` for stacking within a block, `space-6` between nav links and as the page gutter, `space-8` between foundation sections, `space-12` for footer block padding. Structure is flex-first; `grid` appears only where a fixed column count is the point (`repeat(4, 1fr)` in the Foundations specimens). Cards stack as flex columns with `margin-top: auto` on the link row, so link rows bottom-align across a row of unequal cards. Page-level grids — a projects list, for instance — belong to the consuming app, not here.

**Known gap: there are no `@media` queries anywhere in `src/styles.css`.** Everything below 960px degrades on flex wrap alone, and only `.ds-footer__inner` sets `flex-wrap: wrap` explicitly. The nav's `space-between` row and the four-column Foundations grids have no narrow-screen behaviour. That belongs here, not in each consuming app.

> **Reference note.** The poster is an asymmetric editorial grid — a wide quiet field, content pinned to the outer margins, rotated micro-labels up the left edge, and a stacked dark meta panel on the right holding dates and venue. Two ideas transfer without touching tokens: a `writing-mode: vertical-rl` variant of the label idiom for section eyebrows on wide viewports, and a right-rail meta panel reusing the footer's inverse treatment.

## Elevation & Depth

**Borders do the work; shadows are the exception.** Hierarchy is conveyed with 1px hairline borders (`border-default`) promoted to solid black (`border-strong`) for emphasis, plus tonal shifts between `surface-page` and `surface-sunken`. The result is flat and blueprint-like — an engineering drawing, not a stack of floating cards.

Three shadow tokens exist for true elevation: `--shadow-sm` `0 1px 2px rgba(10,10,10,0.08)`, `--shadow-md` `0 4px 16px rgba(10,10,10,0.10)`, `--shadow-lg` `0 12px 32px rgba(10,10,10,0.14)`. Only `sm` is currently used — on card hover, alongside the border promotion, which is the single hover-elevation moment in the library. `md` and `lg` are reserved for the overlay layer (dialog, tooltip, dropdown) that doesn't exist yet.

The other depth device is **full-bleed inversion**: a black surface used as a section break, currently only by `Footer`. On inverse surfaces, secondary text steps down to `gray-400` and links to `gray-300`, rising to pure white on hover — never white at full strength for secondary text.

> **Reference note.** The poster gets its depth entirely from ink density and knockout panels, which is the same strategy as inversion here — just used more than once per page. Extending inverse surfaces to more than the footer is the cheapest way to move toward it.

## Shapes

The shape language is **architectural sharpness**. Corners are effectively square: containers use `none` or `xs` (0–2px), interactive controls top out at `sm` (4px), and `md` (6px) / `lg` (10px) are defined but unused — treat them as available rather than sanctioned. `full` (999px) is reserved for genuine pills, which in practice means `Badge` and nothing else.

Two border widths exist: `border-hairline` (1px) for all structural edges and `border-thick` (2px) for the single emphasis case, the active nav underline. Shapes are rectangles — no circles, no capsule buttons, no icon-in-a-circle placeholder art. When real project imagery is missing, use a plain rectangular placeholder.

> **Reference note.** The poster's hairline-outlined squares overlapping filled ones are decorative rhythm markers, and they are the one element to leave behind: this system uses whitespace where the poster uses marks, and adding both would read as noise.

## Components

Twelve components, plain CSS classes (`ds-*`, BEM-ish) — no CSS Modules, no framework coupling, no styled-components. Import `@portfolio/ui/styles.css` once and every component renders standalone. Per-component usage docs live in [docs/](docs/); [gallery/](gallery/) (`npm run gallery`) renders them all live from `src/`.

### Foundations

`ColorPalette`, `TypeScale`, `Iconography`, `SpacingScale`, `RadiusShadow`, and `BrandMark` are living specimens that render the current token set rather than a curated snapshot. They replaced the hand-authored `guidelines/*.html` files, which removed the dual-maintenance risk between a static snapshot and the real tokens. All take no props except `BrandMark`'s optional `name` — don't add props to give them a variant axis; they exist to show what the tokens actually are.

### Components

| Component | Element | Notes |
|---|---|---|
| `Button` / `LinkButton` | `<button>` / `<a>` | Three variants share one class set. **Primary** is a grape fill with white text. **Secondary** is transparent with a black hairline border. **Ghost** drops horizontal padding and radius entirely and grows a bottom border on hover, reading as a text link with a hit target. Padding is asymmetric — `space-3` (12px) vertical, `space-5` (20px) horizontal — which the single `padding` token above can't express. Disabled drops to 50% opacity with `cursor: not-allowed`. |
| `Badge` | `<span>` | The only pill in the system: uppercase `label-caps`, hairline border, no fill, `rounded-full`. Used for tags, statuses, and tech-stack chips. Takes children only — no props, no variants, no color-coding by category. |
| `ProjectCard` | `<article>` | Takes one `project` object (`index`, `title`, `description`, `tags[]`, optional `repoHref` / `liveHref`). Renders a `Badge` per tag and Lucide-iconed repo/live links whose row bottom-aligns via `margin-top: auto`. Hover promotes the border to black and adds `--shadow-sm`. |
| `Nav` | `<nav>` | `brand`, `items[]`, `activeHref`, `linkComponent`. The one composition seam in the library — pass a router's Link (e.g. `next/link`) and it renders through that; it defaults to a plain anchor. The active link gets a 2px grape bottom border. |
| `Footer` | `<footer>` | Inverse black surface with an optional `year`, a wide-tracked meta line, and three icon links. |

### Iconography and motion

Icons are [Lucide](https://lucide.dev) — outline only, 2px stroke, `currentColor`, no fills or duotone. Eight glyphs are in use (`terminal`, `github`, `arrow-up-right`, `mail`, `file-text`, `folder-git-2`, `external-link`, `x`) at 16px inside components and 20px in the `Iconography` specimen. Motion is deliberately understated: `--duration-fast` (120ms) for color and border transitions, `--duration-normal` (180ms) for elevation, always `--ease-standard` (`cubic-bezier(0.4, 0, 0.2, 1)`). No transforms, no scale-on-hover, no spring easing.

### Spec conformance

`npx @google/design.md lint DESIGN.md` reports **0 errors, 30 warnings, 1 info** against spec version `alpha` (CLI 0.4.0). All eight sections are present and in order. The warnings fall into three groups, all intentional:

- **`borderColor` (×7)** — outside the spec's component property set (`backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`). Kept deliberately: borders are this system's primary hierarchy device, and `button-secondary` and `badge` are defined almost entirely by their edge. Dropping the property would make the tokens describe a different system.
- **`contrast-ratio` (×3)** — raised where `backgroundColor: transparent` resolves to `#00000000` and gets compared directly against the text color. These three components sit on `surface-page`, where the real ratios are 21:1 (black) and 7.2:1 (`gray-600`). Linter artifact, not a real failure — unlike the two genuine failures recorded under Colors.
- **`orphaned-tokens` (×20)** — accurate. The ramps in `tokens/colors.css` are broader than component usage: five gray steps, the grape and sandy 50/100/300 tints, and all three status colors are declared but unreferenced. They're mirrored here because this file documents the token source of truth, not just the parts currently consumed. Treat the warning as a standing invitation to prune the ramp.

### Known gaps

- **No form controls at all** — input, select, checkbox, radio, textarea, field label, error text. The largest hole in the set, and the reason no `input-field` token exists above.
- No overlay or feedback layer (dialog, tooltip, toast), despite `--shadow-md/lg` existing for exactly that, and no component consuming the status colors.
- `Nav` is described as sticky in the README, but `.ds-nav` sets no `position: sticky` — the consuming app supplies it today. Add it here or correct the description.
- `Footer`'s three links (github / mail / cv) are hardcoded placeholders, not props. They need to become props before a second site consumes this.
- `card-link-hover` in tokens specifies `secondary-active`; the CSS still uses `secondary`, which fails AA.

## Do's and Don'ts

- **Do** compose against semantic aliases (`text-primary`, `border-default`, `surface-sunken`) — the raw ramp steps are implementation detail.
- **Do** use exactly one accent per component, and keep primary for the single most important action on a screen.
- **Don't** put both grape and sandy at full strength in the same component.
- **Do** reach for a hairline border before a shadow. Shadows mean genuine elevation — overlays — not decoration.
- **Don't** introduce a second typeface. Hierarchy comes from size, weight, and tracking; that constraint is the identity.
- **Do** treat uppercase + `label-meta` (0.75rem, 0.14em tracking) as one idiom, and apply uppercase only to eyebrows, labels, and badges.
- **Don't** round corners past `sm` (4px) on interactive controls, or use `full` anywhere but a true pill.
- **Do** reset `text-decoration: none` on anything rendering an `<a>` — this library ships standalone and can't rely on a host app's reset.
- **Don't** animate with transforms, scale, or spring easing. Opacity and color only, at 120–180ms.
- **Do** verify AA contrast (4.5:1) before shipping a new color pairing — two current pairings already fail, and white-on-grape passes with only 0.15 of margin.
- **Don't** add page-level grids, hero layouts, or route-specific styling here; those belong to the consuming app.
- **Don't** add props to a Foundations component to give it a variant axis — they exist to show the live token set, not a curated subset.
