"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function DesignShowcase() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-220, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink">
      <div className="grid items-center lg:grid-cols-2">
        <div className="relative order-2 flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-ink via-ink-soft to-black px-6 py-12 sm:min-h-[380px] lg:order-1 lg:min-h-[460px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,92,53,0.18),transparent_55%)]"
          />
          <motion.div
            className="relative w-full max-w-[420px] sm:max-w-[480px]"
            style={
              reduceMotion
                ? undefined
                : {
                    x,
                    opacity,
                  }
            }
          >
            <div
              aria-hidden
              className="absolute -bottom-2 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-2xl"
            />
            <Image
              src="/images/hero-laptop.png"
              alt="3D laptop representing Zydev UI and UX website design"
              width={1120}
              height={840}
              sizes="(max-width: 1024px) 90vw, 480px"
              className="relative mx-auto h-auto w-full drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)] [mix-blend-mode:screen]"
            />
          </motion.div>
        </div>

        <div className="order-1 flex items-center px-5 py-10 sm:px-8 sm:py-12 lg:order-2 lg:px-12 xl:px-16">
          <FadeIn className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-soft">
              UI & UX design
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Interfaces people understand — and act on.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Clear layouts and mobile-first journeys that help visitors find
              answers fast and enquire with confidence.
            </p>
            <div className="mt-5">
              <Button
                href="/services/website-design"
                className="w-full !bg-white !text-ink hover:!bg-white/90 sm:w-auto"
              >
                Explore website design
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
