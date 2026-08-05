import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Libre_Baskerville } from "next/font/google";

import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";

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

/**
 * Environment detection for conditional logic in the layout. This is used to determine if the application is running in a production environment or not. The value is derived from the VERCEL_ENV environment variable, which is set by Vercel during deployment. If the value of VERCEL_ENV is "production", then isProduction will be true; otherwise, it will be false. This can be useful for enabling or disabling certain features or behaviors based on the environment.
 */

const isProduction = process.env.VERCEL_ENV === "production";

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
    index: isProduction,
    follow: isProduction,

    googleBot: {
      index: isProduction,
      follow: isProduction,
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

export default async function RootLayout({ children }: RootLayoutProps) {
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={` ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${libreBaskerville.variable} `}
      >
        {children}

        <SanityLive includeDrafts={isDraftMode} />
      </body>
    </html>
  );
}
