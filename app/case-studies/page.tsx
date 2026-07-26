import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "See how Zydev helps UK businesses grow with website design, SEO, payments, and social media projects.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-ink/8 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Case studies"
            title="Proof over promises"
            description="Selected projects across healthcare, retail, and creative services."
            as="h1"
          />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div
                className={`min-h-40 bg-gradient-to-br ${study.coverGradient} p-5 text-white`}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                  {study.industry}
                </p>
                <p className="mt-10 font-display text-2xl font-semibold">
                  {study.client}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold text-ink group-hover:text-coral">
                  {study.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate">{study.summary}</p>
                <span className="mt-4 text-sm font-semibold text-coral">
                  Read case study →
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
