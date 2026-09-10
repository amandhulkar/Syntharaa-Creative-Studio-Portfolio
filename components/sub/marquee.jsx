import { CAPABILITY_TICKER } from "@/constants";

const CapabilityList = ({ copy = false }) => (
  <ul
    aria-hidden="true"
    className={`flex shrink-0 items-center ${copy ? "marquee-copy" : ""}`}
  >
    {CAPABILITY_TICKER.map((capability, index) => (
      <li
        key={`${copy ? "copy" : "source"}-${capability}`}
        className="flex items-center gap-4 pr-4 font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink/60 sm:gap-7 sm:pr-7"
      >
        <span className="text-accent">0{index + 1}</span>
        <span>{capability}</span>
        <span aria-hidden className="h-px w-8 shrink-0 bg-line sm:w-14" />
      </li>
    ))}
  </ul>
);

export const Marquee = () => (
  <section
    aria-label="Studio capabilities"
    className="marquee-shell overflow-hidden border-t border-line bg-surface py-4"
  >
    <div className="marquee-track flex">
      <span className="sr-only">{CAPABILITY_TICKER.join(", ")}</span>
      <CapabilityList />
      <CapabilityList copy />
    </div>
  </section>
);
