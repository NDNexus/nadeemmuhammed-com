"use client";

import { useState } from "react";
import { AppIcon } from "@/components/ui/icons";

type CopyButtonProps = {
  text: string;
};

export function CopyButton({
  text,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="copy-button"
      aria-label="Copy code"
    >
      <AppIcon
        icon={copied ? "lucide:check" : "lucide:copy"}
        width={16}
        height={16}
      />

      <span>
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}