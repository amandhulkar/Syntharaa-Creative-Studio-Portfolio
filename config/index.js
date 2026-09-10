const title = "Syntharaa — Brand Systems & Digital Experiences";
const description =
  "Syntharaa is an independent creative studio building bold brand systems, digital products, websites, campaigns, and motion for ambitious teams.";

export const siteConfig = {
  title: {
    default: title,
    template: "%s — Syntharaa",
  },
  description,
  applicationName: "Syntharaa",
  authors: [{ name: "Syntharaa Creative Studio" }],
  creator: "Syntharaa Creative Studio",
  publisher: "Syntharaa Creative Studio",
  category: "design",
  keywords: [
    "creative studio",
    "brand systems",
    "digital product design",
    "UI UX design",
    "web design",
    "motion design",
    "digital strategy",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Syntharaa",
    title,
    description,
  },
  twitter: { card: "summary", title, description },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};
