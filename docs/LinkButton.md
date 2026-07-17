---
category: Actions
---

`LinkButton` is `Button`'s anchor-tag counterpart — same three variants, for navigational actions (links styled as buttons) instead of in-page actions.

```tsx
import { LinkButton } from "@portfolio/ui";

<LinkButton href="/projects" variant="primary">View projects</LinkButton>
<LinkButton href="/cv" variant="secondary">View CV</LinkButton>
```

- `variant`: `"primary"` | `"secondary"` | `"ghost"`. Default `"primary"`.
- Accepts all native `<a>` props (`href`, `target`, ...). In a router app, wrap the router's own Link component instead when client-side navigation is needed.
