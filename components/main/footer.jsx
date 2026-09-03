import Link from "next/link";

import { STUDIO } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-wine/10 bg-cream"
      aria-label="Footer"
    >
      <div className="container-shell flex flex-col gap-10 py-12">
        <div className="flex flex-col items-start gap-4">
          <Link
            href="#main-content"
            aria-label={`${STUDIO.name} home`}
            className="inline-flex items-center gap-2"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 bg-wine text-cream">
              <span className="font-display text-[1.1rem] font-bold leading-none">
                S
              </span>
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-ink">
              {STUDIO.name}
            </span>
          </Link>
          <p className="max-w-sm text-base leading-relaxed text-muted">
            An independent creative studio shaping memorable brands, digital
            products, and campaigns.
          </p>
        </div>

        <nav
          aria-label="Footer sections"
          className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {[
            {
              label: "Sections",
              links: [
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Process", href: "#process" },
                { label: "About", href: "#about" },
              ],
            },
            {
              label: "Contact",
              links: [
                { label: STUDIO.email, href: `mailto:${STUDIO.email}` },
                { label: STUDIO.availability, href: "#contact" },
              ],
            },
          ].map((column) => (
            <div key={column.label} className="flex min-w-0 flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-maroon">
                {column.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label} className="min-w-0">
                    <Link
                      href={link.href}
                      className="text-base text-muted transition [overflow-wrap:anywhere] hover:text-maroon"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-wine/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-col items-start gap-2 text-sm text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <span className="[overflow-wrap:anywhere]">
              &copy; {currentYear} {STUDIO.legalName}. All rights reserved.
            </span>
            <span
              aria-hidden
              className="hidden h-1 w-1 shrink-0 rounded-full bg-wine/30 sm:block"
            />
            <span className="[overflow-wrap:anywhere]">
              Built with Next.js, Tailwind CSS, and Framer Motion.
            </span>
          </div>

          {/* <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-wine/20 text-maroon transition hover:border-gold/60 hover:text-gold"
              >
                <span className="sr-only">{link.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};