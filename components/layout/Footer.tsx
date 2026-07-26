import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/8 bg-ink text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-3xl font-bold tracking-tight"
            >
              Zy<span className="text-coral">dev</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.tagline}. Website design, SEO, Google Business,
              payments, and social — built for UK businesses that want clarity
              and results.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">{siteConfig.cta.primary}</Button>
              <Button href="/contact" variant="secondary" className="!border-white/15 !bg-white/5 !text-white hover:!bg-white/10">
                {siteConfig.cta.secondary}
              </Button>
            </div>
          </div>

          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Company" links={footerNav.company} />
          <div>
            <FooterColumn title="Legal" links={footerNav.legal} />
            <div className="mt-8 space-y-2 text-sm text-white/65">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block transition hover:text-white"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="block transition hover:text-white"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.linkedin}
              className="transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.instagram}
              className="transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              className="transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
