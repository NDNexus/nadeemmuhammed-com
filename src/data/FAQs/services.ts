import type { FAQData } from "@/builders/models/FAQ";

/**
 * Frequently asked questions displayed on the Services page.
 */
export const servicesFAQ: FAQData = {
  items: [
    {
      id: "business-types",
      question: "What kinds of businesses do you work with?",
      answer:
        "I primarily work with service businesses, professional firms, consultants, agencies, and other businesses that value clarity, quality, and long-term thinking.",
    },
    {
      id: "what-i-can-help-with",
      question: "What can you help me with?",
      answer:
        "I help businesses improve their websites, digital systems, workflows, and technology decisions. The specific solution depends on where friction exists and what will create the most meaningful improvement for your business.",
    },
    {
      id: "knowing-what-you-need",
      question: "Do I need to know exactly what I need before contacting you?",
      answer:
        "No. You don’t need to arrive with a technical brief or a predetermined solution. We can start with what you’re trying to achieve, what isn’t working, and where you’re experiencing friction. From there, we can determine what makes sense.",
    },
    {
      id: "improve-or-start-over",
      question: "Can you improve what I already have, or do we need to start from scratch?",
      answer:
        "We don’t need to start over if there is already a solid foundation. I’ll look at what’s working, what’s causing problems, and what can be improved before recommending whether to refine, rebuild, or replace anything.",
    },
    {
      id: "project-cost",
      question: "How much does a project cost?",
      answer:
        "It depends on the scope, complexity, and current state of your digital systems. Once I understand what you need, I’ll discuss the available options, costs, and trade-offs with you before any work begins.",
    },
    {
      id: "project-timeline",
      question: "How long does a project take?",
      answer:
        "That depends on the scope and complexity of the work. Once we’ve clarified what needs to be done, I can give you a realistic timeline rather than an arbitrary estimate upfront.",
    },
    {
      id: "after-project",
      question: "What happens after the project is completed?",
      answer:
        "The goal is to leave you with something useful, understandable, and maintainable—not something that becomes another source of complexity. Any ongoing needs can be discussed based on what makes sense for your business.",
    },
    {
      id: "getting-in-touch",
      question: "What happens when I get in touch?",
      answer:
        "We’ll start with a conversation about your business, what you’re trying to achieve, and what’s getting in the way. If there’s a good fit, we’ll define the problem more clearly and discuss the most sensible next step.",
    },
  ],
};
