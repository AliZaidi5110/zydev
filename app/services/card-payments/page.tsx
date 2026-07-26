import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";
import { notFound } from "next/navigation";

const service = getService("card-payments");

export function generateMetadata() {
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function CardPaymentsPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
