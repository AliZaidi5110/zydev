import { FadeIn } from "@/components/motion/FadeIn";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Zydev",
  description:
    "Meet Zydev — a UK digital services agency helping businesses grow with website design, SEO, Google Business, payments, and social media.",
  path: "/about",
});

const values = [
  {
    title: "Clarity over jargon",
    description:
      "You’ll always know what we’re doing, why it matters, and what success looks like.",
  },
  {
    title: "Craft with commercial intent",
    description:
      "Beautiful work that also loads fast, ranks well, and supports real enquiries.",
  },
  {
    title: "Partnership, not dependency",
    description:
      "We leave you with systems and knowledge so you’re not stuck waiting on an agency for every edit.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/8 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              About {siteConfig.name}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              A UK digital agency built for practical growth
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Zydev helps ambitious small and mid-sized businesses show up
              online with confidence. We combine design, search, local
              visibility, payments, and social into clear programmes that
              respect your time and budget.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title="Why we started Zydev"
              description="Too many businesses were paying for websites that looked fine and underperformed — or SEO retainers that never connected to sales conversations. We built Zydev to close that gap."
            />
            <p className="mt-6 text-slate leading-relaxed">
              From first discovery call to launch and beyond, we focus on the
              fundamentals that compound: speed, structure, message-market fit,
              and consistent execution.
            </p>
          </div>
          <div className="rounded-3xl bg-ink p-8 text-white sm:p-10">
            <p className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
              “Ship work that a business owner can explain to their team — and
              that Google can understand too.”
            </p>
            <p className="mt-6 text-sm text-white/60">The Zydev operating principle</p>
          </div>
        </Container>
      </section>

      <section className="bg-mist/60 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Values" title="How we work with clients" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-ink/8 bg-white p-6"
              >
                <h2 className="font-display text-xl font-semibold text-ink">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Want to see if we’re a fit?"
        description="Book a free consultation and we’ll talk honestly about scope, timing, and whether Zydev is the right partner."
      />
    </>
  );
}
