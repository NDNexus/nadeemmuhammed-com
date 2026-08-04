# Sanity Integration

This directory contains the frontend infrastructure used to connect the Next.js application to Sanity CMS.

Sanity is maintained as a separate project and repository. The Next.js application does not contain the Sanity Studio or its schemas. Instead, it connects to the Sanity Content Lake through the Sanity API.

---

## Architecture

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
        ├── pages
        ├── components
        ├── metadata
        ├── structured data
        └── other frontend behavior
```

### Sanity owns

Sanity is the source of truth for editable content, including:

- site-wide settings
- posts
- categories
- authors
- projects and case studies
- editorial SEO overrides
- images and other CMS-managed content

### Next.js owns

Next.js is responsible for interpreting and presenting that content, including:

- routing
- page rendering
- layouts
- design and styling
- technical SEO
- metadata generation
- canonical URL generation
- structured data
- sitemap generation
- robots configuration
- Sanity image rendering

This separation keeps editorial content independent from application and deployment logic.

---

# Directory Structure

```text
src/sanity/
│
├── README.md
├── env.ts
│
└── lib/
    ├── client.ts
    ├── image.ts
    │
    └── queries/
        └── siteSettings.ts
```

Each file has one responsibility.

---

# `env.ts`

## Purpose

`env.ts` provides the Sanity configuration required by the frontend.

It reads the relevant environment variables and exposes validated values to the rest of the Sanity integration.

Example environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=p5f7m1cp
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
```

The rest of the application should import these values from `env.ts` instead of repeatedly accessing `process.env`.

Example:

```ts
import {apiVersion, dataset, projectId} from '@/sanity/env'
```

### Why this exists

Centralizing configuration gives us one place to:

- validate required values
- define defaults
- document the Sanity connection
- change configuration behavior later

The project ID, dataset name, and API version used by the public Sanity client are configuration values rather than content.

---

# `lib/client.ts`

## Purpose

`client.ts` creates the shared Sanity client used by the application to query published content.

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

The client is configured with:

- project ID
- dataset
- API version
- CDN behavior

Example:

```ts
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
```

Application code should reuse this client rather than creating separate Sanity clients throughout the project.

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

A page should therefore be able to do something conceptually similar to:

```ts
const post = await client.fetch(postQuery, {slug})
```

instead of embedding a large GROQ query directly inside the page component.

### Why queries are centralized

This keeps:

- page components easier to read
- GROQ reusable
- returned data predictable
- CMS integration easier to maintain
- future client projects easier to adapt

---

# `lib/queries/siteSettings.ts`

## Purpose

This file contains the query for the single Site Settings document.

Site Settings is the CMS source of truth for editable values shared across the website.

Examples include:

```text
Site Settings
├── Site Name
├── Tagline
├── Site Description
├── Default Social Image
├── Contact Email
└── Social Profiles
```

The frontend can retrieve these values once and use them wherever appropriate.

For example:

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

# `lib/image.ts`

## Purpose

Sanity image fields do not directly contain a normal image URL.

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

The same infrastructure can later be used for:

- featured images
- author avatars
- project images
- social sharing images
- other CMS-managed imagery

---

# Data Flow

A normal CMS request follows this flow:

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
Sanity Client
  │
  ▼
Query
  │
  ▼
Next.js Server
  │
  ├── render content
  ├── generate metadata
  ├── generate structured data
  └── build page
  │
  ▼
Visitor / Search Engine
```

The important architectural rule is:

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
Social profiles                   Canonical construction
Default social image              robots.txt logic
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

Next.js will contain the SEO resolution logic.

For example, a post may eventually resolve metadata using:

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

This allows good metadata to be generated automatically while still giving editors control when an override is genuinely useful.

---

# Structured Data

Sanity can also provide the content required to construct structured data.

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

# Environment Variables

Local development configuration belongs in:

```text
.env.local
```

Example:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=p5f7m1cp
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
```

`.env.local` should not be committed if it contains secrets.

Public Sanity configuration values such as project ID and dataset are not authentication credentials.

If private datasets, draft access, preview functionality, or authenticated mutations are introduced later, tokens must be treated as secrets and must never be exposed through `NEXT_PUBLIC_*` variables.

---

# Future Extensions

The integration may later include additional infrastructure such as:

```text
src/sanity/
├── env.ts
│
└── lib/
    ├── client.ts
    ├── image.ts
    ├── queries/
    │   ├── siteSettings.ts
    │   ├── posts.ts
    │   ├── categories.ts
    │   └── projects.ts
    │
    └── ...
```

Possible future capabilities include:

- draft and preview support
- Sanity Visual Editing
- live content updates
- generated Sanity types
- typed GROQ query results
- cache/revalidation integration
- additional content queries

These should be introduced only when the application needs them.

---

# Design Principles

The integration follows a few important rules.

### 1. Sanity owns editable content

If a client should reasonably be able to change something globally, it should generally come from the CMS.

### 2. Next.js owns application behavior

Routing, canonical generation, metadata resolution, schema construction, robots rules, and other technical behavior belong to the application.

### 3. Avoid duplicated sources of truth

Global editable values should have one authoritative source whenever possible.

### 4. SEO should work by default

Editors should not have to manually populate every SEO field.

Content fields provide sensible defaults, while dedicated SEO fields provide optional overrides.

### 5. Keep queries centralized

GROQ should live in the Sanity integration layer rather than being scattered throughout UI components.

### 6. Keep the integration reusable

The Sanity infrastructure should remain sufficiently generic that it can be adapted to future service-business websites without rebuilding the CMS integration from scratch.
