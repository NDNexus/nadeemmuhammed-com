"use client";

/**
 * Displays the current year using the visitor's browser.
 *
 * Kept separate so the otherwise static Footer does not
 * depend on request-time date calculations.
 */
export default  function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
