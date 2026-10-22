import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  BreadcrumbSchema,
  FaqSchema,
  ServiceSchema,
} from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PosShowcaseSection } from "@/components/sections/PosShowcaseSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getRelatedServices, type Service } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function ServicePageTemplate({ service }: { service: Service }) {
  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
      />
      <FaqSchema faqs={service.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]}
      />

      <section className="relative overflow-hidden border-b border-ink/8">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,90,58,0.08),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(15,118,110,0.08),_transparent_40%)]"
        />
        <Container className="relative section-pad !py-14 sm:!py-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-coral">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="hover:text-coral">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-ink" aria-current="page">
                {service.shortTitle}
              </li>
            </ol>
          </nav>
          <div
            className={
              service.image
                ? "grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14"
                : undefined
            }
          >
            <FadeIn>
              <p className="eyebrow">{siteConfig.name} services</p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#quote">{siteConfig.cta.primary}</Button>
                <Button href="/pricing" variant="secondary">
                  View pricing
                </Button>
              </div>
            </FadeIn>
            {service.image ? (
              <FadeIn delay={0.1} className="relative">
                <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 bg-mist sm:aspect-[16/11]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </FadeIn>
            ) : null}
          </div>
        </Container>
      </section>

      {service.slug === "telemarketing-pos" ? <PosShowcaseSection /> : null}

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title={`What you get with ${siteConfig.shortName}`}
            description="Practical outcomes — not slide decks. Each engagement is scoped around commercial goals."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {service.benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.04}>
                <article className="h-full border-t border-ink/15 pt-5">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {benefit.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-y border-ink/8 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How it works"
            description="A clear path from first conversation to launch — with communication you can rely on."
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {service.process.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.04}>
                <li className="h-full border-t border-ink/15 pt-5">
                  <span className="font-display text-sm font-semibold tracking-[0.16em] text-coral">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow="Pricing snapshot"
            title="Transparent starting points"
            description="Exact quotes depend on scope. These ranges help you plan — we refine after discovery."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
            {service.pricingSnapshot.map((tier) => (
              <article key={tier.name} className="bg-white p-6 sm:p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                  {tier.name}
                </h3>
                <p className="mt-4 font-display text-3xl font-semibold text-ink">
                  {tier.price}
                </p>
                <p className="mt-2 text-sm text-slate">{tier.note}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">
            Prefer the full picture? See{" "}
            <Link
              href="/pricing"
              className="font-semibold text-coral hover:underline"
            >
              {siteConfig.shortName} pricing
            </Link>{" "}
            or request a tailored quote below.
          </p>
        </Container>
      </section>

      <section className="section-pad border-y border-ink/8 bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title={`Common questions about ${service.shortTitle.toLowerCase()}`}
            />
            <div className="mt-8">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Related"
              title="Services that pair well"
              description="Most clients combine two or three capabilities for stronger results."
            />
            <ul className="mt-8 space-y-px overflow-hidden border border-ink/10 bg-ink/10">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="block bg-white px-5 py-4 transition hover:bg-canvas"
                  >
                    <span className="font-semibold text-ink">{item.title}</span>
                    <span className="mt-1 block text-sm text-slate">
                      {item.summary}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/pricing"
                  className="block bg-canvas px-5 py-4 font-semibold text-coral"
                >
                  Compare packages on the pricing page →
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="quote" className="section-pad">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Next step"
              title="Start a project conversation"
              description="Share a little context and we’ll come back with clear recommendations and a scoped next step."
            />
          </div>
          <div className="border border-ink/10 bg-white p-5 sm:p-8">
            <ContactForm defaultService={service.title} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
