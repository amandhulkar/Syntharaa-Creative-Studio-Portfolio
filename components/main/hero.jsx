"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { HeroContent } from "@/components/sub/hero-content";
import { CASE_STUDIES } from "@/constants";
import { mediaReveal, shellReveal } from "@/lib/motion";

const FeaturedWork = () => {
  const reduceMotion = useReducedMotion();
  const featured = CASE_STUDIES.find((project) => project.featured) ?? CASE_STUDIES[0];

  if (!featured) return null;

  return (
    <motion.figure variants={mediaReveal} className="hero-media group relative min-h-[25rem] overflow-hidden sm:min-h-[34rem] lg:min-h-[44rem]">
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [-0.5, 0.35, -0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-motion absolute inset-[6%] overflow-hidden bg-surface shadow-[0_32px_90px_rgb(20_18_31/0.24)] sm:inset-[8%]"
      >
        <Image
          src={featured.cover}
          alt={featured.coverAlt}
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 48vw"
          className="object-cover transition duration-700 group-hover:scale-[1.015]"
        />
      </motion.div>

      <div aria-hidden className="absolute left-5 top-5 h-16 w-16 border-l border-t border-white/50 sm:left-8 sm:top-8" />
      <div aria-hidden className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-white/50 sm:bottom-8 sm:right-8" />

      <figcaption className="absolute inset-x-4 bottom-4 flex min-w-0 items-end justify-between gap-4 bg-ink/90 p-4 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-5">
        <div className="min-w-0">
          <p className="micro-label text-white/45">Featured study · {featured.year}</p>
          <p className="mt-2 truncate font-display text-xl font-medium tracking-[-0.04em] sm:text-2xl">{featured.name}</p>
        </div>
        <a href="#work" className="grid h-11 w-11 shrink-0 place-items-center border border-white/20 transition hover:border-accent hover:bg-accent" aria-label={`Explore ${featured.name}`}>
          <span aria-hidden>↘</span>
        </a>
      </figcaption>
    </motion.figure>
  );
};

export const Hero = () => (
  <section id="hero" aria-labelledby="hero-headline" className="section-pad hero-section">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={shellReveal}
      className="grid min-w-0 gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-stretch lg:gap-8 xl:gap-14"
    >
      <div className="min-w-0 py-4 sm:py-8 lg:flex lg:min-h-[44rem] lg:items-stretch lg:py-10">
        <HeroContent />
      </div>
      <FeaturedWork />
    </motion.div>
  </section>
);
