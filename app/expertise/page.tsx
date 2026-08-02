import { FadeIn } from "@/components/motion/FadeIn";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { EngineeringExpertise } from "@/components/sections/EngineeringExpertise";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertisePrinciples } from "@/lib/expertise";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Engineering Expertise",
  description:
    "Zydev engineering expertise across React, Next.js, Node.js, NestJS, PostgreSQL, Prisma, Stripe, OpenAI, Anthropic, AWS, Docker, and Vercel — explained through business outcomes.",
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <>
      <section className="section-pad border-b border-ink/8">
        <Container className="max-w-3xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Engineering"
              title="Technology choices that protect commercial outcomes"
              description="Modern stacks only matter when they reduce risk, cycle time, or operating cost. Here is how Zydev uses frontend, backend, data, integrations, and cloud tools in real delivery."
              as="h1"
            />
          </FadeIn>
        </Container>
      </section>

      <section className="section-pad bg-canvas">
        <Container>
          <SectionHeading
            eyebrow="How we choose"
            title="Principles behind the stack"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {expertisePrinciples.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="h-full border-t border-ink/15 pt-6">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <EngineeringExpertise />

      <CtaBanner
        title="Need an architecture conversation before you commit?"
        description="We can review your current stack, risks, and delivery options — then recommend what to build, buy, or integrate."
      />
    </>
  );
}
