import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";


export default function Header() {
    return (
        <header className="border-b">
            <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-lg font-semibold">
                    Nadeem Muhammed
                </Link>

                <div className="flex gap-6 text-sm">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <ThemeToggle />
            </nav>
        </header>
    );
}
