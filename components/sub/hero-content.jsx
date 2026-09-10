"use client";

import { motion } from "framer-motion";

import { STUDIO, STUDIO_COPY } from "@/constants";
import { fadeUp, lineReveal, staggerFast, staggerSection } from "@/lib/motion";

const RevealLine = ({ children, accent = false }) => (
  <span className="block overflow-hidden pb-[0.09em]">
    <motion.span variants={lineReveal} className={`block ${accent ? "text-accent" : ""}`}>
      {children}
    </motion.span>
  </span>
);

export const HeroContent = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerSection}
    className="flex h-full min-w-0 flex-col"
  >
    <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <span className="eyebrow text-accent">{STUDIO_COPY.eyebrow}</span>
      <span className="text-xs font-semibold text-muted">Strategy · Design · Motion</span>
    </motion.div>

    <motion.h1
      id="hero-headline"
      variants={staggerFast}
      className="display-title mt-8 max-w-[12ch] sm:mt-12"
    >
      {STUDIO_COPY.headline.map((line, index) => (
        <RevealLine key={line} accent={index === STUDIO_COPY.headline.length - 1}>
          {line}
        </RevealLine>
      ))}
    </motion.h1>

    <motion.p
      variants={fadeUp}
      className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
    >
      {STUDIO_COPY.introduction}
    </motion.p>

    <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href="#work" className="button-primary w-full sm:w-auto">
        Explore selected work <span aria-hidden>↘</span>
      </a>
      <a href="#contact" className="button-light w-full sm:w-auto">
        Start a conversation <span aria-hidden>↗</span>
      </a>
    </motion.div>

    <motion.dl
      variants={staggerFast}
      className="mt-10 grid gap-5 border-t border-line pt-6 sm:mt-auto sm:grid-cols-3"
    >
      {[
        ["Availability", STUDIO.availability],
        ["Based", STUDIO.location],
        ["Response", STUDIO.responseTime],
      ].map(([label, value]) => (
        <motion.div key={label} variants={fadeUp} className="min-w-0">
          <dt className="micro-label text-ink/40">{label}</dt>
          <dd className="mt-2 text-sm font-semibold leading-snug text-ink/75">{value}</dd>
        </motion.div>
      ))}
    </motion.dl>
  </motion.div>
);
