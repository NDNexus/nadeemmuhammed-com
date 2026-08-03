import type { Metadata } from "next";

import { ProcessExplorer } from "@/builders/ProcessExplorer";
import { contactProcess } from "@/data/processes/contactProcess";

import ContactForm from "./contact-form";

/**
 * =========================================================
 * CONTACT PAGE METADATA
 * =========================================================
 */

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Get in touch with Nadeem Muhammed to discuss your business, digital challenges, and what you’re looking to improve.",
};

/**
 * =========================================================
 * CONTACT PAGE
 * =========================================================
 */

export default function ContactPage() {
  return (
    <>
      {/**
       * =====================================================
       * INTRODUCTION
       * =====================================================
       */}

      <section className="section bg-canvas-dark">
        <div className="container-wide">
          <header className="text-content flow-lg">
            <p className="text-overline">Get in Touch</p>

            <h1 className="heading-xl text-fg-on-emphasis">
              Let&rsquo;s start with what you&rsquo;re trying to improve.
            </h1>

            <p className="text-body-lg text-fg-on-dark-subtle">
              You don&rsquo;t need to know exactly what the solution is. Tell me about your
              business, what you&rsquo;re trying to achieve, and where things aren&rsquo;t working
              as well as they should.
            </p>
          </header>
        </div>
      </section>

      {/**
       * =====================================================
       * CONTACT
       * =====================================================
       */}

      <section className="section bg-canvas-subtle">
        <div className="container-wide">
          <div className="gap-2xl grid lg:grid-cols-2">
            {/**
             * ===================================================
             * CONTACT CONTEXT
             * ===================================================
             */}

            <div className="text-content flow-lg">
              <header className="flow">
                <p className="text-overline">Start a Conversation</p>

                <h2 className="heading-lg">Tell me a little about what&rsquo;s going on.</h2>

                <p className="text-lg">
                  Have a project, problem, or something you&rsquo;d like to improve? Share as much
                  context as you have. You don&rsquo;t need a technical brief or a fully formed
                  solution.
                </p>
              </header>

              <div className="flow-sm">
                <p className="heading-sm text-strong">Prefer email?</p>
                <p>Reach out to me on: </p>

                <a className="text-link" href="mailto:contact@nadeemmuhammed.com">
                  contact@nadeemmuhammed.com
                </a>
              </div>

              <div className="flow-sm">
                <p className="heading-sm text-strong">What happens after you send this?</p>

                <p>
                  I&rsquo;ll personally review your message and get back to you as soon as I can. If
                  it looks like I can help, we&rsquo;ll decide on the most sensible next step
                  together.
                </p>
              </div>
            </div>

            {/**
             * ===================================================
             * ENQUIRY FORM
             * ===================================================
             */}

             <div className="flex flex-col flow-lg">
            <ContactForm />
             </div>

          </div>
        </div>
      </section>

      {/**
       * =====================================================
       * WHAT HAPPENS NEXT
       * =====================================================
       */}

      <section className="section bg-canvas-default">
        <div className="container-wide flow-lg">
          <header className="text-content flow">
            <p className="text-overline">What Happens Next</p>

            <h2 className="heading-lg">A clear next step, without the pressure.</h2>

            <p className="text-body-lg">
              Reaching out doesn&rsquo;t commit you to anything. We&rsquo;ll start by understanding
              your situation, see whether there&rsquo;s a good fit, and decide what makes sense from
              there.
            </p>
          </header>

          <ProcessExplorer process={contactProcess} />
        </div>
      </section>
    </>
  );
}
