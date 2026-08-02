import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Ready to build software that changes how you operate?",
  description = "Tell us the outcome you need. We’ll reply within one business day with a practical next step.",
}: CtaBannerProps) {
  return (
    <section className="section-pad bg-canvas">
      <Container>
        <div className="relative overflow-hidden border border-ink/10 bg-ink px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,90,58,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(15,118,110,0.16),transparent_40%)]"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-soft">
                Next step
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base text-white/65 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href="/contact"
                className="w-full !bg-white !text-ink hover:!bg-white/90 sm:w-auto"
              >
                {siteConfig.cta.primary}
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="w-full !border-white/25 !text-white hover:!border-white/50 hover:!bg-white/10 sm:w-auto"
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
