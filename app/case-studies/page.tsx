import { CtaBanner } from "@/components/sections/CtaBanner";
import { CaseStudyFilterGrid } from "@/components/sections/CaseStudyFilterGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real Zevriyon Technologies case studies: ServiPro, Loft Aesthetics, Eva Hair, and UCBS — live product and platform work with problem, solution, features, and technologies.",
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
        <Container>
          <CaseStudyFilterGrid studies={caseStudies} />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}

