import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Zydev",
  description:
    "Get a free quote or book a free consultation with Zydev. Tell us about your website, SEO, local, payments, or social goals.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about your next move"
            description="Share a little context and we’ll reply within one business day with practical next steps."
            as="h1"
          />
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-ink">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate hover:text-coral"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Phone</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-slate hover:text-coral"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Area served</dt>
              <dd className="mt-1 text-slate">United Kingdom (remote-first)</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
