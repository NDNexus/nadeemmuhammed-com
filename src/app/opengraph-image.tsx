/* eslint-disable @next/next/no-img-element */

import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/* =========================================================
   OPEN GRAPH IMAGE METADATA

   Defines the generated social preview image used by
   Open Graph consumers throughout the site.
========================================================= */

export const alt = "Nadeem Muhammed — Stronger Digital Foundations for Service Businesses";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/* =========================================================
   OPEN GRAPH IMAGE

   Generates the site's default branded social preview.

   Local visual assets and fonts are loaded directly from
   the filesystem so generation remains independent of the
   deployment hostname or environment.
========================================================= */

export default async function OpenGraphImage() {
  /* =======================================================
     LOCAL ASSETS
  ======================================================== */

  const [
    logoData,
    graphicData,
    libreBaskervilleRegular,
    libreBaskervilleItalic,
    libreBaskervilleBold,
    ibmPlexSansMedium,
    ibmPlexSansMediumItalic,
    ibmPlexSansSemiBold,
    ibmPlexSansSemiBoldItalic,
    ibmPlexMonoMedium,
    ibmPlexMonoMediumItalic,
  ] = await Promise.all([
    /* Images */

    readFile(join(process.cwd(), "public/logo/logo-mark.png"), "base64"),

    readFile(join(process.cwd(), "public/images/og/og-graphic.png"), "base64"),

    /* Libre Baskerville */

    readFile(join(process.cwd(), "public/fonts/libre-baskerville/LibreBaskerville-Regular.ttf")),

    readFile(join(process.cwd(), "public/fonts/libre-baskerville/LibreBaskerville-Italic.ttf")),

    readFile(join(process.cwd(), "public/fonts/libre-baskerville/LibreBaskerville-Bold.ttf")),

    /* IBM Plex Sans */

    readFile(join(process.cwd(), "public/fonts/ibm-plex-sans/IBMPlexSans-Medium.ttf")),

    readFile(join(process.cwd(), "public/fonts/ibm-plex-sans/IBMPlexSans-MediumItalic.ttf")),

    readFile(join(process.cwd(), "public/fonts/ibm-plex-sans/IBMPlexSans-SemiBold.ttf")),

    readFile(join(process.cwd(), "public/fonts/ibm-plex-sans/IBMPlexSans-SemiBoldItalic.ttf")),

    /* IBM Plex Mono */

    readFile(join(process.cwd(), "public/fonts/ibm-plex-mono/IBMPlexMono-Medium.ttf")),

    readFile(join(process.cwd(), "public/fonts/ibm-plex-mono/IBMPlexMono-MediumItalic.ttf")),
  ]);

  /* =======================================================
     IMAGE SOURCES

     ImageResponse supports local images encoded as data URLs.
     This avoids environment-specific hostnames entirely.
  ======================================================== */

  const logoSrc = `data:image/png;base64,${logoData}`;
  const graphicSrc = `data:image/png;base64,${graphicData}`;

  /* =======================================================
     IMAGE RESPONSE
  ======================================================== */

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#02102B",
        color: "#FFFFFF",
      }}
    >
      {/* ===================================================
          MAIN CONTENT AREA
      ==================================================== */}

      <div
        style={{
          width: "100%",
          height: "570px",
          display: "flex",
          position: "relative",
          padding: "54px 66px 44px",
        }}
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          style={{
            width: "61%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Brand */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <img
              src={logoSrc}
              width={72}
              height={72}
              alt=""
              style={{
                objectFit: "contain",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 600,
                  fontSize: "24px",
                  letterSpacing: "0.06em",
                }}
              >
                NADEEM MUHAMMED
              </div>

              <div
                style={{
                  display: "flex",
                  fontFamily: "IBM Plex Mono",
                  fontWeight: 500,
                  fontSize: "13px",
                  letterSpacing: "0.16em",
                  color: "#B9E0FA",
                }}
              >
                DIGITAL SYSTEMS CONSULTANT
              </div>
            </div>
          </div>

          {/* Main message */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "62px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "650px",
                fontFamily: "Libre Baskerville",
                fontSize: "50px",
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
              }}
            >
              <div style={{ display: "flex" }}>Stronger digital</div>

              <div style={{ display: "flex" }}>foundations for</div>

              <div
                style={{
                  display: "flex",
                  color: "#B9E0FA",
                }}
              >
                service businesses.
              </div>
            </div>

            {/* Accent line */}

            <div
              style={{
                display: "flex",
                width: "78px",
                height: "4px",
                marginTop: "26px",
                marginBottom: "20px",
                backgroundColor: "#BB3A60",
              }}
            />

            {/* Descriptor */}

            <div
              style={{
                display: "flex",
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                fontSize: "15px",
                letterSpacing: "0.14em",
                color: "#B9E0FA",
              }}
            >
              DIGITAL SYSTEMS &amp; STRATEGY
            </div>
          </div>
        </div>

        {/* =================================================
            SYSTEMS GRAPHIC
        ================================================== */}

        <img
          src={graphicSrc}
          width={520}
          height={520}
          alt=""
          style={{
            position: "absolute",
            right: "22px",
            bottom: "-4px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* ===================================================
          BRAND FOOTER
      ==================================================== */}

      <div
        style={{
          position: "absolute",
          left: "0px",
          bottom: "0px",
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center",
          padding: "0 66px",
          backgroundImage:
            "linear-gradient(90deg, #BB3A60 0%, #BB3A60 28%, #052261 68%, #02102B 100%)",
        }}
      >
        {/* Globe */}

        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="1.5" />

          <path d="M3 12H21" stroke="#FFFFFF" strokeWidth="1.5" />

          <path
            d="M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />

          <path
            d="M12 3C9.5 5.5 8.5 8.5 8.5 12C8.5 15.5 9.5 18.5 12 21"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
        </svg>

        {/* Divider */}

        <div
          style={{
            display: "flex",
            width: "1px",
            height: "20px",
            marginLeft: "18px",
            marginRight: "20px",
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
        />

        {/* Domain */}

        <div
          style={{
            display: "flex",
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            fontSize: "18px",
            letterSpacing: "0.08em",
            color: "#FFFFFF",
          }}
        >
          nadeemmuhammed.com
        </div>
      </div>
    </div>,
    {
      ...size,

      fonts: [
        /* Libre Baskerville */

        {
          name: "Libre Baskerville",
          data: libreBaskervilleRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Libre Baskerville",
          data: libreBaskervilleItalic,
          weight: 400,
          style: "italic",
        },
        {
          name: "Libre Baskerville",
          data: libreBaskervilleBold,
          weight: 700,
          style: "normal",
        },

        /* IBM Plex Sans */

        {
          name: "IBM Plex Sans",
          data: ibmPlexSansMedium,
          weight: 500,
          style: "normal",
        },
        {
          name: "IBM Plex Sans",
          data: ibmPlexSansMediumItalic,
          weight: 500,
          style: "italic",
        },
        {
          name: "IBM Plex Sans",
          data: ibmPlexSansSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "IBM Plex Sans",
          data: ibmPlexSansSemiBoldItalic,
          weight: 600,
          style: "italic",
        },

        /* IBM Plex Mono */

        {
          name: "IBM Plex Mono",
          data: ibmPlexMonoMedium,
          weight: 500,
          style: "normal",
        },
        {
          name: "IBM Plex Mono",
          data: ibmPlexMonoMediumItalic,
          weight: 500,
          style: "italic",
        },
      ],
    }
  );
}
