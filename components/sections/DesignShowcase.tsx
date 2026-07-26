import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function DesignShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative order-2 aspect-[16/11] sm:aspect-[16/10] lg:order-1 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src="/images/ui-ux-design.png"
            alt="UI and UX design for mobile and web interfaces by Zydev"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="order-1 flex items-center px-5 py-10 sm:px-8 sm:py-12 lg:order-2 lg:px-12 xl:px-16">
          <FadeIn className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-soft">
              UI & UX design
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Interfaces people understand — and act on.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Clear layouts and mobile-first journeys that help visitors find
              answers fast and enquire with confidence.
            </p>
            <div className="mt-5">
              <Button
                href="/services/website-design"
                className="w-full !bg-white !text-ink hover:!bg-white/90 sm:w-auto"
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
