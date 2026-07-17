import { Nav } from "@portfolio/ui";

const items = [
  { index: "01", label: "index", href: "/" },
  { index: "02", label: "projects", href: "/projects" },
  { index: "03", label: "blog", href: "/blog" },
  { index: "04", label: "cv", href: "/cv" },
];

export function Default() {
  return (
    <Nav
      brand={
        <>
          YOUR_NAME<span>_</span>
        </>
      }
      items={items}
      activeHref="/"
    />
  );
}

export function ProjectsActive() {
  return (
    <Nav
      brand={
        <>
          YOUR_NAME<span>_</span>
        </>
      }
      items={items}
      activeHref="/projects"
    />
  );
}
