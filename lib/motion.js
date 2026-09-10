export const ease = [0.22, 1, 0.36, 1];
export const easeSoft = [0.33, 1, 0.68, 1];
export const viewportOnce = { once: true, amount: 0.16 };

export const transition = { duration: 0.62, ease };
export const transitionFast = { duration: 0.32, ease };
export const instantTransition = { duration: 0.001 };

export const shellReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.68, ease, when: "beforeChildren", staggerChildren: 0.1 },
  },
};

export const panelReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition },
};

export const lineReveal = {
  hidden: { y: "108%" },
  visible: { y: 0, transition: { duration: 0.76, ease } },
};

export const blurReveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease },
  },
};

export const mediaReveal = {
  hidden: { opacity: 0, scale: 1.025, clipPath: "inset(8% 0 0 0)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.82, ease },
  },
};

export const previewSwap = {
  initial: (direction = 1) => ({ opacity: 0, x: direction * 28, scale: 0.985 }),
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.48, ease } },
  exit: (direction = 1) => ({
    opacity: 0,
    x: direction * -20,
    scale: 0.99,
    transition: { duration: 0.24, ease: easeSoft },
  }),
};

export const scaleRotateIn = {
  hidden: { opacity: 0, scale: 0.96, rotate: 1.5 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.85, ease } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } },
};

export const staggerSection = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.07 } },
};

export const revealUp = fadeUp;
export const revealLeft = blurReveal;
export const revealRight = blurReveal;
export const stagger = staggerSection;
export const scaleIn = scaleRotateIn;
export const reducedMotion = instantTransition;
