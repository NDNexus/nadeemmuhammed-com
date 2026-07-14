/**
 * =========================================================
 * CODE BLOCK
 * =========================================================
 *
 * Renders syntax-highlighted code using Shiki.
 *
 * Features:
 * ✔ VS Code syntax highlighting
 * ✔ Language badge
 * ✔ Line numbers (CSS)
 * ✔ Responsive horizontal scrolling
 *
 * Future:
 * ✔ Copy button
 * ✔ Filename support
 * ✔ Highlighted lines
 *
 * =========================================================
 */

import { highlightCode, getLanguageLabel } from "@/lib/highlightCode";
import { CopyButton } from "@ui/copyButton";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export async function CodeBlock({
  code,
  language = "text",
}: CodeBlockProps) {
  const languageLabel = getLanguageLabel(language);
  const html = await highlightCode(code, language);

  return (
    <figure className="code-block">

      {/* Header */}
      <figcaption className="code-block__header">

        <span className="code-block__language">
          {languageLabel}
        </span>

        <CopyButton text={code} />

      </figcaption>

      {/* Highlighted Code */}
      <div
        className="code-block__content"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />

    </figure>
  );
}