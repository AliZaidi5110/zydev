import { FadeIn } from "@/components/motion/FadeIn";
import { AiSolutionsSection } from "@/components/sections/AiSolutionsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiEngagementSteps } from "@/lib/ai-solutions";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "AI Solutions",
  description:
    "Zydev builds AI chatbots, assistants, voice agents, RAG systems, workflow automation, and OpenAI/Anthropic integrations with real business use cases.",
  path: "/ai-solutions",
});

export default function AiSolutionsPage() {
  return (
    <>
      <section className="section-pad border-b border-ink/8">
        <Container className="max-w-3xl">
          <FadeIn>
            <SectionHeading
              eyebrow="AI solutions"
              title="Practical AI for support, operations, and growth"
              description="We design AI systems that deflect routine work, accelerate decisions, and stay grounded in your approved data — with clear governance from day one."
              as="h1"
            />
            <div className="mt-8">
              <Button href="/contact">{siteConfig.cta.primary}</Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <AiSolutionsSection />

      <section className="section-pad bg-canvas">
        <Container>
          <SectionHeading
            eyebrow="Delivery"
            title="How we roll out AI safely"
            description="A controlled path from opportunity to production — so AI creates measurable value without operational risk."
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {aiEngagementSteps.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.04}>
                <li className="h-full border-t border-ink/15 pt-5">
                  <span className="font-display text-sm font-semibold tracking-[0.16em] text-coral">
                    {item.step}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBanner
        title="Have a support or ops workflow that needs AI?"
        description="Tell us the volume, tools, and constraints. We’ll recommend a practical pilot with clear success criteria."
      />
    </>
  );
}
