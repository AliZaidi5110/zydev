import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { FaqSchema } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { DesignShowcase } from "@/components/sections/DesignShowcase";
import { HomeHero } from "@/components/sections/HomeHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";
import { getService, services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Website Design, SEO & Digital Services UK`,
  description: siteConfig.description,
  path: "/",
});

const homeFaqs = [
  {
    question: "What does Zydev specialise in?",
    answer:
      "We help UK businesses with website design & development, SEO, Google Business Profile optimisation, card payment integration, and social media management.",
  },
  {
    question: "Do you work with businesses outside London?",
    answer:
      "Yes. We’re UK-wide. Most projects run remotely with clear communication, milestones, and video calls.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Discovery calls are usually available within a few working days. Many website projects kick off within one to two weeks of agreement.",
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. Book a free consultation and we’ll discuss goals, constraints, and a practical path forward — with no obligation.",
  },
];

const trustPoints = [
  {
    title: "SEO built in, not bolted on",
    description:
      "Metadata, schema, performance, and internal linking are part of the build — not a later afterthought.",
  },
  {
    title: "Commercial clarity",
    description:
      "We prioritise enquiries, bookings, and revenue signals over vanity metrics.",
  },
  {
    title: "Modern delivery",
    description:
      "Next.js, accessible UX, and content systems your team can actually maintain.",
  },
];

export default function HomePage() {
  const featured = getFeaturedCaseStudies(3);
  const websiteDesign = getService("website-design");

  return (
    <>
      <FaqSchema faqs={homeFaqs} />

      <HomeHero />

      <DesignShowcase />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Five ways we help you grow"
            description="Pick one service or combine them into a joined-up digital programme."
          />

          {websiteDesign?.image ? (
            <FadeIn className="mt-10">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-mist shadow-lift">
                  <Image
                    src={websiteDesign.image}
                    alt={
                      websiteDesign.imageAlt ??
                      "Website design shown on a laptop in a real workspace"
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                    Featured service
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
                    {websiteDesign.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate">
                    {websiteDesign.summary} Clean layouts, clear journeys, and
                    experiences that make people&apos;s lives simpler online.
                  </p>
                  <div className="mt-6">
                    <Button href={`/services/${websiteDesign.slug}`}>
                      Explore website design
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ) : null}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.04}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Zydev"
            title="A digital partner that ships with SEO in mind"
            description="We design for people and structure for search engines — so your investment keeps working after launch."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustPoints.map((point, index) => (
              <FadeIn key={point.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl bg-white p-6 shadow-soft">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {point.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <TestimonialCarousel />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Case studies"
              title="Results our clients can point to"
              description="A sample of website, SEO, payments, and social work across UK industries."
            />
            <Button href="/case-studies" variant="secondary">
              View all case studies
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featured.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 0.05}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div
                    className={`min-h-36 bg-gradient-to-br ${study.coverGradient} p-5 text-white`}
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                      {study.industry}
                    </p>
                    <p className="mt-8 font-display text-2xl font-semibold">
                      {study.client}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-ink group-hover:text-coral">
                      {study.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate">
                      {study.summary}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-coral">
                      Read case study →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before you enquire"
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
