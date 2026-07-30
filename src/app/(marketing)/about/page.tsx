import type { Metadata } from "next";
import FeatureList from "@/components/content/FeatureList";
import Link from "next/link";

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
      {/** About Page Hero */}
      <section className="section bg-canvas-dark text-fg-on-dark">
        <div className="container-wide">
          <div className="text-content flow-lg">
            <div className="gap-md flex flex-col">
              <p className="text-overline">About</p>

              <h1 className="heading-xl text-fg-on-emphasis">
                Helping service businesses build stronger digital foundations.
              </h1>
            </div>

            <p className="text-body-lg text-fg-on-dark-subtle max-w-prose">
              I'm Nadeem Muhammed, a Digital Systems Consultant who works with service businesses to
              reduce digital friction, simplify complexity, and create systems that support
              long-term growth—not just short-term results.
            </p>

            <div className="gap-md pt-lg flex">
              <a href="/contact" className="btn btn-accent">
                Start a Project
              </a>

              <a href="#phillosophy" className="btn btn-secondary">
                Explore My Philosophy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/** WHo I help */}
      <section className="section">
        <div className="container-wide">
          <div className="gap-xl grid lg:grid-cols-12">
            <div className="flow lg:col-span-4">
              <p className="text-overline">Who I Work Best With</p>

              <h2 className="heading-lg">
                The best results come from working with businesses that value thoughtful decisions.
              </h2>
            </div>

            <div className="flow-lg text-content lg:col-span-8">
              <p className="text-body-lg">
                I work with service businesses that understand a website is more than an online
                brochure. It's often the first place people decide whether they can trust your
                business.
              </p>

              <p className="text-subtle">
                My best clients care about clarity, professionalism, and building something that
                genuinely supports their business. They value thoughtful decisions over quick fixes
                and see their website as a long-term investment rather than a one-time expense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Philosophy */}

      <section id="phillosophy" className="section bg-canvas-subtle">
        <div className="container-wide">
          <div className="section-header flow">
            <p className="text-overline">My Philosophy</p>

            <h2 className="heading-lg">
              Every decision should contribute to a stronger digital foundation.
            </h2>

            <p className="text-lg">
              Technology should support your business, not complicate it. These principles guide
              every recommendation I make and every solution I build.
            </p>
          </div>

          <FeatureList>
            <li>
              <div className="feature-list__header" aria-hidden="true" />

              <h3>Clarity over cleverness.</h3>

              <p>
                Clear communication, intuitive experiences, and straightforward solutions
                consistently outperform unnecessary complexity.
              </p>
            </li>

            <li>
              <div className="feature-list__header" aria-hidden="true" />

              <h3>Simplicity takes intention.</h3>

              <p>
                The simplest solution rarely happens by accident. It comes from asking better
                questions, refining every detail, and removing what doesn't add value.
              </p>
            </li>

            <li>
              <div className="feature-list__header" aria-hidden="true" />

              <h3>Every decision should have a purpose.</h3>

              <p>
                Design, content, technology, and systems should all solve real business problems—not
                exist for decoration or trend.
              </p>
            </li>

            <li>
              <div className="feature-list__header" aria-hidden="true" />

              <h3>Built to last.</h3>

              <p>
                Strong digital foundations prioritize accessibility, maintainability, performance,
                and long-term value over quick wins.
              </p>
            </li>
          </FeatureList>
        </div>
      </section>

      {/** WHy I work this way */}
      <section id="why-i-work-this-way" className="section">
        <div className="container-wide">
          <div className="gap-xl grid items-center lg:grid-cols-2">
            <div className="flow-xl">
              <header className="flow">
                <p className="text-overline">Why I Work This Way</p>

                <h2 className="heading-lg">
                  Strong digital foundations begin with better decisions.
                </h2>
              </header>

              <div className="flow-lg">
                <p className="text-lg">
                  I've found that the biggest digital problems rarely come from a lack of
                  technology. More often, they come from unclear goals, disconnected systems, and
                  decisions made without understanding the bigger picture.
                </p>

                <p className="text-body">
                  That's why I focus on understanding your business before recommending solutions.
                  Every project starts by identifying where friction exists and choosing approaches
                  that remain practical, maintainable, and valuable long after they're delivered.
                </p>

                <p className="text-body">
                  Whether I'm designing a website, improving a workflow, or solving a technical
                  challenge, my goal is always the same: create clarity, reduce unnecessary
                  complexity, and help businesses make confident technology decisions.
                </p>
              </div>
            </div>

            <aside
              className="flex items-center justify-center text-center"
              aria-label="Core belief"
            >
              <blockquote className="space-y-md text-center">
                <span className="quotation-xl text-accent/20 flex justify-start leading-none">
                  “
                </span>

                <p className="heading-lg max-w-16ch font-serif italic">
                  Every business deserves a digital foundation it can build on with confidence.
                </p>

                <span className="quotation-xl text-accent/20 flex justify-end leading-none">”</span>
              </blockquote>
            </aside>
          </div>
        </div>
      </section>

      {/** CTA Section */}
      <section className="section bg-canvas-highlight">
        <div className="container">
          <div className="flow-lg text-content mx-auto text-center">
            <header className="flow">
              <p className="text-overline">Let's Start a Conversation</p>

              <h2 className="heading-lg">Ready to build a stronger digital foundation?</h2>
            </header>

            <p className="text-lg">
              Whether you're planning a new website, improving an existing one, or looking for
              clearer technology decisions, I'd love to learn about your business and explore how I
              can help.
            </p>

            <div className="gap-md flex flex-wrap justify-center items-center">
              <Link className="btn btn-primary" href="/contact">Let's Talk</Link>

              <Link className="btn btn-secondary" href="/services" >
                Explore My Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
