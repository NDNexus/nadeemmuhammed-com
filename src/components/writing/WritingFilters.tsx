"use client";

import { Icon } from "@iconify/react";
import { useQueryStates } from "nuqs";
import type { ChangeEvent, SubmitEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { writingSearchParams } from "@/sanity/lib/searchParams";

type FilterOption = {
  _id: string;
  name: string;
  slug: string;
  badgeTheme: string;
};

type WritingFiltersProps = {
  categories: FilterOption[];
  topics: FilterOption[];
};

/**
 * =========================================================
 * WRITING FILTERS
 * =========================================================
 *
 * Client-side controls for the Writing archive.
 *
 * Search and filter state is managed through nuqs while
 * filtered post data remains server-rendered.
 *
 * Category navigation supports horizontal scrolling with
 * directional scroll controls and edge fades.
 * =========================================================
 */

export default function WritingFilters({ categories, topics }: WritingFiltersProps) {
  const [{ q, category, topic }, setFilters] = useQueryStates(writingSearchParams, {
    history: "replace",
    shallow: false,
  });

  const categoryListRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  /**
   * Updates the horizontal scroll state of the category list.
   */
  function updateCategoryScrollState() {
    const viewport = categoryListRef.current;

    if (!viewport) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = viewport;
    const maxScrollLeft = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(maxScrollLeft - scrollLeft > 1);
  }
  /**
   * Scrolls the category list horizontally.
   */
  function scrollCategories(direction: "left" | "right") {
    const viewport = categoryListRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const viewport = categoryListRef.current;

    if (!viewport) {
      return;
    }

    updateCategoryScrollState();

    viewport.addEventListener("scroll", updateCategoryScrollState);

    const resizeObserver = new ResizeObserver(updateCategoryScrollState);

    resizeObserver.observe(viewport);

    return () => {
      viewport.removeEventListener("scroll", updateCategoryScrollState);
      resizeObserver.disconnect();
    };
  }, [categories.length]);

  /**
   * Applies the submitted search query and resets pagination.
   */
  function handleSearch(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const search = String(formData.get("q") ?? "").trim();

    void setFilters({
      q: search,
      page: 1,
    });
  }

  /**
   * Applies the selected category and resets pagination.
   */
  function handleCategoryChange(slug: string) {
    void setFilters({
      category: slug,
      page: 1,
    });
  }

  /**
   * Applies the selected topic and resets pagination.
   */
  function handleTopicChange(event: ChangeEvent<HTMLSelectElement>) {
    void setFilters({
      topic: event.target.value,
      page: 1,
    });
  }

  const categoryViewportClassName = [
    "writing-filters__category-viewport",
    canScrollLeft && "has-left-fade",
    canScrollRight && "has-right-fade",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="writing-filters">
      {/* =================================================
          CATEGORY NAVIGATION
      ================================================= */}

      <div className="writing-filters__category-wrap">
        {/* =================================================
      LEFT SCROLL CONTROL
  ================================================= */}

        <button
          type="button"
          className={`writing-filters__scroll-button writing-filters__scroll-button--left ${
            canScrollLeft ? "" : "is-hidden"
          }`}
          aria-label="Scroll categories left"
          onClick={() => scrollCategories("left")}
        >
          <Icon icon="solar:alt-arrow-left-linear" width={20} aria-hidden="true" />
        </button>

        {/* =================================================
      CATEGORY VIEWPORT
  ================================================= */}

        <div className={categoryViewportClassName}>
          <div ref={categoryListRef} className="writing-filters__categories">
            <button
              type="button"
              className={`writing-filters__category ${category === "" ? "is-active" : ""}`}
              onClick={() => handleCategoryChange("")}
            >
              All Articles
            </button>

            {categories.map((item) => (
              <button
                key={item._id}
                type="button"
                className={`writing-filters__category category-theme ${
                  category === item.slug ? "is-active" : ""
                }`}
                data-theme={item.badgeTheme}
                onClick={() => handleCategoryChange(item.slug)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* =================================================
      RIGHT SCROLL CONTROL
  ================================================= */}

        <button
          type="button"
          className={`writing-filters__scroll-button writing-filters__scroll-button--right ${
            canScrollRight ? "" : "is-hidden"
          }`}
          aria-label="Scroll categories right"
          onClick={() => scrollCategories("right")}
        >
          <Icon icon="solar:alt-arrow-right-linear" width={20} aria-hidden="true" />
        </button>
      </div>

      {/* =================================================
          FILTER TOOLS
      ================================================= */}

      <div className="writing-filters__tools">
        <label className="writing-filters__topic">
          <span className="sr-only">Filter by topic</span>

          <select value={topic} onChange={handleTopicChange}>
            <option value="">All topics</option>

            {topics.map((item) => (
              <option key={item._id} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <form className="writing-filters__search" onSubmit={handleSearch} role="search">
          <label className="sr-only" htmlFor="writing-search">
            Search articles
          </label>

          <input
            id="writing-search"
            name="q"
            type="search"
            defaultValue={q}
            placeholder="Search"
            autoComplete="off"
          />

          <button type="submit" aria-label="Search articles">
            <Icon icon="lucide:search" width={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
