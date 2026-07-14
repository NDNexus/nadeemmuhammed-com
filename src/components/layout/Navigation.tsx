"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-8 list-none">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-md font-medium text-fg-on-dark-subtle transition-colors hover:text-fg-on-emphasis focus:text-fg-on-emphasis no-underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-accent">
          Book a Consultation
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          ref={buttonRef}
          type="button"
          className="text-fg-on-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {isOpen && (
          <div
            ref={menuRef}
            className="fixed inset-0 z-50 bg-canvas-default p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-heading"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="text-text-primary"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <h2 id="mobile-menu-heading" className="sr-only">
              Mobile Navigation
            </h2>
            <nav className="mt-8 flex flex-col items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn btn-accent mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book a Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}