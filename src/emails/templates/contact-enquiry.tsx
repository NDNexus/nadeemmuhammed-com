import { Heading, Hr, Link, Section, Text } from "react-email";

import EmailLayout from "../components/email-layout";

/* =========================================================
   TYPES
========================================================= */

type ContactEnquiryEmailProps = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  service: string;
  timeline: string;
  message: string;
  baseUrl: string;
};

/* =========================================================
   LABELS
========================================================= */

const serviceLabels: Record<string, string> = {
  "strategy-consulting": "Digital Strategy & Consulting",
  websites: "Websites & Digital Experiences",
  "systems-workflows": "Systems & Workflow Improvement",
  "ongoing-support": "Ongoing Support & Improvement",
  "not-sure": "I'm not sure yet",
  other: "Something else",
};

const timelineLabels: Record<string, string> = {
  asap: "As soon as possible",
  "1-3-months": "Within 1–3 months",
  "3-6-months": "Within 3–6 months",
  exploring: "I'm just exploring",
  "not-sure": "I'm not sure yet",
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ContactEnquiryEmail({
  name,
  email,
  company,
  website,
  service,
  timeline,
  message,
  baseUrl,
}: ContactEnquiryEmailProps) {
  const serviceLabel = serviceLabels[service] ?? service;
  const timelineLabel = timelineLabels[timeline] ?? timeline;

  return (
    <EmailLayout preview={`New website enquiry from ${name}`} baseUrl={baseUrl}>
      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <Section>
        <Text style={overline}>New website enquiry</Text>

        <Heading as="h1" style={heading}>
          You have a new enquiry.
        </Heading>

        <Text style={intro}>
          {name} submitted an enquiry through the contact form on{" "}
          <Link href="https://nadeemmuhammed.com" style={inlineLink}>
            nadeemmuhammed.com
          </Link>
          .
        </Text>
      </Section>

      <Hr style={sectionDivider} />

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <Section>
        <Text style={sectionLabel}>Contact</Text>

        <Section style={row}>
          <Section style={columnLeft}>
            <Text style={fieldLabel}>Name</Text>
            <Text style={fieldValue}>{name}</Text>
          </Section>

          <Section style={columnRight}>
            <Text style={fieldLabel}>Email</Text>

            <Text style={fieldValue}>
              <Link href={`mailto:${email}`} style={valueLink}>
                {email}
              </Link>
            </Text>
          </Section>
        </Section>

        {(company || website) && (
          <Section style={row}>
            <Section style={columnLeft}>
              <Text style={fieldLabel}>Business / Company</Text>
              <Text style={fieldValue}>{company || "Not provided"}</Text>
            </Section>

            <Section style={columnRight}>
              <Text style={fieldLabel}>Website</Text>

              {website ? (
                <Text style={fieldValue}>
                  <Link href={website} style={valueLink}>
                    {website}
                  </Link>
                </Text>
              ) : (
                <Text style={fieldValue}>Not provided</Text>
              )}
            </Section>
          </Section>
        )}
      </Section>

      <Hr style={sectionDivider} />

      {/* =====================================================
          PROJECT
      ====================================================== */}

      <Section>
        <Text style={sectionLabel}>Project</Text>

        <Section style={row}>
          <Section style={columnLeft}>
            <Text style={fieldLabel}>Service</Text>
            <Text style={fieldValue}>{serviceLabel}</Text>
          </Section>

          <Section style={columnRight}>
            <Text style={fieldLabel}>Timeline</Text>
            <Text style={fieldValue}>{timelineLabel}</Text>
          </Section>
        </Section>
      </Section>

      <Hr style={sectionDivider} />

      {/* =====================================================
          MESSAGE
      ====================================================== */}

      <Section>
        <Text style={sectionLabel}>Message</Text>

        <Text style={messageText}>{message}</Text>
      </Section>

      <Hr style={sectionDivider} />

      {/* =====================================================
          ACTION
      ====================================================== */}

      <Section>
        <Text style={replyText}>Reply directly to this enquiry using the email address below.</Text>

        <Link href={`mailto:${email}`} style={replyLink}>
          Reply to {name} →
        </Link>
      </Section>
    </EmailLayout>
  );
}

/* =========================================================
   PREVIEW PROPS

   React Email uses these values in the local preview.
   They are NOT used when the real email is sent.
========================================================= */

ContactEnquiryEmail.PreviewProps = {
  name: "Nadeem Muhammed",
  email: "nadeem@example.com",
  company: "Nadeem Digital Nexus",
  website: "https://nadeemmuhammed.com",
  service: "strategy-consulting",
  timeline: "1-3-months",
  message:
    "I'm looking for help improving the digital foundation of my business. I would like to review the website, clarify the strategy, and improve the systems supporting the business.",
  baseUrl: "",
} satisfies ContactEnquiryEmailProps;

/* =========================================================
   STYLES
========================================================= */

const overline = {
  margin: "0 0 12px",

  color: "#BB3A60",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "12px",
  fontWeight: "600",
  lineHeight: "1.4",

  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
};

const heading = {
  margin: "0 0 16px",

  color: "#02102B",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "1.2",

  letterSpacing: "-0.01em",
};

const intro = {
  margin: "0",

  color: "#475569",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "1.65",
};

const inlineLink = {
  color: "#BB3A60",
  textDecoration: "underline",
};

const sectionDivider = {
  margin: "32px 0",

  border: "0",
  borderTop: "1px solid #E6E8ED",
};

const sectionLabel = {
  margin: "0 0 20px",

  color: "#052261",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "1.4",
};

const row = {
  width: "100%",
  margin: "0 0 20px",
};

const columnLeft = {
  display: "inline-block",
  width: "48%",
  paddingRight: "2%",
  verticalAlign: "top",
};

const columnRight = {
  display: "inline-block",
  width: "48%",
  paddingLeft: "2%",
  verticalAlign: "top",
};

const fieldLabel = {
  margin: "0 0 6px",

  color: "#979FAB",

  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: "11px",
  fontWeight: "600",
  lineHeight: "1.4",

  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
};

const fieldValue = {
  margin: "0",

  color: "#475569",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "15px",
  fontWeight: "400",
  lineHeight: "1.55",

  overflowWrap: "break-word" as const,
};

const valueLink = {
  color: "#BB3A60",
  textDecoration: "none",
};

const messageText = {
  margin: "0",

  color: "#475569",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "1.7",

  whiteSpace: "pre-wrap" as const,
  overflowWrap: "break-word" as const,
};

const replyText = {
  margin: "0 0 12px",

  color: "#475569",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "1.6",
};

const replyLink = {
  color: "#BB3A60",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "1.5",

  textDecoration: "none",
};
