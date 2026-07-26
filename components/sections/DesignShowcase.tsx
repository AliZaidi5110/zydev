import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function DesignShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="grid min-h-[70vh] lg:grid-cols-2">
        <div className="relative order-2 min-h-[320px] lg:order-1 lg:min-h-full">
          <Image
            src="/images/ui-ux-design.png"
            alt="UI and UX design interfaces with interactive panels, mobile layouts, and digital product components"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="order-1 flex items-center px-5 py-16 sm:px-10 lg:order-2 lg:px-14 xl:px-20">
          <FadeIn className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-soft">
              Design & experience
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Interfaces people understand — and enjoy using.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              From UI layouts to UX flows, we craft websites that feel clear on
              every device — so visitors find what they need and take action.
            </p>
            <div className="mt-8">
              <Button
                href="/services/website-design"
                className="!bg-white !text-ink hover:!bg-white/90"
              >
                Explore website design
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
