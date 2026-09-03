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
      className="flex w-full flex-col gap-8 pb-16 pt-10 sm:pb-24 sm:pt-14"
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
        Crafting digital experiences
        <br />
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
        className="flex flex-wrap items-center gap-4"
      >
        <a href="#contact" className="button-primary">
          Start a project
        </a>
        <a href="#work" className="button-secondary">
          View selected work
        </a>
      </motion.div>

      <motion.div
        variants={stagger}
        className="mt-4 flex flex-wrap gap-6 text-xs font-medium uppercase tracking-[0.2em] text-cream/50 sm:gap-10"
      >
        <span className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-gold/60" /> {STUDIO.availability}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-gold/60" /> {STUDIO.responseTime}
        </span>
      </motion.div>
    </motion.div>
  );
};