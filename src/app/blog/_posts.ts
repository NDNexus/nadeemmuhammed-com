export const posts = [
    {
        slug: "building-calm-software",
        title: "Building Calm Software in a Noisy World",
        excerpt:
            "Why restraint, clarity, and boring defaults often lead to better software.",
        date: "January 10, 2026",
        readingTime: "6 min read",
        content: `
Modern software development feels increasingly loud. Frameworks change weekly,
tools promise speed at the cost of clarity, and interfaces often prioritize
novelty over comfort.

Over time, I’ve realized that the software I enjoy building most shares a
common trait: it feels calm.

## Calm Is a Design Decision

Calm is not the absence of features. It is the presence of intention.
Every element earns its place, and every decision reduces uncertainty.

### Boring Defaults Win

Defaults that are predictable reduce cognitive load. They let users focus
on their work instead of the interface.

\`\`\`ts
// Calm code is easy to reason about
export function calm() {
  return true;
}
\`\`\`

When software feels calm, it invites trust.
`,
    },

    {
        slug: "design-systems-over-styling",
        title: "Design Systems Over Styling",
        excerpt:
            "Why systems age better than visual tweaks and how to think in roles instead of components.",
        date: "January 4, 2026",
        readingTime: "5 min read",
        content: `
Styling is seductive. It delivers fast visual results and feels productive.
But over time, styling without a system becomes fragile.

Design systems shift the focus from pixels to decisions.

## Roles, Not Components

A button is not just a button. It has a role: primary action, secondary action,
or destructive action. Once roles are defined, visual choices become
implementation details.

### Systems Scale Calmly

Systems reduce entropy. They make future changes cheaper and safer because
decisions are centralized instead of scattered.

\`\`\`ts
type ButtonRole = "primary" | "secondary" | "danger";

function getButtonStyle(role: ButtonRole) {
  return role === "primary" ? "strong" : "subtle";
}
\`\`\`

A good system fades into the background while the product grows on top of it.
`,
    },
];
