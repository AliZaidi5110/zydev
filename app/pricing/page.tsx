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
    "Transparent Zydev engagement starting points for custom software, AI solutions, enterprise systems, mobile apps, cloud programmes, and product strategy.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="section-pad border-b border-ink/8">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Clear starting points. Scoped statements of work."
            description="Enterprise software is rarely one-size-fits-all. These ranges help planning conversations — we refine after discovery."
            as="h1"
          />
        </Container>
      </section>

      <section className="section-pad">
        <Container className="space-y-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="border border-ink/10 bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate sm:text-base">
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
              <div className="mt-8 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
                {service.pricingSnapshot.map((tier) => (
                  <div key={tier.name} className="bg-canvas px-5 py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate">
                      {tier.name}
                    </p>
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">
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

      <section className="pb-4">
        <Container className="border border-ink/10 bg-ink px-6 py-12 text-center text-white sm:px-10">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Need a multi-workstream programme?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            Many clients combine platform build, AI automation, and cloud
            foundations into one roadmap and investment plan.
          </p>
          <div className="mt-7 flex justify-center">
            <Button
              href="/contact"
              className="!bg-white !text-ink hover:!bg-white/90"
            >
              {siteConfig.cta.primary}
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
