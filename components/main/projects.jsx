"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { ProjectCard } from "@/components/sub/project-card";
import { CASE_STUDIES, STUDIO_COPY } from "@/constants";
import { fadeUp, instantTransition, previewSwap, staggerSection, viewportOnce } from "@/lib/motion";

const padNumber = (value) => String(value).padStart(2, "0");

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const active = CASE_STUDIES[activeIndex];
  const total = CASE_STUDIES.length;

  if (!active) return null;

  const selectProject = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section id="work" aria-labelledby="work-heading" className="section-pad border-t border-line">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerSection}>
        <motion.div variants={fadeUp} className="section-intro">
          <div>
            <span className="eyebrow text-accent">Selected work</span>
            <h2 id="work-heading" className="section-title mt-5 max-w-[10ch]">Ideas made visible, useful, and alive.</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{STUDIO_COPY.workIntroduction}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 hidden border-y border-line md:grid md:grid-cols-[minmax(14rem,0.62fr)_minmax(0,1.38fr)] lg:mt-16 xl:grid-cols-[minmax(18rem,0.58fr)_minmax(0,1.42fr)]">
          <div className="flex min-w-0 flex-col border-r border-line py-3">
            <p className="micro-label px-4 py-4 text-ink/40 lg:px-6">Select a project</p>
            <div className="flex-1">
              {CASE_STUDIES.map((project, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={project.slug}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => selectProject(index)}
                    onFocus={() => selectProject(index)}
                    className={`group relative grid min-h-[7rem] w-full grid-cols-[2rem_minmax(0,1fr)_auto] items-start gap-3 border-t border-line px-4 py-5 text-left transition-colors lg:px-6 ${selected ? "bg-ink text-white" : "hover:bg-surface"}`}
                  >
                    {selected && !reduceMotion && <motion.span layoutId="project-active" className="absolute inset-y-0 left-0 w-1 bg-accent" />}
                    <span className={`font-display text-xs font-bold ${selected ? "text-white/45" : "text-accent"}`}>{padNumber(index + 1)}</span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg font-medium tracking-[-0.035em] lg:text-xl">{project.name}</span>
                      <span className={`mt-2 block text-[0.66rem] font-bold uppercase tracking-[0.1em] ${selected ? "text-white/45" : "text-muted"}`}>{project.type}</span>
                    </span>
                    <span aria-hidden className={`transition-transform group-hover:translate-x-1 ${selected ? "text-accent" : "text-muted"}`}>→</span>
                  </button>
                );
              })}
            </div>
            <div className="border-t border-line px-4 py-5 lg:px-6">
              <p className="text-sm leading-relaxed text-muted">Have a project with a similar ambition?</p>
              <a href="#contact" className="mt-3 inline-flex min-h-11 items-center gap-3 font-display text-sm font-bold">Tell us about it <span aria-hidden>↗</span></a>
            </div>
          </div>

          <div className="relative min-w-0 overflow-hidden bg-[#d9d5ca]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={active.slug}
                custom={direction}
                variants={reduceMotion ? undefined : previewSwap}
                initial={reduceMotion ? { opacity: 1 } : "initial"}
                animate={reduceMotion ? { opacity: 1 } : "animate"}
                exit={reduceMotion ? { opacity: 0 } : "exit"}
                transition={reduceMotion ? instantTransition : undefined}
                className="grid min-h-[46rem] grid-rows-[minmax(23rem,1fr)_auto] xl:min-h-[50rem]"
              >
                <div className="relative min-h-0 overflow-hidden p-5 lg:p-8">
                  <div className="relative h-full overflow-hidden bg-surface shadow-[0_28px_80px_rgb(20_18_31/0.18)]">
                    <Image src={active.cover} alt={active.coverAlt} fill sizes="(max-width: 767px) 100vw, 70vw" className="object-cover" />
                  </div>
                  {active.status && <span className="absolute left-8 top-8 bg-ink px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white lg:left-12 lg:top-12">{active.status}</span>}
                  <span className="absolute bottom-8 right-8 bg-surface px-3 py-2 font-display text-xs font-bold text-ink lg:bottom-12 lg:right-12">{padNumber(activeIndex + 1)} / {padNumber(total)}</span>
                </div>

                <div className="grid gap-7 border-t border-line bg-surface p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <p className="micro-label text-accent">{active.type}</p>
                      <p className="text-xs font-semibold text-muted">{active.year}</p>
                    </div>
                    <h3 className="mt-3 font-display text-4xl font-medium tracking-[-0.055em]">{active.name}</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{active.summary}</p>
                    {active.services?.length > 0 && (
                      <ul aria-label={`${active.name} services`} className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {active.services.map((item) => <li key={item} className="text-xs font-semibold text-ink/55">{item}</li>)}
                      </ul>
                    )}
                  </div>
                  <div>
                    <dl className="grid gap-5 sm:grid-cols-2">
                      <div><dt className="micro-label">Challenge</dt><dd className="mt-2 text-sm leading-relaxed text-muted">{active.challenge}</dd></div>
                      <div><dt className="micro-label">Approach</dt><dd className="mt-2 text-sm leading-relaxed text-muted">{active.approach}</dd></div>
                      {active.result && <div className="sm:col-span-2"><dt className="micro-label">Result</dt><dd className="mt-2 text-sm leading-relaxed text-muted">{active.result}</dd></div>}
                    </dl>
                    <a
                      href={active.url || "#contact"}
                      target={active.url ? "_blank" : undefined}
                      rel={active.url ? "noreferrer" : undefined}
                      className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-ink pb-1 text-sm font-bold"
                    >
                      {active.url ? "View live project" : "Discuss a similar project"} <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.04 }} variants={staggerSection} className="mt-9 grid gap-12 md:hidden">
          {CASE_STUDIES.map((project, index) => (
            <ProjectCard key={project.slug} project={project} position={index + 1} total={total} priority={index === 0} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
