---
category: Foundations
---

`RadiusShadow` renders the radius, border, and shadow reference: sharp corners by default, hairline borders doing most of the structural work, shadows reserved for true elevation. **Authoritative reference for any of these three decisions.**

```tsx
import { RadiusShadow } from "@portfolio/ui";

<RadiusShadow />
```

Takes no props. Use `var(--radius-*)`, `var(--border-*)`, and `var(--shadow-*)` directly — never a hardcoded corner radius or box-shadow value.
