import Link from "next/link";

import FeatureList from "@/components/content/FeatureList";

import { FAQAccordion } from "@/builders/FAQAccordion";
import { agencyFAQ } from "@/data/FAQs/agencyFAQs";

import { ProjectsExplorer } from "@/builders/ProjectsExplorer";
import { projects } from "@/data/projects";
import InfoBlock from "@/components/content/InfoBlock";

export default function WebDevelopmentForAgenciesPage() {
  return (
    <main>
      {/* -----------------------------------------------------------------------
          HERO
      ----------------------------------------------------------------------- */}
      <section className="section bg-canvas-dark" aria-labelledby="hero-heading">
        <div className="container-wide">
          <div className="max-w-4xl py-16 md:py-24 lg:py-32">
            <p className="text-overline text-fg-on-emphasis">
              Web development support for agencies
            </p>

            <h1 id="hero-heading" className="heading-xl text-fg-on-emphasis mt-6">
              Need extra development capacity for your client projects?
            </h1>

            <p className="text-body-lg text-fg-on-dark mt-6 max-w-3xl">
              I help SEO, digital marketing, creative and other client-service agencies deliver
              high-quality websites and web projects when their internal team needs additional
              development capacity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-accent" href="#work">
                View my work
              </Link>

              <Link className="btn btn-secondary" href="#contact">
                Discuss a project
              </Link>
            </div>

            <p className="text-body-sm text-fg-on-dark-subtle mt-8">
              Technical partner for agencies that need reliable development capacity.
            </p>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          THE PROBLEM
      ----------------------------------------------------------------------- */}
      <section className="section bg-canvas-default" aria-labelledby="problem-heading">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-overline">When your team needs more development capacity</p>
            </div>

            <div className="lg:col-span-8">
              <h2 id="problem-heading" className="heading-lg text-heading-primary">
                Take on more client work without adding another full-time developer.
              </h2>

              <div className="text-body text-content text-fg-default mt-6 space-y-5">
                <p>
                  Client work does not always arrive at a convenient pace. Sometimes your developers
                  are already committed, a project needs technical skills outside your team's usual
                  stack, or you simply need additional capacity without hiring another full-time
                  developer.
                </p>

                <p>
                  That's where I can help. You bring the client, strategy and project context. I
                  provide the development capacity needed to move the work forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
    WHAT I CAN HANDLE
    ----------------------------------------------------------------------- */}
      <section className="section bg-canvas-subtle" aria-labelledby="capabilities-heading">
        <div className="container-wide">
          <div className="text-content flow mb-6">
            <p className="text-overline">What I can take off your team's plate</p>

            <h2 id="capabilities-heading" className="heading-lg text-heading-primary">
              Development work your team can confidently hand over.
            </h2>
          </div>

          <div className="grid-md gap-lg grid">
            <InfoBlock className="bg-surface-default" icon="">
              <header>
                <h3 className="heading-md">Business websites</h3>

                <p>
                  Modern, responsive websites built around the client's goals, content and customer
                  journey.
                </p>
              </header>
            </InfoBlock>

            <InfoBlock className="bg-surface-default" icon="">
              <header>
                <h3 className="heading-md">Landing pages</h3>

                <p>
                  Campaign and conversion-focused pages that need to be designed, developed and
                  launched quickly.
                </p>
              </header>
            </InfoBlock>

            <InfoBlock className="bg-surface-default" icon="">
              <header>
                <h3 className="heading-md">CMS implementation</h3>

                <p>
                  Content-driven websites and CMS integrations that allow your clients to manage
                  their own content.
                </p>
              </header>
            </InfoBlock>

            <InfoBlock className="bg-surface-default" icon="">
              <header>
                <h3 className="heading-md">Custom frontend development</h3>

                <p>
                  Custom interfaces and frontend implementations when a project needs more than an
                  off-the-shelf template.
                </p>
              </header>
            </InfoBlock>

            <InfoBlock className="bg-surface-default" icon="">
              <header>
                <h3 className="heading-md">Performance & technical SEO</h3>

                <p>
                  Technical implementation focused on performance, accessibility, search foundations
                  and a better user experience.
                </p>
              </header>
            </InfoBlock>

            <InfoBlock className="bg-surface-default" icon="">
              <header>
                <h3 className="heading-md">Ongoing development</h3>

                <p>
                  Post-launch improvements, maintenance and technical work when a client project
                  continues to evolve.
                </p>
              </header>
            </InfoBlock>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
    AGENCY RELATIONSHIP
    -----------------------------------------------------------------------
    The agency keeps ownership of the client relationship.
    I provide the development capacity behind the scenes.

    This section uses InfoBlock because the two responsibility groups
    are structured information rather than conventional feature cards.
