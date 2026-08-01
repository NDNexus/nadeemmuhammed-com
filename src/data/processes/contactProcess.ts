import type { ProcessCollection } from "@/builders/models/Process";

/**
 * Contact and enquiry process.
 *
 * Explains what someone can expect after getting in touch,
 * from the initial review through to agreeing on a next step.
 */
export const contactProcess: ProcessCollection = {
  id: "contact-process",
  title: "Contact Process",

  stages: [
    // Review
    {
      id: "review",
      title: "Review",
      subtitle: "I’ll take the time to understand your enquiry.",

      overview:
        "I’ll personally review what you’ve shared to understand your business, what you’re trying to achieve, and where you’re experiencing friction. The goal at this stage is simply to understand the context before making any assumptions.",

      steps: [
        {
          title: "Understand Your Business",
          description:
            "Get a sense of your business, what you do, and the context behind your enquiry.",
        },
        {
          title: "Understand Your Goals",
          description:
            "Look at what you’re trying to achieve and what a meaningful improvement would look like.",
        },
        {
          title: "Consider the Situation",
          description:
            "Review the challenge you’ve described and determine whether I may be able to help.",
        },
      ],

      outcome: {
        title: "Outcome",
        description:
          "A clearer understanding of your enquiry and whether a conversation would be a useful next step.",
      },
    },

    // Conversation
    {
      id: "conversation",
      title: "Conversation",
      subtitle: "We’ll talk through the situation together.",

      overview:
        "If it looks like I can help, we’ll arrange a conversation to understand the situation more clearly. This is an opportunity to discuss your goals, challenges, and priorities and determine whether working together makes sense.",

      steps: [
        {
          title: "Explore the Context",
          description:
            "Talk through the situation in more detail and understand the factors that may be contributing to it.",
        },
        {
          title: "Clarify the Challenge",
          description:
            "Separate the immediate symptoms from the underlying problem so we can focus on what actually matters.",
        },
        {
          title: "Assess the Fit",
          description:
            "Determine whether my experience and approach are a good fit for what your business needs.",
        },
      ],

      outcome: {
        title: "Outcome",
        description:
          "A shared understanding of the situation and whether it makes sense for us to work together.",
      },
    },

    // Next Step
    {
      id: "next-step",
      title: "Next Step",
      subtitle: "We’ll decide what makes sense from there.",

      overview:
        "If there’s a good fit, I’ll recommend the most appropriate way to move forward based on what we’ve learned. Before any work begins, we’ll make sure the direction, scope, and expectations are clear.",

      steps: [
        {
          title: "Choose the Direction",
          description:
            "Identify the most sensible type of engagement based on your situation and priorities.",
        },
        {
          title: "Define the Scope",
          description:
            "Clarify what the work should include, what it should achieve, and where the boundaries are.",
        },
        {
          title: "Set Expectations",
          description:
            "Agree on responsibilities, timing, and what happens next before moving into any paid work.",
        },
      ],

      outcome: {
        title: "Outcome",
        description:
          "A clear, mutually understood next step with no ambiguity or unnecessary commitment.",
      },
    },
  ],
};
