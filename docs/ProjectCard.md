---
category: Content
---

`ProjectCard` is the project showcase card — title, one-line description, tag chips, and optional repo/live links.

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

- `project.index`: zero-padded string identifier (`"01"`, `"02"`, ...); kept for ordering/keys but not rendered.
- `project.tags`: rendered as `Badge` chips.
- `repoHref` / `liveHref`: optional — omit either to hide that link.
