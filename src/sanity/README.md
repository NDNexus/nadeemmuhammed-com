# Sanity Integration

This directory contains the frontend infrastructure used to connect the Next.js application to Sanity CMS.

Sanity Studio is maintained as a separate project and repository. The Next.js application does not contain the Studio or the source schema definitions used to configure the editing experience.

Instead, the frontend connects to the Sanity Content Lake through the Sanity API and maintains the generated schema information required for typed frontend development.

---

# Architecture

The two applications have separate responsibilities:

```text
Sanity Studio Repository
        │
        │ editors create and manage content
        ▼
Sanity Content Lake
        │
        │ GROQ queries
        ▼
Next.js Repository
        │
        ├── typed Sanity queries
        ├── cached content fetching
        ├── live revalidation
        ├── pages and components
        ├── metadata
        ├── structured data
        └── other frontend behavior
```

## Sanity owns

Sanity is the source of truth for editable content, including:

- site-wide settings
- posts
- categories
- tags
- technologies
- authors
- projects and case studies
- editorial SEO overrides
- images and other CMS-managed content

## Next.js owns

Next.js is responsible for interpreting and presenting that content, including:

- routing
- page rendering
- layouts
- design and styling
- technical SEO
- metadata resolution
- canonical URL generation
- structured data
- sitemap generation
- robots configuration
- Sanity image rendering
- caching behavior
- frontend live-content integration

This separation keeps editorial content independent from application and deployment logic.

---

# Frontend Sanity Structure

The primary frontend integration lives under:

```text
src/sanity/
│
├── README.md
├── env.ts
├── sanity.types.ts
│
└── lib/
    ├── client.ts
    ├── image.ts
    ├── live.ts
    │
    ├── fetch/
    │   └── siteSettings.ts
    │
    └── queries/
        └── siteSettings.ts
```

Additional TypeGen infrastructure exists at the project root:

```text
sanity.cli.ts
schema.json
```

Each part has a distinct responsibility.

---

# `env.ts`

## Purpose

`env.ts` provides the public Sanity configuration required by the frontend.

It reads the relevant environment variables, validates required values, and exposes them through one shared configuration module.

Current configuration includes:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_SANITY_STUDIO_URL=
```

The rest of the application should import these values from `env.ts` rather than repeatedly accessing `process.env`.

Conceptually:

```text
Deployment environment
        ↓
      env.ts
        ↓
Sanity integration
```

## Why this exists

Centralizing configuration gives the application one place to:

- validate required values
- define intentional defaults
- document the Sanity connection
- configure the Studio URL
- change configuration behavior later

These `NEXT_PUBLIC_*` values are public configuration rather than authentication credentials.

Secrets must not be added to this module as public environment variables.

---

# `lib/client.ts`

## Purpose

`client.ts` creates the shared base Sanity client used by the frontend.

Conceptually:

```text
Environment configuration
        ↓
      env.ts
        ↓
    client.ts
        ↓
Sanity Content Lake
```

The client provides the underlying connection used by the rest of the Sanity integration.

Its responsibilities include:

- project configuration
- dataset configuration
- API versioning
- CDN behavior
- default published perspective
- Studio location for Visual Editing metadata

Normal application content should generally use the shared fetching infrastructure in `live.ts` rather than scattering direct `client.fetch()` calls throughout pages and components.

The base client remains useful as the underlying Sanity connection and for infrastructure that specifically requires a client instance.

---

# `lib/live.ts`

## Purpose

`live.ts` provides the shared content-fetching and live-revalidation infrastructure for the application.

It is built around Sanity's `defineLive()` integration.

The module exposes:

```text
sanityFetch
SanityLive
```

along with shared helpers for different fetching contexts.

Conceptually:

```text
GROQ query
    ↓
sanityFetch()
    ↓
Next.js cache
    ↓
rendered content
    │
    │ Sanity content changes
    ▼
<SanityLive />
    ↓
affected cache tags revalidated
    ↓
fresh content
```

This gives the application both efficient caching and automatic content freshness.

---

## `sanityFetch`

`sanityFetch` is the primary fetching utility for Sanity content that should participate in Sanity Live.

Rather than treating every CMS request as an unrelated network request, the integration allows Sanity and Next.js to associate query results with the content that produced them.

When relevant content changes, affected cached queries can be revalidated automatically.

This provides a useful combination:

```text
Cached content
      +
