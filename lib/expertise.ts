export type ExpertiseItem = {
  name: string;
  outcome: string;
};

export type ExpertiseCategory = {
  id: string;
  title: string;
  summary: string;
  businessOutcome: string;
  items: ExpertiseItem[];
};

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    summary:
      "Interfaces that teams adopt quickly and customers trust under real workload.",
    businessOutcome:
      "Faster time-to-value, fewer training bottlenecks, and product experiences that convert without operational friction.",
    items: [
      {
        name: "React",
        outcome:
          "Component systems that keep complex UIs maintainable as products grow.",
      },
      {
        name: "Next.js",
        outcome:
          "Fast, SEO-ready web apps and portals with production-grade routing and rendering.",
      },
      {
        name: "TypeScript",
        outcome:
          "Fewer production defects and safer refactors across multi-team codebases.",
      },
      {
        name: "Tailwind CSS",
        outcome:
          "Consistent design systems shipped faster without stylesheet debt.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    summary:
      "APIs and services that encode business rules reliably — not fragile scripts.",
    businessOutcome:
      "Stable integrations, clearer ownership boundaries, and backends that support audits, roles, and scale.",
    items: [
      {
        name: "Node.js",
        outcome:
          "High-throughput services for portals, workflows, and real-time product features.",
      },
      {
        name: "Express",
        outcome:
          "Lean APIs for MVPs and focused services when speed-to-market matters.",
      },
      {
        name: "NestJS",
        outcome:
          "Structured enterprise backends with modules, guards, and long-term maintainability.",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    summary:
      "Data models chosen for integrity, reporting needs, and operational reality.",
    businessOutcome:
      "Trustworthy records, safer migrations, and reporting leadership can act on.",
    items: [
      {
        name: "PostgreSQL",
        outcome:
          "Relational integrity for finance, permissions, and mission-critical workflows.",
      },
      {
        name: "MongoDB",
        outcome:
          "Flexible document storage when product schemas evolve quickly.",
      },
      {
        name: "Supabase",
        outcome:
          "Faster delivery of authenticated apps with Postgres-backed foundations.",
      },
      {
        name: "Firebase",
        outcome:
          "Rapid mobile and realtime experiences when time-to-pilot is critical.",
      },
      {
        name: "Prisma",
        outcome:
          "Typed data access that reduces integration bugs between app and database.",
      },
      {
        name: "Neon",
        outcome:
          "Serverless Postgres for modern SaaS workloads with simpler operations.",
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    summary:
      "Connected systems that remove manual handoffs across sales, support, and ops.",
    businessOutcome:
      "Lower cost-to-serve, cleaner customer journeys, and fewer spreadsheet workarounds.",
    items: [
      {
        name: "Stripe",
        outcome:
          "Reliable billing and checkout flows that protect revenue collection.",
      },
      {
        name: "Resend",
        outcome:
          "Transactional email that stakeholders and customers actually receive.",
      },
      {
        name: "SMTP",
        outcome:
          "Controlled outbound messaging for organisations with existing mail infrastructure.",
      },
      {
        name: "Twilio",
        outcome:
          "SMS and voice touchpoints for alerts, verification, and customer support.",
      },
      {
        name: "Google Maps",
        outcome:
          "Location-aware booking, logistics, and local service experiences.",
      },
      {
        name: "OpenAI",
        outcome:
          "Assistants and automation grounded in approved business knowledge.",
      },
      {
        name: "Anthropic",
        outcome:
          "High-quality reasoning agents for support, research, and internal ops.",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & delivery",
    summary:
      "Infrastructure and release discipline that keep products stable after launch.",
    businessOutcome:
      "Predictable deployments, better uptime posture, and platforms your team can operate.",
    items: [
      {
        name: "AWS",
        outcome:
          "Scalable cloud architecture for regulated and high-growth workloads.",
      },
      {
        name: "Docker",
        outcome:
          "Consistent environments from development through production release.",
      },
      {
        name: "Vercel",
        outcome:
          "Fast frontend delivery pipelines for modern web products and marketing systems.",
      },
    ],
  },
];

export const expertisePrinciples = [
  {
    title: "Technology serves the outcome",
    description:
      "We select stacks based on risk, speed, and total cost of ownership — not fashion.",
  },
  {
    title: "Build for the people who run it",
    description:
      "Architecture, docs, and handover are part of delivery so your team can own the system.",
  },
  {
    title: "Integrate before you invent",
    description:
      "Where Stripe, Twilio, or an LLM provider solves the problem cleanly, we connect it — and only custom-build what creates advantage.",
  },
];
