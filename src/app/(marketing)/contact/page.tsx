import type { Metadata } from "next";

import { ProcessExplorer } from "@/builders/ProcessExplorer";
import { contactProcess } from "@/data/processes/contactProcess";

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

            <form className="gap-lg grid md:grid-cols-2">
              {/** Name */}

              <div className="form-field">
                <label className="form-label" htmlFor="name">
                  Name
                </label>

                <input
                  className="form-input"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>

              {/** Email */}

              <div className="form-field">
                <label className="form-label" htmlFor="email">
                  Email
                </label>

                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              {/** Business */}

              <div className="form-field">
                <label className="form-label" htmlFor="company">
                  Business / Company
                  <span className="text-subtle"> (optional)</span>
                </label>

                <input
                  className="form-input"
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
              </div>

              {/** Website */}

              <div className="form-field">
                <label className="form-label" htmlFor="website">
                  Website
                  <span className="text-subtle"> (optional)</span>
                </label>

                <input
                  className="form-input"
                  id="website"
                  name="website"
                  type="url"
                  inputMode="url"
                  autoComplete="url"
                />
              </div>

              {/** Service */}

              <div className="form-field">
                <label className="form-label" htmlFor="service">
                  What can I help you with?
                </label>

                <select
                  className="form-select"
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="strategy-consulting">Digital Strategy &amp; Consulting</option>

                  <option value="websites">Websites &amp; Digital Experiences</option>

                  <option value="systems-workflows">Systems &amp; Workflow Improvement</option>

                  <option value="ongoing-support">Ongoing Support &amp; Improvement</option>

                  <option value="not-sure">I&rsquo;m not sure yet</option>

                  <option value="other">Something else</option>
                </select>
              </div>

              {/** Timeline */}

              <div className="form-field">
                <label className="form-label" htmlFor="timeline">
                  When are you looking to get started?
                </label>

                <select className="form-select" id="timeline" name="timeline" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="asap">As soon as possible</option>

                  <option value="1-3-months">Within 1–3 months</option>

                  <option value="3-6-months">Within 3–6 months</option>

                  <option value="exploring">I&rsquo;m just exploring</option>

                  <option value="not-sure">I&rsquo;m not sure yet</option>
                </select>
              </div>

              {/** Message */}

              <div className="form-field md:col-span-2">
                <label className="form-label" htmlFor="message">
                  Tell me about what you&rsquo;re trying to improve.
                </label>

                <textarea className="form-textarea" id="message" name="message" rows={7} required />
              </div>

              {/** Submit */}

              <div className="lg:col-span-2">
                <button className="btn btn-primary" type="submit">
                  Send Enquiry
                </button>
              </div>
            </form>
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
