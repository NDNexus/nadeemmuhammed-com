# Nadeem Muhammed — Personal Website

> A production-oriented personal website and digital systems platform for Nadeem Muhammed, a Digital Systems Consultant helping service businesses reduce digital friction, simplify complexity, and build maintainable systems.

🌐 **Live:** https://nadeemmuhammed.com

---

## Overview

This repository contains the source code for my personal website and professional digital presence.

The project is intentionally built as more than a collection of marketing pages. It serves as a practical demonstration of how I approach digital systems:

- clear information architecture
- thoughtful user experience
- maintainable frontend architecture
- structured content management
- performance and accessibility
- technical SEO
- responsive design
- reusable design primitives
- long-term maintainability

The underlying philosophy is simple:

> **Technology should reduce friction, not create it.**

The website itself is therefore treated as a digital system — not simply a visual interface.

---

## What the Website Does

The site serves several purposes:

- establishes my professional presence
- communicates my approach to digital systems
- presents services and work
- publishes technical and business writing
- provides a structured content platform
- gives potential clients a clear path to get in touch
- demonstrates the engineering and design principles I use in practice

The public website is designed primarily for service businesses and professional clients who value clarity, quality, maintainability, and long-term thinking.

---

## Technology

### Core

- **Next.js** — App Router
- **React**
- **TypeScript**
- **Tailwind CSS v4**
- **Sanity** — headless CMS
- **Vercel** — deployment
- **ESLint** — code quality

### Content & Data

The writing system is powered by Sanity and uses GROQ for structured content queries.

The frontend uses Sanity TypeGen so TypeScript types can be generated from the CMS schema and GROQ query projections.

The data layer is intentionally separated from presentation:

```text
Sanity Schema
      ↓
GROQ Queries
      ↓
Data Access / Fetch Layer
      ↓
Server Components
      ↓
UI Components

```



This keeps content retrieval concerns out of individual pages and components.

------

## Frontend Architecture

The project uses the Next.js App Router and a layered component architecture.

```
src/
├── app/
│   ├── (marketing)/
│   ├── (blog)/
│   ├── (test)/
│   └── layout.tsx
│
├── components/
│   ├── content/
│   ├── ui/
│   └── writing/
│
├── sanity/
│   └── lib/
│       ├── fetch/
│       ├── queries/
│       └── searchParams/
│
└── styles/
    ├── foundation/
    ├── layout/
    ├── components/
    └── utilities/
```

Route components are kept focused on composition and page-level concerns, while reusable UI, data access, queries, and styling remain separated into their respective layers.

------

## Design System

The site uses a custom layered CSS design system built alongside Tailwind CSS rather than relying entirely on utility classes.

The system provides reusable primitives for:

- typography
- spacing
- layout
- buttons
- forms
- cards
- badges
- navigation
- content blocks
- responsive behaviour
- semantic colours

Design tokens are used throughout the interface so components rely on semantic values rather than hard-coded presentation decisions.

The visual language is intentionally:

- calm
- structured
- editorial
- architectural
- premium
- restrained

The design avoids unnecessary visual noise, excessive gradients, trend-driven UI, and decorative elements that do not contribute to the user's journey.

------

## Writing Platform

The `/writing` section is a full content archive rather than a static blog page.

It supports:

- Sanity-powered articles
- categories
- topics/tags
- URL-driven filtering
- search
- pagination-ready architecture
- responsive category navigation
- horizontal scrolling on constrained screens
- category-specific visual themes
- individual article pages
- featured imagery
- Portable Text content
- tables
- callouts
- code blocks
- article metadata
- dynamic SEO metadata
- Article structured data
- Breadcrumb structured data

Search and filtering are represented in the URL, allowing filtered states to be shared and revisited.

The article architecture deliberately separates:

```
Route
  ↓
Data fetching
  ↓
Content model
  ↓
Presentation
  ↓
Rich content rendering
```

------

## SEO

