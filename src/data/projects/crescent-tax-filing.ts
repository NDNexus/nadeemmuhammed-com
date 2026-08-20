import type { Project } from "@/builders/models/Project";

/**
 * Crescent Tax Filing
 *
 * Existing website improvement, blog experience,
 * backend streamlining, and lead-intake systems.
 */
export const crescentTaxFiling: Project = {
  id: "crescent-tax-filing",

  title: "Crescent Tax Filing",

  category: "Professional services · Blog · Systems improvement",

  overview:
    "Crescent Tax Filing had an existing website that needed structural improvements, a better publishing experience, and a cleaner underlying system.",

  work: [
    {
      title: "Blog experience",
      description:
        "Designed and developed the blog experience end to end, creating a clearer and more structured publishing experience.",
    },
    {
      title: "Backend systems",
      description:
        "Consolidated plugins and streamlined the existing backend to reduce unnecessary complexity and improve maintainability.",
    },
    {
      title: "Lead intake",
      description:
        "Helped structure contact, referral, and other enquiry flows to create a more consistent lead-intake experience.",
    },
    {
      title: "Data interfaces",
      description:
        "Built structured table interfaces with per-table CSV export to provide a practical way to manage and extract information.",
    },
    {
      title: "Website improvements",
      description:
        "Identified and improved broken or inconsistent components across the existing website.",
    },
  ],

  outcome:
    "A cleaner and more structured website foundation with an improved publishing experience, streamlined backend systems, and clearer lead-intake pathways.",

  image: {
    src: "/images/projects/crescent-tax-filing.webp",
    alt: "Crescent Tax Filing website",
    width: 1920,
    height: 4185,
  },

  link: {
    href: "https://crescenttaxfiling.com/blog/",
    label: "View live project",
    external: true,
  },
};
