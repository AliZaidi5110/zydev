import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  caseStudies,
  getCaseStudy,
} from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";
import { getRelatedServices } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const relatedServices = getRelatedServices(study.services);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.client, path: `/case-studies/${study.slug}` },
        ]}
      />

      <article>
        <header className={`bg-gradient-to-br ${study.coverGradient} text-white`}>
          <Container className="py-16 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
              <ol className="flex flex-wrap gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/case-studies" className="hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white">{study.client}</li>
              </ol>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              {study.industry}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">{study.summary}</p>
          </Container>
        </header>

        <Container className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Challenge
              </h2>
              <p className="mt-3 leading-relaxed text-slate">{study.challenge}</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Solution
              </h2>
              <p className="mt-3 leading-relaxed text-slate">{study.solution}</p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink/8 bg-white p-6">
              <h2 className="font-display text-xl font-semibold text-ink">
                Results
              </h2>
              <dl className="mt-5 space-y-4">
                {study.results.map((result) => (
                  <div key={result.label}>
                    <dt className="text-xs uppercase tracking-[0.14em] text-slate">
                      {result.label}
                    </dt>
                    <dd className="mt-1 font-display text-3xl font-semibold text-coral">
                      {result.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl bg-mist/80 p-6">
              <h2 className="font-display text-lg font-semibold text-ink">
                Services used
              </h2>
              <ul className="mt-4 space-y-2">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm font-medium text-coral hover:underline"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-6 w-full">
                {siteConfig.cta.primary}
              </Button>
            </div>
          </aside>
        </Container>
      </article>

      <CtaBanner />
    </>
  );
}
