const NEUTRALS: Array<{ label: string; bg: string; fg: string }> = [
  { label: "white", bg: "var(--white)", fg: "var(--black)" },
  { label: "50", bg: "var(--gray-50)", fg: "var(--black)" },
  { label: "100", bg: "var(--gray-100)", fg: "var(--black)" },
  { label: "200", bg: "var(--gray-200)", fg: "var(--black)" },
  { label: "300", bg: "var(--gray-300)", fg: "var(--black)" },
  { label: "400", bg: "var(--gray-400)", fg: "var(--white)" },
  { label: "500", bg: "var(--gray-500)", fg: "var(--white)" },
  { label: "600", bg: "var(--gray-600)", fg: "var(--white)" },
  { label: "700", bg: "var(--gray-700)", fg: "var(--white)" },
  { label: "800", bg: "var(--gray-800)", fg: "var(--white)" },
  { label: "900", bg: "var(--gray-900)", fg: "var(--white)" },
  { label: "black", bg: "var(--black)", fg: "var(--white)" },
];

const PRIMARY = ["50", "100", "300", "500", "600", "700"].map((step) => ({
  label: step,
  bg: `var(--grape-${step})`,
}));

const SECONDARY = ["50", "100", "300", "500", "600", "700"].map((step) => ({
  label: step,
  bg: `var(--sandy-${step})`,
}));

const SEMANTIC = [
  { name: "surface-page", bg: "var(--surface-page)" },
  { name: "surface-sunken", bg: "var(--surface-sunken)" },
  { name: "surface-inverse", bg: "var(--surface-inverse)" },
  { name: "accent-primary", bg: "var(--accent-primary)" },
  { name: "accent-secondary", bg: "var(--accent-secondary)" },
  { name: "text-primary", bg: "var(--text-primary)" },
  { name: "text-secondary", bg: "var(--text-secondary)" },
  { name: "border-strong", bg: "var(--border-strong)" },
];

/**
 * The full color system — neutral ramp, primary (vintage grape) and secondary
 * (sandy brown) accents, and semantic surface/text/border aliases. The
 * authoritative reference for any color decision in this design system.
 */
export function ColorPalette() {
  return (
    <div className="ds-palette">
      <div className="ds-palette__section">
        <div className="ds-palette__label">Neutrals</div>
        <div className="ds-swatch-row">
          {NEUTRALS.map((s) => (
            <div
              key={s.label}
              className="ds-swatch"
              style={{ background: s.bg, color: s.fg }}
            >
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <div className="ds-palette__section">
        <div className="ds-palette__label">Primary — vintage grape</div>
        <div className="ds-swatch-row">
          {PRIMARY.map((s) => (
            <div key={s.label} className="ds-swatch" style={{ background: s.bg }}>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <div className="ds-palette__section">
        <div className="ds-palette__label">Secondary — sandy brown</div>
        <div className="ds-swatch-row">
          {SECONDARY.map((s) => (
            <div key={s.label} className="ds-swatch" style={{ background: s.bg }}>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <div className="ds-palette__section">
        <div className="ds-palette__label">Semantic tokens</div>
        <div className="ds-token-grid">
          {SEMANTIC.map((t) => (
            <div key={t.name} className="ds-token-cell">
              <div className="ds-token-chip" style={{ background: t.bg }} />
              <div className="ds-token-name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
