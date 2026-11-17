"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

export function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <div className="flex items-center justify-between">
      <a href="#content" className="sr-only focus:not-sr-only focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <a href={asset("/#top")} className="font-display text-sm font-medium tracking-wide">
        WA
      </a>
      <button
        type="button"
        className="inline-flex h-11 items-center rounded-full border border-rule px-4 text-sm text-soft hover:text-ink"
        aria-label={dark ? "Dark mode" : "Light mode"}
        aria-pressed={dark}
        onClick={toggleTheme}
      >
        {dark ? "Light" : "Dark"}
      </button>
    </div>
  );
}
