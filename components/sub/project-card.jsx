"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

const padNumber = (value) => String(value).padStart(2, "0");

export const ProjectCard = ({ project, position, total, priority = false }) => {
  const projectHref = project.url || "#contact";
  const projectAction = project.url ? "View live project" : "Discuss a similar project";

  return (
    <motion.article variants={fadeUp} className="project-card md:hidden">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
        <span className="micro-label text-ink/45">{padNumber(position)} / {padNumber(total)}</span>
        {project.status && <span className="micro-label text-accent">{project.status}</span>}
      </div>

      <div className="relative mt-4 aspect-[8/5] overflow-hidden bg-canvas">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="pt-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="micro-label text-accent">{project.type}</p>
          <p className="text-xs font-semibold text-muted">{project.year}</p>
        </div>
        <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.05em]">{project.name}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-6 grid gap-5 border-t border-line pt-5">
          <div>
            <dt className="micro-label">Challenge</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{project.challenge}</dd>
          </div>
          <div>
            <dt className="micro-label">Approach</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{project.approach}</dd>
          </div>
          {project.result && (
            <div>
              <dt className="micro-label">Result</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{project.result}</dd>
            </div>
          )}
        </dl>

        {project.services?.length > 0 && (
          <ul aria-label={`${project.name} services`} className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.services.map((item) => <li key={item} className="text-xs font-semibold text-ink/60">{item}</li>)}
          </ul>
        )}

        <a
          href={projectHref}
          target={project.url ? "_blank" : undefined}
          rel={project.url ? "noreferrer" : undefined}
          className="mt-6 flex min-h-12 items-center justify-between border-t border-line pt-4 text-sm font-bold"
        >
          {projectAction} <span aria-hidden>↗</span>
        </a>
      </div>
    </motion.article>
  );
};
