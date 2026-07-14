# Nadeem Muhammed Website — Build Progress Log

## Project Direction

* Restarted the website from scratch with a clean architecture.
* Chose a separated headless architecture:

  * `nadeemmuhammed-com` → Next.js frontend
  * `nadeemmuhammed-cms` → future Sanity CMS backend
* Positioning finalized as **Digital Systems Consultant for Service Businesses**.
* Person-brand SEO strategy chosen (not organization schema yet).

## Frontend Stack Decisions

* Next.js App Router
* TypeScript
* Tailwind CSS v4
* Custom CSS design system architecture layered on top of Tailwind
* Future Sanity CMS integration
* Production-oriented SEO architecture

## CSS Design System Built

### Foundation Layer

Created:

* `src/styles/foundation/tokens.css`
* `src/styles/foundation/base.css`
* `src/styles/foundation/typography.css`

Purpose:

* design tokens (colours, spacing, radii, shadows, transitions, fonts)
* CSS resets / global defaults
* reusable typography system

### Layout Layer

Created:

* `src/styles/layout/containers.css`
* `src/styles/layout/sections.css`

Purpose:

* horizontal layout primitives
* vertical rhythm system
* reusable spacing architecture

### Components Layer

Created:

* `src/styles/components/buttons.css`
* `src/styles/components/forms.css`
* `src/styles/components/cards.css`

Purpose:

* reusable semantic UI primitives
* scalable component styling

### Utilities Layer

Created:

* `src/styles/utilities.css`

Purpose:

* helper classes
* accessibility utilities
* flow spacing helpers
* semantic utility patterns

### Tailwind Integration

Configured `src/app/globals.css` as the design system entry point.

This imports:

* Tailwind v4
* all custom design system CSS layers

## Typography System

Final font stack:

* IBM Plex Sans → body/UI
* Lora → headings
* IBM Plex Mono → code/technical content

Implemented using Next.js font optimization (`next/font/google`).

Benefits:

* self-hosted fonts
* no CLS issues
* no Google CDN dependency
* production performance optimization

## Next.js Architecture Built

### Root Layout

Configured:

* `src/app/layout.tsx`

Implemented:

* global app shell
* font variable injection
* global technical SEO defaults
* metadata template
* robots defaults
* OpenGraph defaults
* Twitter defaults

Concept:
Root layout is the master HTML shell for the entire application.

## Production SEO Infrastructure

### Robots

Created:

* `src/app/robots.ts`

Auto-generates:

* `/robots.txt`

Purpose:
Search engine crawl instructions.

### Sitemap

Created:

* `src/app/sitemap.ts`

Auto-generates:

* `/sitemap.xml`

Purpose:
Search engine URL discovery.

Designed to later expand with Sanity dynamic content.

## Homepage SEO

Created:

* `src/app/page.tsx`

Implemented:

* homepage-specific metadata override
* homepage OpenGraph metadata
* homepage Twitter metadata
* Person structured data (JSON-LD)
* starter homepage structure

Concept:
Page routes override root metadata for route-specific SEO.

## Structured Data

Implemented Person schema.

Purpose:
Explicitly tells search engines:

* who the site represents
* professional role
* canonical identity

This is machine-readable SEO metadata.

## Architecture Decisions for Future CMS

Planned CMS SEO model:

* global site settings document - almost done
* reusable SEO schema object
* page-level SEO overrides
* post/category SEO support

Developer-controlled:

* sitemap
* robots
* metadata architecture
* structured data logic

Editor-controlled later via Sanity:

* titles
* descriptions
* OG images
* SEO overrides

## Remaining Roadmap

1. Favicons + manifest
2. OpenGraph social preview image strategy
3. Custom `not-found.tsx`
4. Global `error.tsx`
5. Header/Footer architecture
6. Homepage UI implementation
7. Sanity CMS integration

## Important Next.js Concepts Learned

### App Router

Filesystem-based routing using `src/app`.

Examples:

* `page.tsx` → route
* `layout.tsx` → route shell
* `robots.ts` → robots.txt
* `sitemap.ts` → sitemap.xml

### Metadata API

Modern SEO API in Next.js.

Used instead of manual `<head>` management.

### Nested Layouts

Future ability to create route-specific layouts.

Example:
Different headers for:

* blog
* services
* auth

without changing the global root layout.

### Structured Data

SEO data for search engines using JSON-LD.

Implemented safely using script injection.

# Recent major changes
I have added prettier, and also added `.vscode` folder which has my `settings.json` file. And I have synchronized my current beta and main local branches with Github.
