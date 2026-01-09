import type { Metadata } from "next";

import PrismLoader from "@/components/PrismLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Spectral,
} from "next/font/google";

import "./globals.css";

/* ---------------- Fonts ---------------- */

// UI / Headings / Buttons
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

// Reading / Body
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

// Code / Mono
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nadeem Muhammed",
  description: "Personal website of Nadeem Muhammed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${plexSans.variable}
          ${spectral.variable}
          ${plexMono.variable}
          antialiased
        `}
      >
        <PrismLoader />
        <Header />
        <main className="mx-auto max-w-5xl px-6 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
