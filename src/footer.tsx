import { Github, Mail, Terminal } from "lucide-react";

export type FooterProps = {
  year?: number;
};

/** Inverse (black) site footer with meta line and icon links. */
export function Footer({ year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="ds-footer">
      <div className="ds-footer__inner">
        <div className="ds-footer__meta">
          Developer &nbsp;—&nbsp; Portfolio v1.0 &nbsp;—&nbsp; {year}
        </div>
        <ul className="ds-footer__links">
          <li>
            <a href="https://github.com" className="ds-footer__link">
              <Github size={16} strokeWidth={2} />
              github
            </a>
          </li>
          <li>
            <a href="mailto:hello@example.com" className="ds-footer__link">
              <Mail size={16} strokeWidth={2} />
              mail
            </a>
          </li>
          <li>
            <a href="/cv" className="ds-footer__link">
              <Terminal size={16} strokeWidth={2} />
              cv
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