------------------------------------------------------------------------- */}
      <section className="section bg-canvas-default" aria-labelledby="relationship-heading">
        <div className="container-wide">
          <div className="text-content flow mb-8">
            <p className="text-overline">How I fit into your team</p>

            <h2 id="relationship-heading" className="heading-lg text-heading-primary">
              You keep the client relationship. I handle the development.
            </h2>

            <p className="text-body-lg text-fg-default">
              I work alongside your team, not around it. You retain ownership of the strategy,
              client communication and relationship while I handle the development and technical
              implementation.
            </p>
          </div>

          <div className="grid-md gap-lg grid">
            <InfoBlock icon="/icons/briefcase.svg" listStyle="icon" listMarker="/icons/check.svg">
              <header>
                <h3 className="heading-md">You manage</h3>
              </header>

              <ul>
                <li>Client relationship</li>
                <li>Strategy and marketing</li>
                <li>Project direction</li>
                <li>Client communication</li>
              </ul>
            </InfoBlock>

            <InfoBlock icon="/icons/code.svg" listStyle="icon" listMarker="/icons/check.svg">
              <header>
                <h3 className="heading-md">I handle</h3>
              </header>

              <ul>
                <li>Development</li>
                <li>Technical implementation</li>
                <li>Development updates</li>
                <li>Technical handoff and launch support</li>
              </ul>
            </InfoBlock>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
    WORK

    Selected real-world work.

    ProjectsExplorer handles project navigation and presentation,
    while the page retains ownership of the section introduction.
------------------------------------------------------------------------- */}

      <section id="work" className="section bg-canvas-default" aria-labelledby="work-heading">
        <div className="container-wide">
          {/* -----------------------------------------------------------------
          SECTION INTRO
      ----------------------------------------------------------------- */}

          <div className="text-content flow">
            <p className="text-overline">Selected work</p>

            <h2 id="work-heading" className="heading-lg text-heading-primary mt-4">
              Real projects. Real development work.
            </h2>

            <p className="text-body-lg text-subtle">
              A selection of real projects spanning strategy, design, development and technical
              systems work.
            </p>
          </div>

          {/* -----------------------------------------------------------------
          PROJECT EXPLORER

          Project data is kept separate from the page and rendered through
          the domain-specific ProjectsExplorer builder.
      ----------------------------------------------------------------- */}

          <div className="">
            <ProjectsExplorer projects={projects} />
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
    HOW IT WORKS

    A clear five-step collaboration process from brief to launch.
------------------------------------------------------------------------- */}

      <section className="section bg-canvas-subtle" aria-labelledby="process-heading">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-overline">How we can work together</p>

            <h2 id="process-heading" className="heading-lg mt-4">
              Simple process. Clear scope. No unnecessary layers.
            </h2>
          </div>

          <FeatureList as="ol" className="mt-12" aria-label="Project collaboration process">
            <li>
              <header className="feature-list__header">
                <span>Send me the brief</span>
              </header>

              <div>
                <h3 className="heading-md text-heading-primary">Start with what you have</h3>

                <p className="text-body text-fg-default">
                  Send the requirements, designs, existing website or whatever information you
                  already have.
                </p>
              </div>
            </li>

            <li>
              <header className="feature-list__header">
                <span>Scope the development</span>
              </header>

              <div>
                <h3 className="heading-md text-heading-primary">Define the work</h3>

                <p className="text-body text-fg-default">
                  I'll review what is required and clarify the technical scope, timeline and
                  deliverables.
                </p>
              </div>
            </li>

            <li>
              <header className="feature-list__header">
                <span>I build</span>
              </header>

              <div>
                <h3 className="heading-md text-heading-primary">Turn the plan into reality</h3>

                <p className="text-body text-fg-default">
                  Development happens directly with your team, with clear communication throughout
                  the project.
                </p>
              </div>
            </li>

            <li>
              <header className="feature-list__header">
                <span>You review</span>
              </header>

              <div>
                <h3 className="heading-md text-heading-primary">Review before delivery</h3>

                <p className="text-body text-fg-default">
                  Your team reviews the implementation before it is delivered to the client.
                </p>
              </div>
            </li>

            <li>
              <header className="feature-list__header">
                <span>Launch & handoff</span>
              </header>

              <div>
                <h3 className="heading-md text-heading-primary">Move cleanly into production</h3>

                <p className="text-body text-fg-default">
                  I help with the technical handoff and launch requirements so the project can move
                  cleanly into production.
                </p>
              </div>
            </li>
          </FeatureList>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
    WHY WORK WITH ME
