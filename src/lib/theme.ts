export type Theme = "light" | "dark";

export function getStoredTheme(): Theme | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("theme") as Theme | null;
}

export function applyTheme(theme: Theme) {
    const root = document.documentElement;

    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
}
