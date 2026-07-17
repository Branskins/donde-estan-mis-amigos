---
category: Content
---

`ProjectCard` is the project showcase card — a zero-padded index, title, one-line description, tag chips, and optional repo/live links.

```tsx
import { ProjectCard } from "@portfolio/ui";

<ProjectCard
  project={{
    index: "01",
    title: "Project One",
    description: "One-line description of what this project does and why it exists.",
    tags: ["typescript", "next.js"],
    repoHref: "https://github.com/example/project-one",
    liveHref: "https://project-one.example.com",
  }}
/>
```

- `project.index`: zero-padded string (`"01"`, `"02"`, ...) shown above the title.
- `project.tags`: rendered as `Badge` chips.
- `repoHref` / `liveHref`: optional — omit either to hide that link.
