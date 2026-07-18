---
category: Foundations
---

`ColorPalette` is the full color system — neutral ramp, primary (vintage grape) and secondary (sandy brown) accents, and semantic surface/text/border aliases. **This is the authoritative reference for any color decision** in this design system — every color used anywhere else traces back to one of these tokens.

```tsx
import { ColorPalette } from "@portfolio/ui";

<ColorPalette />
```

Takes no props — it always renders the current token set. Never hardcode a hex value; use the `var(--*)` name shown here (e.g. `var(--accent-primary)`, `var(--gray-600)`).
