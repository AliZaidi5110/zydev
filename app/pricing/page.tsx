import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent Zydev pricing starting points for website design, SEO, Google Business, card payments, social media, and business funding.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-ink/8 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Clear starting points. Tailored quotes."
            description="Every business is different — these ranges help you plan. We’ll refine after a free consultation."
            as="h1"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-12">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-ink/8 bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate">
                    {service.summary}
                  </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-coral hover:underline"
                >
                  Service details →
                </Link>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {service.pricingSnapshot.map((tier) => (
                  <div
                    key={tier.name}
                    className="rounded-xl bg-mist/70 px-5 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate">
                      {tier.name}
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold text-ink">
                      {tier.price}
                    </p>
                    <p className="mt-1 text-sm text-slate">{tier.note}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="pb-8">
        <Container className="rounded-2xl bg-ink px-6 py-10 text-center text-white sm:px-10">
          <h2 className="font-display text-3xl font-semibold">
            Need a packaged programme?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Many clients combine website + SEO or local + social. We’ll propose
            a single roadmap and investment.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact">{siteConfig.cta.primary}</Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
