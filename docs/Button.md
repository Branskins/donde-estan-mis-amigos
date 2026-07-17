---
category: Actions
---

`Button` is the primary call-to-action control — a native `<button>` styled with the design system's three variants.

```tsx
import { Button } from "@portfolio/ui";

<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">Learn more</Button>
```

- `variant`: `"primary"` (solid signal-orange fill, for the main action), `"secondary"` (outlined, black border), `"ghost"` (text-only, underlines on hover). Default `"primary"`.
- Accepts all native `<button>` props (`onClick`, `disabled`, `type`, ...).
