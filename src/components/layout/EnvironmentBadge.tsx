/**
 * Environment Badge
 *
 * Displays the current runtime environment.
 *
 * This component is intentionally responsible for presentation only.
 * The environment library only exposes facts about the current runtime.
 */

import { getEnvironment } from "@/lib/environment";

export default function EnvironmentBadge() {
  const { isLocal, isBeta } = getEnvironment();

  if (!isLocal && !isBeta) {
    return null;
  }

  const labels: string[] = [];

  const separator = " • ";

  if (isLocal) {
    labels.push("LOCAL");
  }

  if (isBeta) {
    labels.push("BETA");
  }

  return (
    <span
      className="border-accent text-accent rounded-full border px-2 py-0.5 text-xs font-semibold tracking-[0.15em] uppercase no-underline"
      title={labels.join(separator)}
    >
      {labels.join(separator)}
    </span>
  );
}
