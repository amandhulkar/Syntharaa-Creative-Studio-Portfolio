"use client";

import { motion } from "framer-motion";

import { ServiceIcon } from "@/components/sub/service-icon";
import { SERVICES } from "@/constants";
import { revealUp, stagger } from "@/lib/motion";

export const Skills = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-pad container-shell"
    >
      <div className="flex flex-col gap-10 sm:gap-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow text-maroon">What we do</span>
            <h2
              id="services-heading"
              className="display-title mt-6 text-ink"
            >
              Six capabilities,{" "}
              <br className="hidden sm:block" />
              <span className="text-gold">one studio.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted">
            We work end to end, so a single project never has to be passed
            between disconnected teams.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={revealUp}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-wine/10 bg-paper p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow sm:p-8"
            >
              <div className="flex min-w-0 items-start justify-between gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-wine/15 bg-wine text-cream">
                  <ServiceIcon
                    name={service.icon}
                    className="h-6 w-6"
                  />
                </span>
                <span className="font-display text-3xl font-medium text-wine/25">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-medium text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-full border border-wine/10 px-3 py-1 text-xs font-medium text-wine/70"
                  >
                    {capability}
                  </li>
                ))}
              </ul>

              <span className="absolute inset-x-0 bottom-0 h-px bg-gold/70 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};