import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Ready for a sharper digital presence?",
  description = "Tell us your goals. We’ll reply within one business day with clear next steps.",
}: CtaBannerProps) {
  return (
    <section className="bg-mist/80 py-10 sm:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-ink-soft to-teal-deep px-5 py-8 text-white sm:px-10 sm:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-0 h-36 w-36 rounded-full bg-coral/25 blur-3xl"
          />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
              <p className="mt-2 text-sm text-white/70 sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
              <Button href="/contact" className="w-full sm:w-auto">
                {siteConfig.cta.primary}
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="w-full !border-white/20 !bg-white/10 !text-white hover:!bg-white/15 sm:w-auto"
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
