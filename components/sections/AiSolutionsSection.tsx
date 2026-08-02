import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiSolutions } from "@/lib/ai-solutions";

type AiSolutionsSectionProps = {
  compact?: boolean;
};

export function AiSolutionsSection({
  compact = false,
}: AiSolutionsSectionProps) {
  const items = compact ? aiSolutions.slice(0, 6) : aiSolutions;

  return (
    <section
      id="ai-solutions"
      aria-labelledby="ai-solutions-heading"
      className="section-pad bg-ink text-white"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="ai-solutions-heading"
            tone="inverse"
            eyebrow="AI solutions"
            title="AI that removes real operational load"
            description="Chatbots, assistants, voice agents, RAG, and workflow automation — designed around business use cases, not demos."
          />
          {compact ? (
            <Button
              href="/ai-solutions"
              className="w-full shrink-0 !bg-white !text-ink hover:!bg-white/90 sm:w-auto"
            >
              Explore AI solutions
            </Button>
          ) : null}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.slug} delay={index * 0.03}>
              <article className="flex h-full flex-col bg-ink px-5 py-6 sm:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                  {item.summary}
                </p>
                {!compact ? (
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                      Use case
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.useCase}
                    </p>
                  </div>
                ) : null}
              </article>
            </FadeIn>
          ))}
        </div>

        {compact ? (
          <p className="mt-8 text-sm text-white/55">
            Also available: RAG systems, OpenAI/Anthropic integrations, document
            search, semantic search, and full business automation programmes.{" "}
            <Link
              href="/ai-solutions"
              className="font-semibold text-teal-soft hover:text-white"
            >
              See all AI capabilities →
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}
