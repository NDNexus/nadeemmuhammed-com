import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageUrl =
  "https://nadeemmuhammed.com/web-development-for-agencies";

export const metadata: Metadata = {
  // ---------------------------------------------------------------------------
  // SEO TITLE
  // ---------------------------------------------------------------------------
  // This is the primary title shown in:
  // - Google search results
  // - Browser tabs
  // - Search engine metadata
  //
  // Keep the important keyword ("Web Development") close to the beginning,
  // while making the title commercially understandable.
  // ---------------------------------------------------------------------------
  title: "Web Development for Agencies | Nadeem Muhammed",

  // ---------------------------------------------------------------------------
  // SEO DESCRIPTION
  // ---------------------------------------------------------------------------
  // This is written primarily for the search-result snippet and should also
  // communicate the actual commercial proposition of the page.
  //
  // Avoid keyword stuffing. Write it for a potential agency owner.
  // ---------------------------------------------------------------------------
  description:
    "I help SEO, digital marketing and creative agencies deliver client websites and web projects with reliable development support.",

  // ---------------------------------------------------------------------------
  // CANONICAL URL
  // ---------------------------------------------------------------------------
  // Tells search engines which URL represents the preferred version of this
  // page. This is especially useful if the page can be reached through
  // different URL variations in the future.
  // ---------------------------------------------------------------------------
  alternates: {
    canonical: pageUrl,
  },

  // ---------------------------------------------------------------------------
  // OPEN GRAPH
  // ---------------------------------------------------------------------------
  // Controls how the page appears when someone shares the URL on platforms
  // such as LinkedIn, Facebook, WhatsApp, etc.
  //
  // IMPORTANT:
  // Create the image below before publishing:
  //
  // public/images/og/web-development-for-agencies.jpg
  //
  // Recommended size: 1200 × 630px
  // ---------------------------------------------------------------------------
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Web Development for Agencies | Nadeem Muhammed",
    description:
      "Reliable web development support for SEO, digital marketing and creative agencies.",
    siteName: "Nadeem Muhammed",
    images: [
      {
        url: "/images/og/web-development-for-agencies.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development for Agencies — Nadeem Muhammed",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TWITTER / X
  // ---------------------------------------------------------------------------
  // Uses the same visual asset when the page is shared on X.
  // ---------------------------------------------------------------------------
  twitter: {
    card: "summary_large_image",
    title: "Web Development for Agencies | Nadeem Muhammed",
    description:
      "Reliable web development support for SEO, digital marketing and creative agencies.",
    images: ["/images/og/web-development-for-agencies.jpg"],
  },

  // ---------------------------------------------------------------------------
  // ROBOTS
  // ---------------------------------------------------------------------------
  // This page is an intentionally public commercial page.
  //
  // Therefore:
  // index: true  → allow search engines to index it
  // follow: true → allow search engines to follow links on it
  //
  // DO NOT use noindex here.
  // ---------------------------------------------------------------------------
  robots: {
    index: true,
    follow: true,
  },
};

export default function AgencyDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
