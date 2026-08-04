import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { RevealText, RevealTextBreak } from "@/components/content/RevealText";

/**
 * =========================================================
 * HOMEPAGE SEO METADATA
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Defines homepage-specific SEO metadata.
 *
 * This overrides root layout defaults.
 *
 *
 * RESPONSIBILITY
 * ---------------------------------------------------------
 * Homepage owns:
 *
 * ✔ homepage title
 * ✔ homepage description
 * ✔ Open Graph metadata
 * ✔ Twitter metadata
 * ✔ social preview images
 *
 *
 * FUTURE CMS INTEGRATION
 * ---------------------------------------------------------
 * Later this metadata can be sourced from Sanity:
 *
 * homepage.seo.title
 * homepage.seo.description
 * homepage.seo.ogImage
 *
 * =========================================================
 */

export const metadata: Metadata = {
  title: "Digital Strategy & Systems Consultant for Service Businesses",

  description:
    "I help service businesses strengthen their digital foundations through clear strategy, effective websites, better systems, and practical workflow improvements.",

  /* =========================================================
     CANONICAL URL
  ========================================================= */

  alternates: {
    canonical: "/",
  },

  /* =========================================================
     OPEN GRAPH
  ========================================================= */

  openGraph: {
    title: "Digital Strategy & Systems Consultant for Service Businesses | Nadeem Muhammed",

    description:
      "I help service businesses strengthen their digital foundations through clear strategy, effective websites, better systems, and practical workflow improvements.",

    url: "/",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nadeem Muhammed — Digital Strategy & Systems Consultant",
      },
    ],
  },

  /* =========================================================
     TWITTER / X
  ========================================================= */

  twitter: {
    card: "summary_large_image",

    title: "Digital Strategy & Systems Consultant for Service Businesses | Nadeem Muhammed",

    description:
      "I help service businesses strengthen their digital foundations through clear strategy, effective websites, better systems, and practical workflow improvements.",

    images: ["/opengraph-image.png"],
  },
};

/* =========================================================
   HOMEPAGE STRUCTURED DATA

   Describes the website and the person behind it using
   Schema.org JSON-LD.

   WebSite establishes the site's identity and preferred
   site name.

   Person establishes a reusable identity for the site's
   creator and consultant.
========================================================= */

const homepageSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://nadeemmuhammed.com/#website",

      name: "Nadeem Muhammed",
      url: "https://nadeemmuhammed.com/",
    },

    {
      "@type": "Person",
      "@id": "https://nadeemmuhammed.com/#person",

      name: "Nadeem Muhammed",
      url: "https://nadeemmuhammed.com/",

      jobTitle: "Digital Strategy & Systems Consultant",

      description:
        "I help service businesses strengthen their digital foundations through clear strategy, effective websites, better systems, and practical workflow improvements.",
    },
  ],
};