------------------------------------------------------------------------- */}

      <section className="section bg-canvas-default" aria-labelledby="why-heading">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-overline">Why work with me?</p>

              <h2 id="why-heading" className="heading-lg text-heading-primary mt-4">
                Development support without adding another management layer.
              </h2>

              <p className="text-body-lg text-subtle mt-5 max-w-sm">
                A technical partner who can understand the problem, work within your process, build
                the solution and communicate clearly throughout the project.
              </p>
            </div>

            <div className="lg:col-span-7">
              <FeatureList aria-label="Reasons to work with me">
                <li>
                  <header className="feature-list__header">
                    <span>Direct collaboration</span>
                  </header>

                  <p>You work directly with the person designing and building the solution.</p>
                </li>

                <li>
                  <header className="feature-list__header">
                    <span>Clear scope</span>
                  </header>

                  <p>
                    Technical scope, deliverables and expectations are clarified before development
                    begins.
                  </p>
                </li>

                <li>
                  <header className="feature-list__header">
                    <span>Technical depth</span>
                  </header>

                  <p>
                    Modern, performance-conscious implementation with clean, maintainable code built
                    to be understood and extended.
                  </p>
                </li>

                <li>
                  <header className="feature-list__header">
                    <span>Systems thinking</span>
                  </header>

                  <p>
                    I look beyond the visible interface and consider the systems supporting the
                    website or product.
                  </p>
                </li>

                <li>
                  <header className="feature-list__header">
                    <span>Clear communication</span>
                  </header>

                  <p>
                    Defined review points and direct communication without adding unnecessary
                    project-management layers.
                  </p>
                </li>

                <li>
                  <header className="feature-list__header">
                    <span>Ongoing support</span>
                  </header>

                  <p>
                    Available for defined projects as well as longer-term technical support when it
                    makes sense.
                  </p>
                </li>
              </FeatureList>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          LOW-RISK FIRST ENGAGEMENT
      ----------------------------------------------------------------------- */}
      <section className="section bg-canvas-highlight" aria-labelledby="small-start-heading">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-overline">Start small</p>

            <h2 id="small-start-heading" className="heading-lg text-heading-primary mt-4">
              You don't have to commit to a long-term partnership on day one.
            </h2>

            <p className="text-body text-fg-default mt-6">
              If you're unsure whether we're a good fit, start with a defined piece of work — a
              landing page, website improvement, technical task or specific development component.
            </p>

            <p className="text-body text-fg-default mt-5">
              The goal is simple: let the quality of the work and the collaboration determine
              whether it makes sense to work together again.
            </p>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
    FAQ

    Practical questions agencies and businesses may have
    before working together.
------------------------------------------------------------------------- */}

      <section className="section bg-canvas-default" aria-labelledby="faq-heading">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-overline">Questions agencies usually have</p>

              <h2 id="faq-heading" className="heading-lg text-heading-primary mt-4">
                Before we work together
              </h2>

              <p className="text-body-lg text-subtle mt-5 max-w-sm">
                A few practical answers about how I work, what I can take on and what you can
                expect.
              </p>
            </div>

            <div className="lg:col-span-8">
              <FAQAccordion faq={agencyFAQ} showNumbers />
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          FINAL CTA
      ----------------------------------------------------------------------- */}
      <section id="contact" className="section bg-canvas-dark" aria-labelledby="cta-heading">
        <div className="container-wide">
          <div className="max-w-3xl py-8 md:py-12">
            <p className="text-overline text-fg-on-emphasis">Have a project coming up?</p>

            <h2 id="cta-heading" className="heading-lg text-heading-on-dark mt-4">
              Let's see if I can take the development off your plate.
            </h2>

            <p className="text-body-lg text-fg-on-dark-subtle mt-6">
              Send me the brief, the existing website or simply tell me what your client needs. I'll
              tell you whether I can help and what the next step would look like.
            </p>

            <Link className="btn btn-accent mt-8" href="/contact-me">
              Discuss a project
            </Link>

            <p className="text-body-sm text-fg-on-dark-subtle mt-6">
              Or email{" "}
              <a
                className="text-fg-on-dark hover:text-fg-on-emphasis underline decoration-white/30 underline-offset-4 transition-colors"
                href="mailto:contact@nadeemmuhammed.com"
              >
                contact@nadeemmuhammed.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
