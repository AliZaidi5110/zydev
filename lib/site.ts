export const siteConfig = {
  name: "Zydev",
  legalName: "Zydev Ltd",
  tagline: "Digital growth for UK businesses",
  description:
    "Zydev is a UK digital services agency offering website design & development, SEO, Google My Business optimisation, card payment integration, and social media management.",
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
  areaServed: "GB",
  social: {
    facebook: "https://www.facebook.com/zydev",
    instagram: "https://www.instagram.com/zydev",
    linkedin: "https://www.linkedin.com/company/zydev",
  },
  cta: {
    primary: "Get a Free Quote",
    secondary: "Book a Free Consultation",
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
        label: "Website Design & Development",
        href: "/services/website-design",
        description: "Fast, conversion-focused websites built for growth.",
      },
      {
        label: "SEO Services",
        href: "/services/seo-services",
        description: "Rank higher and capture demand that converts.",
      },
      {
        label: "Google My Business",
        href: "/services/google-my-business",
        description: "Own the local pack and get found nearby.",
      },
      {
        label: "Card Payments",
        href: "/services/card-payments",
        description: "Secure checkout and payment integrations.",
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
        description: "Consistent content that builds trust and leads.",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Website Design", href: "/services/website-design" },
    { label: "SEO Services", href: "/services/seo-services" },
    { label: "Google My Business", href: "/services/google-my-business" },
    { label: "Card Payments", href: "/services/card-payments" },
    { label: "Social Media", href: "/services/social-media-marketing" },
  ],
  company: [
    { label: "About", href: "/about" },
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
