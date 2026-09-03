"use client";

import { motion } from "framer-motion";

import { PROCESS_STEPS } from "@/constants";
import { revealLeft, revealRight, stagger } from "@/lib/motion";

export const Process = () => {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-wine py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_85%_10%,rgba(199,164,96,0.14),transparent_70%)]" />
        <div className="warm-grain absolute inset-0 opacity-60" />
      </div>

      <div className="container-shell relative">
        <div className="flex flex-col gap-16">
          <div className="max-w-2xl">
            <span className="eyebrow text-cream/70">How we work</span>
            <h2
              id="process-heading"
              className="display-title mt-6 text-cream"
            >
              Four phases,
              <br />
              <span className="text-gold">one clear path.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/65">
              A simple, collaborative arc that keeps every project grounded in
              strategy and delivered with confidence.
            </p>
          </div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="grid gap-5 sm:grid-cols-2"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.li
                key={step.title}
                variants={index % 2 === 0 ? revealLeft : revealRight}
                className="group relative overflow-hidden rounded-2xl border border-cream/15 bg-cream/5 p-8 transition duration-300 hover:border-gold/40 hover:bg-cream/10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-wine text-gold">
                    <span className="font-display text-lg font-semibold">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-cream/55">
                    {step.detail}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-cream/65">
                  {step.description}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-px bg-gold/70 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};