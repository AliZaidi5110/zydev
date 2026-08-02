import { FadeIn } from "@/components/motion/FadeIn";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = buildMetadata({
  title: "Software Services for Enterprise Teams",
  description:
    "Explore Zydev services: custom SaaS and platforms, AI solutions, enterprise systems, mobile apps, cloud and DevOps, and product strategy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad border-b border-ink/8">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Capabilities that turn strategy into shipped software"
            description="Six focused practices — delivered as standalone workstreams or a joined-up platform programme."
            as="h1"
          />
        </Container>
      </section>
      <section className="section-pad">
        <Container>
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.04}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
