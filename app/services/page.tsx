import { FadeIn } from "@/components/motion/FadeIn";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = buildMetadata({
  title: "Digital Services for UK Businesses",
  description:
    "Explore Zydev services: website design & development, SEO, Google My Business optimisation, card payments, and social media management.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-ink/8 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to show up and convert online"
            description="Five focused capabilities — delivered as standalone projects or a joined-up growth programme."
            as="h1"
          />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
