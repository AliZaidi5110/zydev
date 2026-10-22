"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Zevriyon Technologies brought clarity to a messy digital estate. The process was structured, the communication was sharp, and delivery stayed aligned to commercial priorities.",
    name: "Priya Shah",
    role: "Director, Northside Dental",
  },
  {
    quote:
      "They treated checkout reliability as a business problem, not a cosmetic redesign. The team moved quickly without sacrificing quality.",
    name: "James Carter",
    role: "Founder, Harbor Retail",
  },
  {
    quote:
      "Finally a partner that connects brand storytelling to systems that capture demand. Clear thinking and dependable execution.",
    name: "Elena Rossi",
    role: "Owner, Atelier Studio",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const active = testimonials[index];

  return (
    <div className="border border-ink/10 bg-ink px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-soft">
        Client stories
      </p>

      <div className="relative mt-6 min-h-[140px] sm:min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl"
          >
            <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-[2.15rem]">
              “{active.quote}”
            </p>
            <footer className="mt-6 text-sm text-white/65">
              <cite className="not-italic">
                <span className="font-semibold text-white">{active.name}</span>
                <span className="mx-2 text-white/35">·</span>
                {active.role}
              </cite>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div
        className="mt-8 flex items-center gap-2"
        role="tablist"
        aria-label="Testimonials"
      >
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial from ${item.name}`}
            className={`h-3 rounded-sm transition ${
              i === index
                ? "w-10 bg-coral"
                : "w-3 bg-white/25 hover:bg-white/45"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
