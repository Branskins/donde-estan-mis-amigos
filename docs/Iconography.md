---
category: Foundations
---

`Iconography` shows the full icon system in use: [Lucide](https://lucide.dev), 2px stroke, `currentColor`, outline only. **This is the authoritative reference for any icon decision** — no fills, duotone, or emoji anywhere in this system.

```tsx
import { Iconography } from "@portfolio/ui";

<Iconography />
```

Takes no props. When a new icon is needed, pull it from `lucide-react` with `strokeWidth={2}` — same stroke weight as everything shown here — rather than introducing a second icon style.
