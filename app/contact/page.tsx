import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Contact ${siteConfig.name}`,
  description:
    "Start a project or book a discovery call with Zevriyon Technologies. Tell us about your SaaS, platform, AI, mobile, or transformation goals.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section-pad">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what needs to change"
            description="Share the outcome you need — operations, revenue, support, or product — and we’ll reply within one business day."
            as="h1"
          />
          <dl className="mt-10 space-y-6 border-t border-ink/10 pt-8 text-sm">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base font-medium text-ink hover:text-coral"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-base font-medium text-ink hover:text-coral"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                Engagement model
              </dt>
              <dd className="mt-2 text-base text-slate">
                UK-based, serving clients worldwide (remote-first)
              </dd>
            </div>
          </dl>
        </div>
        <div className="border border-ink/10 bg-white p-5 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