Automatic revalidation
      =
Fast responses without manually chosen revalidation intervals
```

---

## `<SanityLive />`

`SanityLive` is mounted at the application level.

Its role is to listen for relevant Sanity content changes and coordinate revalidation of affected cached queries.

Conceptually:

```text
Editor publishes change
        ↓
Sanity Content Lake changes
        ↓
Sanity Live detects relevant update
        ↓
Next.js cache tags are revalidated
        ↓
next request receives fresh content
```

This means long cache lifetimes do not imply that CMS content must remain stale for that entire period.

Content can remain cached until the underlying Sanity data changes.

---

# Cache Components

The application uses Next.js Cache Components.

Sanity fetching is designed to work with this caching model rather than bypass it.

The important distinction is between:

```text
Reusable data / computation
        ↓
cache when appropriate

Request-specific or interactive behavior
        ↓
isolate behind the appropriate dynamic boundary
```

For Sanity content, caching is especially useful because the content is generally reusable between visitors.

Sanity Live provides the mechanism for invalidating affected cached data when content changes.

The application should not add `"use cache"` indiscriminately.

Caching decisions should reflect whether a result can safely be reused.

---

# Content Perspectives

Normal website visitors receive published content.

Conceptually:

```text
Normal visitor
      ↓
published perspective
      ↓
no stega metadata
```

The live infrastructure also contains the foundation required to resolve draft-mode perspectives when preview functionality is used.

Conceptually:

```text
Draft Mode
    ↓
request cookies
    ↓
resolved Sanity perspective
    ↓
draft-capable content
    ↓
stega metadata enabled
```

This keeps normal production delivery separate from editorial preview behavior.

---

# `getDynamicFetchOptions()`

The shared live infrastructure can resolve request-specific fetching options.

For normal visitors it returns:

```text
perspective → published
stega       → false
```

When Draft Mode is active, it can resolve the appropriate draft perspective from the request and enable stega metadata.

This logic belongs in the Sanity integration layer so individual pages do not need to independently implement perspective handling.

---

# Static Parameter Fetching

`live.ts` provides a dedicated helper for Sanity data used by `generateStaticParams()`.

Conceptually:

```text
generateStaticParams()
        ↓
sanityFetchStaticParams()
        ↓
published Sanity content
        ↓
known route parameters
```

Static route generation should use published content and should not include Visual Editing metadata.

This will become particularly useful for routes such as:

```text
/writing/[post-slug]
/projects/[project-slug]
```

as those routes are connected to real Sanity content.

---

# Metadata Fetching

`live.ts` also provides a dedicated metadata-fetching helper.

Metadata has slightly different requirements from normal rendered content.

In particular, stega-encoded values must never appear inside:

- page titles
- descriptions
- canonical URLs
- Open Graph metadata
- other document metadata

The metadata helper therefore keeps stega disabled while still allowing the appropriate Sanity perspective to be supplied.

Conceptually:

```text
Sanity content
      ↓
sanityFetchMetadata()
      ↓
clean metadata values
      ↓
Next.js generateMetadata()
```

This infrastructure will be used by the site's SEO implementation.

---

# `lib/queries/`

## Purpose

The `queries` directory contains GROQ queries used to retrieve content from Sanity.

Queries should be organized by content responsibility rather than scattered throughout React components.

For example:

```text
queries/
├── siteSettings.ts
├── posts.ts
├── categories.ts
└── projects.ts
```

Application components should consume query results through the appropriate fetching layer rather than embedding large GROQ queries directly inside UI components.

## Why queries are centralized

This keeps:

- page components easier to read
- GROQ reusable
- returned data predictable
- TypeGen effective
- CMS integration easier to maintain
- future client projects easier to adapt

---

# `lib/queries/siteSettings.ts`

## Purpose

This file contains the GROQ query for the Site Settings singleton.

Site Settings is the CMS source of truth for editable values shared across the website.

Current examples include:

```text
Site Settings
├── Site Name
├── Tagline
├── Site Description
├── Default Social Image
├── Contact Email
└── Social Profiles
```

The frontend can retrieve these values and use them wherever appropriate.

Conceptually:

```text
Sanity Site Settings
        │
        ├── siteName
        ├── siteDescription
        ├── contactEmail
        └── social profiles
                │
                ▼
             Next.js
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
      SEO     Footer   Schema
