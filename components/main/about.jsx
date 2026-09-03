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
      <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative min-w-0">
          <div className="absolute left-0 top-0 h-28 w-28 rounded-full border border-gold/25 sm:-left-6 sm:-top-6 sm:h-40 sm:w-40" />
          <div className="relative overflow-hidden rounded-3xl border border-wine/10 bg-paper p-5 shadow-card sm:p-8">
            <div className="flex min-w-0 flex-col gap-6">
              <span className="eyebrow text-maroon">About the studio</span>
              <h2
                id="about-heading"
                className="display-title text-ink"
              >
                A small studio{" "}
                <br className="hidden sm:block" />
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

        <div className="flex min-w-0 flex-col gap-6">
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
                className="flex min-w-0 gap-4 border-b border-wine/10 pb-5"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div className="min-w-0">
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