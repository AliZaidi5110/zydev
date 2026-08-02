import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real Zydev case studies: ServiPro, Loft Aesthetics, Eva Hair, and UCBS — live product and platform work with problem, solution, features, and technologies.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-pad border-b border-ink/8">
        <Container>
          <SectionHeading
            eyebrow="Case studies"
            title="Real products. Live websites."
            description="Verified client work across PropTech, aesthetics, salon retail, and UK business services — without fabricated metrics."
            as="h1"
          />
        </Container>
      </section>
      <section className="section-pad">
        <Container className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group flex h-full flex-col bg-white transition hover:bg-mist/40 sm:flex-row"
            >
              <div className="relative min-h-48 w-full overflow-hidden bg-mist sm:min-h-full sm:w-[42%]">
                <Image
                  src={study.coverImage}
                  alt={`${study.client} project cover`}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate">
                  {study.industry}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                  {study.client}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate sm:text-base">
                  {study.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="text-sm font-semibold text-coral">
                    Read case study →
                  </span>
                  <span className="text-xs text-slate">
                    {new URL(study.liveUrl).hostname.replace(/^www\./, "")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
