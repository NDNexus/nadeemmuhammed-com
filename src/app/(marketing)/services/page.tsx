import type { Metadata } from "next";

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
    <section className="section">
      <div className="container flow">
        <header className="flow">
          <p className="text-caption text-subtle">Services</p>

          <h1 className="text-heading-xl">
            Strategic digital systems for modern service businesses.
          </h1>

          <p className="text-body-lg text-subtle max-w-prose">
            From premium websites to scalable digital workflows, I help service
            businesses create systems that feel polished and intentional.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="card flow">
            <h2 className="heading-3">Website Systems</h2>
            <p>
              Premium high-performance websites designed as business systems,
              not just visual brochures.
            </p>
          </article>

          <article className="card flow">
            <h2 className="heading-3">Digital Workflow Architecture</h2>
            <p>
              Process design, automation thinking, and operational clarity for
              growing service businesses.
            </p>
          </article>

          <article className="card flow">
            <h2 className="heading-3">Content Infrastructure</h2>
            <p>
              Structured content systems using modern headless architecture.
            </p>
          </article>

          <article className="card flow">
            <h2 className="heading-3">Technical Consulting</h2>
            <p>
              Strategic technical guidance for businesses navigating digital
              complexity.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}