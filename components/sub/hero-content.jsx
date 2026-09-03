"use client";

import { motion } from "framer-motion";

import { STUDIO } from "@/constants";
import { revealLeft, revealUp, stagger } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="flex w-full min-w-0 flex-col gap-6 pb-12 pt-24 sm:gap-8 sm:pb-24 sm:pt-28"
    >
      <motion.div variants={revealUp}>
        <span className="eyebrow text-cream/70">
          {STUDIO.name} — Creative Studio
        </span>
      </motion.div>

      <motion.h1
        id="hero-headline"
        variants={revealLeft}
        className="display-title text-cream"
      >
        Crafting digital experiences{" "}
        <br className="hidden sm:block" />
        <span className="text-gold">people remember.</span>
      </motion.h1>

      <motion.p
        variants={revealLeft}
        className="max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
      >
        We help ambitious brands shape clear identities, thoughtful products,
        and campaigns that feel as good as they look — from first impression
        through launch and beyond.
      </motion.p>

      <motion.div
        variants={revealUp}
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
      >
        <a href="#contact" className="button-primary w-full sm:w-auto">
          Start a project
        </a>
        <a href="#work" className="button-secondary w-full sm:w-auto">
          View selected work
        </a>
      </motion.div>

      <motion.div
        variants={stagger}
        className="mt-2 flex min-w-0 flex-col gap-3 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-cream/55 sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-10 sm:text-xs sm:tracking-[0.2em]"
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="h-px w-5 shrink-0 bg-gold/60 sm:w-6" />
          <span>{STUDIO.availability}</span>
        </span>
        <span className="flex min-w-0 items-center gap-2">
          <span className="h-px w-5 shrink-0 bg-gold/60 sm:w-6" />
          <span>{STUDIO.responseTime}</span>
        </span>
      </motion.div>
    </motion.div>
  );
};