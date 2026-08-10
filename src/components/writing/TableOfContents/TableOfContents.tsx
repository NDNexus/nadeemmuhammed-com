"use client";

import { useEffect, useState } from "react";

/**
 * =========================================================
 * TABLE OF CONTENTS
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Provides navigation for long-form writing articles.
 *
 * RESPONSIBILITIES
 * ---------------------------------------------------------
 * - Render article heading links
 * - Highlight the heading currently being read
 * - Provide smooth section navigation
 * - Provide mobile open / close behavior
 * - Remain accessible to keyboard and screen-reader users
 *
 * DOES NOT RESPONSIBILITY
 * ---------------------------------------------------------
 * This component does not:
 *
 * - Parse Sanity Portable Text
 * - Extract headings from article content
 * - Generate heading IDs
 * - Render article content
 *
 * The article/content layer provides a normalized list of
 * headings through the `items` prop.
 *
 * DATA CONTRACT
 * ---------------------------------------------------------
 *
 * {
 *   id: "architecture",
 *   text: "Architecture",
 *   level: 2
 * }
 *
 * The `id` must match the `id` attribute rendered on the
 * corresponding article heading.
 *
 * RESPONSIVE BEHAVIOR
 * ---------------------------------------------------------
 *
 * Desktop
 * ---------------------------------------------------------
 * The TOC is rendered as a visible, sticky secondary
 * navigation alongside the article.
 *
 * Mobile
 * ---------------------------------------------------------
 * The TOC can be opened through the Contents trigger and
 * displayed as an overlay/drawer.
 *
 * The responsive visual treatment belongs to CSS.
 *
 * =========================================================
 */

export interface TableOfContentsItem {
  /**
   * Unique section identifier.
   *
   * Must match the ID of the corresponding article heading.
   *
   * Example:
   *
   * <h2 id="architecture">Architecture</h2>
   */
  id: string;

  /**
   * Human-readable heading text.
   */
  text: string;

  /**
   * Heading hierarchy.
   *
   * Currently supports H2 and H3.
   *
   * H1 is intentionally excluded because the article title
   * is already represented by the page header.
   */
  level: 2 | 3 | 4;
}

interface TableOfContentsProps {
  /**
   * Heading navigation data generated from the article body.
   */
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  /**
   * =======================================================
   * ACTIVE SECTION / SCROLL SPY
   * =======================================================
   *
   * IntersectionObserver allows the TOC to react to the
   * heading currently visible in the reading area without
   * listening to the scroll event on every frame.
   */
  useEffect(() => {
    if (!items.length) {
      return;
    }

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null);

    if (!headings.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0].target.id);
        }
      },
      {
        /*
         * The active heading is considered to be the heading
         * entering the upper reading area rather than simply
         * any heading visible anywhere on screen.
         */
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, [items]);

  /**
   * =======================================================
   * MOBILE ESCAPE HANDLING
   * =======================================================
   *
   * Allows keyboard users to close the mobile TOC with
   * Escape.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  /**
   * Prevent rendering an empty navigation component.
   */
  if (!items.length) {
    return null;
  }

  /**
   * Close the mobile TOC after navigating to a section.
   */
  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="table-of-contents" aria-label="Table of contents">
      {/* ===================================================
          MOBILE TRIGGER
      =================================================== */}

      <button
        type="button"
        className="table-of-contents__trigger"
        aria-expanded={isOpen}
        aria-controls="article-table-of-contents"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">☰</span>

        <span>On this page</span>
      </button>

      {/* ===================================================
          NAVIGATION
      =================================================== */}

      <div
        id="article-table-of-contents"
        className={`table-of-contents__panel${isOpen ? "table-of-contents__panel--open" : ""}`}
      >
        {/* Mobile close control */}

        <div className="table-of-contents__header">
          <span className="table-of-contents__title">On this page</span>

          <button
            type="button"
            className="table-of-contents__close"
            aria-label="Close table of contents"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="table-of-contents__list">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li
                key={item.id}
                className={`table-of-contents__item table-of-contents__item--level-${item.level}`}
              >
                <a
                  href={`#${item.id}`}
                  className={`table-of-contents__link${
                    isActive ? "table-of-contents__link--active" : ""
                  }`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={handleItemClick}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
