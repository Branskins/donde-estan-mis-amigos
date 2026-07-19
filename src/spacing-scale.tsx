const STEPS = ["1", "2", "3", "4", "6", "8", "12", "16"];

/**
 * The 4px spacing scale used for all layout rhythm — space-1 through
 * space-16. Authoritative reference for any spacing decision; use the
 * `var(--space-*)` token shown here directly, never a raw pixel value.
 */
export function SpacingScale() {
  return (
    <div className="ds-spacing">
      {STEPS.map((step) => (
        <div className="ds-spacing__row" key={step}>
          <div className="ds-spacing__tag">space-{step}</div>
          <div className="ds-spacing__bar" style={{ width: `var(--space-${step})` }} />
        </div>
      ))}
    </div>
  );
}
