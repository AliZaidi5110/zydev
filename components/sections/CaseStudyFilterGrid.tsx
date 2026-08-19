"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/case-studies";

type Props = {
  studies: CaseStudy[];
};

export function CaseStudyFilterGrid({ studies }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(studies.map((s) => s.industry)))];

  const filteredStudies = studies.filter(
    (study) => activeCategory === "All" || study.industry === activeCategory
  );

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
              activeCategory === cat
                ? "bg-ink text-white shadow-soft"
                : "bg-white text-ink/70 border border-ink/10 hover:border-ink/30 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-2">
        {filteredStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group flex h-full flex-col bg-white transition hover:bg-mist/40 sm:flex-row"
          >
            <div className="relative min-h-48 w-full overflow-hidden bg-mist sm:min-h-full sm:w-[42%]">
              <Image
                src={study.coverImage}
                alt={`${study.client} project cover`}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate">
                  {study.industry}
                </p>
                <span className="rounded bg-teal-soft/30 px-2 py-0.5 text-[10px] font-semibold text-teal-deep">
                  Verified Client
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                {study.client}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate sm:text-base">
                {study.summary}
              </p>

              {/* Technologies badge pill */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {study.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-mist/80 px-2.5 py-0.5 text-[10px] font-medium text-slate"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/8 pt-4">
                <span className="text-sm font-semibold text-coral group-hover:translate-x-1 transition-transform">
                  Read case study →
                </span>
                <span className="text-xs text-slate font-mono">
                  {new URL(study.liveUrl).hostname.replace(/^www\./, "")}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
