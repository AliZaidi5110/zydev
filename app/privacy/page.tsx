import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects personal data in line with UK GDPR.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="prose-zydev max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate">Last updated: 26 July 2026</p>

        <h2>Who we are</h2>
        <p>
          {siteConfig.legalName} (“Zydev”, “we”, “us”) provides software design,
          engineering, and digital transformation services to organisations
          worldwide. Contact:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>What we collect</h2>
        <p>
          When you submit a form, we collect the details you provide (such as
          name, email, phone, company, and message). We may also collect basic
          technical data via analytics cookies if you consent.
        </p>

        <h2>How we use your data</h2>
        <ul>
          <li>To respond to enquiries and provide quotes</li>
          <li>To deliver contracted services</li>
          <li>To improve our website with aggregated analytics</li>
          <li>To meet legal and accounting obligations</li>
        </ul>

        <h2>Legal bases</h2>
        <p>
          We process enquiry data under legitimate interests and/or steps prior
          to entering a contract. Analytics cookies are processed with your
          consent where required.
        </p>

        <h2>Sharing</h2>
        <p>
          We use trusted processors (for example email delivery or hosting
          providers such as Vercel) under appropriate agreements. We do not sell
          your personal data.
        </p>

        <h2>Retention</h2>
        <p>
          Enquiry data is kept for as long as needed to manage the relationship
          and for a reasonable period afterwards for legitimate business
          records, unless a longer period is required by law.
        </p>

        <h2>Your rights</h2>
        <p>
          Under UK GDPR you may request access, correction, deletion,
          restriction, or objection in certain circumstances. Contact{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. You
          can also complain to the ICO.
        </p>

        <h2>Cookies</h2>
        <p>
          Essential cookies keep the site working. Optional analytics cookies
          help us understand usage and are controlled via the consent banner.
        </p>
      </Container>
    </section>
  );
}
