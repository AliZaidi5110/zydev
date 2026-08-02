import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  expertiseCategories,
  type ExpertiseCategory,
} from "@/lib/expertise";

type EngineeringExpertiseProps = {
  /** Homepage preview shows fewer categories and a CTA to the full page */
  compact?: boolean;
};

export function EngineeringExpertise({
  compact = false,
}: EngineeringExpertiseProps) {
  const categories = compact
    ? expertiseCategories.slice(0, 3)
    : expertiseCategories;

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="section-pad border-y border-ink/8 bg-white"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="expertise-heading"
            eyebrow="Engineering expertise"
            title="The stack behind reliable business software"
            description="We explain technology by the operational problem it solves — so leadership can see why the architecture matters."
          />
          {compact ? (
            <Button
              href="/expertise"
              variant="secondary"
              className="w-full shrink-0 sm:w-auto"
            >
              View full expertise
            </Button>
          ) : null}
        </div>

        <div className="mt-12 space-y-10 sm:mt-14">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.04}>
              <ExpertiseBlock category={category} />
            </FadeIn>
          ))}
        </div>

        {compact ? (
          <p className="mt-10 text-sm text-slate">
            Also covered in depth: databases, payments and messaging
            integrations, AI providers, AWS, Docker, and Vercel.{" "}
            <Link
              href="/expertise"
              className="font-semibold text-coral hover:underline"
            >
              See the full engineering map →
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}

function ExpertiseBlock({ category }: { category: ExpertiseCategory }) {
  return (
    <article className="border border-ink/10 bg-canvas/60">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
            {category.title}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
            {category.summary}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
            <span className="font-semibold text-ink">Business outcome: </span>
            {category.businessOutcome}
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {category.items.map((item) => (
            <li
              key={item.name}
              className="border-t border-ink/10 bg-white px-4 py-4"
            >
              <p className="font-display text-base font-semibold text-ink">
                {item.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {item.outcome}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
