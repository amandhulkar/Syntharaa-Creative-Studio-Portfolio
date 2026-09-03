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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-wine/10 bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/60 via-wine/10 to-transparent" />
        <div className="absolute left-5 top-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-wine/40 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur">
            {category}
          </span>
        </div>
        <div className="absolute right-5 top-5">
          <span className="font-display text-2xl font-medium text-cream/80">
            {outcome.split(" ")[0]}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-7">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-medium text-ink">
            {title}
          </h3>
          <span className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-gold">
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
        <div className="flex items-center justify-between gap-3 border-t border-wine/10 pt-4">
          <span className="text-sm font-medium text-muted">
            Outcome: <span className="text-ink">{outcome}</span>
          </span>
          <a
            href="#contact"
            className="button-light inline-flex items-center gap-2 text-xs"
          >
            Start a similar project
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};