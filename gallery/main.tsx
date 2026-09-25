import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import {
  Badge,
  BrandMark,
  Button,
  ColorPalette,
  Footer,
  Iconography,
  LinkButton,
  Nav,
  ProjectCard,
  RadiusShadow,
  SpacingScale,
  TypeScale,
} from "../src";
import "../src/styles.css";
import "../drafts/project-card-dark.css";
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

      <div className="gallery-group">
        <h2 className="gallery-group__title">Foundations</h2>
        <p className="gallery-group__subtitle">
          Not layout components — the rendered, authoritative source for this system's colors,
          type, spacing, radius/shadow, icons, and brand mark. Check here before guessing a
          value.
        </p>

        <Section title="ColorPalette">
          <ColorPalette />
        </Section>

        <Section title="TypeScale">
          <TypeScale />
        </Section>

        <Section title="Iconography">
          <Iconography />
        </Section>

        <Section title="SpacingScale">
          <SpacingScale />
        </Section>

        <Section title="RadiusShadow">
          <RadiusShadow />
        </Section>

        <Section title="BrandMark">
          <BrandMark />
        </Section>
      </div>

      <div className="gallery-group">
        <h2 className="gallery-group__title">Components</h2>

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

      <div className="gallery-group">
        <h2 className="gallery-group__title">Drafts</h2>
        <p className="gallery-group__subtitle">
          Exploratory work-in-progress, not shipped from <code>src/</code>. Kept here for
          visibility while still a concept — see <code>canvas/</code> for the live sandbox.
        </p>

        <Section title="ProjectCard — dark, hover-extend links">
          <article className="ds-card ds-card--dark ds-card--links-slide">
            <h3 className="ds-card__title">Donde Estan Mis Amigos</h3>
            <p className="ds-card__desc">
              Real-time map for finding friends nearby, built with a focus on fast location
              updates and a minimal, distraction-free UI.
            </p>
            <div className="ds-card__tags">
              {["react", "mapbox", "websockets"].map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div className="ds-card__extend ds-card__extend--bleed">
              <div className="ds-card__extend-panel ds-card__extend-panel--bleed">
                <a href="#" className="ds-card__reveal-link">
                  <FolderGit2 size={16} strokeWidth={2} />
                  repo
                </a>
                <a href="#" className="ds-card__reveal-link">
                  <ArrowUpRight size={16} strokeWidth={2} />
                  live
                </a>
              </div>
            </div>
          </article>
        </Section>

        <Section title="ProjectCard — dark, hover-reveal plate">
          <div className="ds-card-stack">
            <div className="ds-card-stack__backing">
              <div className="ds-card-stack__backing-links">
                <a href="#" className="ds-card__reveal-link">
                  <FolderGit2 size={16} strokeWidth={2} />
                  repo
                </a>
                <a href="#" className="ds-card__reveal-link">
                  <ArrowUpRight size={16} strokeWidth={2} />
                  live
                </a>
              </div>
            </div>
            <article className="ds-card ds-card--dark">
              <h3 className="ds-card__title">Donde Estan Mis Amigos</h3>
              <p className="ds-card__desc">
                Real-time map for finding friends nearby, built with a focus on fast location
                updates and a minimal, distraction-free UI.
              </p>
              <div className="ds-card__tags">
                {["react", "mapbox", "websockets"].map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </article>
          </div>
        </Section>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
);
