"use client";

import { motion } from "framer-motion";

import { ContactForm } from "@/components/sub/contact-form";
import { STUDIO } from "@/constants";
import { fadeUp, staggerSection, viewportOnce } from "@/lib/motion";

export const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" className="section-pad border-t border-line bg-accent text-white">
    <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerSection} className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
      <motion.div variants={fadeUp} className="flex min-w-0 flex-col">
        <span className="eyebrow text-white/65">Start a project</span>
        <h2 id="contact-heading" className="section-title mt-5 max-w-[8ch]">Let’s make the next idea matter.</h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/72 sm:text-lg">Share the challenge, context, and ambition. You will receive clear next steps and a realistic response within two business days.</p>

        <div className="mt-9 border-t border-white/25 pt-6 lg:mt-auto">
          <p className="micro-label text-white/45">Prefer direct email?</p>
          <a href={`mailto:${STUDIO.email}`} className="mt-3 block font-display text-xl font-medium tracking-[-0.035em] text-white [overflow-wrap:anywhere] hover:underline sm:text-2xl">{STUDIO.email}</a>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
            <span>{STUDIO.location}</span>
            <span>{STUDIO.availability}</span>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="min-w-0 bg-surface p-5 text-ink shadow-[0_30px_90px_rgb(23_16_70/0.22)] sm:p-8 lg:p-10">
        <div className="mb-7 flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="micro-label text-accent">Project brief</p>
            <p className="mt-2 font-display text-2xl font-medium tracking-[-0.04em]">Tell us what you’re building.</p>
          </div>
          <span className="text-xs font-semibold text-muted">Draft opens in your email app</span>
        </div>
        <ContactForm />
      </motion.div>
    </motion.div>
  </section>
);
