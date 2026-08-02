export const siteConfig = {
  name: "Zydev",
  legalName: "Zydev Ltd",
  tagline: "Enterprise software that moves the business forward",
  description:
    "Zydev is an international software agency building enterprise SaaS, custom business platforms, AI automation, mobile apps, dashboards, and cloud systems that improve operations, revenue, and decision-making.",
  url: "https://www.zydev.co.uk",
  locale: "en_GB",
  phone: "+44 20 0000 0000",
  email: "hello@zydev.co.uk",
  address: {
    streetAddress: "1 Digital Way",
    addressLocality: "London",
    postalCode: "EC2A 4BX",
    addressCountry: "GB",
  },
  areaServed: "Worldwide",
  social: {
    facebook: "https://www.facebook.com/zydev",
    instagram: "https://www.instagram.com/zydev",
    linkedin: "https://www.linkedin.com/company/zydev",
  },
  cta: {
    primary: "Start a project",
    secondary: "Explore services",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Software & SaaS",
        href: "/services/custom-software",
        description: "Platforms built around how your business actually runs.",
      },
      {
        label: "AI Solutions",
        href: "/services/ai-solutions",
        description: "Agents, chatbots, and automation that reduce manual work.",
      },
      {
        label: "Enterprise Systems",
        href: "/services/enterprise-systems",
        description: "CRM, ERP, portals, dashboards, and internal tools.",
      },
      {
        label: "Mobile Applications",
        href: "/services/mobile-apps",
        description: "Customer and field apps that stay reliable at scale.",
      },
      {
        label: "Cloud, APIs & DevOps",
        href: "/services/cloud-devops",
        description: "Secure infrastructure, integrations, and delivery pipelines.",
      },
      {
        label: "Product & Digital Transformation",
        href: "/services/product-strategy",
        description: "Strategy, UX, and delivery programmes that de-risk change.",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Expertise", href: "/expertise" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Custom Software & SaaS", href: "/services/custom-software" },
    { label: "AI Solutions", href: "/services/ai-solutions" },
    { label: "Enterprise Systems", href: "/services/enterprise-systems" },
    { label: "Mobile Applications", href: "/services/mobile-apps" },
    { label: "Cloud, APIs & DevOps", href: "/services/cloud-devops" },
    { label: "Product Strategy", href: "/services/product-strategy" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
