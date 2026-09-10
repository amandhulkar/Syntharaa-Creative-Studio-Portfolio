const config = {
  content: ["./components/**/*.{js,jsx,mdx}", "./app/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        signal: "rgb(var(--color-signal) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(10, 10, 10, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
