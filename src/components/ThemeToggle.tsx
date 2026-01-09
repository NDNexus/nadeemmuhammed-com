"use client";

import { useEffect, useState } from "react";
import { applyTheme, getStoredTheme, Theme } from "@/lib/theme";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const stored = getStoredTheme();
        const initial = stored ?? "light";
        setTheme(initial);
        applyTheme(initial);
    }, []);

    function toggleTheme() {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        applyTheme(next);
    }

    return (
        <button
            onClick={toggleTheme}
            className="text-sm text-muted hover:underline"
            aria-label="Toggle dark mode"
        >
            {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
    );
}
