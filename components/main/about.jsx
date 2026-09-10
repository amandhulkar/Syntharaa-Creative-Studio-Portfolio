"use client";

import { motion } from "framer-motion";

import { STUDIO, STUDIO_COPY, STUDIO_MODEL } from "@/constants";
import { fadeUp, staggerSection, viewportOnce } from "@/lib/motion";

export const About = () => (
  <section id="studio" aria-labelledby="studio-heading" className="section-pad border-t border-line">
    <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerSection} className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
      <motion.div variants={fadeUp} className="min-w-0">
        <span className="eyebrow text-accent">Why Syntharaa</span>
        <h2 id="studio-heading" className="section-title mt-5 max-w-[10ch]">Close collaboration. Clear creative ownership.</h2>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{STUDIO_COPY.about}</p>
        <a href={`mailto:${STUDIO.email}`} className="mt-8 inline-flex min-h-11 max-w-full items-center gap-3 border-b border-ink pb-1 text-sm font-bold [overflow-wrap:anywhere]">
          Work directly with Syntharaa <span aria-hidden>↗</span>
        </a>
      </motion.div>

      <motion.div variants={staggerSection} className="border-t border-line">
        {STUDIO_MODEL.map((item) => (
          <motion.article key={item.title} variants={fadeUp} className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-line py-6 sm:grid-cols-[3rem_minmax(13rem,0.65fr)_minmax(0,1fr)] sm:gap-6 sm:py-7">
            <span className="font-display text-xs font-bold text-accent">{item.number}</span>
            <h3 className="font-display text-xl font-medium tracking-[-0.035em] sm:text-2xl">{item.title}</h3>
            <p className="col-start-2 text-sm leading-relaxed text-muted sm:col-start-auto">{item.description}</p>
          </motion.article>
        ))}
        <motion.dl variants={fadeUp} className="grid gap-5 bg-ink p-5 text-white sm:grid-cols-3 sm:p-6">
          {[
            ["Location", STUDIO.location],
            ["Availability", STUDIO.availability],
            ["Response", STUDIO.responseTime],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0">
              <dt className="micro-label text-white/40">{label}</dt>
              <dd className="mt-2 text-sm font-semibold leading-snug text-white/75">{value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </motion.div>
  </section>
);
