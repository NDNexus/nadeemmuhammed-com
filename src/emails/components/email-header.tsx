import { Img, Section, Text } from "react-email";

type EmailHeaderProps = {
  baseUrl: string;
};

export default function EmailHeader({ baseUrl }: EmailHeaderProps) {
  return (
    <Section style={header}>
      <Section style={identity}>
        <Img
          src={`${baseUrl}/logo/logo-email.png`}
          width="64"
          height="64"
          alt="Nadeem Muhammed"
          style={logo}
        />

        <Text style={name}>Nadeem Muhammed</Text>

        <Text style={descriptor}>Digital Strategy &amp; Consulting</Text>
      </Section>

      <Section style={accent} />
    </Section>
  );
}

/* =========================================================
   STYLES
========================================================= */

const header = {
  backgroundColor: "#02102B",
};

const identity = {
  padding: "32px 40px 28px",
};

const logo = {
  display: "block",
  margin: "0 0 20px",
};

const name = {
  margin: "0 0 4px",
  color: "#FFFFFF",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "1.4",
};

const descriptor = {
  margin: "0",
  color: "#B9E0FA",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "1.5",
};

const accent = {
  height: "3px",
  backgroundColor: "#BB3A60",
};
