const title = "Syntharaa — Independent Creative Studio";
const description =
  "Syntharaa is an independent creative studio shaping memorable brands, digital products, websites, campaigns, and motion experiences.";

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
    "brand identity",
    "UI UX design",
    "web design",
    "graphic design",
    "motion graphics",
    "digital strategy",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Syntharaa",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};
