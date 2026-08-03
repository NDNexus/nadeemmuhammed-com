import { Heading, Hr, Link, Section, Text } from "react-email";

import EmailLayout from "../components/email-layout";

/* =========================================================
   TYPES
========================================================= */

type ContactConfirmationEmailProps = {
  name: string;
  baseUrl: string;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ContactConfirmationEmail({ name, baseUrl }: ContactConfirmationEmailProps) {
  return (
    <EmailLayout
      preview="Thanks for getting in touch — I've received your enquiry."
      baseUrl={baseUrl}
    >
      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <Section>
        <Text style={overline}>Enquiry received</Text>

        <Heading as="h1" style={heading}>
          Thanks for getting in touch, {name}.
        </Heading>

        <Text style={bodyText}>
          I&rsquo;ve received your enquiry and will take a proper look at what you&rsquo;ve shared.
        </Text>

        <Text style={bodyText}>
          I&rsquo;ll get back to you personally once I&rsquo;ve had a chance to understand what
          you&rsquo;re looking to improve and how I may be able to help.
        </Text>
      </Section>

      <Hr style={sectionDivider} />

      {/* =====================================================
          WHAT HAPPENS NEXT
      ====================================================== */}

      <Section>
        <Text style={sectionLabel}>What happens next</Text>

        <Text style={bodyText}>
          I&rsquo;ll review your enquiry and respond to the email address you provided. If I need
          any additional context before we move forward, I&rsquo;ll include those questions in my
          reply.
        </Text>

        <Text style={bodyTextLast}>There&rsquo;s nothing else you need to do for now.</Text>
      </Section>

      <Hr style={sectionDivider} />

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <Section>
        <Text style={supportText}>
          If you need to add something to your enquiry in the meantime, you can reply directly to
          this email.
        </Text>

        <Link href="mailto:contact@nadeemmuhammed.com" style={contactLink}>
          contact@nadeemmuhammed.com
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

ContactConfirmationEmail.PreviewProps = {
  name: "Nadeem",
  baseUrl: "",
} satisfies ContactConfirmationEmailProps;

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
  margin: "0 0 20px",

  color: "#02102B",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "1.2",

  letterSpacing: "-0.01em",
};

const bodyText = {
  margin: "0 0 16px",

  color: "#475569",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "1.7",
};

const bodyTextLast = {
  ...bodyText,
  margin: "0",
};

const sectionDivider = {
  margin: "32px 0",

  border: "0",
  borderTop: "1px solid #E6E8ED",
};

const sectionLabel = {
  margin: "0 0 16px",

  color: "#052261",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "1.4",
};

const supportText = {
  margin: "0 0 12px",

  color: "#475569",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "1.6",
};

const contactLink = {
  color: "#BB3A60",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "1.5",

  textDecoration: "none",
};
