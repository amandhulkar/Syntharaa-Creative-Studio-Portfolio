import { Manrope, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { MotionProvider } from "@/components/providers/motion-provider";
import { siteConfig } from "@/config";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "light",
};

export const metadata = siteConfig;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
