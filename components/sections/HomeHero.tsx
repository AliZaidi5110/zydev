import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-[#3eb5b8]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Modern white building against a teal sky — Zydev website design"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_35%] scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[#3eb5b8]/50 mix-blend-color"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(100deg,#2aa3a7_0%,rgba(42,163,167,0.85)_26%,rgba(42,163,167,0.4)_50%,rgba(42,163,167,0.1)_70%,transparent_100%)]"
        />
      </div>

      <div className="relative z-10 flex min-h-dvh items-center px-5 py-28 sm:px-10 lg:px-16 xl:px-24">
        <FadeIn className="max-w-xl lg:max-w-2xl">
          <p className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Zydev
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Build your dream website.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            Design, SEO, and digital growth for UK businesses that want to look
            sharp and convert.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="/contact"
              className="!bg-white !text-ink shadow-lg hover:!bg-white/90"
            >
              {siteConfig.cta.primary}
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="!border-white/45 !bg-white/10 !text-white backdrop-blur-sm hover:!bg-white/20"
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
