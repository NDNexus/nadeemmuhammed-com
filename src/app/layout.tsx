import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Libre_Baskerville,
} from "next/font/google";
import "./globals.css";

/**
 * =========================================================
 * FONT SYSTEM
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Defines the global typography system for the application.
 *
 * Next.js font optimization provides:
 *
 * ✔ self-hosted fonts
 * ✔ zero external Google font requests
 * ✔ improved performance
 * ✔ reduced layout shift (CLS)
 * ✔ production-grade loading behavior
 *
 *
 * TYPOGRAPHY ROLES
 * ---------------------------------------------------------
 *
 * IBM Plex Sans
 *   → body text / UI text
 *
 * Libre Baskerville
 *   → headings / editorial typography
 *
 * IBM Plex Mono
 *   → code / technical content
 *
 *
 * ARCHITECTURE NOTE
 * ---------------------------------------------------------
 * Fonts are exposed as CSS variables so the design system
 * tokens can reference them centrally.
 *
 * Example:
 *
 * tokens.css
 *
 *   --font-sans
 *   --font-serif
 *   --font-mono
 *
 * =========================================================
 */

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * =========================================================
 * GLOBAL TECHNICAL SEO DEFAULTS
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Defines application-wide SEO defaults.
 *
 * These are fallback metadata values used when specific
 * routes do not provide their own SEO configuration.
 *
 *
 * RESPONSIBILITY
 * ---------------------------------------------------------
 * Root layout owns:
 *
 * ✔ metadataBase
 * ✔ robots defaults
 * ✔ Open Graph defaults
 * ✔ Twitter defaults
 * ✔ title template
 *
 *
 * ROUTE OWNERSHIP
 * ---------------------------------------------------------
 * Individual pages should define their own:
 *
 * ✔ titles
 * ✔ descriptions
 * ✔ structured data
 * ✔ social metadata
 *
 *
 * FUTURE CMS INTEGRATION
 * ---------------------------------------------------------
 * When Sanity CMS is integrated:
 *
 * homepage SEO
 * blog SEO
 * service SEO
 * category SEO
 *
 * will override these defaults via route-level metadata.
 *
 *
 * ARCHITECTURE PRINCIPLE
 * ---------------------------------------------------------
 * Root metadata should remain generic and technical.
 *
 * Avoid placing highly page-specific marketing copy here.
 *
 * =========================================================
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://nadeemmuhammed.com"),

  title: {
    default: "Nadeem Muhammed",
    template: "%s | Nadeem Muhammed",
  },

  description:
    "Digital systems consultant helping service businesses build elegant digital systems.",

  applicationName: "Nadeem Muhammed",

  authors: [
    {
      name: "Nadeem Muhammed",
      url: "https://nadeemmuhammed.com",
    },
  ],

  creator: "Nadeem Muhammed",
  publisher: "Nadeem Muhammed",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Nadeem Muhammed",
  },

  twitter: {
    card: "summary_large_image",
  },

  category: "business",
};

/**
 * =========================================================
 * ROOT LAYOUT
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Defines the global application shell.
 *
 * This is the top-level HTML document wrapper for the
 * entire Next.js application.
 *
 *
 * RESPONSIBILITIES
 * ---------------------------------------------------------
 * Root layout owns:
 *
 * ✔ html/body structure
 * ✔ global font variables
 * ✔ shared providers (future)
 *
 *
 * FUTURE EXTENSIONS
 * ---------------------------------------------------------
 * Later this layout may include:
 *
 * 
 * Theme providers
 * Analytics
 * Cookie consent
 * 
 * NOTE: Global header and footer is not added on purpose. I have moved the homepage to (marketing). And thus this file is just * a bare layout wrapper. The header and footer will be added to the marketing layout instead, so that they are only present on * the marketing pages, and not on the (blog) or other pages requiring minimal or different layouts. Blog posts will have a  
 * different dedicated layout without header and footer, to minimize distractions and maximize reading experience.
 *
 * =========================================================
 */

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en"  data-scroll-behavior="smooth">
      <body
        className={`
          ${ibmPlexSans.variable}
          ${ibmPlexMono.variable}
          ${libreBaskerville.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}