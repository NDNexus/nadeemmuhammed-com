# AGENTS.md: The Project Constitution

This document provides the essential rules and guidelines for AI and human collaboration on this project. Adherence to these principles is mandatory to ensure long-term maintainability, minimize token usage, and facilitate seamless onboarding for any agent.

## 1. Core Principles

- **Clarity over Completeness:** Documentation and code should be easy to understand, even if it means omitting minor details.
- **Lean and Mean:** Avoid creating any new documentation, logging, or memory files. The system is intentionally lightweight.
- **Human-AI Parity:** Both humans and AI agents must be able to understand the project quickly using only the files specified in the reading order.

## 2. AI Workflow Rules

**Before starting any task:**

1.  **Read `AGENTS.md` (this file).**
2.  **Read `ai/project.md`** to understand the project's purpose, architecture, and constraints.
3.  **Read `ai/tasks.md`** to understand the current project status.

**Before making architectural changes:**

1.  Review `ai/project.md`.
2.  If the changes alter the established architecture, update `ai/project.md` within the same commit/PR.

**After completing any task:**

1.  Update `ai/tasks.md` to reflect the new project status.
2.  If the task resulted in changes to the project's knowledge (e.g., new dependencies, architectural shifts), update `ai/project.md`.

## 3. Required File Reading Order

To understand the project, read the files in this specific order:

1.  `AGENTS.md` (This file)
2.  `ai/project.md`
3.  `ai/tasks.md`
4.  `package.json` (for dependencies)
5.  `next.config.ts` (for Next.js configuration)
6.  `src/app/layout.tsx` (for the root app shell)
7.  `src/app/globals.css` (for the design system entry point)

## 4. Coding Standards

- **Language:** TypeScript
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 with the custom CSS design system in `src/styles`.
- **Linting:** Adhere to the rules in `eslint.config.mjs`. Run `npm run lint` before committing.
- **Formatting:** Maintain consistent formatting.

## 5. Architecture Principles

- **Headless Frontend:** This is the frontend layer of a headless architecture. The backend is a separate Sanity CMS project.
- **SEO First:** Architecture is designed for production-grade SEO. Leverage the Next.js Metadata API.
- **Layered CSS:** Follow the existing layered CSS architecture (`foundation`, `layout`, `components`, `utilities`). Do not add styles directly to components unless absolutely necessary.
- **Component-Based:** Build reusable React components.

## 6. Rules for Updating Project Memory

This project does not have a separate "memory" system. The "memory" is composed of:

- `ai/project.md`: The single source of truth for project knowledge.
- `ai/tasks.md`: The single source of truth for project status.

Do not create any other files to track decisions, logs, or history. Update the existing files as per the AI Workflow Rules.

## Source of Truth and decision order

Priority order:

1. User instructions
2. Current codebase
3. AGENTS.md
4. ai/project.md
5. ai/tasks.md

If documentation conflicts with the codebase, assume the documentation is outdated and propose corrections.

Never overwrite higher-priority sources without manual confirmation.