```

This avoids maintaining the same editable information in multiple places.

---

# `lib/fetch/`

## Purpose

The `fetch` directory contains application-facing data-access functions.

This provides a layer between:

```text
GROQ query definitions
        ↓
Sanity fetching infrastructure
        ↓
application code
```

For example:

```text
queries/siteSettings.ts
        ↓
fetch/siteSettings.ts
        ↓
layout / page / metadata / component
```

This prevents pages and components from needing to know every detail of how Sanity queries are executed.

The fetch layer is also the appropriate place for content-specific guarantees and errors.

For example, the Site Settings fetcher can ensure that the required singleton actually exists rather than forcing every consumer to repeat that check.

---

# `lib/fetch/siteSettings.ts`

## Purpose

This file provides the application-facing Site Settings fetcher.

It retrieves the Site Settings singleton and treats its existence as an application requirement.

Conceptually:

```text
SITE_SETTINGS_QUERY
        ↓
Sanity fetching
        ↓
getSiteSettings()
        ↓
validated Site Settings result
        ↓
application
```

If the required Site Settings singleton cannot be found, the fetcher can fail clearly rather than silently allowing unrelated parts of the website to receive missing global configuration.

---

# `lib/image.ts`

## Purpose

Sanity image fields do not directly contain normal image URLs.

They contain references to image assets together with information such as crop and hotspot data.

`image.ts` provides a shared image URL builder that converts Sanity image values into URLs served by the Sanity image CDN.

Conceptually:

```text
Sanity image object
        ↓
      urlFor()
        ↓
Sanity image CDN URL
        ↓
   Next.js <Image>
```

Example:

```ts
urlFor(image)
  .width(1200)
  .height(630)
  .url()
```

The same infrastructure can be used for:

- featured images
- author avatars
- project images
- social sharing images
- other CMS-managed imagery

---

# Type Generation

The frontend uses Sanity TypeGen so application code can work with types generated from the actual Sanity schema and GROQ queries.

The workflow has two main stages:

```text
Sanity schema
     ↓
schema extraction
     ↓
schema.json
     ↓
TypeGen
     ↓
sanity.types.ts
```

TypeGen also inspects supported GROQ queries in the frontend and generates corresponding result types.

This reduces the need to manually recreate CMS interfaces in TypeScript.

---

# `schema.json`

`schema.json` is the extracted representation of the Sanity schema used by frontend TypeGen.

It exists in the Next.js repository even though the actual Studio schema source lives in the separate Sanity Studio repository.

Conceptually:

```text
Sanity Studio schema
        ↓
schema extraction
        ↓
Next.js schema.json
        ↓
TypeGen
```

This gives the frontend enough schema information to generate accurate TypeScript types without moving ownership of the Studio schema into the frontend repository.

---

# `sanity.cli.ts`

`sanity.cli.ts` provides the Sanity CLI configuration required by frontend tooling.

It allows commands such as schema extraction and TypeGen to identify the correct Sanity project and dataset.

This is tooling configuration rather than application content.

---

# `sanity.types.ts`

`sanity.types.ts` is generated by Sanity TypeGen.

It contains types derived from:

- the extracted Sanity schema
- GROQ queries discovered by TypeGen

For example, a named GROQ query can produce a generated result type representing the exact projected fields returned by that query.

This gives the frontend a chain of type information based on the real CMS model:

```text
Sanity schema
      ↓
schema.json
      ↓
GROQ query
      ↓
TypeGen
      ↓
generated query result type
      ↓
frontend code
```

`sanity.types.ts` should be treated as generated output rather than manually maintained application code.

---

# TypeGen Workflow

When the Sanity schema changes in a way that affects frontend types, extract the schema again:

```bash
npx sanity schema extract --enforce-required-fields --path "./schema.json"
```

The exact relative path may differ depending on which repository/directory the command is executed from.

Then regenerate frontend types:

```bash
npx sanity typegen generate
```

Type generation should also be rerun when relevant GROQ queries change so their generated result types remain synchronized.

The generated `sanity.types.ts` file should then reflect the current schema and supported queries.

---

# Environment Variables

The integration uses both public configuration and a private server-side token.

## Public Sanity configuration

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_SANITY_STUDIO_URL=
```

