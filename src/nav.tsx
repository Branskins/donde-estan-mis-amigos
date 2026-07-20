import type { ComponentType, ReactNode } from "react";

export type NavItem = {
  index: string;
  label: string;
  href: string;
};

export type NavLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

function DefaultNavLink({ href, className, children }: NavLinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export type NavProps = {
  /** Brand mark rendered at the left, links to "/". */
  brand: ReactNode;
  items: NavItem[];
  /** href of the current page, used to highlight the active link. */
  activeHref?: string;
  /** Custom link renderer (e.g. a framework's routing Link). Defaults to a plain anchor. */
  linkComponent?: ComponentType<NavLinkProps>;
};

/** Sticky top navigation with an active-link underline. */
export function Nav({ brand, items, activeHref, linkComponent }: NavProps) {
  const Link = linkComponent ?? DefaultNavLink;

  return (
    <nav className="ds-nav">
      <div className="ds-nav__inner">
        <Link href="/" className="ds-nav__mark">
          {brand}
        </Link>
        <ul className="ds-nav__links">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  item.href === activeHref
                    ? "ds-nav__link ds-nav__link--active"
                    : "ds-nav__link"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
