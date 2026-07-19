import type { CSSProperties } from "react";

const BOXES: Array<{ label: string; style: CSSProperties }> = [
  {
    label: "radius-none",
    style: { border: "var(--border-hairline) solid var(--border-strong)", borderRadius: "var(--radius-none)" },
  },
  {
    label: "radius-xs",
    style: { border: "var(--border-hairline) solid var(--border-strong)", borderRadius: "var(--radius-xs)" },
  },
  {
    label: "radius-sm",
    style: { border: "var(--border-hairline) solid var(--border-strong)", borderRadius: "var(--radius-sm)" },
  },
  {
    label: "border-thick",
    style: { border: "var(--border-thick) solid var(--border-strong)", borderRadius: "var(--radius-sm)" },
  },
  { label: "shadow-sm", style: { boxShadow: "var(--shadow-sm)", borderRadius: "var(--radius-sm)" } },
  { label: "shadow-md", style: { boxShadow: "var(--shadow-md)", borderRadius: "var(--radius-sm)" } },
];

/**
 * Radius, border, and shadow reference — sharp corners by default, hairline
 * borders doing most of the structural work, shadows reserved for true
 * elevation. Authoritative reference for any of these three decisions.
 */
export function RadiusShadow() {
  return (
    <div className="ds-radius">
      {BOXES.map((box) => (
        <div className="ds-radius__box" key={box.label} style={box.style}>
          {box.label}
        </div>
      ))}
    </div>
  );
}
