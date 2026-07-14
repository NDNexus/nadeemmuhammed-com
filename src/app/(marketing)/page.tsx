import type { Metadata } from "next";
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
    title: "Digital Systems Consultant for Service Businesses",

    description:
        "Nadeem Muhammed helps service businesses build elegant digital systems, premium websites, and scalable online experiences.",

    openGraph: {
        title:
            "Nadeem Muhammed | Digital Systems Consultant for Service Businesses",

        description:
            "Helping service businesses build elegant digital systems, premium websites, and scalable online experiences.",

        url: "https://nadeemmuhammed.com",

        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Nadeem Muhammed — Digital Systems Consultant for Service Businesses",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Nadeem Muhammed | Digital Systems Consultant for Service Businesses",

        description:
            "Helping service businesses build elegant digital systems, premium websites, and scalable online experiences.",

        images: ["/opengraph-image.png"],
    },
};


/**
 * =========================================================
 * PERSON STRUCTURED DATA
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Helps search engines explicitly understand:
 *
 * - who Nadeem Muhammed is
 * - professional role
 * - website identity
 *
 *
 * WHY THIS MATTERS
 * ---------------------------------------------------------
 * Without structured data:
 * Google guesses.
 *
 * With structured data:
 * Google receives explicit machine-readable meaning.
 *
 *
 * FUTURE CMS INTEGRATION
 * ---------------------------------------------------------
 * Later this can be sourced from Sanity site settings.
 *
 * =========================================================
 */

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Nadeem Muhammed",

    url: "https://nadeemmuhammed.com",

    jobTitle: "Digital Systems Consultant for Service Businesses",

    description:
        "Digital systems consultant helping service businesses build elegant digital systems and premium web experiences.",
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
                    __html: JSON.stringify(personSchema),
                }}
            />

            <main>

                {/* Hero Section */}

                <section className="section bg-canvas-dark min-h-[calc(100vh-var(--navbar-height))] flex items-center">
                    <div className="container-wide">

                        <div className="flow-lg text-center max-w-[80ch] mx-auto">

                            <p className="text-body-lg text-fg-on-dark">
                                Digital Systems Consultant
                            </p>

                            <h1 className="heading-xl text-fg-on-emphasis">
                                Your systems should make your business easier to run.
                            </h1>

                            <p className="text-body-lg text-fg-on-dark-subtle">
                                I help service businesses identify digital friction,
                                simplify complexity, and build maintainable systems
                                that support long-term growth.
                            </p>

                            <div className="flex flex-wrap justify-center gap-lg">
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

                        <div className="max-w-prose flow-lg">

                            <h2 className="heading-lg">
                                Most Businesses Don&rsquo;t Need More Tools.
                            </h2>

                            <p className="text-body-lg font-semibold">
                                They need better systems.
                            </p>

                            <p>
                                Over time, many service businesses accumulate software,
                                spreadsheets, disconnected processes, and manual workarounds.
                                The result is inefficiency, inconsistency, and unnecessary
                                operational friction.
                            </p>

                            <p>
                                I help businesses simplify that complexity by creating
                                digital systems that support growth, improve operations,
                                and strengthen the customer journey.
                            </p>

                        </div>

                    </div>
                </section>



                {/* Services section */}

                <section className="section bg-canvas-subtle">
                    <div className="container-wide">

                        <div className="flow-lg max-w-prose mb-8">

                            <h2 className="heading-lg">
                                How I Help Service Businesses
                            </h2>

                            <p className="text-body-lg text-subtle">
                                Practical consulting focused on clarity, efficiency,
                                and long-term business value.
                            </p>

                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">

                            <article className="card card-feature">

                                <span className="service-icon">
                                    mdi:sitemap-outline
                                </span>

                                <h3 className="heading-md">
                                    Digital Systems Strategy
                                </h3>

                                <p>
                                    Identify bottlenecks, map workflows,
                                    and create systems that support growth.
                                </p>

                            </article>

                            <article className="card card-feature">

                                <span className="service-icon">
                                    mdi:web
                                </span>

                                <h3 className="heading-md">
                                    Strategic Websites
                                </h3>

                                <p>
                                    Build websites that communicate value,
                                    strengthen trust, and support business goals.
                                </p>

                            </article>

                            <article className="card card-feature">

                                <span className="service-icon">
                                    mdi:cog-sync-outline
                                </span>

                                <h3 className="heading-md">
                                    Workflow Optimization
                                </h3>

                                <p>
                                    Reduce manual work, improve consistency,
                                    and create better experiences for your clients.
                                </p>

                            </article>

                        </div>

                    </div>
                </section>



                {/* Approach section */}

                <section
                    id="approach"
                    className="section"
                >
                    <div className="container-wide">

                        <div className="flow-lg max-w-prose">

                            <h2 className="heading-lg">
                                A Structured Approach To Digital Improvement
                            </h2>

                            <p className="text-subtle">
                                Every engagement starts with understanding the business
                                before recommending technology.
                            </p>

                        </div>

                        <div className="process-grid">
                            <div className="process-step">
                                <span className="process-number">01</span>

                                <h3>Discover</h3>

                                <p>
                                    Understand your business, goals,
                                    workflows, and current challenges.
                                </p>
                            </div>

                            <div className="process-step">
                                <span className="process-number">02</span>

                                <h3>Design</h3>

                                <p>
                                    Create a practical roadmap focused on
                                    systems, processes, and opportunities.
                                </p>
                            </div>

                            <div className="process-step">
                                <span className="process-number">03</span>

                                <h3>Implement</h3>

                                <p>
                                    Build and refine the solutions that
                                    create measurable business value.
                                </p>
                            </div>

                            <div className="process-step">
                                <span className="process-number">04</span>

                                <h3>Improve</h3>

                                <p>
                                    Continuously identify ways to reduce
                                    friction and improve performance.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>



                {/* Philosophy section */}

                <section className="section bg-canvas-highlight">
                    <div className="container-wide">

                        <div className="flow-lg max-w-prose">

                            <h2 className="heading-lg">
                                Technology Should Create Clarity,
                                Not Complexity.
                            </h2>

                            <p>
                                New tools rarely solve underlying problems.
                            </p>

                            <p>
                                Sustainable growth comes from designing systems
                                that are intentional, connected, and easy to maintain.
                            </p>

                            <p>
                                My goal is to help businesses build digital foundations
                                that remain useful long after implementation.
                            </p>

                        </div>

                    </div>
                </section>



                {/* About section */}

                <section className="section">
                    <div className="container-wide">

                        <div className="grid lg:grid-cols-2 gap-2xl">

                            <div>

                                <p className="text-overline">
                                    About Nadeem Muhammed
                                </p>

                                <h2 className="heading-lg">
                                    Helping Service Businesses Build
                                    Stronger Digital Foundations.
                                </h2>

                            </div>

                            <div className="space-y-lg">

                                <p>
                                    I&rsquo;m Nadeem Muhammed, a Digital Systems Consultant who helps
                                    service businesses improve the way they use technology,
                                    websites, and digital systems to support their operations
                                    and long-term growth.
                                </p>

                                <p>
                                    My work focuses on identifying digital friction, simplifying
                                    complexity, and designing practical systems that are easier
                                    to understand, maintain, and scale as a business evolves.
                                </p>

                                <p>
                                    Rather than recommending technology for its own sake, I help
                                    businesses make informed technology decisions, improve
                                    processes, and build digital foundations that create lasting
                                    value for both the business and its customers.
                                </p>

                            </div>

                        </div>

                    </div>
                </section>


                {/* Writing & Insights section */}

                <section className="section bg-canvas-subtle">
                    <div className="container-wide">

                        <div className="flow-lg max-w-prose">

                            <h2 className="heading-lg">
                                Writing & Insights
                            </h2>

                            <p className="text-subtle">
                                Thoughts on systems, operations,
                                websites, and business growth.
                            </p>

                        </div>

                        <div className="grid lg:grid-cols-3 gap-xl">

                            {/* Article 1 */}

                            <article className="card card-content">

                                <div className="card__media">
                                    {/* Article Illustration */}
                                </div>

                                <div className="card__body">

                                    <div className="card__meta">
                                        <span>Systems Thinking</span>
                                        <span className="meta-separator" />
                                        <span>7 min read</span>
                                    </div>

                                    <h3 className="heading-md">
                                        Why Most Businesses Don&rsquo;t Need More Software
                                    </h3>

                                    <p className="card__description">
                                        Technology rarely solves operational problems on its own.
                                        Discover why simplifying workflows and reducing unnecessary
                                        complexity often creates more value than adding another tool.
                                    </p>

                                </div>



                            </article>

                            {/* Article 2 */}

                            <article className="card card-content">

                                <div className="card__media">
                                    {/* Article Illustration */}
                                </div>

                                <div className="card__body">

                                    <div className="card__meta">
                                        <span>Digital Strategy</span>
                                        <span className="meta-separator" />
                                        <span>9 min read</span>
                                    </div>

                                    <h3 className="heading-md">
                                        The Hidden Cost of Operational Friction
                                    </h3>

                                    <p className="card__description">
                                        Every manual process, disconnected workflow, and unnecessary
                                        handoff quietly costs your business time, money, and customer
                                        trust. Learn how to identify and eliminate digital friction.
                                    </p>

                                </div>



                            </article>

                            {/* Article 3 */}

                            <article className="card card-content">
                                <div className="card__media">
                                    {/* Article Illustration */}
                                </div>

                                <div className="card__body">

                                    <div className="card__meta">
                                        <span>Web Architecture</span>
                                        <span className="meta-separator" />
                                        <span>11 min read</span>
                                    </div>

                                    <h3 className="heading-md">
                                        Designing Digital Systems That Continue To Scale
                                    </h3>

                                    <p className="card__description">
                                        Sustainable growth comes from maintainable digital foundations.
                                        Learn how thoughtful architecture helps businesses scale with
                                        confidence instead of rebuilding from scratch.
                                    </p>

                                </div>



                            </article>

                        </div>

                    </div>
                </section>


                {/* Call to Action section */}

                <section className="section bg-canvas-dark">
                    <div className="container-wide">

                        <div className="text-center flow">

                            <h2 className="heading-lg text-fg-on-emphasis">
                                Ready To Strengthen Your Digital Foundation?
                            </h2>

                            <p className="text-body-lg text-fg-on-dark-subtle">
                                Let&rsquo;s identify the systems, processes,
                                and opportunities that can create the
                                greatest impact for your business.
                            </p>

                            <a
                                href="/contact"
                                className="btn btn-accent"
                            >
                                Book a Consultation
                            </a>

                        </div>

                    </div>
                </section>

            </main>
        </>
    );
}
