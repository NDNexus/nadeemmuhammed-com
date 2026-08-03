"use server";

import { z } from "zod";

import { Resend } from "resend";

import { createElement } from "react";

import ContactEnquiryEmail from "@/emails/templates/contact-enquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================================================
   ALLOWED VALUES
========================================================= */

const serviceValues = [
  "strategy-consulting",
  "websites",
  "systems-workflows",
  "ongoing-support",
  "not-sure",
  "other",
] as const;

const timelineValues = ["asap", "1-3-months", "3-6-months", "exploring", "not-sure"] as const;

/* =========================================================
   VALIDATION SCHEMA
========================================================= */

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),

  email: z.email("Please enter a valid email address.").max(254, "Email address is too long."),

  company: z.string().trim().max(150, "Company name is too long."),

  website: z
    .string()
    .trim()
    .max(2048, "Website URL is too long.")
    .refine((value) => value === "" || URL.canParse(value), "Please enter a valid website URL."),

  service: z.enum(serviceValues, {
    error: "Please select how I can help.",
  }),

  timeline: z.enum(timelineValues, {
    error: "Please select a timeline.",
  }),

  message: z
    .string()
    .trim()
    .min(20, "Please provide a little more detail.")
    .max(5000, "Message is too long."),
});

/* =========================================================
   FORM STATE
========================================================= */

export type ContactFormState = {
  success: boolean;
  resultId?: string;

  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    website?: string[];
    service?: string[];
    timeline?: string[];
    message?: string[];
  };

  message?: string;

  values?: {
    name: string;
    email: string;
    company: string;
    website: string;
    service: string;
    timeline: string;
    message: string;
  };
};

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  /* -------------------------------------------------------
     NORMALIZE FORM DATA
  ------------------------------------------------------- */

  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    website: String(formData.get("website") ?? ""),
    service: String(formData.get("service") ?? ""),
    timeline: String(formData.get("timeline") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  /* -------------------------------------------------------
     VALIDATE FORM DATA
  ------------------------------------------------------- */

  const result = contactSchema.safeParse(values);

  /* -------------------------------------------------------
     VALIDATION FAILED
  ------------------------------------------------------- */

  if (!result.success) {
    const errors = z.flattenError(result.error);

    return {
      success: false,
      resultId: crypto.randomUUID(),
      errors: errors.fieldErrors,
      message: "Please correct the errors in the form.",
      values,
    };
  }

  /* -------------------------------------------------------
   RESOLVE SITE URL
------------------------------------------------------- */

  /**
   * Get the canonical site URL for the current environment.
   *
   * SITE_URL is configured separately for each environment:
   *
   * Local:
   * http://localhost:3000
   *
   * Preview / beta:
   * https://beta.nadeemmuhammed.com
   *
   * Production:
   * https://nadeemmuhammed.com
   *
   * This allows email templates to generate absolute asset
   * and website URLs using the correct domain automatically,
   * without hardcoding environment-specific URLs in the code.
   *
   * A site URL is required because email clients cannot resolve
   * relative asset paths such as /logo/logo-email.png.
   */
  const siteUrl = process.env.SITE_URL;

  if (!siteUrl) {
    throw new Error("Missing SITE_URL environment variable.");
  }

  /* =========================================================
   VALIDATION PASSED
========================================================= */

  /**
   * At this point, Zod has successfully validated and normalized
   * the submitted form data.
   *
   * We destructure result.data so everything below uses the
   * validated values rather than reading directly from FormData.
   */
  const { name, email, company, website, service, timeline, message } = result.data;

  /* =========================================================
   SEND INTERNAL ENQUIRY EMAIL
========================================================= */

  /**
   * Send the enquiry notification to my contact inbox.
   *
   * IMPORTANT:
   *
   * from:
   * Uses an address on my verified Resend domain.
   *
   * to:
   * The enquiry notification is delivered to my main
   * contact inbox.
   *
   * replyTo:
   * Set to the visitor's email address. This means clicking
   * "Reply" in my email client replies directly to the person
   * who submitted the enquiry.
   *
   * subject:
   * Includes the visitor's name so enquiries are easy to
   * identify in the inbox.
   *
   * react:
   * Generates the branded HTML version of the email using
   * the React Email template.
   *
   * text:
   * Provides a plain-text alternative for email clients that
   * cannot or choose not to display HTML.
   */

  const { data, error } = await resend.emails.send({
    from: "Nadeem Muhammed Website <website@nadeemmuhammed.com>",

    to: ["contact@nadeemmuhammed.com"],

    replyTo: email,

    subject: `New website enquiry — ${name}`,

    /* -------------------------------------------------------
   BRANDED HTML EMAIL
------------------------------------------------------- */

    /**
     * Build the branded HTML email using the React Email
     * template.
     *
     * Because this Server Action lives in a .ts file, JSX syntax
     * such as <ContactEnquiryEmail /> cannot be used directly.
     *
     * createElement() creates the same React element without JSX
     * and passes the validated enquiry data to the template.
     *
     * Resend then renders that React element into the HTML email
     * that is delivered to my inbox.
     */
    react: createElement(ContactEnquiryEmail, {
      name,
      email,
      company,
      website,
      service,
      timeline,
      message,
      baseUrl: siteUrl,
    }),

    /* -------------------------------------------------------
     PLAIN-TEXT FALLBACK
  ------------------------------------------------------- */

    /**
     * Keep a plain-text version of the enquiry as well.
     *
     * This gives the email a usable alternative when HTML
     * rendering is unavailable or disabled.
     */
    text: `
New website enquiry

Name: ${name}
Email: ${email}
Business / Company: ${company || "Not provided"}
Website: ${website || "Not provided"}
Service: ${service}
Timeline: ${timeline}

Message:
${message}
  `.trim(),
  });

  /* =========================================================
   RESEND ERROR
========================================================= */

  /**
   * Resend can return an error even though our own form
   * validation succeeded.
   *
   * Examples:
   * - API/authentication problem
   * - sending-domain problem
   * - Resend service/API problem
   *
   * If sending fails:
   *
   * 1. Log the detailed error on the server.
   * 2. Return a safe generic message to the visitor.
   * 3. Return their submitted values so the form can restore
   *    everything instead of making them type it again.
   */
  if (error) {
    console.error("RESEND ERROR:", error);

    return {
      success: false,
      resultId: crypto.randomUUID(),
      message: "Something went wrong while sending your enquiry. Please try again.",
      values,
    };
  }

  /* =========================================================
   EMAIL SENT SUCCESSFULLY
========================================================= */

  /**
   * The Resend API accepted the email.
   *
   * `data` contains information such as the Resend email ID.
   * We only log this server-side for development/debugging.
   */
  console.log("EMAIL SENT:", data);

  /* =========================================================
   FORM SUCCESS
========================================================= */

  /**
   * Tell the client component that the entire submission
   * completed successfully.
   *
   * resultId gives each result its own identity, which is what
   * our temporary status-message dismissal logic relies on.
   */
  return {
    success: true,
    resultId: crypto.randomUUID(),
    message: "Your enquiry has been received.",
  };
}
