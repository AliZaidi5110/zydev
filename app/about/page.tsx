import { FadeIn } from "@/components/motion/FadeIn";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Zydev",
  description:
    "Zydev is an international software agency helping organisations ship enterprise SaaS, AI automation, mobile apps, and business platforms with clarity and commercial discipline.",
  path: "/about",
});

const values = [
  {
    title: "Outcomes over tooling",
    description:
      "We recommend technology only when it reduces cost, risk, or cycle time — and we measure success in business terms.",
  },
  {
    title: "Enterprise delivery without theatre",
    description:
      "Clear discovery, milestones, and acceptance criteria so complex programmes stay controllable for leadership.",
  },
  {
    title: "Partnership that transfers capability",
    description:
      "We build with your teams, document decisions, and leave systems your organisation can own and extend.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad border-b border-ink/8">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="eyebrow">About {siteConfig.name}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              An international software agency for operational advantage
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate sm:text-xl">
              Zydev helps organisations replace fragile processes and fragmented
              tools with enterprise software — SaaS products, custom platforms,
              AI automation, mobile apps, portals, and cloud systems designed
              for adoption and long-term ownership.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-pad">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              title="Why we exist"
              description="Too many digital programmes produce slides, prototypes, or short-lived MVPs that never become reliable operating systems. We built Zydev to close the gap between ambition and software that teams can run."
            />
            <p className="mt-6 text-base leading-relaxed text-slate">
              From discovery through launch, we focus on the fundamentals that
              compound: clear product decisions, usable interfaces, dependable
              engineering, and delivery governance stakeholders can trust.
            </p>
          </div>
          <div className="border border-ink/10 bg-ink p-8 text-white sm:p-10">
            <p className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
              “Ship systems a leadership team can explain — and an operations
              team can rely on every day.”
            </p>
            <p className="mt-6 text-sm text-white/50">
              The Zydev operating principle
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad border-y border-ink/8 bg-white">
        <Container>
          <SectionHeading eyebrow="Values" title="How we work with clients" />
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {values.map((value) => (
              <article
                key={value.title}
                className="border-t border-ink/15 pt-6"
              >
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Exploring a platform or AI programme?"
        description="Start a project conversation and we’ll talk honestly about scope, sequencing, and whether Zydev is the right partner."
      />
    </>
  );
}
