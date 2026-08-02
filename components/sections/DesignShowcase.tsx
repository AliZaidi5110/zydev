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
import { Container } from "@/components/ui/Container";

export function DesignShowcase() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-180, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="section-pad overflow-hidden border-b border-ink/8 bg-canvas"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="order-2 lg:order-1">
            <div className="relative overflow-hidden border border-ink/10 bg-ink px-6 py-10 sm:px-10 sm:py-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(232,90,58,0.2),transparent_55%)]"
              />
              <motion.div
                className="relative mx-auto w-full max-w-[440px]"
                style={
                  reduceMotion
                    ? undefined
                    : {
                        x,
                        opacity,
                      }
                }
              >
                <Image
                  src="/images/hero-laptop.png"
                  alt="Product interface preview on a laptop"
                  width={1120}
                  height={840}
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="relative mx-auto h-auto w-full"
                />
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="order-1 max-w-lg lg:order-2">
            <p className="eyebrow">Product experience</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Interfaces teams adopt — and businesses trust.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              We design product experiences that reduce training time, cut
              operational friction, and make complex workflows feel simple.
            </p>
            <div className="mt-7">
              <Button href="/services/product-strategy">
                Explore product strategy
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
