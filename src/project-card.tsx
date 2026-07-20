import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { Badge } from "./badge";

export type Project = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  repoHref?: string;
  liveHref?: string;
};

/** Project showcase card — title, description, tag chips, and repo/live links. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="ds-card">
      <h3 className="ds-card__title">{project.title}</h3>
      <p className="ds-card__desc">{project.description}</p>
      <div className="ds-card__tags">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <div className="ds-card__links">
        {project.repoHref && (
          <a href={project.repoHref} className="ds-card__link">
            <FolderGit2 size={16} strokeWidth={2} />
            repo
          </a>
        )}
        {project.liveHref && (
          <a href={project.liveHref} className="ds-card__link">
            <ArrowUpRight size={16} strokeWidth={2} />
            live
          </a>
        )}
      </div>
    </article>
  );
}
