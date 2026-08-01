import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import Link from "next/link";

import FeatureList from "@/components/content/FeatureList";
import InfoBlock from "@/components/content/InfoBlock";

import { ProcessExplorer } from "@/builders/ProcessExplorer";
import { websiteProcess } from "@/data/processes/websiteProcess";

import { FAQAccordion } from "@/builders/FAQAccordion";
import { servicesFAQ } from "@/data/FAQs/services";

/**
 * =========================================================
 * SERVICES PAGE METADATA
 * =========================================================
 */

export const metadata: Metadata = {
  title: "Services",

  description:
    "Digital systems consulting services for service businesses, including websites, workflows, architecture, and scalable digital experiences.",
};

export default function ServicesPage() {
  return (
    <>
      {/** Hero */}
      <section className="section bg-canvas-dark">
        <div className="container-wide">
          <div className="flow-lg text-content">
            <header className="flow">
              <p className="text-overline">Services</p>

              <h1 className="heading-xl text-fg-on-emphasis">
                Practical digital services built around clarity, simplicity, and long-term thinking.
              </h1>
            </header>

            <p className="text-body-lg text-fg-on-dark-subtle">
              From strategy and websites to systems and ongoing support, I help service businesses
              reduce digital friction and build stronger foundations for long-term growth.
            </p>

            <div className="gap-md flex flex-wrap">
              <Link href="/contact" className="btn btn-accent">
                Let's Talk
              </Link>

              <Link href="#my-process" className="btn btn-secondary">
                Explore My Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/** Challenges I Help Solve */}

      <section className="section bg-canvas-subtle">
        <div className="container-wide flow-lg">
          <header className="flow text-content">
            <p className="text-overline">Challenges I Help Solve</p>

            <h2 className="heading-lg">
              Small points of digital friction often become bigger business problems.
            </h2>

            <p className="text-body-lg">
              Many service businesses don't need more technology—they need clearer systems, better
              decisions, and fewer things getting in the way of serving their customers.
            </p>
          </header>

          <FeatureList>
            <li>
              <div className="feature-list__header" aria-hidden="true" />

              <h3>Your website no longer reflects the quality of your business.</h3>

              <p>
                First impressions matter. An outdated or ineffective website can reduce confidence
                before a conversation even begins.
              </p>
            </li>

            <li>
              <div className="feature-list__header" aria-hidden="true" />

              <h3>Customers struggle to find what they need.</h3>

              <p>
                Confusing navigation, unclear messaging, and poor user journeys create unnecessary
                friction and missed opportunities.
              </p>
            </li>

            <li>
              <div className="feature-list__header" aria-hidden="true" />

              <h3>Your tools and processes don't work well together.</h3>

              <p>
                Disconnected systems and repetitive manual work slow your business down and make
                everyday tasks more difficult than they need to be.
              </p>
            </li>

            <li>
              <div className="feature-list__header" aria-hidden="true" />

              <h3>You're unsure which technology decisions are worth making.</h3>

              <p>
                With so many platforms, tools, and opinions available, it's easy to invest in
                solutions that add complexity instead of creating long-term value.
              </p>
            </li>
          </FeatureList>
        </div>
      </section>

      {/* Core Services */}

      <section id="services" className="section">
        <div className="container-wide flow-xl">
          <header className="text-content flow">
            <p className="text-overline">Core Services</p>

            <h2 className="heading-lg">
              Practical services focused on creating stronger digital foundations.
            </h2>

            <p className="text-body-lg">
              Every business is different, but the goal is always the same: reduce unnecessary
              digital friction, improve clarity, and build systems that continue creating value long
              after they're implemented.
            </p>
          </header>

          <div className="gap-xl mt-6 grid md:grid-cols-2">
            <InfoBlock animate listMarker="/icons/check.svg">
              <header>
                <h3 className="heading-md">Digital Strategy & Consulting</h3>

                <p className="text-subtle">
                  Better technology decisions begin with better understanding.
                </p>
              </header>

              <ul>
                <li>Audit your current digital landscape and identify key opportunities.</li>
                <li>Uncover friction points affecting customers and internal workflows.</li>
                <li>Evaluate technology, platforms, and digital investments objectively.</li>
                <li>Create a practical roadmap aligned with your business goals.</li>
              </ul>

              <footer>
                <p>
                  Clear strategy creates stronger digital foundations and gives every future
                  decision greater confidence.
                </p>
              </footer>
            </InfoBlock>

            <InfoBlock animate listMarker="/icons/check.svg">
              <header>
                <h3 className="heading-md">Websites & Digital Experiences</h3>

                <p className="text-subtle">
                  Thoughtful websites built around clarity, trust, and long-term value.
                </p>
              </header>

              <ul>
                <li>Plan clear information architecture and intuitive user journeys.</li>
                <li>Create custom designs that reflect the quality of your business.</li>
                <li>Develop fast, accessible, and maintainable websites.</li>
                <li>Guide visitors toward meaningful actions with confidence.</li>
              </ul>

              <footer>
                <p>
                  Your website should become a reliable business asset—not something that needs
                  rebuilding every few years.
                </p>
              </footer>
            </InfoBlock>

            <InfoBlock animate listMarker="/icons/check.svg">
              <header>
                <h3 className="heading-md">Systems & Workflow Improvement</h3>

                <p className="text-subtle">
                  Simplify the systems that support your business behind the scenes.
                </p>
              </header>

              <ul>
                <li>Reduce repetitive manual work through better workflows.</li>
                <li>Connect tools so information flows more efficiently.</li>
                <li>Remove unnecessary complexity from everyday operations.</li>
                <li>Build reliable systems that scale with your business.</li>
              </ul>

              <footer>
                <p>
                  Better systems free your team to spend more time serving customers and less time
                  managing technology.
                </p>
              </footer>
            </InfoBlock>

            <InfoBlock animate listMarker="/icons/check.svg">
              <header>
                <h3 className="heading-md">Ongoing Support & Improvement</h3>

                <p className="text-subtle">
                  Building long-term partnerships instead of one-off projects.
                </p>
              </header>

              <ul>
                <li>Continuously improve your digital presence as your business evolves.</li>
                <li>Receive practical guidance for new challenges and opportunities.</li>
                <li>Maintain reliable, secure, and high-performing digital systems.</li>
                <li>Refine and optimise existing solutions over time.</li>
              </ul>

              <footer>
                <p>
                  Strong digital foundations are never truly finished—they're continually improved
                  as your business grows.
                </p>
              </footer>
            </InfoBlock>
          </div>
        </div>
      </section>

      {/* How I Work */}

      <section className="section bg-canvas-subtle">
        <div className="container-wide flow-lg">
          <header className="text-content flow">
            <p className="text-overline">Working Together</p>

            <h2 className="heading-lg">What you can expect from every project.</h2>

            <p className="text-body-lg">
              Every business is different, but the principles behind my work remain the same. These
              guide every recommendation, decision, and solution I deliver.
            </p>
          </header>

          <div className="gap-xl grid md:grid-cols-2">
            <article className="card card-feature">
              <div className="card__body">
                <span className="service-icon">
                  <Icon icon="mdi:scale-balance" />
                </span>

                <h3 className="heading-md">Honest Advice</h3>

                <p>
                  If a simpler solution achieves the same outcome, that's the one I'll recommend. My
                  goal is to solve problems—not sell unnecessary technology.
                </p>
              </div>
            </article>

            <article className="card card-feature">
              <div className="card__body">
                <span className="service-icon">
                  <Icon icon="mdi:target" />
                </span>

                <h3 className="heading-md">Business Before Technology</h3>

                <p>
                  Every recommendation starts with understanding your business first. Technology
                  should support your goals, not dictate how you work.
                </p>
              </div>
            </article>

            <article className="card card-feature">
              <div className="card__body">
                <span className="service-icon">
                  <Icon icon="mdi:compass-outline" />
                </span>

                <h3 className="heading-md">Built for the Long Term</h3>

                <p>
                  I focus on creating digital solutions that continue delivering value as your
                  business grows, reducing the need for unnecessary rebuilds and costly
                  replacements.
                </p>
              </div>
            </article>

            <article className="card card-feature">
              <div className="card__body">
                <span className="service-icon">
                  <Icon icon="mdi:account-voice" />
                </span>

                <h3 className="heading-md">Clear Communication</h3>

                <p>
                  You should never feel lost during a project. I believe in explaining decisions
                  clearly, communicating openly, and making the process easy to understand from
                  start to finish.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* My Process */}

      <section id="my-process" className="section">
        <div className="container-wide">
          <header className="text-content flow mb-6">
            <p className="text-overline">My Process</p>

            <h2 className="heading-lg">
              A structured approach that keeps projects focused, collaborative, and built for
              long-term success.
            </h2>

            <p className="text-body-lg">
              Every project follows a clear process designed to reduce uncertainty, encourage
              collaboration, and create thoughtful solutions that support your business now and into
              the future.
            </p>
          </header>

          <ProcessExplorer process={websiteProcess} />
        </div>
      </section>

      {/** Frequently Asked Questions */}

      <section className="section">
        <div className="container-wide">
          <div className="flow-lg">
            <header className="text-content flow mb-6">
              <p className="text-overline">Frequently Asked Questions</p>

              <h2 className="heading-lg">
                A few things you may want to know before we work together.
              </h2>

              <p className="text-body-lg">
                Clear answers to common questions about how I work, what to expect, and what happens
                when you get in touch.
              </p>
            </header>

            {/* FAQ Questions and Answers */}

            <FAQAccordion faq={servicesFAQ} />
          </div>
        </div>
      </section>

      {/** CTA Section */}
      <section className="section bg-canvas-highlight">
        <div className="container">
          <div className="flow-lg text-content mx-auto text-center">
            <header className="flow">
              <p className="text-overline">Start a Conversation</p>

              <h2 className="heading-lg">
                Not sure what the right solution is? That&rsquo;s a good place to start.
              </h2>
            </header>

            <p className="text-lg">
              Tell me what you&rsquo;re trying to improve, what isn&rsquo;t working, or where things
              feel more complicated than they should. We&rsquo;ll figure out what makes sense from
              there.
            </p>

            <div className="flex items-center justify-center">
              <Link className="btn btn-primary" href="/contact">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
