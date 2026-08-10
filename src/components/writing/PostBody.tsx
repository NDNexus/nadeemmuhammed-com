import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import { CodeBlock } from "./CodeBlock";

import { createHeadingIds } from "./TableOfContents/headingUtils";

import type { RichTableBlock } from "@/sanity/types/richTable";

import type { Callout, POST_QUERY_RESULT } from "@/sanity/sanity.types";

/**
 * =========================================================
 * POST BODY
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Renders a Sanity Portable Text article body into semantic
 * HTML and the site's writing presentation layer.
 *
 * RESPONSIBILITIES
 * ---------------------------------------------------------
 * - Render Portable Text blocks
 * - Render custom article blocks
 * - Render semantic headings and lists
 * - Generate stable heading IDs
 * - Render article images
 * - Render links and inline marks
 * - Render code blocks
 * - Render callouts
 * - Render rich tables
 *
 * DOES NOT OWN
 * ---------------------------------------------------------
 * - Article data fetching
 * - Page layout
 * - SEO metadata
 * - Table of contents state
 *
 * Heading IDs are generated here so the future TOC can use
 * the exact same heading identity as the rendered article.
 *
 * =========================================================
 */

type PostBodyValue = NonNullable<POST_QUERY_RESULT>["body"];

type PostBodyProps = {
  value: PostBodyValue;
};

/**
 * =========================================================
 * LINKS
 * =========================================================
 *
 * Renders Portable Text links while preserving the editor's
 * explicit "open in new tab" preference.
 *
 * Internal application URLs use Next.js Link.
 * External, mailto and tel URLs use normal anchors.
 * =========================================================
 */

function PortableTextLink({
  children,
  value,
}: {
  children?: React.ReactNode;
  value?: {
    href?: string;
    openInNewTab?: boolean;
  };
}) {
  const href = value?.href;

  if (!href) {
    return <>{children}</>;
  }

  const openInNewTab = value?.openInNewTab === true;

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal && !openInNewTab) {
    return <Link href={href}>{children}</Link>;
  }

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

/**
 * =========================================================
 * TABLE CELL CONTENT
 * =========================================================
 *
 * Table cells use the dedicated lightweight
 * `tableCellContent` Portable Text schema.
 *
 * The schema intentionally does not allow complex article
 * blocks such as images, code blocks or callouts.
 * =========================================================
 */

const tableCellComponents = {
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,

    em: ({ children }) => <em>{children}</em>,

    code: ({ children }) => <code>{children}</code>,

    link: PortableTextLink,
  },

  block: {
    normal: ({ children }) => <p>{children}</p>,
  },

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,

    number: ({ children }) => <ol>{children}</ol>,
  },
} satisfies PortableTextComponents;

/**
 * =========================================================
 * RICH TABLE
 * =========================================================
 *
 * Renders the structure supplied by
 * sanity-plugin-rich-table.
 *
 * Structure:
 *
 * richTableBlock
 *   └── rows
 *       └── cells
 *           └── Portable Text content
 * =========================================================
 */

