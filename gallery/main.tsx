import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Badge, Button, Footer, LinkButton, Nav, ProjectCard } from "../src";
import "../src/styles.css";
import "./gallery.css";

const navItems = [
  { index: "01", label: "index", href: "/" },
  { index: "02", label: "projects", href: "/projects" },
  { index: "03", label: "blog", href: "/blog" },
  { index: "04", label: "cv", href: "/cv" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="gallery-section">
      <h2 className="gallery-section__title">{title}</h2>
      <div className="gallery-section__body">{children}</div>
    </section>
  );
}

function Gallery() {
  return (
    <div className="gallery">
      <h1 className="gallery__title">@portfolio/ui</h1>
      <p className="gallery__subtitle">
        Local visual sanity check — every component, rendered together. Not deployed anywhere.
      </p>

      <Section title="Button">
        <div className="gallery-row">
          <Button variant="primary">Save changes</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="ghost">Learn more</Button>
          <Button variant="primary" disabled>
            Processing…
          </Button>
        </div>
      </Section>

      <Section title="LinkButton">
        <div className="gallery-row">
          <LinkButton href="#" variant="primary">
            View projects
          </LinkButton>
          <LinkButton href="#" variant="secondary">
            View CV
          </LinkButton>
          <LinkButton href="#" variant="ghost">
            Read the blog
          </LinkButton>
        </div>
      </Section>

      <Section title="Badge">
        <div className="gallery-row">
          <Badge>typescript</Badge>
          <Badge>next.js</Badge>
          <Badge>node</Badge>
          <Badge>postgres</Badge>
        </div>
      </Section>

      <Section title="ProjectCard">
        <div className="gallery-grid">
          <ProjectCard
            project={{
              index: "01",
              title: "Task Runner",
              description:
                "A lightweight CLI for running project scripts in parallel with live output.",
              tags: ["typescript", "node"],
              repoHref: "#",
              liveHref: "#",
            }}
          />
          <ProjectCard
            project={{
              index: "02",
              title: "API Gateway",
              description:
                "Internal service mesh gateway with request routing and auth middleware.",
              tags: ["go", "grpc"],
              repoHref: "#",
            }}
          />
        </div>
      </Section>

      <Section title="Nav">
        <Nav
          brand={
            <>
              YOUR_NAME<span>_</span>
            </>
          }
          items={navItems}
          activeHref="/projects"
        />
      </Section>

      <Section title="Footer">
        <Footer />
      </Section>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
);
