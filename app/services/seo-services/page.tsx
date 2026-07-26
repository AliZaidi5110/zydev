import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";
import { notFound } from "next/navigation";

const service = getService("seo-services");

export function generateMetadata() {
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function SeoServicesPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
