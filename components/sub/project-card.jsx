"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { revealUp } from "@/lib/motion";

export const ProjectCard = ({
  category,
  title,
  project,
  description,
  solution,
  outcome,
  image,
  imageAlt,
}) => {
  return (
    <motion.article
      variants={revealUp}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-wine/10 bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          priority={false}
          loading="lazy"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/60 via-wine/10 to-transparent" />
        <div className="absolute left-3 right-3 top-3 sm:left-5 sm:right-auto sm:top-5 sm:max-w-[70%]">
          <span className="inline-flex max-w-full items-center rounded-full border border-cream/25 bg-wine/50 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-cream backdrop-blur sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
            {category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5">
          <span className="font-display text-xl font-medium text-cream/90 sm:text-2xl">
            {outcome.split(" ")[0]}
          </span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4 p-5 sm:p-7">
        <div className="flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <h3 className="min-w-0 font-display text-2xl font-medium text-ink">
            {title}
          </h3>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold sm:shrink-0 sm:tracking-[0.18em]">
            {project}
          </span>
        </div>
        <p className="text-base leading-relaxed text-muted">
          {description}
        </p>
        <div className="mt-auto rounded-xl border border-wine/10 bg-wine/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-maroon">
            Approach
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">
            {solution}
          </p>
        </div>
        <div className="flex min-w-0 flex-col items-stretch gap-4 border-t border-wine/10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <span className="min-w-0 text-sm font-medium text-muted">
            Outcome: <span className="text-ink">{outcome}</span>
          </span>
          <a
            href="#contact"
            className="button-light w-full text-xs sm:w-auto sm:shrink-0"
          >
            Start a similar project
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};