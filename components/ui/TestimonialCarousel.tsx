"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Zydev rebuilt our site and within two months we were getting consistent organic enquiries. Clear process, no jargon, excellent delivery.",
    name: "Priya Shah",
    role: "Director, Northside Dental",
  },
  {
    quote:
      "The checkout integration alone paid for itself. Mobile conversions jumped and support tickets about payments almost disappeared.",
    name: "James Carter",
    role: "Founder, Harbor Retail",
  },
  {
    quote:
      "Finally a social partner that understands commercial goals. Content stays on-brand and actually drives traffic to the right pages.",
    name: "Elena Rossi",
    role: "Owner, Atelier Studio",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-10 text-white sm:px-10 sm:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-coral/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-teal/20 blur-3xl"
      />

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-soft">
        Client stories
      </p>

      <div className="relative mt-6 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl"
          >
            <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              “{active.quote}”
            </p>
            <footer className="mt-6 text-sm text-white/70">
              <cite className="not-italic">
                <span className="font-semibold text-white">{active.name}</span>
                <span className="mx-2 text-white/40">·</span>
                {active.role}
              </cite>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-2" role="tablist" aria-label="Testimonials">
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial from ${item.name}`}
            className={`h-2.5 rounded-full transition ${
              i === index ? "w-8 bg-coral" : "w-2.5 bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
