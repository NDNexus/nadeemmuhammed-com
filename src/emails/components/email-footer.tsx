import { Link, Section, Text } from "react-email";

export default function EmailFooter() {
  return (
    <Section style={footer}>
      {/*
       * Brand accent
       */}
      <Section style={accent} />

      {/*
       * Identity
       */}
      <Section style={content}>
        <Text style={name}>Nadeem Muhammed</Text>

        <Text style={descriptor}>Digital Strategy &amp; Consulting</Text>

        {/*
         * Contact
         */}
        <Text style={links}>
          <Link href="https://nadeemmuhammed.com" style={link}>
            nadeemmuhammed.com
          </Link>

          <span style={separator}> &nbsp;·&nbsp; </span>

          <Link href="mailto:contact@nadeemmuhammed.com" style={link}>
            contact@nadeemmuhammed.com
          </Link>
        </Text>

        {/*
         * Context
         */}
        <Text style={meta}>This email was sent by Nadeem Muhammed through nadeemmuhammed.com.</Text>
      </Section>
    </Section>
  );
}

/* =========================================================
   STYLES
========================================================= */

const footer = {
  backgroundColor: "#02102B",
};

const accent = {
  height: "3px",
  backgroundColor: "#BB3A60",
};

const content = {
  padding: "32px 40px 36px",
};

const name = {
  margin: "0 0 4px",

  color: "#FFFFFF",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "1.4",
};

const descriptor = {
  margin: "0 0 20px",

  color: "#B9E0FA",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "1.5",
};

const links = {
  margin: "0 0 24px",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "13px",
  lineHeight: "1.6",
};

const link = {
  color: "#FFFFFF",
  textDecoration: "none",
};

const separator = {
  color: "#979FAB",
};

const meta = {
  margin: "0",

  color: "#979FAB",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "12px",
  lineHeight: "1.6",
};
