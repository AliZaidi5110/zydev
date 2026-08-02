import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-ink text-white">
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
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.72)_0%,rgba(11,18,32,0.45)_42%,rgba(11,18,32,0.82)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(15,118,110,0.18),transparent_50%)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <FadeIn className="max-w-4xl">
          <p className="hero-brand font-display text-[clamp(3.4rem,12vw,8.5rem)] font-bold uppercase leading-[0.9]">
            {siteConfig.name}
          </p>
          <h1 className="mt-6 max-w-2xl font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            We design and build enterprise SaaS, AI systems, and business
            platforms that leadership can trust and teams can run every day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="/contact"
              className="w-full !bg-white !text-ink hover:!bg-white/90 sm:w-auto"
            >
              {siteConfig.cta.primary}
            </Button>
            <Button
              href="/services"
              variant="secondary"
              className="w-full !border-white/30 !text-white hover:!border-white/60 hover:!bg-white/10 sm:w-auto"
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
