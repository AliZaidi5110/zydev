import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-coral/35 hover:shadow-lift"
    >
      {service.image ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-mist">
          <Image
            src={service.image}
            alt={service.imageAlt ?? service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-mist text-teal transition group-hover:bg-coral/10 group-hover:text-coral">
          <ServiceIcon icon={service.icon} className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
          {service.shortTitle}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
          {service.summary}
        </p>
        <span className="mt-4 text-sm font-semibold text-coral transition group-hover:translate-x-0.5">
          Explore service →
        </span>
      </div>
    </Link>
  );
}
