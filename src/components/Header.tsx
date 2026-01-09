import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const isBeta =
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_APP_ENV === "beta";

export default function Header() {
    return (
        <header className="border-b">
            <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-lg font-semibold">
                    Nadeem Muhammed
                </Link>

                <div className="flex items-center gap-6 text-sm">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>

                    <ThemeToggle />

                    {isBeta && (
                        <span className="rounded-full border px-2 py-0.5 text-xs font-medium opacity-70">
                            Beta
                        </span>
                    )}
                </div>
            </nav>
        </header>
    );
}
