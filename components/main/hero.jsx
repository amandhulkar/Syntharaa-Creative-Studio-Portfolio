import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative flex min-h-svh flex-col overflow-hidden bg-wine"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_15%,rgba(199,164,96,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_10%_90%,rgba(244,235,220,0.08),transparent_60%)]" />
        <div className="warm-grain absolute inset-0" />
      </div>

      <div className="container-shell relative flex flex-1 flex-col justify-between py-6">
        <HeroContent />
      </div>

      <div className="relative hidden h-24 w-full items-end justify-center pb-4 md:flex">
        <a href="#services" aria-label="Scroll to services" className="text-cream/50 transition hover:text-gold">
          <span className="block h-10 w-px bg-current" />
        </a>
      </div>
    </section>
  );
};