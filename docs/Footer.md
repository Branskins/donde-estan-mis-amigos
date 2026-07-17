---
category: Navigation
---

`Footer` is the inverse (black background, white text) site footer — a meta line and a row of icon links (GitHub, mail, CV).

```tsx
import { Footer } from "@portfolio/ui";

<Footer />
<Footer year={2026} />
```

- `year`: optional, defaults to the current year. Shown in the "Developer — Portfolio v1.0 — {year}" meta line.
- The GitHub/mail/CV links are fixed in this version — swap the hrefs in the component source for a different footer's real links.
