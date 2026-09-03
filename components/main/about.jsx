"use client";

import { motion } from "framer-motion";

import { ABOUT_VALUES } from "@/constants";
import { revealLeft, revealRight } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-pad container-shell"
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full border border-gold/25" />
          <div className="relative overflow-hidden rounded-3xl border border-wine/10 bg-paper p-8 shadow-card">
            <div className="flex flex-col gap-6">
              <span className="eyebrow text-maroon">About the studio</span>
              <h2
                id="about-heading"
                className="display-title text-ink"
              >
                A small studio
                <br />
                <span className="text-gold">with a strong point of view.</span>
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Syntharaa is an independent creative studio working with
                ambitious brands that want their work to feel unmistakably
                theirs. We combine strategy, craft, and collaboration to build
                identities, products, and campaigns that last.
              </p>
              <p className="text-base leading-relaxed text-muted">
                We work best with teams that value clarity and care — the kind
                of people who care about how their work lands in the world. We
                work worldwide and are now booking select projects.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="eyebrow text-maroon">What we stand for</span>
          <h3 className="font-display text-3xl font-medium text-ink">
            A way of working, not just a list of services.
          </h3>
          <ul className="mt-2 flex flex-col gap-5">
            {ABOUT_VALUES.map((value, index) => (
              <motion.li
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={index % 2 === 0 ? revealLeft : revealRight}
                className="flex gap-4 border-b border-wine/10 pb-5"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <h4 className="font-display text-xl font-medium text-ink">
                    {value.title}
                  </h4>
                  <p className="mt-1 text-base leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};