These values configure the frontend connection.

Because they use the `NEXT_PUBLIC_*` prefix, they must never contain secrets.

The Studio URL identifies the separate Sanity Studio application used by Visual Editing-related infrastructure.

For this project, the production Studio is hosted separately from the frontend.

---

## Private Sanity read token

```env
SANITY_API_READ_TOKEN=
```

This is an authentication credential.

It must:

- remain secret
- never use the `NEXT_PUBLIC_*` prefix
- never be committed to Git
- be configured securely in deployment environments
- use only the permissions required by the application

The current integration uses a read-only token for authenticated Sanity fetching and live/preview infrastructure.

The token should not be rendered into application output, logged, or exposed through public configuration.

---

## Local development

Local environment configuration belongs in:

```text
.env.local
```

`.env.local` must remain outside version control when it contains secrets.

---

## Deployment environments

Environment variables required by the frontend must also be configured in the deployment platform.

Local `.env.local` values are not automatically transferred when source code is pushed to Git.

Conceptually:

```text
Local development
      ↓
.env.local

Vercel deployment
      ↓
Vercel Environment Variables
```

Production and Preview deployments should receive the appropriate Sanity configuration for the environment in which they run.

---

# Current Data Flow

A normal published-content request now follows this general flow:

```text
Editor
  │
  ▼
Sanity Studio
  │
  │ publishes content
  ▼
Sanity Content Lake
  │
  │ GROQ
  ▼
Query definition
  │
  ▼
Sanity fetching layer
  │
  ▼
Next.js Cache Components
  │
  ├── page rendering
  ├── metadata generation
  ├── structured data
  └── other application consumers
  │
  ▼
Visitor / Search Engine
```

When the underlying content changes:

```text
Sanity Content Lake
        │
        │ content update
        ▼
    Sanity Live
        │
        │ affected cache tags
        ▼
Next.js revalidation
        │
        ▼
fresh content
```

The important architectural rule remains:

> Sanity provides content. Next.js decides how that content becomes a website.

---

# Site Settings as the Global CMS Source of Truth

The project contains one Site Settings singleton.

For editable site-wide information, this document should be treated as the primary CMS source of truth.

For example, the contact email should not independently be hardcoded into:

```text
Footer.tsx
ContactPage.tsx
JSON-LD
SEO utilities
```

Instead:

```text
               Site Settings
                     │
               contactEmail
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
        Footer     Contact     Schema
```

The same principle applies to other global editorial values.

This makes global changes predictable and prevents duplicated content from drifting out of sync.

---

# What Does NOT Belong in Site Settings?

Site Settings should contain values that an editor can reasonably benefit from changing.

Technical application configuration should remain in Next.js or the deployment environment.

For example:

```text
CMS / Site Settings               Application / Environment

Site name                         Production origin
Tagline                           Sanity project ID
Site description                  Sanity dataset
Contact email                     Sanity API version
Social profiles                   Sanity authentication tokens
Default social image              Studio URL configuration
                                  Canonical construction
                                  robots.txt logic
                                  sitemap logic
                                  schema identifiers
```

This prevents editors from accidentally changing infrastructure-level behavior.

---

# SEO Architecture

Sanity and Next.js have different SEO responsibilities.

## Sanity

Sanity stores editorial SEO information.

Indexable content can contain an optional reusable `metadata` object with fields such as:

```text
metadata
├── title
├── description
├── socialImage
├── canonical
└── noIndex
```

These fields are overrides.

Editors should not normally need to complete every SEO field for every piece of content.

## Next.js

Next.js contains the SEO resolution and technical implementation logic.

For example, a post can resolve metadata using:

```text
TITLE

post.metadata.title
        ↓ fallback
post.title
        ↓ fallback
siteSettings.siteName
```

```text
DESCRIPTION

post.metadata.description
        ↓ fallback
post.excerpt
        ↓ fallback
siteSettings.siteDescription
```

```text
SOCIAL IMAGE

post.metadata.socialImage
        ↓ fallback
post.featuredImage
        ↓ fallback
siteSettings.defaultSocialImage
```

