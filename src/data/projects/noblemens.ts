import type { Project } from "@/builders/models/Project";

/**
 * Noblemens
 *
 * Digital strategy, design, development, and
 * ongoing digital systems management.
 */
export const noblemens: Project = {
  id: "noblemens",

  title: "Noblemens",

  category: "Natural products · Digital strategy · Design & development",

  overview:
    "Noblemens needed a digital presence capable of communicating the philosophy, values, and purpose behind its natural products while expressing the brand through luxury, elegance, and simplicity.",

  work: [
    {
      title: "Digital strategy",
      description:
        "Defined the digital direction and structure needed to establish a stronger online presence for the brand.",
    },
    {
      title: "UX & UI",
      description:
        "Designed a refined product experience focused on clarity, simplicity, and premium presentation.",
    },
    {
      title: "Product architecture",
      description:
        "Designed the underlying product and variant architecture, including dynamic product presentation within the browsing experience.",
    },
    {
      title: "Digital systems",
      description:
        "Built a custom content pipeline and supporting systems for the ongoing management of the platform.",
    },
  ],

  outcome:
    "A robust digital platform for product discovery and direct customer enquiries, with full e-commerce planned as a future phase.",

  image: {
    src: "/images/projects/noblemens.webp",
    alt: "Noblemens website",
    width:1920,
    height: 4270,
  },

  link: {
    href: "https://noblemens.net",
    label: "View live project",
    external: true,
  },
};
