import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { RotatingStudioBadge } from "@/components/sections/RotatingStudioBadge";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-studio-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12">
        <FadeIn className="flex flex-1 flex-col justify-center">
          <h1 className="hero-studio-title font-display text-[clamp(2.6rem,9.5vw,7.5rem)] font-bold uppercase leading-none tracking-[-0.04em] whitespace-nowrap">
            Zydev.Studio
          </h1>
        </FadeIn>

        <div className="mt-8 grid items-end gap-8 sm:mt-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          <FadeIn delay={0.12} className="max-w-md">
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              {siteConfig.name} is a UK digital studio creating websites, SEO,
              local visibility, payments, social, and funding support —
              beautiful experiences that help businesses grow.
            </p>
            <Link
              href="/case-studies"
              className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/35 bg-black/25 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-ink"
            >
              <span>View our works</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink">
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path
                    d="M11.48 0L12.438 0.991L12.33 1.099C9.558 4.012 9.661 7.978 11.492 9.871L10.52 10.856C9.012 9.296 8.474 6.874 9.015 4.462L0.955 12.637L0 11.648L8.061 3.469C5.699 4.002 3.337 3.43 1.827 1.868L2.799 0.882C4.654 2.8 8.599 2.923 11.48 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} className="justify-self-end">
            <RotatingStudioBadge href="#services" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
