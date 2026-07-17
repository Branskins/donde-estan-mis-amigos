---
category: Content
---

`Badge` is a small uppercase pill for tags, statuses, and tech-stack chips — used inside `ProjectCard`'s tag list and the CV skills grid.

```tsx
import { Badge } from "@portfolio/ui";

<Badge>typescript</Badge>
<Badge>next.js</Badge>
```

Takes only `children` (text content). No variants — one hairline-bordered pill style by design.
