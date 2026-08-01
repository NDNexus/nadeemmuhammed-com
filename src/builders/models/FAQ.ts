/**
 * A single frequently asked question and its answer.
 */
export interface FAQItem {
  /**
   * Stable, unique identifier for the FAQ item.
   */
  id: string;

  /**
   * Question presented to the user.
   */
  question: string;

  /**
   * Answer displayed when the question is expanded.
   */
  answer: string;
}

/**
 * Structured FAQ content consumed by an FAQ builder.
 */
export interface FAQData {
  /**
   * Ordered collection of FAQ items.
   */
  items: FAQItem[];
}
