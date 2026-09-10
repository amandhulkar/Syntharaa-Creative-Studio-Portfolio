import Link from "next/link";

import { NAV_LINKS, STUDIO } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink px-3 py-8 text-white sm:px-6 sm:py-10" aria-label="Footer">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-9 border-b border-white/15 pb-9 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="min-w-0">
            <p className="micro-label text-white/40">Have a project in mind?</p>
            <a href={`mailto:${STUDIO.email}`} className="mt-4 block max-w-full font-display text-[clamp(2rem,5.5vw,5.6rem)] font-medium leading-[0.94] tracking-[-0.06em] text-white [overflow-wrap:anywhere] transition hover:text-accent">Let’s talk.</a>
            <a href={`mailto:${STUDIO.email}`} className="mt-5 inline-block text-sm text-white/60 underline decoration-white/20 underline-offset-4 [overflow-wrap:anywhere] hover:text-white">{STUDIO.email}</a>
          </div>
          <nav aria-label="Footer sections" className="lg:justify-self-end">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap lg:max-w-sm lg:justify-end">
              {NAV_LINKS.map((link) => (
                <li key={link.href}><Link href={link.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-white/55 transition hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid gap-7 py-7 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="#main-content" aria-label={`${STUDIO.name} home`} className="inline-flex items-center gap-3 self-start font-display text-sm font-bold uppercase tracking-[0.16em]">
            <span className="grid h-9 w-9 place-items-center border border-white/25">S</span>
            {STUDIO.name}
          </Link>
          <div><p className="micro-label text-white/35">Availability</p><p className="mt-2 text-sm text-white/65">{STUDIO.availability}</p></div>
          <div><p className="micro-label text-white/35">Location</p><p className="mt-2 text-sm text-white/65">{STUDIO.location}</p></div>
          <div><p className="micro-label text-white/35">Response</p><p className="mt-2 text-sm text-white/65">{STUDIO.responseTime}</p></div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 pt-5 text-[0.62rem] font-bold uppercase tracking-[0.11em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} {STUDIO.legalName}</p>
          <p>Strategy · Identity · Digital · Motion</p>
        </div>
      </div>
    </footer>
  );
};