/**
 * =========================================================
 * HOMEPAGE
 * =========================================================
 */

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        {/* Hero Section */}

        <section className="section bg-canvas-dark flex min-h-[calc(100vh-var(--navbar-height))] items-center">
          <div className="container-wide">
            <div className="flow-lg mx-auto max-w-[80ch] text-center">
              <p className="text-body-lg text-fg-on-dark">Digital Systems Consultant</p>

              <h1 className="heading-xl text-fg-on-emphasis">
                Your systems should make your business easier to run.
              </h1>

              <p className="text-body-lg text-fg-on-dark-subtle">
                I help service businesses identify digital friction, simplify complexity, and build
                maintainable systems that support long-term growth.
              </p>

              <div className="gap-lg flex flex-wrap justify-center">
                <a href="/contact" className="btn btn-accent">
                  Book a Consultation
                </a>

                <a href="#approach" className="btn btn-secondary">
                  Explore My Approach
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro section */}

        <section className="section">
          <div className="container-wide">
            <div className="gap-lg grid grid-cols-1 sm:grid-cols-2">
              <div className="flow-lg max-w-prose">
                <h2 className="heading-lg">Most Businesses Don&rsquo;t Need More Tools.</h2>

                <p className="text-body-lg font-semibold">They need better systems.</p>

                <p>
                  Over time, many service businesses accumulate software, spreadsheets, disconnected
                  processes, and manual workarounds. The result is inefficiency, inconsistency, and
                  unnecessary operational friction.
                </p>

                <p>
                  I help businesses simplify that complexity by creating digital systems that
                  support growth, improve operations, and strengthen the customer journey.
                </p>
              </div>

              <div className="flex items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100">
                <Image
                  src="/images/Systems and processes.webp"
                  alt="Systems and processes"
                  width={600}
                  height={250}

                  className="h-auto w-1/2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}

        <section className="section bg-canvas-subtle">
          <div className="container-wide">
            <div className="flow-lg mb-8 max-w-prose">
              <h2 className="heading-lg">How I Help Service Businesses</h2>

              <p className="text-body-lg text-subtle">
                Practical consulting focused on clarity, efficiency, and long-term business value.
              </p>
            </div>
            <div className="gap-xl grid grid-cols-1 lg:grid-cols-3">
              <article className="card card-feature">
                <div className="card__body">
                  <span className="service-icon">
                    <Icon icon="mdi:sitemap-outline" />
                  </span>

                  <h3 className="heading-md">Digital Systems Strategy</h3>

                  <p>
                    Identify bottlenecks, map workflows, and create systems that support growth.
                  </p>
                </div>
              </article>

              <article className="card card-feature">
                <div className="card__body">
                  <span className="service-icon">
                    <Icon icon="mdi:web" />
                  </span>

                  <h3 className="heading-md">Strategic Websites</h3>

                  <p>
                    Build websites that communicate value, strengthen trust, and support business
                    goals.
                  </p>
                </div>
              </article>

              <article className="card card-feature">
                <div className="card__body">
                  <span className="service-icon">
                    <Icon icon="mdi:cog-sync-outline" />
                  </span>

                  <h3 className="heading-md">Workflow Optimization</h3>

                  <p>
                    Reduce manual work, improve consistency, and create better experiences for your
                    clients.
                  </p>
                </div>
              </article>
            </div>{" "}
            {/** Grid End */}
          </div>
        </section>

        {/* Approach section */}

        <section id="approach" className="section min-h-screen">
          <div className="container-wide">
            <div className="flow-lg max-w-prose">
              <h2 className="heading-lg">A Structured Approach To Digital Improvement</h2>

              <p className="text-subtle">
                Every engagement starts with understanding the business before recommending
                technology.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-step">
                <span className="process-number">01</span>

                <h3>Discover</h3>

                <p>Understand your business, goals, workflows, and current challenges.</p>
              </div>

              <div className="process-step">
                <span className="process-number">02</span>

                <h3>Design</h3>

                <p>Create a practical roadmap focused on systems, processes, and opportunities.</p>
              </div>

              <div className="process-step">
                <span className="process-number">03</span>

                <h3>Implement</h3>

                <p>Build and refine the solutions that create measurable business value.</p>
              </div>

              <div className="process-step">
                <span className="process-number">04</span>

                <h3>Improve</h3>

                <p>Continuously identify ways to reduce friction and improve performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}

        <section className="section bg-canvas-highlight min-h-screen">
          <div className="container-wide">
            <RevealText className="text-display">
              <p>When technology</p>

              <p>creates more work,</p>

              <RevealTextBreak gap="2xl" />

              <p>something</p>

              <p>has gone wrong.</p>

              <RevealTextBreak gap="2xl" />

              <p>The answer</p>

              <p>isn't another tool.</p>

              <RevealTextBreak gap="2xl" />

              <p>Or another plugin.</p>

              <p>Or another shortcut.</p>

              <RevealTextBreak gap="2xl" />

              <p>It's clarity.</p>

              <RevealTextBreak gap="2xl" />

              <p>Thoughtful systems.</p>

              <p>Intentional design.</p>

              <RevealTextBreak gap="2xl" />

              <p>Technology</p>

              <p>that simply</p>

              <p>gets out</p>

              <p>of the way.</p>
            </RevealText>
          </div>
        </section>

        {/* About section */}

        <section className="section">
          <div className="container-wide">
            <div className="gap-2xl grid items-center lg:grid-cols-2">
              <div className="space-y-lg order-2 lg:order-1">
                <h2 className="heading-lg">About Nadeem Muhammed</h2>

                <p>
                  I'm Nadeem Muhammed, a Digital Systems Consultant who helps service businesses
                  build stronger digital foundations. I work with businesses to identify digital
                  friction, simplify complexity, and make better technology decisions that support
                  sustainable growth. Every recommendation is guided by long-term value, not
                  unnecessary complexity.
                </p>

                <Link href="/about" className="btn btn-primary">
                  Learn more about how I work
                </Link>
              </div>

              <div className="order-2 sm:p-2 md:p-10 lg:order-1">
                <blockquote className="space-y-md text-center lg:text-left">
                  <span className="quotation-xl text-accent/20 flex justify-start leading-none">
                    “
                  </span>

                  <p className="heading-lg max-w-16ch font-serif italic">
                    Technology should reduce friction, not create it.
                  </p>

                  <span className="quotation-xl text-accent/20 flex justify-end leading-none">
                    ”
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Writing & Insights section */}

        <section className="section bg-canvas-subtle">
          <div className="container-wide">
            <div className="flow-lg max-w-prose">
              <h2 className="heading-lg">Writing & Insights</h2>

              <p className="text-subtle">
                Thoughts on systems, operations, websites, and business growth.
              </p>
            </div>

            <div className="gap-xl grid lg:grid-cols-3">
              {/* Article 1 */}

              <article className="card card-content">
                <div className="card__media">{/* Article Illustration */}</div>

                <div className="card__body">
                  <div className="card__meta">
                    <span>Systems Thinking</span>
                    <span className="meta-separator" />
                    <span>7 min read</span>
                  </div>

                  <h3 className="heading-md">Why Most Businesses Don&rsquo;t Need More Software</h3>

                  <p className="card__description">
                    Technology rarely solves operational problems on its own. Discover why
                    simplifying workflows and reducing unnecessary complexity often creates more
                    value than adding another tool.
                  </p>
                </div>
              </article>

              {/* Article 2 */}

              <article className="card card-content">
                <div className="card__media">{/* Article Illustration */}</div>

                <div className="card__body">
                  <div className="card__meta">
                    <span>Digital Strategy</span>
                    <span className="meta-separator" />
                    <span>9 min read</span>
                  </div>

                  <h3 className="heading-md">The Hidden Cost of Operational Friction</h3>

                  <p className="card__description">
                    Every manual process, disconnected workflow, and unnecessary handoff quietly
                    costs your business time, money, and customer trust. Learn how to identify and
                    eliminate digital friction.
                  </p>
                </div>
              </article>

              {/* Article 3 */}

              <article className="card card-content">
                <div className="card__media">{/* Article Illustration */}</div>

                <div className="card__body">
                  <div className="card__meta">
                    <span>Web Architecture</span>
                    <span className="meta-separator" />
                    <span>11 min read</span>
                  </div>

                  <h3 className="heading-md">Designing Digital Systems That Continue To Scale</h3>

                  <p className="card__description">
                    Sustainable growth comes from maintainable digital foundations. Learn how
                    thoughtful architecture helps businesses scale with confidence instead of
                    rebuilding from scratch.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Call to Action section */}

        <section className="section bg-canvas-dark">
          <div className="container-wide">
            <div className="flow text-center">
              <h2 className="heading-lg text-fg-on-emphasis">
                Ready To Strengthen Your Digital Foundation?
              </h2>

              <p className="text-body-lg text-fg-on-dark-subtle">
                Let&rsquo;s identify the systems, processes, and opportunities that can create the
                greatest impact for your business.
              </p>

              <a href="/contact" className="btn btn-accent">
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
