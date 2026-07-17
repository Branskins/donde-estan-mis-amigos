import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  FolderGit2,
  Github,
  Mail,
  Terminal,
  X,
  type LucideIcon,
} from "lucide-react";

const ICONS: Array<{ Icon: LucideIcon; name: string }> = [
  { Icon: Terminal, name: "terminal" },
  { Icon: Github, name: "github" },
  { Icon: ArrowUpRight, name: "arrow-up-right" },
  { Icon: Mail, name: "mail" },
  { Icon: FileText, name: "file-text" },
  { Icon: FolderGit2, name: "folder-git-2" },
  { Icon: ExternalLink, name: "external-link" },
  { Icon: X, name: "x" },
];

/**
 * The icon system: Lucide, 2px stroke, currentColor, outline only — no
 * fills, duotone, or emoji. This is the full set used across the design
 * system today; pull additional Lucide icons with the same stroke-width
 * rather than introducing a second icon style.
 */
export function Iconography() {
  return (
    <div className="ds-icons">
      <div className="ds-icons__grid">
        {ICONS.map(({ Icon, name }) => (
          <div className="ds-icons__cell" key={name}>
            <Icon size={20} strokeWidth={2} />
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className="ds-label">2px stroke, currentColor, 20px</div>
    </div>
  );
}
