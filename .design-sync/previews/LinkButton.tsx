import { LinkButton } from "@portfolio/ui";

export function Primary() {
  return (
    <LinkButton href="/projects" variant="primary">
      View projects
    </LinkButton>
  );
}

export function Secondary() {
  return (
    <LinkButton href="/cv" variant="secondary">
      View CV
    </LinkButton>
  );
}

export function Ghost() {
  return (
    <LinkButton href="/blog" variant="ghost">
      Read the blog
    </LinkButton>
  );
}
