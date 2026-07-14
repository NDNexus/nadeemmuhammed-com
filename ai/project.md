# ai/project.md: Project Knowledge Base

This document is the single source of truth for what this project is, its goals, and how it's built.

## 1. Project Purpose

This repository contains the source code for the personal website of Nadeem Muhammed. It serves as his professional online presence.

## 2. Business Goals

- **Primary Goal:** Establish a strong online presence for Nadeem Muhammed as a **Digital Systems Consultant for Service Businesses**.
- **Strategy:** Employ a person-brand SEO strategy to attract and engage the target audience.

## 3. Target Audience

Service-based businesses seeking expertise in digital systems and architecture.

## 4. Technology Stack

- **Framework:** Next.js 16+ (using the App Router)
- **Language:** TypeScript
- **UI:** React 19+
- **Styling:**
    - Tailwind CSS v4
    - A custom, layered CSS design system built on top of Tailwind, located in `src/styles`.
- **CMS:** The frontend is architected to be headless. It will be integrated with a separate Sanity CMS project in the future.
- **Linting:** ESLint

## 5. Folder Structure Overview

- `src/app/`: Contains the application's routes, following the Next.js App Router convention.
    - `(marketing)/`: Route group for marketing pages like `about` and `writing`.
    - `layout.tsx`: The root layout component (app shell).
    - `sitemap.ts`: Dynamically generates `sitemap.xml`.
    - `robots.ts`: Dynamically generates `robots.txt`.
- `src/components/`: For reusable React components.
- `src/styles/`: Home to the custom CSS design system, which is organized into layers:
    - `foundation/`: Design tokens, base styles, typography.
    - `layout/`: Layout primitives (containers, sections).
    - `components/`: Styles for UI components (buttons, cards).
    - `utilities/`: Helper classes.
- `public/`: Static assets like images.

## 6. Major Architectural Decisions

- **Headless Architecture:** The frontend is decoupled from the content backend (future Sanity CMS). This allows for greater flexibility and scalability.
- **Production-Oriented SEO:** The project uses the Next.js Metadata API for fine-grained control over SEO, including dynamic sitemaps, robots.txt, and structured data (JSON-LD).
- **Custom CSS Design System:** Instead of relying solely on Tailwind utility classes in HTML, the project uses a layered CSS architecture. This promotes reusability and maintainability of styles.
- **Optimized Font Loading:** `next/font/google` is used to self-host fonts, preventing layout shifts and improving performance.

## 7. Key Features

- **Person-Brand SEO:** The homepage implements `Person` structured data (JSON-LD) to clearly identify the site's owner to search engines.
- **Dynamic SEO Files:** `sitemap.xml` and `robots.txt` are generated programmatically, allowing them to be updated easily when new content is added.
- **Layered Styling:** A robust and maintainable CSS system that combines the power of Tailwind with a structured, component-based approach.

## 8. Important Constraints

- **Frontend Only (For Now):** This repository is only for the Next.js frontend. All content is currently static.
- **No Database:** The project does not have a database. Content will be sourced from the Sanity CMS in the future.
- **Lean Documentation:** Do not add any new documentation files. All project knowledge must be consolidated here.

## 9. How pages are structured

  **Sections and containers:** Each page is divided into sections which have containers in them. use the following structure to build the pages of the website:

  ```html
    <main>
        <section className="section">
            <div className="container-wide">
                {page section content}
            </div>
        </section>
     </main>
  ```