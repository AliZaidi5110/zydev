import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { FaqSchema } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { DesignShowcase } from "@/components/sections/DesignShowcase";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Website Design, SEO & Digital Services UK`,
  description:
    "Zydev helps UK businesses grow with website design & development, SEO, Google Business Profile optimisation, card payments, social media management, and business funding support. Get a free quote today.",
  path: "/",
});

const homeFaqs = [
  {
    question: "What digital services does Zydev offer in the UK?",
    answer:
      "Zydev provides website design & development, SEO services, Google Business Profile optimisation, card payment integration, social media management, and business funding support for UK businesses.",
  },
  {
    question: "Do you work with businesses outside London?",
    answer:
      "Yes. We work UK-wide. Most projects run remotely with clear milestones, shared updates, and video calls.",
  },
  {
    question: "How quickly can a website or SEO project start?",
    answer:
      "Discovery calls are usually available within a few working days. Many website projects kick off within one to two weeks of agreement.",
  },
  {
    question: "Is the consultation free?",
    answer:
      "Yes. Book a free consultation and we’ll discuss goals, scope, and a practical path forward — with no obligation.",
  },
];

const trustPoints = [
  {
    title: "SEO built into every build",
    description:
      "Metadata, schema, performance, and internal linking ship with the site — not as an afterthought.",
  },
  {
    title: "Outcomes over vanity metrics",
    description:
      "We prioritise enquiries, bookings, and revenue signals you can measure.",
  },
  {
    title: "Mobile-first delivery",
    description:
      "Fast, accessible experiences that work on phones first — where most UK traffic starts.",
  },
];

export default function HomePage() {
  const featured = getFeaturedCaseStudies(3);

  return (
    <>
      <FaqSchema faqs={homeFaqs} />

      <HomeHero />

      <DesignShowcase />

      <ServicesShowcase />

      <section
        aria-labelledby="why-zydev-heading"
        className="bg-mist py-10 sm:py-12"
      >
        <Container>
          <SectionHeading
            id="why-zydev-heading"
            eyebrow="Why Zydev"
            title="A digital partner built for search and sales"
            description="We design for people and structure for search engines — so your investment keeps working after launch."
          />
          <div className="mt-6 grid gap-3 sm:mt-7 md:grid-cols-3">
            {trustPoints.map((point, index) => (
              <FadeIn key={point.title} delay={index * 0.04}>
                <article className="h-full border-l-2 border-coral bg-white px-4 py-4 sm:px-5">
                  <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {point.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <Container>
          <TestimonialCarousel />
        </Container>
      </section>

      <section
        aria-labelledby="case-studies-heading"
        className="border-t border-ink/8 bg-mist/70 py-10 sm:py-12"
      >
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="case-studies-heading"
              eyebrow="Case studies"
              title="Results UK clients can point to"
              description="Website, SEO, payments, and social projects across healthcare, retail, and creative services."
            />
            <Button
              href="/case-studies"
              variant="secondary"
              className="w-full shrink-0 sm:w-auto"
            >
              View all case studies
            </Button>
          </div>
          <div className="mt-6 grid gap-4 sm:mt-7 lg:grid-cols-3">
            {featured.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 0.04}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div
                    className={`min-h-28 bg-gradient-to-br ${study.coverGradient} p-4 text-white`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/70">
                      {study.industry}
                    </p>
                    <p className="mt-5 font-display text-xl font-semibold">
                      {study.client}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-base font-semibold text-ink group-hover:text-coral">
                      {study.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate">
                      {study.summary}
                    </p>
                    <span className="mt-3 text-sm font-semibold text-coral">
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
        className="bg-white py-10 sm:py-12"
      >
        <Container className="max-w-3xl">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Common questions about working with Zydev"
            align="center"
          />
          <div className="mt-6 sm:mt-7">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
