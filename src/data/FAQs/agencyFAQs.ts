import type { FAQData } from "@/builders/models/FAQ";

/**
 * Frequently asked questions for the landing page.
 *
 * Focuses on the questions business and agency owners
 * are likely to have before engaging Nadeem.
 */
export const agencyFAQ: FAQData = {
  items: [
    {
      id: "what-can-you-help-with",
      question: "What can you help us with?",
      answer:
        "I help businesses and agencies with website development, digital systems, technical implementation, existing website improvements, and the technology decisions behind them. The right solution depends on what you are trying to achieve and where the current friction is.",
    },

    {
      id: "do-i-need-technical-brief",
      question: "Do we need to know exactly what we need before contacting you?",
      answer:
        "No. You do not need to arrive with a technical brief or a predetermined solution. We can start with what you are trying to achieve, what is not working, and where you are experiencing friction. From there, we can determine what makes sense.",
    },

    {
      id: "work-with-agencies",
      question: "Can you work as part of our agency team?",
      answer:
        "Yes. I can work alongside your existing team as a technical development partner. You retain the client relationship, strategy, and project direction while I take responsibility for the development and technical implementation you need.",
    },

    {
      id: "work-directly-with-clients",
      question: "Do you work directly with our clients?",
      answer:
        "The normal arrangement is to work directly with your team so you retain control of the client relationship. Direct client communication can also be discussed when a project requires it.",
    },

    {
      id: "improve-existing-website",
      question: "Can you work with an existing website or system?",
      answer:
        "Yes. I do not assume that everything needs to be rebuilt. I can review what you already have, identify what is working and what is causing problems, and recommend whether it makes more sense to improve, rebuild, or replace parts of the existing system.",
    },

    {
      id: "project-or-ongoing",
      question: "Do you work on defined projects or provide ongoing support?",
      answer:
        "Both. I can take on a clearly defined development project or provide ongoing technical support when a business or agency needs someone they can rely on for continued improvements, maintenance, and development.",
    },

    {
      id: "technology",
      question: "What technologies do you work with?",
      answer:
        "My work spans modern frontend development, JavaScript and TypeScript, React and Next.js, WordPress, CMS integrations, and custom website implementations. The technology is chosen around the project rather than imposed by default.",
    },

    {
      id: "cost-and-timeline",
      question: "How do you approach project cost and timelines?",
      answer:
        "Cost and timeline depend on the scope, complexity, and current state of the project. I prefer to understand the work first, then discuss realistic options, trade-offs, deliverables, and timelines before development begins.",
    },

    {
      id: "after-launch",
      question: "What happens after the project is launched?",
      answer:
        "The goal is to leave you with something useful, understandable, and maintainable. I can also continue supporting the project with development, maintenance, improvements, and technical work when an ongoing relationship makes sense.",
    },

    {
      id: "getting-started",
      question: "How do we get started?",
      answer:
        "Send me the project brief, existing website, requirements, or simply a description of what you are trying to solve. I will review the context, ask any necessary questions, and we can determine the most sensible next step.",
    },
  ],
};
