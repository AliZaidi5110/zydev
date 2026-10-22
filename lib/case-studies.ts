export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: { label: string; value: string }[];
  services: string[];
  liveUrl: string;
  coverImage: string;
  screenshots: { src: string; alt: string }[];
  publishedAt: string;
  featured?: boolean;
  coverGradient: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "servipro-procurement-platform",
    title: "ServiPro: RICS-aligned building service procurement platform",
    client: "ServiPro",
    industry: "PropTech / Facilities management",
    summary:
      "A B2B SaaS platform that helps UK managing agents and contractors tender, compare, award, and manage building service contracts with audit-ready records.",
    challenge:
      "Property and facilities managers needed a defensible way to run annual service tenders — with structured proposal comparison, contractor financial vetting, renewal tracking, and exportable audit trails aligned to the RICS Service Charge Code. Spreadsheet-led processes made compliance and decision records hard to defend.",
    solution:
      "Zevriyon Technologies helped shape and deliver ServiPro as a dual-sided procurement product: managing agents create tenders, invite contractors, compare proposals, award contracts, and retain compliance history; contractors access tenders, submit structured bids, and upload compliance documents. Financial standing checks and renewal reminders support safer, more transparent awards on both sides of the tender.",
    features: [
      "Tender creation and contractor invitation flows",
      "Side-by-side proposal comparison for value-for-money justification",
      "Contractor and agent financial vetting context",
      "Compliance document upload and retention",
      "Renewal reminders aligned to competitive tender cycles",
      "Exportable audit history for inspection and year-end certification",
      "Separate agent and contractor journeys on one platform",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js APIs",
      "PostgreSQL",
      "Cloud deployment",
      "Creditsafe data integrations",
    ],
    results: [
      { label: "Product", value: "Live B2B procurement SaaS" },
      { label: "Users", value: "Managing agents & contractors" },
      { label: "Focus", value: "RICS-aligned auditability" },
      { label: "Live site", value: "servipro.co.uk" },
    ],
    services: ["custom-software", "enterprise-systems", "product-strategy"],
    liveUrl: "https://www.servipro.co.uk/",
    coverImage: "/images/case-studies/servipro-cover.png",
    screenshots: [
      {
        src: "/images/case-studies/servipro-cover.png",
        alt: "ServiPro homepage showing RICS-aligned procurement platform",
      },
      {
        src: "/images/case-studies/servipro-detail.png",
        alt: "ServiPro product sections for agents and contractors",
      },
    ],
    publishedAt: "2026-03-20",
    featured: true,
    coverGradient: "from-slate-800 via-teal-900 to-ink",
  },
  {
    slug: "loft-aesthetics-clinic-website",
    title: "Loft Aesthetics: boutique clinic website for Worcester injectables",
    client: "Loft Aesthetics",
    industry: "Healthcare / Aesthetics",
    summary:
      "A polished clinic website for a Worcester aesthetics practice — positioning clinical trust, natural results, and an easy path to enquire or book.",
    challenge:
      "A boutique injectable clinic needed a digital presence that felt clinical and premium, clearly explained services and practitioner credentials, and converted interest into consultations without looking generic or oversold.",
    solution:
      "We delivered a refined marketing site centred on Loft Aesthetics’ clinical positioning: service clarity, practitioner credibility (including GPhC registration messaging), treatment gallery storytelling, review social proof, and policy guidance that prepares clients before booking.",
    features: [
      "Service overview for injectable and beauty treatments",
      "Practitioner profile with clinical credentials and philosophy",
      "Before-and-after treatment gallery presentation",
      "Client review highlights with link-out to Google reviews",
      "Clinic policy guidance ahead of appointment booking",
      "Mobile-first layout tuned for local discovery and enquiries",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Responsive image delivery",
      "SEO foundations",
      "Vercel",
    ],
    results: [
      { label: "Product", value: "Live clinic website" },
      { label: "Positioning", value: "Clinical + natural outcomes" },
      { label: "Proof", value: "Reviews & gallery on-site" },
      { label: "Live site", value: "loftaesthetics.co.uk" },
    ],
    services: ["product-strategy", "custom-software"],
    liveUrl: "https://www.loftaesthetics.co.uk/",
    coverImage: "/images/case-studies/loft-hero.png",
    screenshots: [
      {
        src: "/images/case-studies/loft-hero.png",
        alt: "Loft Aesthetics project cover visual",
      },
      {
        src: "/images/case-studies/loft-page.png",
        alt: "Loft Aesthetics clinic experience overview",
      },
    ],
    publishedAt: "2026-02-10",
    featured: true,
    coverGradient: "from-stone-700 via-rose-900 to-ink",
  },
  {
    slug: "eva-hair-salon-platform",
    title: "Eva Hair: Manchester salon booking and wig commerce experience",
    client: "Eva Hair",
    industry: "Retail / Beauty",
    summary:
      "A salon platform for Eva’s Hair in Manchester covering appointment requests, wig and hair product browsing, and clear client communication.",
    challenge:
      "The salon needed one digital experience for hair, wig, and beauty services — with online booking requests, product browsing, and easy contact — instead of fragmented messaging and unclear service paths.",
    solution:
      "We built a calm, conversion-focused salon site with service booking requests, wig/product browsing, location and contact pathways (including WhatsApp), and simple appointment policies so clients know what to expect before visiting the Arndale Centre salon.",
    features: [
      "Service booking request flow for hair, beauty, and wig care",
      "Wig and hair product browsing with style/length variants",
      "Salon location and contact pathways",
      "WhatsApp and direct salon communication options",
      "Appointment, cancellation, and product availability policies",
      "Mobile-first experience for walk-up and planned visits",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Form workflows",
      "E-commerce product browsing",
      "Vercel",
    ],
    results: [
      { label: "Product", value: "Live salon + product site" },
      { label: "Channels", value: "Booking + product browse" },
      { label: "Location", value: "Manchester Arndale" },
      { label: "Live site", value: "evahair.co.uk" },
    ],
    services: ["custom-software", "product-strategy", "mobile-apps"],
    liveUrl: "https://www.evahair.co.uk/",
    coverImage: "/images/case-studies/eva-cover.png",
    screenshots: [
      {
        src: "/images/case-studies/eva-cover.png",
        alt: "Eva Hair homepage for Manchester salon services",
      },
      {
        src: "/images/case-studies/eva-detail.png",
        alt: "Eva Hair booking and product browsing sections",
      },
    ],
    publishedAt: "2026-01-18",
    featured: true,
    coverGradient: "from-neutral-800 via-amber-900 to-ink",
  },
  {
    slug: "ucbs-business-services-platform",
    title: "UCBS: UK business cost review and merchant services platform",
    client: "UCBS",
    industry: "Business services / FinTech enablement",
    summary:
      "A lead-generation and services platform for UCBS to help UK businesses review merchant services, funding, utilities, telecoms, and related cost centres.",
    challenge:
      "UCBS needed a credible digital front door that explained a broad consultancy offering — merchant services, funding introductions, energy, telecoms, waste, water, and digital support — and converted visitors into free, no-obligation review enquiries.",
    solution:
      "We delivered a structured multi-service website with clear service pathways, funding eligibility tooling, FAQ education, partner trust signals, and enquiry CTAs so UK SMEs can understand UCBS’s offer and request a business cost review without obligation.",
    features: [
      "Service hubs for merchant services, funding, energy, telecoms, waste, water, and digital",
      "Card machine, ePOS, and payment solution storytelling",
      "Business funding introduction pathways",
      "Interactive funding eligibility style calculator",
      "FAQ content for consultancy expectations",
      "WhatsApp and quote request conversion paths",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Lead capture forms",
      "SEO landing structure",
      "Vercel",
    ],
    results: [
      { label: "Product", value: "Live multi-service site" },
      { label: "Offer", value: "Free business cost reviews" },
      { label: "Coverage", value: "UK-wide SME audience" },
      { label: "Live site", value: "ucbsltd.co.uk" },
    ],
    services: ["custom-software", "product-strategy", "cloud-devops"],
    liveUrl: "https://www.ucbsltd.co.uk/",
    coverImage: "/images/case-studies/ucbs-cover.png",
    screenshots: [
      {
        src: "/images/case-studies/ucbs-cover.png",
        alt: "UCBS homepage for UK business cost reviews",
      },
      {
        src: "/images/case-studies/ucbs-detail.png",
        alt: "UCBS merchant services and funding sections",
      },
    ],
    publishedAt: "2025-12-05",
    featured: true,
    coverGradient: "from-blue-950 via-slate-800 to-ink",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(limit = 3) {
  return caseStudies.filter((study) => study.featured).slice(0, limit);
}
