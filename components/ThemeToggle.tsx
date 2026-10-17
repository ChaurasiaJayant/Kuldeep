
"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const currentTheme: Theme =
      savedTheme === "dark" ? "dark" : "light";

    setTheme(currentTheme);
    setMounted(true);

    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full border border-zinc-300 bg-white"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        theme === "light" ? "dark" : "light"
      } mode`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg text-zinc-800 shadow-sm transition hover:border-violet-500 hover:text-violet-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
    >
      {theme === "light" ? "☾" : "☀"}
    </button>
  );
}