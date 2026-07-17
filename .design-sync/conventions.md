## Setup

No provider or wrapper is required — every component works standalone. Import components from `@portfolio/ui` and import the stylesheet once, at the app root (it carries both the design tokens and every component's CSS):

```tsx
import "@portfolio/ui/styles.css";
import { Button, Badge, ProjectCard, Nav, Footer } from "@portfolio/ui";
```

`Nav` is the one component built for composition: pass `linkComponent` to wire it to a router's Link (e.g. Next.js `next/link`) for client-side navigation. Without it, `Nav` renders plain `<a>` tags — correct, just full page loads.

## Styling idiom: hand-authored BEM-ish classes, not utility classes or style props

This is not a Tailwind-style utility system and components take no `style`/theme props — styling is a fixed, non-extensible set of classes per component, each block-scoped (`ds-btn`, `ds-card`, `ds-nav`, `ds-footer`, `ds-badge`) with `__element` and `--modifier` suffixes (BEM). Do not invent new `ds-*` class names — the exact vocabulary the DS ships:

| Component | Classes |
|---|---|
| Button / LinkButton | `ds-btn`, `ds-btn--primary`, `ds-btn--secondary`, `ds-btn--ghost` |
| Badge | `ds-badge` |
| ProjectCard | `ds-card`, `ds-card__head`, `ds-card__index`, `ds-card__title`, `ds-card__desc`, `ds-card__tags`, `ds-card__links`, `ds-card__link` |
| Nav | `ds-nav`, `ds-nav__inner`, `ds-nav__mark`, `ds-nav__links`, `ds-nav__link`, `ds-nav__link--active`, `ds-nav__index` |
| Footer | `ds-footer`, `ds-footer__inner`, `ds-footer__meta`, `ds-footer__links`, `ds-footer__link` |

For layout/glue markup you write yourself (page wrappers, grids — anything that isn't one of the 6 components above), don't invent new colors, spacing, or type sizes. Use the same CSS custom properties the components use, directly:

- Color: `var(--text-primary)`, `var(--text-secondary)`, `var(--text-muted)`, `var(--surface-page)`, `var(--surface-sunken)`, `var(--surface-inverse)`, `var(--border-default)`, `var(--border-strong)`, `var(--accent-primary)` (signal orange), `var(--accent-secondary)` (circuit blue).
- Spacing (4px scale): `var(--space-1)` through `var(--space-24)`.
- Type: `var(--font-mono)`, `var(--fs-micro)` through `var(--fs-display)`, `var(--fw-regular)` through `var(--fw-bold)`, `var(--tracking-tight)`/`--tracking-wide`/`--tracking-widest`.
- Radius/border: `var(--radius-none)`/`--radius-xs`/`--radius-sm` (sharp corners are the house style — never use a large radius except `--radius-full` for pill badges).

Visual language: high-contrast black/white base, JetBrains Mono everywhere (headings, body, labels — no second typeface), sharp corners, hairline borders doing most of the structural work (not shadows), one accent per context (never mix orange and blue in the same component at full strength). Zero-padded index numbers (`01`, `02`) and `// UPPERCASE` eyebrow labels are this brand's signature — `ProjectCard` and `Nav` both use them.

## Where the truth lives

Read `styles.css` (it `@import`s `_ds_bundle.css`, which holds every token and every `ds-*` rule above) before styling anything new. Each component's `components/<group>/<Name>/<Name>.prompt.md` has real usage examples — prefer composing from those over guessing props.

## Example: composing with the DS's own idiom

```tsx
import { Nav, ProjectCard, Footer } from "@portfolio/ui";

function ProjectsPage() {
  return (
    <>
      <Nav
        brand={<>YOUR_NAME<span>_</span></>}
        items={[{ index: "01", label: "index", href: "/" }, { index: "02", label: "projects", href: "/projects" }]}
        activeHref="/projects"
      />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "var(--space-16) var(--space-6)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-6)" }}>
          <ProjectCard project={{ index: "01", title: "Project One", description: "…", tags: ["typescript"], repoHref: "https://github.com/x" }} />
        </div>
      </div>
      <Footer />
    </>
  );
}
```
