"use client";

import { motion } from "framer-motion";

import { SERVICES, STUDIO_COPY } from "@/constants";
import { fadeUp, staggerSection, viewportOnce } from "@/lib/motion";

export const Skills = () => (
  <section id="services" aria-labelledby="services-heading" className="section-pad border-t border-line">
    <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerSection}>
      <motion.div variants={fadeUp} className="section-intro">
        <div>
          <span className="eyebrow text-accent">Ways we can help</span>
          <h2 id="services-heading" className="section-title mt-5 max-w-[9ch]">One idea, shaped across every expression.</h2>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{STUDIO_COPY.servicesIntroduction}</p>
      </motion.div>

      <motion.ol variants={staggerSection} className="mt-10 border-t border-line lg:mt-16">
        {SERVICES.map((service) => (
          <motion.li
            key={service.title}
            variants={fadeUp}
            className="service-row group grid min-w-0 gap-5 border-b border-line py-7 sm:grid-cols-[3rem_minmax(11rem,0.58fr)_minmax(0,1fr)] sm:items-start sm:gap-6 lg:grid-cols-[4rem_minmax(15rem,0.65fr)_minmax(0,0.8fr)_minmax(15rem,0.55fr)] lg:py-9"
          >
            <span className="font-display text-xs font-bold text-accent">{service.number}</span>
            <h3 className="font-display text-2xl font-medium tracking-[-0.045em] sm:text-3xl">{service.title}</h3>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:col-start-3 lg:col-start-auto">{service.description}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:col-start-2 sm:col-end-4 lg:col-auto lg:justify-end">
              {service.capabilities.map((capability) => (
                <li key={capability} className="text-xs font-semibold text-ink/55">{capability}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ol>

      <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 bg-ink px-5 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="max-w-2xl font-display text-xl font-medium tracking-[-0.035em] sm:text-2xl">Not sure which service fits? Start with the challenge, not a checklist.</p>
        <a href="#contact" className="button-secondary shrink-0">Share your brief <span aria-hidden>↗</span></a>
      </motion.div>
    </motion.div>
  </section>
);
