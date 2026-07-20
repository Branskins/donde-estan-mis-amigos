---
category: Navigation
---

`Nav` is the sticky top navigation bar, with an active-link underline in vintage grape. It's framework-agnostic: pass a `linkComponent` to wire it to a router (defaults to a plain `<a>`).

```tsx
import { Nav } from "@portfolio/ui";

<Nav
  brand={<>YOUR_NAME<span>_</span></>}
  items={[
    { index: "01", label: "index", href: "/" },
    { index: "02", label: "projects", href: "/projects" },
    { index: "03", label: "blog", href: "/blog" },
    { index: "04", label: "cv", href: "/cv" },
  ]}
  activeHref="/"
/>
```

- `brand`: rendered at the left, linked to `/`.
- `items`: ordered nav entries, each with a zero-padded `index` (kept for ordering/keys but not rendered).
- `activeHref`: matched against each item's `href` to underline the current page.
- `linkComponent`: optional custom link renderer `({href, className, children}) => ReactNode` — pass your router's Link (e.g. Next.js `next/link`) for client-side navigation; defaults to a plain anchor.
