import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Clarify commercial goals, constraints, and success metrics with the people who own the outcome.",
  },
  {
    step: "02",
    title: "Blueprint",
    description:
      "Define scope, architecture, UX direction, and a phased delivery plan leadership can approve.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Ship in visible increments with demos, quality gates, and clear acceptance criteria.",
  },
  {
    step: "04",
    title: "Launch & evolve",
    description:
      "Go live with training, monitoring, and a backlog prioritised by business impact.",
  },
];

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="section-pad bg-ink text-white"
    >
      <Container>
        <SectionHeading
          id="process-heading"
          tone="inverse"
          eyebrow="Process"
          title="How enterprise programmes stay controllable"
          description="A delivery rhythm designed for multi-stakeholder organisations — visible progress without operational theatre."
        />
        <ol className="mt-12 grid gap-8 sm:mt-14 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.05}>
              <li className="relative h-full border-t border-white/15 pt-6">
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-coral">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
