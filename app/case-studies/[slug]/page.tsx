import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
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
  const host = new URL(study.liveUrl).hostname.replace(/^www\./, "");

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
          <Container className="section-pad !py-14 sm:!py-20">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/70">
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
                <li className="text-white" aria-current="page">
                  {study.client}
                </li>
              </ol>
            </nav>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">
              {study.industry}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">{study.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-white !text-ink hover:!bg-white/90"
              >
                Visit live website
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="!border-white/30 !text-white hover:!border-white/55 hover:!bg-white/10"
              >
                {siteConfig.cta.primary}
              </Button>
            </div>
          </Container>
        </header>

        {study.screenshots.length > 0 ? (
          <section className="border-b border-ink/8 bg-canvas">
            <Container className="section-pad !py-12 sm:!py-16">
              <p className="eyebrow">Screenshots</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
                The live product experience
              </h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {study.screenshots.map((shot) => (
                  <figure
                    key={shot.src}
                    className="overflow-hidden border border-ink/10 bg-white"
                  >
                    <div className="relative aspect-[16/10] bg-mist">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption className="border-t border-ink/8 px-4 py-3 text-sm text-slate">
                      {shot.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-20">
          <div className="space-y-12">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Business problem
              </h2>
              <p className="mt-4 leading-relaxed text-slate">{study.challenge}</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Solution
              </h2>
              <p className="mt-4 leading-relaxed text-slate">{study.solution}</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Features
              </h2>
              <ul className="mt-4 space-y-3">
                {study.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-t border-ink/10 pt-3 text-sm leading-relaxed text-slate sm:text-base"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Technologies
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-ink/10 bg-white px-3 py-1.5 text-sm text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="border border-ink/10 bg-white p-6">
              <h2 className="font-display text-xl font-semibold text-ink">
                Project snapshot
              </h2>
              <dl className="mt-6 space-y-5">
                <div className="border-t border-ink/10 pt-4">
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-slate">
                    Client
                  </dt>
                  <dd className="mt-2 font-display text-xl font-semibold text-ink">
                    {study.client}
                  </dd>
                </div>
                <div className="border-t border-ink/10 pt-4">
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-slate">
                    Industry
                  </dt>
                  <dd className="mt-2 text-base text-ink">{study.industry}</dd>
                </div>
                {study.results.map((result) => (
                  <div
                    key={result.label}
                    className="border-t border-ink/10 pt-4"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-slate">
                      {result.label}
                    </dt>
                    <dd className="mt-2 font-display text-xl font-semibold text-ink">
                      {result.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border border-ink/10 bg-ink p-6 text-white">
              <h2 className="font-display text-lg font-semibold">Live website</h2>
              <p className="mt-2 text-sm text-white/65">
                Review the production experience on the live domain.
              </p>
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-teal-soft hover:text-white"
              >
                {host} →
              </a>
              <Button
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full !bg-white !text-ink hover:!bg-white/90"
              >
                Open {study.client}
              </Button>
            </div>

            <div className="border border-ink/10 bg-canvas p-6">
              <h2 className="font-display text-lg font-semibold text-ink">
                Capabilities used
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
