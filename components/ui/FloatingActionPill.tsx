"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function FloatingActionPill() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Quick Navigation Controls"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 transition-all duration-300"
    >
      {/* Quick CTA Pill */}
      <Link
        href="/contact"
        className="group flex items-center gap-2.5 rounded-full border border-ink/15 bg-ink/90 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md shadow-2xl transition hover:scale-105 hover:bg-ink hover:border-coral sm:text-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-soft opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-soft" />
        </span>
        <span>{siteConfig.cta.primary}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path
            d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Scroll To Top Button */}
      {scrolled && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white/90 text-ink backdrop-blur-md shadow-lg transition hover:scale-110 hover:bg-white hover:border-ink/30 focus:outline-none focus:ring-2 focus:ring-coral/20"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 11V3M7 3L3 7M7 3L11 7"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </aside>
  );
}
