import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${siteConfig.name} website and engagement for software and digital transformation services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="prose-zydev max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate">Last updated: 26 July 2026</p>

        <h2>Website use</h2>
        <p>
          By using www.zydev.co.uk you agree to these terms. Content is provided
          for general information and may change without notice.
        </p>

        <h2>Services</h2>
        <p>
          Project scope, fees, timelines, and deliverables are defined in a
          separate proposal or statement of work. Website pricing pages are
          indicative starting points, not binding quotes.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Until invoices are paid in full (unless otherwise agreed), Zydev
          retains rights in work product. Upon payment, agreed deliverables
          transfer as specified in the statement of work. Pre-existing tools and
          frameworks remain Zydev’s or their respective owners’.
        </p>

        <h2>Client responsibilities</h2>
        <p>
          You agree to provide timely feedback, accurate content, and required
          access. Delays in client inputs may shift timelines.
        </p>

        <h2>Liability</h2>
        <p>
          To the fullest extent permitted by law, Zydev is not liable for
          indirect or consequential losses. Nothing in these terms limits
          liability that cannot be limited under UK law.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Contact{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with
          questions.
        </p>
      </Container>
    </section>
  );
}
