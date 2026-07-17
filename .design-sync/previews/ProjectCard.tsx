import { ProjectCard } from "@portfolio/ui";

export function WithRepoAndLive() {
  return (
    <div style={{ maxWidth: 320 }}>
      <ProjectCard
        project={{
          index: "01",
          title: "Task Runner",
          description:
            "A lightweight CLI for running project scripts in parallel with live output.",
          tags: ["typescript", "node"],
          repoHref: "https://github.com/example/task-runner",
          liveHref: "https://task-runner.example.com",
        }}
      />
    </div>
  );
}

export function RepoOnly() {
  return (
    <div style={{ maxWidth: 320 }}>
      <ProjectCard
        project={{
          index: "02",
          title: "API Gateway",
          description:
            "Internal service mesh gateway with request routing and auth middleware.",
          tags: ["go", "grpc"],
          repoHref: "https://github.com/example/api-gateway",
        }}
      />
    </div>
  );
}

export function ManyTags() {
  return (
    <div style={{ maxWidth: 320 }}>
      <ProjectCard
        project={{
          index: "03",
          title: "Design System Sync",
          description:
            "Converts a component library into a format a design agent can build with.",
          tags: ["react", "esbuild", "playwright", "cli"],
          repoHref: "https://github.com/example/ds-sync",
          liveHref: "https://ds-sync.example.com",
        }}
      />
    </div>
  );
}
