"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";

const showcase = services.slice(0, 4);

export function ServicesShowcase() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-pad border-y border-ink/8 bg-white"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Capabilities"
            title="Software that moves businesses"
            description="From custom platforms and AI automation to enterprise systems and cloud foundations — scoped around commercial outcomes."
          />
          <Button href="/services" variant="secondary" className="w-full sm:w-auto">
            View all services
          </Button>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:mt-14 lg:grid-cols-2">
          {showcase.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid h-full bg-white transition hover:bg-canvas sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative min-h-44 overflow-hidden bg-mist sm:min-h-full">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.imageAlt ?? service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 28vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      priority={index === 0}
                    />
                  ) : null}
                </div>
                <div className="flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                    {service.summary}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-coral transition group-hover:translate-x-0.5">
                    Explore →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