SEO is treated as part of the application architecture rather than an afterthought.

The site includes:

- Next.js Metadata API
- canonical URLs
- Open Graph metadata
- social sharing metadata
- dynamic `sitemap.xml`
- dynamic `robots.txt`
- Person structured data
- WebSite structured data
- Article structured data
- Breadcrumb structured data
- dynamic article metadata
- controlled indexing of internal routes

The site's SEO architecture also supports the broader person-brand strategy around Nadeem Muhammed as a Digital Systems Consultant.

------

## Performance & Accessibility

The implementation prioritizes practical performance and usability rather than chasing visual complexity.

Examples include:

- Next.js optimized image handling
- optimized font loading
- responsive layouts
- semantic HTML
- accessible labels and form controls
- keyboard-visible focus states
- responsive overflow handling
- reduced visual dependency on JavaScript
- server-rendered content where appropriate

Interactive functionality is introduced where it improves the experience rather than simply because it is possible.

------

## Internal Test Environment

The project also contains a protected `/test` environment used for development and integration testing.

The test area demonstrates a lightweight server-side access boundary including:

- password-protected access
- HMAC-based access tokens
- timing-safe token comparison
- HttpOnly cookies
- scoped cookies
- secure production cookies
- SameSite protection
- session expiration
- logout/revocation
- protected nested routes
- non-indexable internal pages

This environment is intentionally separated from the public-facing website.

It is designed as an internal development tool rather than as a replacement for a full authentication system.

------

## Engineering Principles

Several principles guide the project.

### Clarity over cleverness

Visitors should not have to figure out how a website works.

### Simplicity takes intention

Simple interfaces are usually the result of deliberate architectural and design decisions.

### Every element should have a purpose

Layout, typography, interaction, animation, content, and technology should contribute to the user's journey.

### Maintainability matters

A website should remain understandable and useful after launch.

### Technology should reduce friction

The goal is not to introduce more tools or complexity.

The goal is to solve the right problem with an appropriate system.

### Timeless beats trendy

The project favours strong structure, typography, accessibility, usability, and thoughtful interaction over short-lived design trends.

------

## Development

### Requirements

- Node.js
- npm
- Sanity project credentials for CMS functionality

### Install

```
npm install
```

### Environment

Create a `.env.local` file containing the required environment variables for your local environment.

For example:

```
RESEND_API_KEY=
SITE_URL=http://localhost:3000

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_SANITY_STUDIO_URL=

SANITY_API_READ_TOKEN=
```

Internal development-only environment variables should never be exposed through `NEXT_PUBLIC_*`.

### Run locally

```
npm run dev
```

Then open:

```
http://localhost:3000
```

### Production build

```
npm run build
```

### Lint

```
npm run lint
```

------

## Content Architecture

The frontend is designed around a headless content architecture.

Sanity owns editorial content while Next.js owns the presentation and application layer.

This separation makes it possible to evolve the content system without coupling editorial data directly to individual UI components.

Generated types are produced from the Sanity schema and GROQ queries, reducing duplication between the CMS model and frontend TypeScript.

------

## Project Status

The website is actively developed and deployed to production.

The public-facing foundation is established, including:

- marketing pages
- responsive design system
- Sanity integration
- writing platform
- search and filtering
- article rendering
- technical SEO
- structured data
- internal testing infrastructure
- production deployment

Some areas of the platform will continue evolving as the content library and business requirements grow.

------

## Why This Project Exists

This website is both a professional platform and a practical engineering project.

It is intentionally built to demonstrate that a modern website can be:

**clear without being simplistic,
 technical without being complicated,
 and polished without being excessive.**

The objective is not to build the largest possible system.

It is to build the **right system** — one that is understandable, maintainable, useful, and capable of growing with the business.

------

## Author

**Nadeem Muhammed**

Digital Systems Consultant

I help service businesses identify digital friction, simplify complexity, and build maintainable systems that support long-term growth.

🌐 https://nadeemmuhammed.com
