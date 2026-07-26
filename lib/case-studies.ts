export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  services: string[];
  publishedAt: string;
  featured?: boolean;
  coverGradient: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northside-dental-website-seo",
    title: "How Northside Dental doubled qualified enquiries",
    client: "Northside Dental",
    industry: "Healthcare",
    summary:
      "A redesigned website and local SEO programme that turned search traffic into booked consultations.",
    challenge:
      "An outdated site with slow load times and thin local presence meant patients were finding competitors first.",
    solution:
      "We rebuilt their site on Next.js, implemented LocalBusiness schema, optimised their Google Business Profile, and launched a location-focused content plan.",
    results: [
      { label: "Organic enquiries", value: "+112%" },
      { label: "Local pack visibility", value: "+68%" },
      { label: "LCP", value: "1.8s" },
    ],
    services: ["website-design", "seo-services", "google-my-business"],
    publishedAt: "2025-11-12",
    featured: true,
    coverGradient: "from-teal-700 via-slate-800 to-ink",
  },
  {
    slug: "harbor-retail-checkout",
    title: "Harbor Retail cut checkout drop-off by 34%",
    client: "Harbor Retail",
    industry: "E-commerce",
    summary:
      "Stripe payment integration and UX refinements that made buying feel effortless on mobile.",
    challenge:
      "A clunky multi-step checkout and payment friction was abandoning carts at peak season.",
    solution:
      "We redesigned the checkout flow, integrated Stripe Payment Element, and tightened performance on product and cart pages.",
    results: [
      { label: "Checkout completion", value: "+34%" },
      { label: "Mobile conversion", value: "+22%" },
      { label: "Payment errors", value: "-61%" },
    ],
    services: ["card-payments", "website-design"],
    publishedAt: "2026-01-20",
    featured: true,
    coverGradient: "from-coral via-orange-600 to-ink",
  },
  {
    slug: "atelier-social-growth",
    title: "Atelier Studio built a social engine that feeds SEO",
    client: "Atelier Studio",
    industry: "Creative services",
    summary:
      "A social media system that kept the brand consistent and funnelled attention into high-intent landing pages.",
    challenge:
      "Inconsistent posting and no bridge between social content and website offers.",
    solution:
      "We built content pillars, a publishing calendar, and landing pages that matched campaign themes for measurable lead capture.",
    results: [
      { label: "Qualified leads", value: "+47%" },
      { label: "Profile engagement", value: "+83%" },
      { label: "Landing page CTR", value: "4.9%" },
    ],
    services: ["social-media-marketing", "website-design", "seo-services"],
    publishedAt: "2026-03-04",
    featured: true,
    coverGradient: "from-slate-700 via-teal-800 to-ink",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(limit = 3) {
  return caseStudies.filter((study) => study.featured).slice(0, limit);
}
