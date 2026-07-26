import Link from "next/link";
import type { Service } from "@/lib/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-ink/8 bg-white/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-coral/30 hover:shadow-lift"
    >
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-mist text-teal transition group-hover:bg-coral/10 group-hover:text-coral">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
        {service.shortTitle}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
        {service.summary}
      </p>
      <span className="mt-5 text-sm font-semibold text-coral transition group-hover:translate-x-1">
        Explore service →
      </span>
    </Link>
  );
}
