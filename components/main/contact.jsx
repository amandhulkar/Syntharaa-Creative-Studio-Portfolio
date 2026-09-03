"use client";

import { motion } from "framer-motion";

import { STUDIO } from "@/constants";
import { ContactForm } from "@/components/sub/contact-form";
import { revealRight, stagger } from "@/lib/motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-pad container-shell"
    >
      <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="flex min-w-0 flex-col gap-6"
        >
          <span className="eyebrow text-maroon">Start a project</span>
          <h2
            id="contact-heading"
            className="display-title text-ink"
          >
            Let us know{" "}
            <br className="hidden sm:block" />
            <span className="text-gold">what you are building.</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Tell us about the work you need. We will review your brief and
            reply with next steps and a realistic estimate within two business
            days.
          </p>

          <div className="mt-2 flex min-w-0 flex-col gap-4 border-l-2 border-gold/60 pl-4 sm:pl-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                Direct email
              </p>
              <a
                href={`mailto:${STUDIO.email}`}
                className="text-base font-medium text-ink transition [overflow-wrap:anywhere] hover:text-maroon"
              >
                {STUDIO.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                Location
              </p>
              <p className="text-base text-muted">{STUDIO.location}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                Availability
              </p>
              <p className="text-base text-muted">{STUDIO.availability}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={revealRight}
          className="relative min-w-0"
        >
          <div className="absolute -inset-px rounded-3xl border border-wine/10 bg-gradient-to-br from-cream to-wine/5" />
          <div className="relative rounded-3xl bg-paper p-5 shadow-card sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};