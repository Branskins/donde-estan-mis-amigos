import type { ReactNode } from "react";

/** Small uppercase pill for tags, statuses, and tech-stack chips. */
export function Badge({ children }: { children: ReactNode }) {
  return <span className="ds-badge">{children}</span>;
}
