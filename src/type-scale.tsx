const SCALE = [
  { tag: "display/64", fontSize: "var(--fs-display)", fontWeight: "var(--fw-bold)", sample: "Aa 01" },
  { tag: "h1/40", fontSize: "var(--fs-h1)", fontWeight: "var(--fw-bold)", sample: "Aa 01" },
  { tag: "h2/32", fontSize: "var(--fs-h2)", fontWeight: "var(--fw-semibold)", sample: "Aa 01" },
  { tag: "h3/24", fontSize: "var(--fs-h3)", fontWeight: "var(--fw-semibold)", sample: "Aa 01" },
  {
    tag: "body/16",
    fontSize: "var(--fs-body)",
    fontWeight: "var(--fw-regular)",
    sample: "The quick brown fox jumps over the lazy dog.",
  },
  {
    tag: "small/14",
    fontSize: "var(--fs-small)",
    fontWeight: "var(--fw-regular)",
    sample: "The quick brown fox jumps over the lazy dog.",
    muted: true,
  },
];

/**
 * The full type scale (display through small) plus the uppercase micro-label
 * idiom used for eyebrows and section tags. JetBrains Mono is the only
 * family in this system — hierarchy comes from size/weight/tracking here,
 * never a second typeface.
 */
export function TypeScale() {
  return (
    <div className="ds-typescale">
      {SCALE.map((row) => (
        <div className="ds-typescale__row" key={row.tag}>
          <div className="ds-typescale__tag">{row.tag}</div>
          <div
            style={{
              fontSize: row.fontSize,
              fontWeight: row.fontWeight,
              color: row.muted ? "var(--text-secondary)" : undefined,
            }}
          >
            {row.sample}
          </div>
        </div>
      ))}

      <div className="ds-typescale__labels">
        <div className="ds-label">Selected Work</div>
        <div className="ds-label ds-label--accent">Now Building</div>
      </div>
    </div>
  );
}
