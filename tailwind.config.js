const config = {
  content: ["./components/**/*.{js,jsx,mdx}", "./app/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        wine: "rgb(var(--color-wine) / <alpha-value>)",
        maroon: "rgb(var(--color-maroon) / <alpha-value>)",
        burgundy: "rgb(var(--color-burgundy) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 24px 70px rgba(43, 9, 19, 0.10)",
        glow: "0 0 0 1px rgba(199, 164, 96, 0.25), 0 24px 80px rgba(12, 3, 6, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