function RichTableRenderer({ value }: { value: RichTableBlock }) {
  const columnCount = Math.max(
    0,
    ...(value.columnHeaders ?? []).map((header) => header.cellIndex + 1),
    ...value.rows.map((row) => row.cells?.length ?? 0)
  );

  if (columnCount === 0) {
    return null;
  }

  const headersByIndex = new Map(
    (value.columnHeaders ?? []).map((header) => [header.cellIndex, header])
  );

  const showColumnTitles = value.hasColumnTitles === true;
  const showRowTitles = value.hasRowTitles === true;

  return (
    <div className="table-wrapper">
      <table className="blog-content__table">
        {showColumnTitles ? (
          <thead>
            <tr>
              {showRowTitles ? <th scope="col" aria-hidden="true" /> : null}

              {Array.from({ length: columnCount }, (_, columnIndex) => {
                const header = headersByIndex.get(columnIndex);

                return (
                  <th key={header?._key ?? `column-${columnIndex}`} scope="col">
                    {header?.title ?? ""}
                  </th>
                );
              })}
            </tr>
          </thead>
        ) : null}

        <tbody>
          {value.rows.map((row) => (
            <tr key={row._key}>
              {showRowTitles ? <th scope="row">{row.title ?? ""}</th> : null}

              {Array.from({ length: columnCount }, (_, columnIndex) => {
                const cell = row.cells?.[columnIndex];

                return (
                  <td key={cell?._key ?? `${row._key}-${columnIndex}`}>
                    {cell?.content ? (
                      <PortableText value={cell.content} components={tableCellComponents} />
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * =========================================================
 * CALLOUT CONTENT
 * =========================================================
 *
 * Callout content uses a deliberately lightweight Portable
 * Text renderer.
 * =========================================================
 */

const calloutComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,

    em: ({ children }) => <em>{children}</em>,

    code: ({ children }) => <code>{children}</code>,

    link: PortableTextLink,
  },

  block: {
    normal: ({ children }) => <p>{children}</p>,
  },

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,

    number: ({ children }) => <ol>{children}</ol>,
  },
};

/**
 * =========================================================
 * CALLOUT
 * =========================================================
 *
 * Renders an editorial callout with semantic styling,
 * an appropriate icon, and its Portable Text content.
 * =========================================================
 */

function CalloutRenderer({ value }: { value: Callout }) {
  if (!value.content?.length) {
    return null;
  }

  const type = value.type ?? "info";

  const icon = {
    info: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="11" x2="12" y2="16" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),

    note: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="14" y2="17" />
      </svg>
    ),

    warning: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10.3 3.8 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7 0 2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  }[type];

  return (
    <aside
      className={`blog-content__callout blog-content__callout--${type}`}
      role={type === "warning" ? "note" : undefined}
    >
      <div className="blog-content__callout-icon">{icon}</div>

      <div className="blog-content__callout-body">
        {value.title ? <h3 className="blog-content__callout-title">{value.title}</h3> : null}

        <div className="blog-content__callout-content">
          <PortableText value={value.content} components={calloutComponents} />
        </div>
      </div>
    </aside>
  );
}

/**
 * =========================================================
 * MAIN PORTABLE TEXT COMPONENTS
 * =========================================================
 *
 * This component map deliberately uses the public
 * PortableTextComponents contract rather than forcing the
 * generated Sanity query result through InferComponents.
 *
 * The generated query result remains the source of truth for
 * the article value itself.
 *
 * Custom frontend-only structures such as richTableBlock are
 * typed at their renderer boundary.
 * =========================================================
 */

export default function PostBody({ value }: PostBodyProps) {
  const headingIds = createHeadingIds(value);

  const components: PortableTextComponents = {
    /**
     * =====================================================
     * CUSTOM BLOCK TYPES
     * =====================================================
     */

    types: {
      /**
       * ---------------------------------------------------
       * ARTICLE IMAGE
       * ---------------------------------------------------
       */

      image: ({ value }: { value: Extract<PostBodyValue[number], { _type: "image" }> }) => {
        if (!value.asset?.url) {
          return null;
        }

        return (
          <figure className="blog-content__image">
            <div className="blog-content__image-media">
              <Image
                src={value.asset.url}
                alt={value.alt}
                fill
                sizes="(max-width: 767px) 100vw, 72ch"
              />
            </div>

            {value.caption ? (
              <figcaption className="text-body-sm text-subtle">{value.caption}</figcaption>
            ) : null}
          </figure>
        );
      },

      /**
       * ---------------------------------------------------
       * CODE BLOCK
       * ---------------------------------------------------
       */

      code: ({ value }: { value: Extract<PostBodyValue[number], { _type: "code" }> }) => {
        if (!value.code) {
          return null;
        }

        return <CodeBlock code={value.code} language={value.language ?? "text"} />;
      },

      /**
       * ---------------------------------------------------
       * RICH TABLE
       * ---------------------------------------------------
       */

      richTableBlock: ({ value }: { value: RichTableBlock }) => <RichTableRenderer value={value} />,

      /**
       * ---------------------------------------------------
       * CALLOUT
       * ---------------------------------------------------
       */

      callout: ({ value }: { value: Extract<PostBodyValue[number], { _type: "callout" }> }) => (
        <CalloutRenderer value={value} />
      ),
    },

    /**
     * =====================================================
     * BLOCK STYLES
     * =====================================================
     */

    block: {
      normal: ({ children }) => <p className="text-body">{children}</p>,

      h2: ({ children, value }) => {
        const id = value._key ? headingIds.get(value._key) : undefined;

        return (
          <h2 id={id} className="heading-lg">
            {children}
          </h2>
        );
      },

      h3: ({ children, value }) => {
        const id = value._key ? headingIds.get(value._key) : undefined;

        return (
          <h3 id={id} className="heading-md">
            {children}
          </h3>
        );
      },

      h4: ({ children, value }) => {
        const id = value._key ? headingIds.get(value._key) : undefined;

        return (
          <h4 id={id} className="heading-sm">
            {children}
          </h4>
        );
      },

      blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    },

    /**
     * =====================================================
     * MARKS
     * =====================================================
     */

    marks: {
      strong: ({ children }) => <strong>{children}</strong>,

      em: ({ children }) => <em>{children}</em>,

      code: ({ children }) => <code>{children}</code>,

      link: PortableTextLink,
    },

    /**
     * =====================================================
     * LISTS
     * =====================================================
     */

    list: {
      bullet: ({ children }) => <ul>{children}</ul>,

      number: ({ children }) => <ol>{children}</ol>,
    },

    listItem: {
      bullet: ({ children }) => <li>{children}</li>,

      number: ({ children }) => <li>{children}</li>,
    },
  };

  return (
    <div className="blog-content">
      <PortableText value={value} components={components} />
    </div>
  );
}
