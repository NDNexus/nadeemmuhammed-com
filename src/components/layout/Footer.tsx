import Link from "next/link";
import Image from "next/image";

/**
 * =========================================================
 * FOOTER
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Global footer navigation and trust layer.
 *
 * RESPONSIBILITIES
 * ---------------------------------------------------------
 * - brand reinforcement
 * - secondary navigation
 * - legal navigation
 * - ownership messaging
 *
 *
 * RESPONSIVE STRATEGY
 * ---------------------------------------------------------
 * Desktop:
 *   multi-column layout
 *
 * Mobile:
 *   stacked layout
 *
 * =========================================================
 */

const navigation = [
    { label: "Services", href: "/services" },
    { label: "Writing", href: "/writing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
];

export default function Footer() {
    return (
        <footer className=" bg-canvas-dark">
            <div className="container-wide py-16">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div className="flow">
                        <Image
                            src="/images/logo/Logo Mark.webp"
                            alt="Nadeem Muhammed Logo"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <h2 className="font-serif text-xl font-semibold text-fg-on-dark">
                            Nadeem Muhammed
                        </h2>

                        <p className="text-body text-subtle">
                            Digital systems consultant helping service businesses build
                            elegant digital systems and premium online experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flow">
                        <h3 className="text-sm font-semibold tracking-wide text-fg-on-emphasis">
                            Navigation
                        </h3>

                        <nav
                            className="flex flex-col gap-3"
                            aria-label="Footer navigation"
                        >
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-fg-on-dark-subtle transition-colors hover:text-fg-on-dark no-underline"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Legal */}
                    <div className="flow">
                        <h3 className="text-sm font-semibold tracking-wide text-fg-on-emphasis">
                            Legal
                        </h3>

                        <nav
                            className="flex flex-col gap-3"
                            aria-label="Legal navigation"
                        >
                            {legalLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-fg-on-dark-subtle transition-colors hover:text-fg-on-dark no-underline"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="mt-16 border-t border-accent pt-6">
                    <p className="text-sm text-subtle">
                        © {new Date().getFullYear()} Nadeem Muhammed. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}