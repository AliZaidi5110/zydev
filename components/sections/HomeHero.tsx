import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const keywordLinks = [
  { label: "Website Design", href: "/services/website-design" },
  { label: "SEO", href: "/services/seo-services" },
  { label: "Google Business", href: "/services/google-my-business" },
  { label: "Payments", href: "/services/card-payments" },
  { label: "Social Media", href: "/services/social-media-marketing" },
  { label: "Business Funding", href: "/services/business-funding" },
];

export function HomeHero() {
  return (
    <section className="relative min-h-[88dvh] overflow-hidden bg-[#2aa3a7] sm:min-h-dvh">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Modern architecture representing Zydev website design and digital services for UK businesses"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_30%] sm:object-[68%_35%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[#2aa3a7]/45 mix-blend-color"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(14,40,48,0.78)_0%,rgba(42,163,167,0.72)_38%,rgba(42,163,167,0.28)_65%,transparent_100%)]"
        />
      </div>

      <div className="relative z-10 flex min-h-[88dvh] items-end px-5 pb-10 pt-24 sm:min-h-dvh sm:items-center sm:px-8 sm:pb-16 sm:pt-28 lg:px-14 xl:px-20">
        <FadeIn className="w-full max-w-2xl">
          <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Zydev
          </p>
          <h1 className="mt-3 font-display text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Website design, SEO & digital growth for UK businesses.
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
            We build fast sites, improve local visibility, and set up payments
            and social — so your brand looks sharp and converts.
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button
              href="/contact"
              className="w-full !bg-white !text-ink shadow-lg hover:!bg-white/90 sm:w-auto"
            >
              {siteConfig.cta.primary}
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="w-full !border-white/45 !bg-white/10 !text-white backdrop-blur-sm hover:!bg-white/20 sm:w-auto"
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>
          <nav
            aria-label="Popular services"
            className="mt-7 flex flex-wrap gap-x-1 gap-y-2 text-xs font-medium text-white/85 sm:mt-8 sm:text-sm"
          >
            {keywordLinks.map((link, index) => (
              <span key={link.href} className="inline-flex items-center">
                {index > 0 ? (
                  <span aria-hidden className="mx-2 text-white/40">
                    |
                  </span>
                ) : null}
                <Link
                  href={link.href}
                  className="underline-offset-4 transition hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </FadeIn>
      </div>
    </section>
  );
}
