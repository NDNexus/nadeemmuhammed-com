import type { Metadata } from "next";

/**
 * =========================================================
 * ABOUT PAGE METADATA
 * =========================================================
 */

export const metadata: Metadata = {
    title: "About",

    description:
        "Learn about Nadeem Muhammed, a digital systems consultant helping service businesses design elegant digital systems and premium online experiences.",
};

export default function AboutPage() {
    return (
        <>

            <section className="section bg-primary text-primary-foreground min-h-screen flex items-center">
                <div className="container-wide">

                    <div className="max-w-reading flow-2xl">

                        <div className="flow-sm">

                            <p className="text-caption text-primary-foreground/70">
                                ABOUT
                            </p>

                            <h1 className="heading-xl">
                                I design websites that help businesses earn trust before a conversation even begins.
                            </h1>

                        </div>

                        <p className="text-body-lg text-primary-foreground/80 max-w-prose">
                            Every business has a story worth telling, but not every website
                            tells it well.
                        </p>

                        <p className="text-body-lg text-primary-foreground/80 max-w-prose">
                            I work with service businesses to create thoughtful digital
                            experiences that feel intentional, communicate credibility, and
                            make it easy for visitors to become confident customers.
                        </p>

                        <p className="text-body-lg text-primary-foreground/80 max-w-prose">
                            Rather than chasing design trends, I focus on creating websites
                            built on clarity, usability, and timeless principles—digital
                            systems that continue serving your business long after launch.
                        </p>

                        <div className="cluster gap-md pt-lg">

                            <a
                                href="/contact"
                                className="btn btn-primary"
                            >
                                Start a Project
                            </a>

                            <a
                                href="#philosophy"
                                className="btn btn-ghost"
                            >
                                Explore My Approach
                            </a>

                        </div>

                    </div>

                </div>
            </section>

            <section className="section">
                <div className="container-wide">

                    <div className="grid lg:grid-cols-12 gap-2xl">

                        <div className="lg:col-span-4 flow">

                            <p className="text-caption text-subtle">
                                WHO I WORK WITH
                            </p>

                            <h2 className="heading-lg">
                                The best work happens with businesses that value thoughtful decisions.
                            </h2>

                        </div>

                        <div className="lg:col-span-8 flow-lg max-w-reading">

                            <p className="text-body-lg">
                                I enjoy partnering with service businesses that understand a
                                website is more than a marketing asset—it's often the first
                                impression people have of their business.
                            </p>

                            <p className="text-subtle">
                                Whether someone is discovering your business for the first
                                time or deciding whether they can trust you, every interaction
                                matters. A well-crafted website should communicate confidence,
                                reduce uncertainty, and make taking the next step feel natural.
                            </p>

                            <p className="text-subtle">
                                I work best with founders and teams who appreciate clarity,
                                collaboration, and long-term thinking over quick fixes or
                                short-lived design trends.
                            </p>

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-lg mt-3xl">

                        <article className="card flow">
                            <h3 className="heading-sm">
                                Professional Services
                            </h3>

                            <p className="text-subtle">
                                Consultants, agencies, accountants, legal professionals, and
                                businesses where expertise and trust are central to every
                                client relationship.
                            </p>
                        </article>

                        <article className="card flow">
                            <h3 className="heading-sm">
                                Local Businesses
                            </h3>

                            <p className="text-subtle">
                                Businesses that have built a strong reputation offline and
                                want their online presence to reflect the same quality and
                                professionalism.
                            </p>
                        </article>

                        <article className="card flow">
                            <h3 className="heading-sm">
                                Growing Companies
                            </h3>

                            <p className="text-subtle">
                                Businesses ready to replace outdated websites with systems
                                that support growth, improve communication, and simplify the
                                customer journey.
                            </p>
                        </article>

                        <article className="card flow">
                            <h3 className="heading-sm">
                                Purpose-Driven Brands
                            </h3>

                            <p className="text-subtle">
                                Founders who care about creating lasting value and understand
                                that thoughtful design is an investment in their business,
                                not an expense.
                            </p>
                        </article>

                    </div>

                </div>
            </section>

            <section
                id="philosophy"
                className="section bg-canvas-subtle"
            >
                <div className="container-wide flow-3xl">

                    <header className="flow-lg max-w-prose">

                        <p className="text-caption text-subtle">
                            MY PHILOSOPHY
                        </p>

                        <h2 className="heading-lg">
                            Good websites aren't created by adding more. They're created by removing what doesn't belong.
                        </h2>

                        <p className="text-body-lg text-subtle">
                            Every decision I make—from structure and typography to spacing and
                            interactions—is guided by a simple belief: thoughtful design should
                            make complexity disappear.
                        </p>

                    </header>

                    <div className="grid md:grid-cols-2 gap-xl">

                        <article className="card flow-lg">

                            <h3 className="heading-sm">
                                Clarity over cleverness.
                            </h3>

                            <p className="text-subtle">
                                Visitors shouldn't have to figure out where to click or what
                                your business does. Clear communication always outperforms
                                clever design.
                            </p>

                        </article>

                        <article className="card flow-lg">

                            <h3 className="heading-sm">
                                Simplicity takes intention.
                            </h3>

                            <p className="text-subtle">
                                The simplest experience is rarely the easiest to create. It
                                comes from asking better questions, making deliberate choices,
                                and refining every detail.
                            </p>

                        </article>

                        <article className="card flow-lg">

                            <h3 className="heading-sm">
                                Every element should have a purpose.
                            </h3>

                            <p className="text-subtle">
                                Layouts, colours, spacing, animations, and content should all
                                contribute to the user's journey. If something doesn't add
                                value, it doesn't belong.
                            </p>

                        </article>

                        <article className="card flow-lg">

                            <h3 className="heading-sm">
                                Timeless beats trendy.
                            </h3>

                            <p className="text-subtle">
                                Design trends come and go. Strong structure, thoughtful
                                typography, accessibility, and usability continue serving a
                                business long after trends have faded.
                            </p>

                        </article>

                    </div>

                    <blockquote className="flow max-w-reading">

                        <p className="heading-md">
                            "The goal isn't to create a website that gets compliments. It's to
                            create one that quietly earns confidence."
                        </p>

                    </blockquote>

                </div>
            </section>

        <section className="section">
    <div className="container-wide flow-3xl">

        <header className="flow-lg max-w-prose">

            <p className="text-caption text-subtle">
                WHAT I DO
            </p>

            <h2 className="heading-lg">
                Every project is approached as a complete digital system—not just another website.
            </h2>

            <p className="text-body-lg text-subtle">
                A successful website is the result of many thoughtful decisions
                working together. My role is to bring those pieces into a cohesive,
                reliable experience that serves both your business and your visitors.
            </p>

        </header>

        <div className="grid lg:grid-cols-2 gap-2xl">

            <div className="flow-xl">

                <article className="flow">

                    <h3 className="heading-sm">
                        Strategy
                    </h3>

                    <p className="text-subtle">
                        Understanding your business, audience, and objectives before
                        a single layout is designed.
                    </p>

                </article>

                <article className="flow">

                    <h3 className="heading-sm">
                        User Experience
                    </h3>

                    <p className="text-subtle">
                        Organising information, simplifying navigation, and creating
                        journeys that feel natural from the first click to the final action.
                    </p>

                </article>

                <article className="flow">

                    <h3 className="heading-sm">
                        Visual Design
                    </h3>

                    <p className="text-subtle">
                        Clean, refined interfaces built around typography, spacing,
                        hierarchy, and consistency rather than decoration.
                    </p>

                </article>

            </div>

            <div className="flow-xl">

                <article className="flow">

                    <h3 className="heading-sm">
                        Development
                    </h3>

                    <p className="text-subtle">
                        Modern, responsive websites built with performance,
                        accessibility, maintainability, and scalability in mind.
                    </p>

                </article>

                <article className="flow">

                    <h3 className="heading-sm">
                        Content Direction
                    </h3>

                    <p className="text-subtle">
                        Helping shape content so every page communicates clearly,
                        builds trust, and guides visitors toward meaningful action.
                    </p>

                </article>

                <article className="flow">

                    <h3 className="heading-sm">
                        Long-Term Thinking
                    </h3>

                    <p className="text-subtle">
                        Building websites that remain useful, adaptable, and easy to
                        evolve as your business continues to grow.
                    </p>

                </article>

            </div>

        </div>

        <div className="card flow-xl">

            <p className="text-caption text-subtle">
                THE RESULT
            </p>

            <h3 className="heading-md">
                A website that feels effortless for your visitors and dependable for your business.
            </h3>

            <p className="text-body-lg text-subtle max-w-reading">
                When strategy, design, content, and development work together,
                your website becomes more than an online presence—it becomes a
                trusted extension of your business, helping people understand who
                you are, what you offer, and why they should choose you.
            </p>

        </div>

    </div>
</section>

<section className="section bg-canvas-subtle">
    <div className="container-wide flow-3xl">

        <header className="flow-lg max-w-prose">

            <p className="text-caption text-subtle">
                MY PROCESS
            </p>

            <h2 className="heading-lg">
                A thoughtful process creates thoughtful results.
            </h2>

            <p className="text-body-lg text-subtle">
                Every project follows a structured approach designed to remove
                uncertainty, encourage collaboration, and ensure every decision
                supports your business goals.
            </p>

        </header>

        <div className="flow-2xl">

            <article className="grid lg:grid-cols-[120px_1fr] gap-xl">

                <div>
                    <p className="heading-lg text-accent">
                        01
                    </p>
                </div>

                <div className="flow">

                    <h3 className="heading-sm">
                        Discover
                    </h3>

                    <p className="text-subtle">
                        We begin by understanding your business, your audience,
                        your goals, and the challenges your website should solve.
                        Every successful project starts with asking the right
                        questions before making design decisions.
                    </p>

                </div>

            </article>

            <article className="grid lg:grid-cols-[120px_1fr] gap-xl">

                <div>
                    <p className="heading-lg text-accent">
                        02
                    </p>
                </div>

                <div className="flow">

                    <h3 className="heading-sm">
                        Structure
                    </h3>

                    <p className="text-subtle">
                        Content is organised into a clear information hierarchy.
                        Navigation, page layouts, and user journeys are carefully
                        planned to make every interaction feel intuitive.
                    </p>

                </div>

            </article>

            <article className="grid lg:grid-cols-[120px_1fr] gap-xl">

                <div>
                    <p className="heading-lg text-accent">
                        03
                    </p>
                </div>

                <div className="flow">

                    <h3 className="heading-sm">
                        Design
                    </h3>

                    <p className="text-subtle">
                        Typography, colour, spacing, imagery, and interaction
                        design come together to create an experience that reflects
                        your business with clarity and confidence.
                    </p>

                </div>

            </article>

            <article className="grid lg:grid-cols-[120px_1fr] gap-xl">

                <div>
                    <p className="heading-lg text-accent">
                        04
                    </p>
                </div>

                <div className="flow">

                    <h3 className="heading-sm">
                        Build
                    </h3>

                    <p className="text-subtle">
                        The approved design is developed using modern web
                        technologies with a strong focus on responsiveness,
                        accessibility, performance, and maintainability.
                    </p>

                </div>

            </article>

            <article className="grid lg:grid-cols-[120px_1fr] gap-xl">

                <div>
                    <p className="heading-lg text-accent">
                        05
                    </p>
                </div>

                <div className="flow">

                    <h3 className="heading-sm">
                        Refine & Launch
                    </h3>

                    <p className="text-subtle">
                        Before launch, every detail is reviewed, tested, and
                        refined to ensure your website delivers a polished,
                        reliable experience from day one—and continues supporting
                        your business long after it goes live.
                    </p>

                </div>

            </article>

        </div>

    </div>
</section>

<section className="section">
    <div className="container-wide flow-3xl">

        <header className="flow-lg max-w-prose">

            <p className="text-caption text-subtle">
                WHAT IT'S LIKE TO WORK TOGETHER
            </p>

            <h2 className="heading-lg">
                A process built on clarity, collaboration, and thoughtful decisions.
            </h2>

            <p className="text-body-lg text-subtle">
                Building a website should feel organised and enjoyable—not
                overwhelming. My goal is to create an experience where you always
                know what we're working on, why we're doing it, and what comes
                next.
            </p>

        </header>

        <div className="grid md:grid-cols-2 gap-xl">

            <article className="card flow-lg">

                <h3 className="heading-sm">
                    Thoughtful
                </h3>

                <p className="text-subtle">
                    Every recommendation is intentional. Rather than following
                    trends or making assumptions, decisions are guided by your
                    business goals and the people you're trying to serve.
                </p>

            </article>

            <article className="card flow-lg">

                <h3 className="heading-sm">
                    Collaborative
                </h3>

                <p className="text-subtle">
                    The best projects are partnerships. Your knowledge of your
                    business combined with my design and development expertise
                    leads to stronger outcomes than either could achieve alone.
                </p>

            </article>

            <article className="card flow-lg">

                <h3 className="heading-sm">
                    Transparent
                </h3>

                <p className="text-subtle">
                    You'll always understand the reasoning behind important
                    decisions, the progress being made, and the direction of the
                    project. Clear communication is part of the process from start
                    to finish.
                </p>

            </article>

            <article className="card flow-lg">

                <h3 className="heading-sm">
                    Built for the Long Term
                </h3>

                <p className="text-subtle">
                    A successful website shouldn't need replacing every couple of
                    years. The aim is to create a digital foundation that's easy
                    to maintain, adaptable, and capable of supporting your
                    business as it grows.
                </p>

            </article>

        </div>

        <div className="card flow-lg max-w-reading">

            <p className="text-caption text-subtle">
                MY COMMITMENT
            </p>

            <h3 className="heading-md">
                I'll never recommend something simply because it's popular.
            </h3>

            <p className="text-subtle">
                If a simpler solution is the right solution, that's what I'll
                recommend. My responsibility isn't to sell unnecessary features—
                it's to help you make confident decisions and create a website
                that genuinely serves your business.
            </p>

        </div>

    </div>
</section>

<section className="section bg-canvas-subtle">
    <div className="container-wide flow-3xl">

        <header className="flow-lg max-w-prose">

            <p className="text-caption text-subtle">
                FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="heading-lg">
                A few questions I’m often asked.
            </h2>

            <p className="text-body-lg text-subtle">
                Every project is different, but these are some of the questions
                that come up most often before we begin working together.
            </p>

        </header>

        <div className="flow-lg">

            <article className="card flow">

                <h3 className="heading-sm">
                    What kind of businesses do you work with?
                </h3>

                <p className="text-subtle">
                    I primarily work with service-based businesses, professional
                    firms, consultants, and organisations that value quality,
                    clarity, and long-term growth. If your business depends on
                    trust, a thoughtful website can make a meaningful difference.
                </p>

            </article>

            <article className="card flow">

                <h3 className="heading-sm">
                    Can you redesign an existing website?
                </h3>

                <p className="text-subtle">
                    Absolutely. Whether your current website feels outdated,
                    difficult to manage, or no longer represents your business,
                    I can help transform it into a more effective digital
                    experience while preserving what already works.
                </p>

            </article>

            <article className="card flow">

                <h3 className="heading-sm">
                    Do you only design websites?
                </h3>

                <p className="text-subtle">
                    My focus is creating complete digital experiences. That
                    includes strategy, information architecture, user experience,
                    visual design, modern development, and helping shape content
                    so every part of your website works together.
                </p>

            </article>

            <article className="card flow">

                <h3 className="heading-sm">
                    Will my website be easy to update?
                </h3>

                <p className="text-subtle">
                    Yes. I believe websites should remain useful long after
                    launch. Wherever appropriate, they're built so content can be
                    updated without unnecessary complexity.
                </p>

            </article>

            <article className="card flow">

                <h3 className="heading-sm">
                    What happens after the website is launched?
                </h3>

                <p className="text-subtle">
                    Launch is only the beginning. I can continue supporting your
                    website with improvements, updates, and future enhancements
                    as your business grows and your needs evolve.
                </p>

            </article>

        </div>

    </div>
</section>

<section className="section bg-primary text-primary-foreground">
    <div className="container-wide">

        <div className="max-w-reading flow-2xl">

            <div className="flow">

                <p className="text-caption text-primary-foreground/70">
                    LET'S WORK TOGETHER
                </p>

                <h2 className="heading-xl">
                    Let's build a website that reflects the quality of your business.
                </h2>

            </div>

            <p className="text-body-lg text-primary-foreground/80 max-w-prose">
                Your website is often the first conversation someone has with your
                business. Together, we can create an experience that communicates
                trust, removes friction, and gives visitors confidence from the
                very first impression.
            </p>

            <p className="text-body-lg text-primary-foreground/80 max-w-prose">
                Whether you're starting from scratch, planning a redesign, or
                simply exploring what's possible, I'd be happy to learn more
                about your business and discuss how we can create something that
                serves you for years to come.
            </p>

            <div className="cluster gap-md pt-lg">

                <a
                    href="/contact"
                    className="btn btn-primary"
                >
                    Start a Project
                </a>

                <a
                    href="/work"
                    className="btn btn-ghost"
                >
                    View My Work
                </a>

            </div>

        </div>

    </div>
</section>

        </>
    );
}