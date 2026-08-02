"use client";

import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export function ClientWorkStrip() {
  return (
    <div className="border border-ink/10 bg-ink px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-soft">
        Selected clients
      </p>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Real products and platforms in production
      </h2>
      <p className="mt-4 max-w-2xl text-base text-white/65">
        Explore live work across PropTech, aesthetics, salon commerce, and UK
        business services — no fabricated testimonials or invented metrics.
      </p>
      <ul className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudies.map((study) => (
          <li key={study.slug} className="bg-ink">
            <Link
              href={`/case-studies/${study.slug}`}
              className="flex h-full flex-col justify-between px-5 py-5 transition hover:bg-white/5"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  {study.industry}
                </p>
                <p className="mt-3 font-display text-xl font-semibold">
                  {study.client}
                </p>
              </div>
              <span className="mt-6 text-sm font-semibold text-coral">
                View case study →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
