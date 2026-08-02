import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { FaqSchema } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HomeHero } from "@/components/sections/HomeHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientWorkStrip } from "@/components/ui/ClientWorkStrip";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const DesignShowcase = dynamic(
  () =>
    import("@/components/sections/DesignShowcase").then(
      (mod) => mod.DesignShowcase,
    ),
  { ssr: true },
);

const ServicesShowcase = dynamic(
  () =>
    import("@/components/sections/ServicesShowcase").then(
      (mod) => mod.ServicesShowcase,
    ),
  { ssr: true },
);

const EngineeringExpertise = dynamic(
  () =>
    import("@/components/sections/EngineeringExpertise").then(
      (mod) => mod.EngineeringExpertise,
    ),
  { ssr: true },
);

const AiSolutionsSection = dynamic(
  () =>
    import("@/components/sections/AiSolutionsSection").then(
      (mod) => mod.AiSolutionsSection,
    ),
  { ssr: true },
);

const ProcessSection = dynamic(
  () =>
    import("@/components/sections/ProcessSection").then(
      (mod) => mod.ProcessSection,
    ),
  { ssr: true },
);

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Enterprise Software, AI & Digital Platforms`,
  description:
    "Zydev is an international software agency building enterprise SaaS, custom business platforms, AI automation, mobile apps, dashboards, and cloud systems that improve operations and revenue.",
  path: "/",
});

const homeFaqs = [
  {
    question: "What does Zydev build?",
    answer:
      "We design and deliver enterprise SaaS, custom business platforms, AI automation, mobile apps, CRM/ERP and portal systems, dashboards, APIs, and cloud foundations — with product strategy and UX when leadership needs clarity before build.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with organisations across the UK and internationally. Engagements run remotely with clear governance, milestones, and stakeholder cadence.",
  },
  {
    question: "How do enterprise engagements typically start?",
    answer:
      "Most programmes begin with a discovery or strategy sprint to define outcomes, scope, risks, and a phased delivery plan before larger investment.",
  },
  {
    question: "Can you partner with our internal teams?",
    answer:
      "Yes. We embed alongside product, engineering, and operations teams, or deliver end-to-end when you need an external build partner.",
  },
];

const trustPoints = [
  {
    title: "Business outcomes first",
    description:
      "We frame every release around operational efficiency, revenue enablement, or risk reduction — not feature volume.",
  },
  {
    title: "Enterprise delivery discipline",
    description:
      "Discovery, milestones, acceptance criteria, and stakeholder visibility keep complex programmes controllable.",
  },
  {
    title: "Systems people actually use",
    description:
      "Product and UX decisions are grounded in real workflows so software gets adopted after launch.",
  },
];

export default function HomePage() {
  const featured = getFeaturedCaseStudies(4);

  return (
    <>
      <FaqSchema faqs={homeFaqs} />

      <HomeHero />

      <DesignShowcase />

      <ServicesShowcase />

      <AiSolutionsSection compact />

      <EngineeringExpertise compact />

      <ProcessSection />

      <section
        aria-labelledby="why-zydev-heading"
        className="section-pad bg-canvas"
      >
        <Container>
          <SectionHeading
            id="why-zydev-heading"
            eyebrow="Why Zydev"
            title="A software partner for serious operational change"
            description="We help organisations replace fragile processes and fragmented tools with platforms that leadership can trust and teams can run."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {trustPoints.map((point, index) => (
              <FadeIn key={point.title} delay={index * 0.04}>
                <article className="h-full border-t border-ink/15 pt-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                    {point.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-y border-ink/8 bg-white">
        <Container>
          <ClientWorkStrip />
        </Container>
      </section>

      <section
        aria-labelledby="case-studies-heading"
        className="section-pad bg-canvas"
      >
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="case-studies-heading"
              eyebrow="Case studies"
              title="Selected product and platform work"
              description="Live engagements across PropTech, healthcare aesthetics, salon retail, and UK business services."
            />
            <Button
              href="/case-studies"
              variant="secondary"
              className="w-full shrink-0 sm:w-auto"
            >
              View all case studies
            </Button>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 0.04}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col bg-white transition hover:bg-mist/40"
                >
                  <div className="relative min-h-40 overflow-hidden bg-mist">
                    <Image
                      src={study.coverImage}
                      alt={`${study.client} project cover`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-slate">
                      {study.industry}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                      {study.client}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                      {study.summary}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-coral">
                      Read case study →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="section-pad border-t border-ink/8 bg-white"
      >
        <Container className="max-w-3xl">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Common questions about working with Zydev"
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
