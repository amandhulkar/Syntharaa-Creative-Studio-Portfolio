"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { NAV_LINKS, STUDIO } from "@/constants";
import { cn } from "@/lib/utils";
import { fadeUp, instantTransition, staggerFast, transitionFast } from "@/lib/motion";

const menuLinks = [...NAV_LINKS];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#work");
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuId = useId();
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const shouldRestoreFocusRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const uiTransition = reduceMotion ? instantTransition : transitionFast;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(available > 0 ? Math.min(window.scrollY / available, 1) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = menuLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -58%", threshold: [0.01, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      if (shouldRestoreFocusRef.current) {
        menuButtonRef.current?.focus();
        shouldRestoreFocusRef.current = false;
      }
      return;
    }

    shouldRestoreFocusRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => firstMenuLinkRef.current?.focus());
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const onDesktopChange = (event) => {
      if (event.matches) {
        shouldRestoreFocusRef.current = false;
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onDesktopChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onDesktopChange);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-5 sm:pt-3"
    >
      <div
        className={cn(
          "relative mx-auto max-w-[1480px] overflow-hidden border border-line bg-surface/95 text-ink backdrop-blur-xl transition-shadow duration-300",
          isScrolled
            ? "shadow-[0_10px_35px_rgb(15_17_20/0.10)]"
            : "shadow-[0_6px_24px_rgb(15_17_20/0.06)]",
        )}
      >
        <div className="flex h-14 items-center gap-3 px-3 sm:h-16 sm:px-4">
          <Link
            href="#main-content"
            aria-label={`${STUDIO.name} home`}
            onClick={closeMenu}
            className="group flex min-w-0 shrink-0 items-center gap-2.5"
          >
            <span className="relative grid h-8 w-8 place-items-center border border-ink bg-ink font-display text-sm font-bold text-white transition">
              S
              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="hidden font-display text-xs font-bold uppercase tracking-[0.17em] sm:block">
              {STUDIO.name}
            </span>
          </Link>

          <span className="hidden h-6 w-px bg-line lg:block" />

          <nav aria-label="Primary" className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex">
            {menuLinks.map((link) => {
              const active = activeHref === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "relative px-3 py-2 font-display text-[0.64rem] font-bold uppercase tracking-[0.11em] transition-colors",
                    active ? "text-ink" : "text-ink/55 hover:text-ink",
                  )}
                >
                  {link.label}
                  {active && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <span className="hidden items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.11em] text-ink/55 xl:flex">
              <span className="status-dot status-pulse" /> Available
            </span>
            <Link href="#contact" className="button-primary min-h-10 px-4 py-2 text-xs">
              Start a project <span aria-hidden>↗</span>
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="ml-auto grid h-11 w-11 place-items-center rounded-lg border border-line bg-canvas text-ink md:hidden"
          >
            <span aria-hidden className="relative block h-3.5 w-5">
              <motion.span animate={isMobileMenuOpen ? { rotate: 45, top: "50%" } : { rotate: 0, top: 1 }} transition={uiTransition} className="absolute left-0 h-px w-5 bg-current" />
              <motion.span animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} transition={uiTransition} className="absolute left-0 top-1/2 h-px w-5 bg-current" />
              <motion.span animate={isMobileMenuOpen ? { rotate: -45, top: "50%" } : { rotate: 0, top: 13 }} transition={uiTransition} className="absolute left-0 h-px w-5 bg-current" />
            </span>
          </button>
        </div>

        <motion.span
          aria-hidden
          animate={{ scaleX: scrollProgress }}
          transition={reduceMotion ? instantTransition : { duration: 0.12 }}
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
        />

        <motion.div id={menuId} initial="hidden" animate={isMobileMenuOpen ? "visible" : "hidden"} variants={staggerFast} className="md:hidden">
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={uiTransition} className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-surface text-ink">
              <motion.nav aria-label="Mobile primary" variants={staggerFast} className="flex flex-col p-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <div className="mb-2 flex items-center justify-between rounded-lg bg-canvas px-3 py-3 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-muted">
                  <span>Studio navigation</span>
                  <span className="flex items-center gap-2"><span className="status-dot" /> Available</span>
                </div>
                {menuLinks.map((link, index) => (
                  <motion.div key={link.href} variants={fadeUp} className="border-b border-line">
                    <Link
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={activeHref === link.href ? "location" : undefined}
                      className="flex min-h-14 items-center justify-between rounded-md px-3 font-display text-lg font-medium transition hover:bg-canvas"
                    >
                      <span><span className="mr-4 text-xs text-accent">0{index + 1}</span>{link.label}</span>
                      <span aria-hidden>↘</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={fadeUp} className="pt-3">
                  <Link href="#contact" onClick={closeMenu} className="button-primary w-full">Start a project <span aria-hidden>↗</span></Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
};
