import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden bg-white transition hover:bg-canvas"
    >
      {service.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-mist">
          <Image
            src={service.image}
            alt={service.imageAlt ?? service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border border-ink/10 bg-canvas text-teal transition group-hover:border-coral/30 group-hover:text-coral">
          <ServiceIcon icon={service.icon} className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          {service.shortTitle}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
          {service.summary}
        </p>
        <span className="mt-5 text-sm font-semibold text-coral">
          Explore service →
        </span>
      </div>
    </Link>
  );
}