```text
CANONICAL

post.metadata.canonical
        ↓ fallback
automatically generated canonical URL
```

```text
ROBOTS

post.metadata.noIndex
        ↓ fallback
indexable by default
```

This allows strong metadata to be generated automatically while still giving editors control when an override is genuinely useful.

Metadata fetching should use the dedicated Sanity metadata infrastructure so stega-encoded values cannot leak into document metadata.

---

# Structured Data

Sanity can provide the content required to construct structured data.

For example:

```text
Post
 │
 └── author reference
          │
          ▼
       Author
          │
          ├── name
          ├── avatar
          ├── website
          ├── expertise
          └── social profiles
                    │
                    ▼
             Next.js schema
                    │
                    ▼
               Person / Article
```

Sanity stores the facts.

Next.js owns the actual JSON-LD structure.

This prevents schema implementation details from becoming CMS content.

---

# Visual Editing and Preview Foundation

The integration already contains some infrastructure required for future Visual Editing and draft-preview workflows:

- Studio URL configuration
- stega configuration
- server authentication
- browser/live authentication support
- perspective resolution
- Draft Mode awareness
- Sanity Live

These foundations do not mean that every Visual Editing or preview workflow is fully implemented.

Additional application-level work may still be required before a complete editorial preview experience is exposed.

This distinction keeps infrastructure readiness separate from finished product functionality.

---

# Testing

Sanity integration behavior can be verified through dedicated internal test routes during development.

Tests can be used to confirm:

- frontend connectivity to Sanity
- Site Settings fetching
- generated data shape
- live content updates
- cache revalidation behavior

Test routes are development infrastructure and should not contain secrets or sensitive server information.

A test route being hidden from search engines does not make it private.

Anything requiring genuine privacy should use proper authentication and authorization.

---

# Future Extensions

The integration can grow as the application requires additional CMS capabilities.

Likely future additions include:

```text
src/sanity/
└── lib/
    ├── fetch/
    │   ├── siteSettings.ts
    │   ├── posts.ts
    │   ├── categories.ts
    │   └── projects.ts
    │
    └── queries/
        ├── siteSettings.ts
        ├── posts.ts
        ├── categories.ts
        └── projects.ts
```

Possible future capabilities include:

- complete draft preview workflows
- full Sanity Visual Editing integration
- post and project route generation
- additional typed content queries
- richer image helpers
- reusable metadata resolution utilities
- structured-data builders backed by CMS content
- additional global settings where editorial control is appropriate

These should be introduced when the application actually needs them rather than pre-building unnecessary abstraction.

---

# Design Principles

The integration follows several important rules.

## 1. Sanity owns editable content

If an editor should reasonably be able to change something globally, it should generally come from the CMS.

## 2. Next.js owns application behavior

Routing, canonical generation, metadata resolution, schema construction, robots rules, caching boundaries, and other technical behavior belong to the application.

## 3. Avoid duplicated sources of truth

Global editable values should have one authoritative source whenever possible.

## 4. SEO should work by default

Editors should not have to manually populate every SEO field.

Content fields provide sensible defaults, while dedicated SEO fields provide optional overrides.

## 5. Keep queries centralized

GROQ should live in the Sanity integration layer rather than being scattered throughout UI components.

## 6. Separate queries from application-facing fetchers

Queries define what data Sanity should return.

Fetchers define how the application obtains and validates that data.

Keeping these responsibilities separate makes both easier to maintain.

## 7. Prefer generated types over duplicated manual types

When Sanity TypeGen can derive a type from the real schema and query, that generated type should generally be preferred over manually recreating the same structure.

## 8. Cache intentionally

Reusable content and deterministic computation can benefit from caching.

Request-specific, user-specific, or interactive behavior should not be cached merely to satisfy framework constraints.

## 9. Keep secrets server-side

Authentication tokens must never be exposed through public environment variables, rendered content, logs, or client-side code.

## 10. Keep the integration reusable

The Sanity infrastructure should remain sufficiently generic that it can be adapted to future service-business websites without rebuilding the CMS integration from scratch.

## 11. Add infrastructure when there is a real requirement

Avoid introducing authentication, preview systems, additional abstraction layers, or other infrastructure solely because they may be useful someday.

The integration should grow alongside actual application requirements.
