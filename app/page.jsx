import { About } from "@/components/main/about";
import { Contact } from "@/components/main/contact";
import { Hero } from "@/components/main/hero";
import { Process } from "@/components/main/process";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Marquee } from "@/components/sub/marquee";

export default function Home() {
  return (
    <main id="main-content" className="pt-[4.75rem] sm:pt-24">
      <div className="workspace-shell">
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Process />
        <About />
        <Contact />
      </div>
    </main>
  );
}
