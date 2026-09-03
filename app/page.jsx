import { About } from "@/components/main/about";
import { Contact } from "@/components/main/contact";
import { Process } from "@/components/main/process";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Skills />
      <Process />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
