"use client";

import { motion } from "framer-motion";

import { CASE_STUDIES } from "@/constants";
import { ProjectCard } from "@/components/sub/project-card";
import { stagger } from "@/lib/motion";

export const Projects = () => {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-pad container-shell"
    >
      <div className="flex flex-col gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="eyebrow text-maroon">Selected work</span>
            <h2
              id="work-heading"
              className="display-title mt-6 text-ink"
            >
              Concept case studies,
              <br />
              <span className="text-gold">built to show our range.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Each study below is a showcase concept created to illustrate our
            working style and the quality we bring to real engagements.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2"
        >
          {CASE_STUDIES.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};