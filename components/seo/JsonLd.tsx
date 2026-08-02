import { siteConfig } from "@/lib/site";
import type { ServiceFaq } from "@/lib/services";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: siteConfig.areaServed,
        sameAs: Object.values(siteConfig.social),
        logo: `${siteConfig.url}/logo.svg`,
        knowsAbout: [
          "Enterprise SaaS",
          "Custom business platforms",
          "AI automation",
          "Mobile applications",
          "CRM and ERP systems",
          "React and Next.js",
          "Node.js and NestJS",
          "PostgreSQL and Prisma",
          "Stripe and cloud integrations",
          "AWS Docker Vercel",
          "Digital transformation",
        ],
      }}
    />
  );
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: siteConfig.areaServed,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        sameAs: Object.values(siteConfig.social),
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: siteConfig.areaServed,
        url: `${siteConfig.url}${path}`,
      }}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.path}`,
        })),
      }}
    />
  );
}
