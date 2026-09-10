"use client";

import { motion, useReducedMotion } from "framer-motion";

import { PROCESS_STEPS } from "@/constants";
import { ease, fadeUp, instantTransition, staggerSection, viewportOnce } from "@/lib/motion";

export const Process = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" aria-labelledby="process-heading" className="section-pad border-t border-line bg-surface">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerSection}>
        <motion.div variants={fadeUp} className="section-intro">
          <div>
            <span className="eyebrow text-accent">A transparent process</span>
            <h2 id="process-heading" className="section-title mt-5 max-w-[10ch]">A clear route from first question to final system.</h2>
          </div>
          <div className="max-w-xl">
            <p className="text-base leading-relaxed text-muted sm:text-lg">You always know what is being explored, what needs a decision, and what comes next. The process stays collaborative without becoming chaotic.</p>
            <p className="mt-4 text-sm font-semibold text-ink">Four connected stages · Defined milestones · Practical handoff</p>
          </div>
        </motion.div>

        <motion.ol variants={staggerSection} className="relative mt-12 grid gap-0 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={reduceMotion ? instantTransition : { duration: 1.15, ease }}
            className="absolute left-0 right-0 top-[1.15rem] hidden h-px origin-left bg-accent/40 lg:block"
          />
          {PROCESS_STEPS.map((step, index) => (
            <motion.li key={step.title} variants={fadeUp} className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-line py-7 sm:px-5 sm:first:pl-0 lg:block lg:border-t-0 lg:px-6 lg:py-0 lg:first:pl-0 lg:last:pr-0">
              <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-accent bg-surface font-display text-[0.64rem] font-bold text-accent">{step.number}</span>
              <div className="min-w-0 lg:mt-9">
                <p className="micro-label text-ink/40">{step.detail}</p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.045em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                {index < PROCESS_STEPS.length - 1 && <span aria-hidden className="mt-6 hidden text-accent lg:inline-block">→</span>}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </section>
  );
};
