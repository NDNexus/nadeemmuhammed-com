import type { Metadata } from "next";

/**
 * =========================================================
 * CONTACT PAGE METADATA
 * =========================================================
 */

export const metadata: Metadata = {
    title: "Contact",

    description:
        "Get in touch with Nadeem Muhammed to discuss digital systems, premium websites, or consulting opportunities.",
};

export default function ContactPage() {
    return (
        <section className="section">
            <div className="container-page flow">
                <header className="flow">
                    <p className="text-caption text-subtle">Contact</p>

                    <h1 className="heading-display">
                        Let’s discuss your digital systems.
                    </h1>

                    <p className="text-body-lg text-subtle max-w-prose">
                        Whether you need strategic clarity, technical guidance, or a premium
                        digital experience, I’d be happy to start the conversation.
                    </p>
                </header>

                <div className="card flow max-w-reading">
                    <p>
                        Contact systems will be implemented here shortly.
                    </p>

                    <p>
                        This may later become:
                    </p>

                    <ul>
                        <li>Consultation booking</li>
                        <li>Contact form</li>
                        <li>Email outreach</li>
                        <li>Qualification workflow</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}