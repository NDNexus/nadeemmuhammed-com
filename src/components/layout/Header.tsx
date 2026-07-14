import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import EnvironmentBadge from "./EnvironmentBadge";

export default function Header() {
  return (
    <header className="section-sm bg-canvas-dark">
      <div className="container-wide">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo/Logo Mark.webp"
                alt="Nadeem Muhammed Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="text-body-lg text-fg-on-dark font-serif font-semibold">
                Nadeem Muhammed
              </span>
            </Link>
            <EnvironmentBadge />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
