import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

function classes(variant: Variant, className?: string) {
  return ["ds-btn", `ds-btn--${variant}`, className].filter(Boolean).join(" ");
}

/** Primary call-to-action control. Renders a native `<button>`. */
export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={classes(variant, className)} {...props} />;
}

/** Button-styled anchor, for navigational actions. */
export function LinkButton({ variant = "primary", className, ...props }: LinkButtonProps) {
  return <a className={classes(variant, className)} {...props} />;
}
