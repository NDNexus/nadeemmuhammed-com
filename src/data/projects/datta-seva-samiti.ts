import type { Project } from "@/builders/models/Project";

/**
 * Datta Seva Samiti
 *
 * Non-profit website with a custom content system
 * designed for non-technical users.
 */
export const dattaSevaSamiti: Project = {
  id: "datta-seva-samiti",

  title: "Datta Seva Samiti",

  category: "Non-profit · Website · CMS & digital systems",

  overview:
    "Datta Seva Samiti needed a robust digital presence to communicate its projects, initiatives, sponsors, events, and latest activities while making online donations accessible to supporters.",

  work: [
    {
      title: "Website design & development",
      description:
        "Designed and developed the website around the organisation's work, communication needs, and goals for establishing a stronger digital presence.",
    },
    {
      title: "Custom content systems",
      description:
        "Built custom systems for managing projects, sponsors, and news so the organisation could keep its website current as its work evolved.",
    },
    {
      title: "Administration experience",
      description:
        "Designed the backend experience around non-technical users, keeping everyday content management straightforward and accessible.",
    },
  ],

  outcome:
    "A robust, content-driven platform that gives the organisation a central digital presence while making ongoing website management practical for a non-technical team.",

  image: {
    src: "/images/projects/datta-seva-samiti.webp",
    alt: "Datta Seva Samiti website",
    width: 1920,
    height: 6244,
  },

  link: {
    href: "https://dattasevasamiti.in/",
    label: "View live project",
    external: true,
  },
};
