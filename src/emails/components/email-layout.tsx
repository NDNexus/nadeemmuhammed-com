import { Body, Container, Head, Html, Preview, Section } from "react-email";

import EmailHeader from "./email-header";
import EmailFooter from "./email-footer";

type EmailLayoutProps = {
  preview: string;
  baseUrl: string;
  children: React.ReactNode;
};

export default function EmailLayout({ preview, baseUrl, children }: EmailLayoutProps) {
  return (
    <Html lang="en">
      <Head />

      <Preview>{preview}</Preview>

      <Body style={body}>
        <Container style={email}>
          <EmailHeader baseUrl={baseUrl} />

          <Section style={content}>{children}</Section>

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  );
}

/* =========================================================
   STYLES
========================================================= */

const body = {
  margin: "0",
  padding: "0",

  backgroundColor: "#EAF6FD",

  fontFamily: '"IBM Plex Sans", Arial, sans-serif',
};

const email = {
  width: "100%",
  maxWidth: "600px",

  margin: "40px auto",

  backgroundColor: "#FFFFFF",
};

const content = {
  padding: "40px",
  backgroundColor: "#FFFFFF",
};
