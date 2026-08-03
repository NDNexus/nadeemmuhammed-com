import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Libre_Baskerville } from "next/font/google";

import "./globals.css";

/* =========================================================
   FONT SYSTEM

   Defines the application's global typography resources.

   Fonts are loaded and self-hosted through Next.js and
   exposed as CSS variables for use by the design system.
========================================================= */

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

/* =========================================================
   GLOBAL METADATA

   Defines site-wide metadata defaults and technical SEO
   configuration inherited by routes throughout the site.

   Page-specific titles, descriptions, canonical URLs and
   social metadata belong at the route level.
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://nadeemmuhammed.com"),

  title: {
    default: "Nadeem Muhammed",
    template: "%s | Nadeem Muhammed",
  },

  description:
    "Digital strategy and consulting for service businesses building stronger websites, systems, and digital foundations.",

  applicationName: "Nadeem Muhammed",

  authors: [
    {
      name: "Nadeem Muhammed",
      url: "/",
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
};

/* =========================================================
   ROOT LAYOUT

   Provides the application's top-level document shell.

   Shared visual layouts are intentionally handled by nested
   route groups so marketing, writing, and minimal pages can
   use layouts appropriate to their individual purposes.
========================================================= */

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={` ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${libreBaskerville.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
