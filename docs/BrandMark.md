---
category: Foundations
---

`BrandMark` is the wordmark treatment — full-bleed black surface, name with a trailing signal-color underscore, and a meta line. **No logo asset exists for this system; never draw one from scratch** — this wordmark IS the brand mark.

```tsx
import { BrandMark } from "@portfolio/ui";

<BrandMark />
<BrandMark name="Jane Doe" />
```

- `name`: optional, defaults to the `"YOUR_NAME"` placeholder — pass the real name/handle once known.
- Always renders on the inverse (black) surface; don't place it on a light background.
