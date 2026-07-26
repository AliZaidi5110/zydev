export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  summary: string;
  icon: "globe" | "search" | "map" | "card" | "share";
  image?: string;
  imageAlt?: string;
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  pricingSnapshot: { name: string; price: string; note: string }[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "website-design",
    title: "Website Design & Development",
    shortTitle: "Website Design",
    primaryKeyword: "website design and development UK",
    metaTitle: "Website Design & Development UK | Zydev",
    metaDescription:
      "Conversion-focused website design and development for UK businesses. Fast, SEO-ready sites with clear CTAs, mobile-first UX, and measurable results.",
    intro:
      "Looking for website design and development UK businesses can rely on to generate enquiries? Zydev builds fast, SEO-ready websites that look sharp, load quickly, and turn visitors into customers — without the agency fluff.",
    summary:
      "Modern, mobile-first websites engineered for speed, SEO, and conversions.",
    icon: "globe",
    image: "/images/website-design.jpg",
    imageAlt:
      "Hands typing on a laptop while building a modern website",
    benefits: [
      {
        title: "Conversion-led design",
        description:
          "Every layout decision supports a clear path to enquiry, booking, or purchase.",
      },
      {
        title: "Core Web Vitals ready",
        description:
          "Optimised images, clean code, and performance budgets that protect rankings.",
      },
      {
        title: "SEO foundations baked in",
        description:
          "Semantic structure, metadata, schema, and internal linking from day one.",
      },
      {
        title: "Mobile-first UX",
        description:
          "Touch-friendly navigation and layouts proven on real UK mobile traffic.",
      },
      {
        title: "CMS-ready content",
        description:
          "Update pages, blogs, and case studies without waiting on a developer.",
      },
      {
        title: "Secure & scalable",
        description:
          "Built on modern stacks with HTTPS, form protection, and room to grow.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "We map your goals, audience, competitors, and conversion paths.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Wireframes and visual direction aligned to your brand and SEO targets.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Next.js development with performance, accessibility, and schema in scope.",
      },
      {
        step: "04",
        title: "Launch & iterate",
        description:
          "Go live with analytics, training, and a clear roadmap for continuous improvement.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Launch",
        price: "from £1,995",
        note: "5–7 page brochure site",
      },
      {
        name: "Growth",
        price: "from £3,495",
        note: "Custom design + CMS + SEO setup",
      },
      {
        name: "Scale",
        price: "Custom",
        note: "E-commerce, integrations, multi-location",
      },
    ],
    faqs: [
      {
        question: "How long does a typical website project take?",
        answer:
          "Most brochure sites launch in 3–6 weeks depending on content readiness and feedback cycles. Larger builds are scoped with clear milestones.",
      },
      {
        question: "Will my new website be SEO-ready?",
        answer:
          "Yes. We include technical SEO foundations: metadata, sitemap, robots, schema, semantic HTML, and performance best practices.",
      },
      {
        question: "Can I update the site myself after launch?",
        answer:
          "Absolutely. We can structure content for easy updates via MDX or a headless CMS such as Sanity or Contentful.",
      },
      {
        question: "Do you redesign existing websites?",
        answer:
          "Yes. We rebuild or refresh underperforming sites with a focus on conversions, speed, and search visibility.",
      },
    ],
    relatedSlugs: ["seo-services", "card-payments", "social-media-marketing"],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    shortTitle: "SEO",
    primaryKeyword: "SEO services UK",
    metaTitle: "SEO Services UK | Zydev",
    metaDescription:
      "Practical SEO services for UK businesses: technical audits, on-page optimisation, local SEO, and content that ranks and converts.",
    intro:
      "Zydev’s SEO services UK businesses choose when they want growth they can measure. We fix the technical foundations, target the right keywords, and build content that attracts buyers — not vanity traffic.",
    summary: "Rank higher for the searches that actually drive revenue.",
    icon: "search",
    image: "/images/seo-services.jpg",
    imageAlt:
      "Laptop showing a website analytics dashboard used for SEO performance tracking",
    benefits: [
      {
        title: "Technical SEO audits",
        description:
          "Crawlability, indexation, Core Web Vitals, and structured data fixes.",
      },
      {
        title: "Keyword strategy",
        description:
          "Intent-led targeting mapped to services, locations, and funnel stages.",
      },
      {
        title: "On-page optimisation",
        description:
          "Titles, headings, internal links, and content upgrades that move rankings.",
      },
      {
        title: "Local SEO",
        description:
          "Location pages and Google Business Profile signals that win nearby demand.",
      },
      {
        title: "Content systems",
        description:
          "Blog and landing page plans designed for long-tail compounding growth.",
      },
      {
        title: "Transparent reporting",
        description:
          "Clear dashboards for rankings, traffic, and enquiry attribution.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "Full technical, content, and competitor baseline.",
      },
      {
        step: "02",
        title: "Strategy",
        description: "Prioritised roadmap tied to commercial keywords.",
      },
      {
        step: "03",
        title: "Execute",
        description: "On-page, content, and authority work in monthly sprints.",
      },
      {
        step: "04",
        title: "Measure",
        description: "Track rankings, conversions, and iterate what wins.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Foundation",
        price: "from £499/mo",
        note: "Local & SMB SEO",
      },
      {
        name: "Growth",
        price: "from £899/mo",
        note: "Competitive markets",
      },
      {
        name: "Enterprise",
        price: "Custom",
        note: "Multi-site / national",
      },
    ],
    faqs: [
      {
        question: "How quickly will I see SEO results?",
        answer:
          "Technical wins can appear within weeks. Competitive ranking growth typically compounds over 3–6 months with consistent execution.",
      },
      {
        question: "Do you guarantee #1 rankings?",
        answer:
          "No ethical agency can. We focus on sustainable improvements and commercial outcomes you can track.",
      },
      {
        question: "Is SEO included with website builds?",
        answer:
          "Every Zydev site ships with SEO foundations. Ongoing SEO retainers accelerate growth after launch.",
      },
    ],
    relatedSlugs: ["website-design", "google-my-business", "social-media-marketing"],
  },
  {
    slug: "google-my-business",
    title: "Google My Business Optimisation",
    shortTitle: "Google Business Profile",
    primaryKeyword: "Google My Business optimisation",
    metaTitle: "Google My Business Optimisation | Zydev",
    metaDescription:
      "Google Business Profile optimisation for UK local businesses — categories, posts, reviews, and local pack visibility that drives calls and visits.",
    intro:
      "Google My Business optimisation is one of the fastest ways for local UK businesses to get found. Zydev optimises your Google Business Profile so you show up in Maps and the local pack when nearby customers are ready to buy.",
    summary: "Dominate local search and turn map views into real enquiries.",
    icon: "map",
    image: "/images/google-my-business.jpg",
    imageAlt:
      "Local business interior representing Google Business Profile and local discovery",
    benefits: [
      {
        title: "Profile completeness",
        description:
          "Categories, services, attributes, and photos that match search intent.",
      },
      {
        title: "Review strategy",
        description:
          "Ethical systems to earn, respond to, and leverage customer reviews.",
      },
      {
        title: "Local posts & offers",
        description:
          "Fresh updates that keep your profile active and relevant.",
      },
      {
        title: "NAP consistency",
        description:
          "Name, address, and phone alignment across the web to build trust.",
      },
      {
        title: "Insight tracking",
        description:
          "Monitor calls, direction requests, and website clicks from Maps.",
      },
      {
        title: "Multi-location support",
        description:
          "Structured optimisation for businesses with several branches.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "Review current profile strength and competitor locals.",
      },
      {
        step: "02",
        title: "Optimise",
        description: "Fix categories, copy, media, and service listings.",
      },
      {
        step: "03",
        title: "Activate",
        description: "Posts, Q&A, and review workflows that stay consistent.",
      },
      {
        step: "04",
        title: "Grow",
        description: "Monthly improvements guided by performance insights.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Setup",
        price: "from £299",
        note: "One-time optimisation",
      },
      {
        name: "Managed",
        price: "from £199/mo",
        note: "Ongoing local growth",
      },
      {
        name: "Multi-location",
        price: "Custom",
        note: "Per-location pricing",
      },
    ],
    faqs: [
      {
        question: "Is Google My Business the same as Google Business Profile?",
        answer:
          "Yes — Google rebranded Google My Business to Google Business Profile. The optimisation principles are the same.",
      },
      {
        question: "Can you recover a suspended profile?",
        answer:
          "We can help with reinstatement guidance and compliance fixes, though outcomes depend on Google’s review process.",
      },
      {
        question: "Do I need a website as well?",
        answer:
          "A strong website improves trust and conversion, but profile optimisation still delivers value on its own for local discovery.",
      },
    ],
    relatedSlugs: ["seo-services", "website-design", "social-media-marketing"],
  },
  {
    slug: "card-payments",
    title: "Card Payment Integration",
    shortTitle: "Card Payments",
    primaryKeyword: "card payment integration UK",
    metaTitle: "Card Payment Integration UK | Zydev",
    metaDescription:
      "Secure card payment integration for UK websites — Stripe, PayPal, and checkout flows built for conversion, compliance, and peace of mind.",
    intro:
      "Need reliable card payment integration UK customers trust at checkout? Zydev connects Stripe, PayPal, and other gateways to your site with secure flows, clear UX, and fewer abandoned carts.",
    summary: "Secure checkout experiences that customers finish — and trust.",
    icon: "card",
    image: "/images/card-payments.jpg",
    imageAlt:
      "Person entering card details on a laptop to complete a secure online payment",
    benefits: [
      {
        title: "Gateway setup",
        description:
          "Stripe, PayPal, and provider configuration tailored to your offer.",
      },
      {
        title: "Conversion-focused checkout",
        description:
          "Fewer steps, clearer trust signals, and mobile-optimised payment UX.",
      },
      {
        title: "Security best practice",
        description:
          "PCI-aware integrations using hosted fields and secure redirects.",
      },
      {
        title: "Subscriptions & invoicing",
        description:
          "Recurring billing and payment links for services and retainers.",
      },
      {
        title: "Error handling",
        description:
          "Helpful failure states and retries that reduce lost sales.",
      },
      {
        title: "Reporting hooks",
        description:
          "Connect payments to your CRM, email, or accounting workflows.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope",
        description: "Define products, currencies, and payment scenarios.",
      },
      {
        step: "02",
        title: "Integrate",
        description: "Implement gateway APIs and test mode end-to-end.",
      },
      {
        step: "03",
        title: "Harden",
        description: "Security checks, webhooks, and failure handling.",
      },
      {
        step: "04",
        title: "Go live",
        description: "Launch with monitoring and handover documentation.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Checkout",
        price: "from £695",
        note: "Single gateway setup",
      },
      {
        name: "Commerce",
        price: "from £1,495",
        note: "Cart + products",
      },
      {
        name: "Custom",
        price: "Quote",
        note: "Subscriptions & CRM sync",
      },
    ],
    faqs: [
      {
        question: "Which payment providers do you support?",
        answer:
          "Most commonly Stripe and PayPal. We can also integrate other UK-friendly gateways based on your industry needs.",
      },
      {
        question: "Are you PCI compliant?",
        answer:
          "We design integrations that keep card data off your servers using hosted checkout components wherever possible.",
      },
      {
        question: "Can you add payments to my existing site?",
        answer:
          "Yes — we can integrate into many existing stacks, or recommend a rebuild if the current site can’t support secure checkout well.",
      },
    ],
    relatedSlugs: ["website-design", "seo-services", "social-media-marketing"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Management",
    shortTitle: "Social Media",
    primaryKeyword: "social media management UK",
    metaTitle: "Social Media Management UK | Zydev",
    metaDescription:
      "Social media management for UK brands — content strategy, scheduling, community engagement, and campaigns that support real business goals.",
    intro:
      "Zydev provides social media management UK businesses use to stay consistent without hiring a full in-house team. We plan, create, and publish content that builds trust and supports SEO and paid campaigns.",
    summary: "Consistent content and community care that supports growth.",
    icon: "share",
    image: "/images/social-media.jpg",
    imageAlt:
      "Smartphone home screen showing social media apps used for marketing",
    benefits: [
      {
        title: "Content calendars",
        description:
          "Planned themes aligned to offers, seasons, and search demand.",
      },
      {
        title: "Brand-consistent creatives",
        description:
          "Visuals and copy that feel like you — not generic templates.",
      },
      {
        title: "Community management",
        description:
          "Timely replies and engagement that protect reputation.",
      },
      {
        title: "Campaign support",
        description:
          "Launches, promotions, and retargeting-friendly creative packages.",
      },
      {
        title: "Platform focus",
        description:
          "Instagram, Facebook, LinkedIn, and TikTok based on where your audience is.",
      },
      {
        title: "Performance reviews",
        description:
          "Monthly insights so you know what’s working and what to cut.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Position",
        description: "Clarify voice, audience, and content pillars.",
      },
      {
        step: "02",
        title: "Plan",
        description: "Build a calendar tied to commercial moments.",
      },
      {
        step: "03",
        title: "Publish",
        description: "Create, schedule, and engage across channels.",
      },
      {
        step: "04",
        title: "Optimise",
        description: "Double down on formats that drive results.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Essential",
        price: "from £449/mo",
        note: "2 platforms",
      },
      {
        name: "Growth",
        price: "from £749/mo",
        note: "3–4 platforms + reporting",
      },
      {
        name: "Full-service",
        price: "Custom",
        note: "Ads + content studio",
      },
    ],
    faqs: [
      {
        question: "How many posts will we get each month?",
        answer:
          "Packages typically include 8–16 posts per platform depending on tier, plus stories/reels where relevant.",
      },
      {
        question: "Do you run paid social ads?",
        answer:
          "Yes — ad management can be added to growth and full-service packages.",
      },
      {
        question: "Can social support our SEO?",
        answer:
          "Social won’t replace SEO, but consistent branded content and traffic signals support overall digital visibility.",
      },
    ],
    relatedSlugs: ["seo-services", "website-design", "google-my-business"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return services.filter((service) => slugs.includes(service.slug));
}
