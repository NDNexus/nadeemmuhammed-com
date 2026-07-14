/**

* =========================================================
* SHIKI HIGHLIGHTER
* =========================================================
*
* Single source of truth for:
*
* ✔ Syntax highlighting
* ✔ Theme configuration
* ✔ Language aliases
* ✔ Language labels
* ✔ Language validation
* ✔ Future transformers
*
* Used by:
*
* * CodeBlock.tsx
* * Portable Text renderer (future)
* * Sanity code blocks (future)
*
* =========================================================
  */

import {
  bundledLanguages,
  codeToHtml,
} from "shiki";

import {
  transformerNotationHighlight,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from "@shikijs/transformers";

/* =========================================================
THEME
========================================================= */

export const SHIKI_THEME = "tokyo-night";

/* =========================================================
LANGUAGE ALIASES
========================================================= */

const LANGUAGE_ALIASES: Record<string, string> = {
  /* JavaScript */
  javascript: "js",

  /* TypeScript */
  typescript: "ts",

  /* React */
  react: "tsx",

  /* Shell */
  shell: "bash",
  sh: "bash",

  /* YAML */
  yml: "yaml",

  /* Markdown */
  md: "markdown",

  /* Plain text */
  plaintext: "text",
};

/* =========================================================
LANGUAGE LABELS
========================================================= */

const LANGUAGE_LABELS: Record<string, string> = {
  js: "JavaScript",
  jsx: "JSX",

  ts: "TypeScript",
  tsx: "TSX",

  html: "HTML",
  css: "CSS",

  json: "JSON",

  bash: "Bash",

  yaml: "YAML",

  markdown: "Markdown",

  text: "Text",
};

/* =========================================================
LANGUAGE NORMALIZATION
========================================================= */

export function normalizeLanguage(
  language: string
): string {
  const lower = language.toLowerCase();

  const mapped =
    LANGUAGE_ALIASES[lower] ?? lower;

  const supportedLanguages = Object.keys(
    bundledLanguages
  );

  if (supportedLanguages.includes(mapped)) {
    return mapped;
  }

  console.warn(
    `[Shiki] Unsupported language "${language}". Falling back to "text".`
  );

  return "text";
}

/* =========================================================
LANGUAGE LABELS
========================================================= */

export function getLanguageLabel(
  language: string
): string {
  const normalized =
    normalizeLanguage(language);

  return (
    LANGUAGE_LABELS[normalized] ??
    normalized.toUpperCase()
  );
}

/* =========================================================
SUPPORTED LANGUAGES
========================================================= */

export function getSupportedLanguages() {
  return Object.keys(
    bundledLanguages
  ).sort();
}

/* =========================================================
SHIKI HIGHLIGHTER
========================================================= */

export async function highlightCode(
  code: string,
  language: string = "text"
) {
  return codeToHtml(code, {
    lang: normalizeLanguage(language),


    theme: SHIKI_THEME,

    transformers: [
      transformerNotationHighlight(),
      transformerMetaHighlight(),
      transformerMetaWordHighlight(),
    ],

  });
}
