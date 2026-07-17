---
category: Foundations
---

`TypeScale` is the full type system — display through small, plus the uppercase micro-label idiom (`// Selected Work`) used for eyebrows and section tags. **This is the authoritative reference for any typography decision.** JetBrains Mono is the only family in this system; hierarchy comes from size/weight/tracking here, never a second typeface.

```tsx
import { TypeScale } from "@portfolio/ui";

<TypeScale />
```

Takes no props. Use the `var(--fs-*)`/`var(--fw-*)`/`var(--tracking-*)` tokens shown here directly — never a hardcoded `font-size` or `font-weight`.
