import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Ready to grow with a clearer digital partner?",
  description = "Tell us what you need. We’ll reply with practical next steps — no hard sell.",
}: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-ink-soft to-teal-deep px-6 py-12 text-white sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-coral/30 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">{siteConfig.cta.primary}</Button>
              <Button
                href="/contact"
                variant="secondary"
                className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
              >
                {siteConfig.cta.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
