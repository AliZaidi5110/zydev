import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/8 bg-ink text-white">
      <Container className="section-pad !py-14 sm:!py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="font-display text-3xl font-bold tracking-tight"
            >
              Zy<span className="text-coral">dev</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}. We partner with organisations that need
              software they can own, operate, and scale with confidence.
            </p>
            <div className="mt-7">
              <Button
                href="/contact"
                className="!bg-white !text-ink hover:!bg-white/90"
              >
                {siteConfig.cta.primary}
              </Button>
            </div>
          </div>

          <nav aria-label="Footer services">
            <FooterColumn title="Services" links={footerNav.services} />
          </nav>
          <nav aria-label="Footer company">
            <FooterColumn title="Company" links={footerNav.company} />
          </nav>
          <div>
            <nav aria-label="Footer legal">
              <FooterColumn title="Legal" links={footerNav.legal} />
            </nav>
            <div className="mt-8 space-y-2 text-sm text-white/60">
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

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-5">
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
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
