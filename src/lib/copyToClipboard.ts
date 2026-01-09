/**
 * Safely copies text to the clipboard.
 *
 * - Uses the modern Clipboard API when available
 * - Falls back to a hidden textarea for older browsers
 * - Safe to call in client-only code
 */
export async function copyToClipboard(text: string) {
    // Guard: SSR / non-browser environments
    if (typeof window === "undefined") return

    // Modern clipboard API (preferred)
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text)
            return
        } catch {
            // fall through to legacy method
        }
    }

    // Fallback: hidden textarea method
    const textarea = document.createElement("textarea")
    textarea.value = text

    textarea.style.position = "fixed"
    textarea.style.opacity = "0"

    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()

    try {
        document.execCommand("copy")
    } finally {
        document.body.removeChild(textarea)
    }
}
