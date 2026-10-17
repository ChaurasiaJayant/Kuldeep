"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-[#080808]/85">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          onClick={handleNavClick}
          className="text-xl font-bold tracking-tight text-zinc-900 transition hover:text-violet-600 dark:text-white dark:hover:text-violet-400"
        >
          Kuldeep<span className="text-violet-500"> </span>Yadav
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <ThemeToggle />

          {/* <a
            href="/Vivek_Namdev_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:border-violet-500 hover:bg-violet-50 dark:border-zinc-700 dark:text-white dark:hover:bg-violet-500/10"
          >
            Resume ↗
          </a> */}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-800 transition hover:border-zinc-500 dark:border-zinc-800 dark:text-zinc-300"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            <span className="text-xl leading-none">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-zinc-200 bg-white transition-all duration-300 dark:border-zinc-800 dark:bg-[#080808] md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/Vivek_Namdev_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-2 rounded-xl border border-zinc-300 px-4 py-3 text-center font-medium text-zinc-900 transition hover:border-violet-500 hover:bg-violet-50 dark:border-zinc-800 dark:text-white dark:hover:border-violet-500 dark:hover:bg-violet-500/10"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
