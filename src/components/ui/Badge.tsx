import type { ReactNode } from "react";

export const badgeThemes = [
  "slate",
  "stone",
  "rose",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
] as const;

export type BadgeTheme = (typeof badgeThemes)[number];

interface BadgeProps {
  children: ReactNode;
  theme?: string | null;
}

function isBadgeTheme(theme: string | null | undefined): theme is BadgeTheme {
  return theme != null && badgeThemes.includes(theme as BadgeTheme);
}

/**
 * =========================================================
 * BADGE
 * =========================================================
 *
 * Reusable categorical label used across the website.
 *
 * The CMS provides the theme name.
 * The design system controls the actual appearance.
 *
 * Invalid or missing CMS values safely fall back to "slate".
 * =========================================================
 */

export default function Badge({ children, theme }: BadgeProps) {
  const resolvedTheme = isBadgeTheme(theme) ? theme : "slate";

  return (
    <span className="badge" data-theme={resolvedTheme}>
      {children}
    </span>
  );
}
