"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { STUDIO, NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { stagger, revealUp, reducedMotion } from "@/lib/motion";

const menuLinks = [...NAV_LINKS];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const shouldRestoreFocusRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    const focusFrame = window.requestAnimationFrame(() => {
      firstMenuLinkRef.current?.focus();
    });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={false}
      animate={{ backdropFilter: isScrolled ? "blur(18px)" : "blur(0px)" }}
      transition={reducedMotion}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b transition-colors duration-300",
        isScrolled
          ? "border-wine/20 bg-cream/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-shell flex h-16 items-center justify-between sm:h-20">
        <Link
          href="#main-content"
          aria-label={`${STUDIO.name} home`}
          className="group inline-flex items-center gap-2"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 bg-wine text-cream"
          >
            <span className="font-display text-[1.1rem] font-bold leading-none tracking-tight">
              S
            </span>
          </span>
          <span
            className={cn(
              "hidden text-sm font-bold uppercase tracking-[0.28em] transition-colors duration-300 sm:inline",
              isScrolled ? "text-ink" : "text-cream",
            )}
          >
            {STUDIO.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative py-1 text-sm font-semibold transition-colors duration-300",
                isScrolled
                  ? "text-ink/80 hover:text-maroon"
                  : "text-cream/90 hover:text-gold",
              )}
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="#contact" className="button-primary">
            Start a project
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls={menuId}
          onClick={toggleMenu}
          className="grid h-11 w-11 place-items-center rounded-full border border-wine/20 bg-cream text-maroon md:hidden"
        >
          <span className="sr-only">
            {isMobileMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span aria-hidden className="relative block h-3 w-5">
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, top: "50%", y: "-50%" }
                  : { rotate: 0, top: "2px", y: 0 }
              }
              transition={reducedMotion}
              className="absolute left-0 h-0.5 w-5 bg-current"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={reducedMotion}
              className="absolute left-0 top-1/2 h-0.5 w-5 bg-current"
            />
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, top: "50%", y: "-50%" }
                  : { rotate: 0, bottom: "2px", y: 0 }
              }
              transition={reducedMotion}
              className="absolute bottom-0 left-0 h-0.5 w-5 bg-current"
            />
          </span>
        </button>
      </div>

      <motion.div
        id={menuId}
        initial="hidden"
        animate={isMobileMenuOpen ? "visible" : "hidden"}
        variants={stagger}
        className="md:hidden"
      >
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={reducedMotion}
            className="border-t border-wine/15 bg-cream/95 backdrop-blur-md"
          >
            <motion.nav
              aria-label="Mobile primary"
              variants={stagger}
              className="container-shell flex flex-col items-stretch gap-1 py-6"
            >
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={revealUp}
                  className="overflow-hidden rounded-xl"
                >
                  <Link
                    ref={index === 0 ? firstMenuLinkRef : undefined}
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition hover:bg-wine/5 hover:text-maroon"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={revealUp} className="pt-3">
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="button-primary w-full"
                >
                  Start a project
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
};
