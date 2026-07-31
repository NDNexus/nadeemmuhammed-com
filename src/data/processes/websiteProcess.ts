import type { ProcessCollection } from "@/builders/models/Process";

/**
 * End-to-end website project process.
 */
export const websiteProcess: ProcessCollection = {
  id: "website-process",
  title: "Website Design & Development Process",

  stages: [
    {
      id: "discover",
      title: "Discover",
      subtitle: "Understand your business before making recommendations.",

      overview:
        "Every successful project starts with understanding, not assumptions. Before discussing solutions, I take the time to learn about your business, your goals, your customers, and the challenges you're trying to solve so every recommendation has context.",

      steps: [
        {
          title: "Understand Your Business",
          description:
            "Learn how your business operates, the people you serve, and the goals you're working towards.",
        },
        {
          title: "Review Your Current Situation",
          description:
            "Explore your existing website, systems, and workflows to understand what's working and where improvements can be made.",
        },
        {
          title: "Identify Opportunities",
          description:
            "Look for sources of friction, missed opportunities, and areas where thoughtful changes could create the greatest impact.",
        },
        {
          title: "Define Success",
          description:
            "Agree on what success looks like so every decision throughout the project has a clear purpose.",
        },
      ],

      outcome: {
        title: "Outcome",
        description:
          "A shared understanding of your business, your priorities, and the opportunities worth pursuing—giving us a strong foundation for every decision that follows.",
      },
    },

    // Plan
    {
      id: "plan",
      title: "Plan",
      subtitle: "Turn insights into a practical roadmap.",

      overview:
        "With a clear understanding of your business, we can focus on making informed decisions. Together, we'll evaluate options, prioritize what matters most, and create a clear plan that guides the project from idea to implementation.",

      steps: [
        {
          title: "Prioritize Goals",
          description:
            "Focus on the objectives that will deliver the greatest value and align every decision around them.",
        },
        {
          title: "Explore Solutions",
          description:
            "Consider different approaches, technologies, and ideas to find the solution that best fits your business.",
        },
        {
          title: "Create the Roadmap",
          description:
            "Organize the work into a clear, realistic plan that provides direction and sets expectations.",
        },
        {
          title: "Align Before Building",
          description:
            "Ensure everyone shares the same understanding of the project before implementation begins.",
        },
      ],

      outcome: {
        title: "Outcome",
        description:
          "A well-defined roadmap with clear priorities, shared expectations, and the confidence to move into development with purpose.",
      },
    },

    // Build
    {
      id: "build",
      title: "Build",
      subtitle: "Bring the solution to life with care and precision.",

      overview:
        "With a clear plan in place, it's time to turn ideas into reality. Every part of the solution is built with quality, performance, and long-term maintainability in mind, while keeping you informed and involved throughout the process.",

      steps: [
        {
          title: "Build the Solution",
          description:
            "Develop the agreed solution using modern, reliable technologies and industry best practices.",
        },
        {
          title: "Bring Everything Together",
          description:
            "Integrate the tools, content, and systems needed to create a seamless experience.",
        },
        {
          title: "Review Progress",
          description:
            "Share progress regularly, gather feedback, and make adjustments as the project evolves.",
        },
        {
          title: "Build for the Future",
          description:
            "Focus on performance, accessibility, scalability, and maintainability so the solution continues to serve your business well beyond launch.",
        },
      ],

      outcome: {
        title: "Outcome",
        description:
          "A reliable, well-crafted solution that's ready for refinement and built to support your business for the long term.",
      },
    },

    // Refine
    {
      id: "refine",
      title: "Refine",
      subtitle: "Polish every detail before moving forward.",

      overview:
        "Great results come from careful refinement, not just implementation. Before considering the project complete, every detail is reviewed, tested, and improved to ensure the final solution meets the standards we've set together.",

      steps: [
        {
          title: "Test Everything",
          description:
            "Verify that every feature works reliably across devices, browsers, and real-world scenarios.",
        },
        {
          title: "Fine-Tune the Experience",
          description:
            "Improve usability, accessibility, and performance to create a smoother experience for every visitor.",
        },
        {
          title: "Review the Details",
          description:
            "Check content, visuals, and interactions to ensure everything feels consistent and professional.",
        },
        {
          title: "Prepare for Launch",
          description:
            "Make the final adjustments and confirm everything is ready before the solution goes live.",
        },
      ],

      outcome: {
        title: "Outcome",
        description:
          "A polished, reliable solution that's been carefully reviewed, refined, and prepared for a confident launch.",
      },
    },

    // Support
    {
      id: "support",
      title: "Support",
      subtitle: "Help your business continue to grow.",

      overview:
        "Your business will continue to evolve, and your digital presence should evolve with it. Whether you need advice, improvements, or future enhancements, I'm here to provide ongoing support and help you make confident decisions as your needs change.",

      steps: [
        {
          title: "Stay Available",
          description: "Provide ongoing guidance and answer questions whenever you need support.",
        },
        {
          title: "Adapt & Improve",
          description:
            "Make thoughtful improvements as your business, goals, and opportunities evolve.",
        },
        {
          title: "Keep Everything Healthy",
          description:
            "Ensure your website and digital systems continue to perform reliably over time.",
        },
        {
          title: "Plan What's Next",
          description:
            "Identify future opportunities and help you prioritize the next steps for continued growth.",
        },
      ],

      outcome: {
        title: "Outcome",
        description:
          "A trusted long-term partner who helps your digital presence continue to support your business as it grows and changes.",
      },
    },
  ],
};
