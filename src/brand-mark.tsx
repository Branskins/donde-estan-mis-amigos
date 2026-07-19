export type BrandMarkProps = {
  /** The wordmark text. Defaults to the placeholder until a real name/mark is supplied. */
  name?: string;
};

/**
 * The wordmark treatment — full-bleed black surface, name + trailing accent
 * underscore, and a meta line. No logo asset exists for this system;
 * never draw one from scratch — this wordmark IS the brand mark.
 */
export function BrandMark({ name = "YOUR_NAME" }: BrandMarkProps) {
  return (
    <div className="ds-brandmark">
      <div className="ds-brandmark__wordmark">
        {name}
        <span>_</span>
      </div>
      <div className="ds-brandmark__meta">Developer — Portfolio v1.0</div>
    </div>
  );
}
