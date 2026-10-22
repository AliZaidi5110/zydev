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
  icon:
    | "platform"
    | "ai"
    | "systems"
    | "mobile"
    | "cloud"
    | "strategy";
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
    slug: "custom-software",
    title: "Custom Software & Enterprise SaaS",
    shortTitle: "Custom Software",
    primaryKeyword: "custom enterprise software development",
    metaTitle: "Custom Software & Enterprise SaaS | Zevriyon Technologies",
    metaDescription:
      "Zevriyon Technologies designs and builds enterprise SaaS and custom business platforms — from marketplaces and booking systems to industry-specific software that improves revenue and operations.",
    intro:
      "When off-the-shelf tools create workarounds, revenue leaks, or operational risk, Zevriyon builds software around your business model. We deliver enterprise SaaS products and custom platforms that teams actually adopt — with clear ownership, measurable outcomes, and room to scale.",
    summary:
      "SaaS products and custom platforms engineered for growth, reliability, and adoption.",
    icon: "platform",
    image: "/images/service-panel-2.png",
    imageAlt: "Custom software and SaaS product interface mockup",
    benefits: [
      {
        title: "Software that matches the business",
        description:
          "We model workflows, roles, and commercial rules so the product removes friction instead of adding another tool to manage.",
      },
      {
        title: "Built for multi-stakeholder delivery",
        description:
          "Clear discovery, milestones, and stakeholder reviews keep product, operations, and leadership aligned.",
      },
      {
        title: "Scalable product foundations",
        description:
          "Architecture, permissions, and data models designed for growth — not a brittle MVP that needs rewriting in year two.",
      },
      {
        title: "Industry platforms",
        description:
          "Healthcare, property, recruitment, marketplaces, booking, and internal business systems with domain-aware UX.",
      },
      {
        title: "Integration-ready by design",
        description:
          "APIs, webhooks, and third-party connections planned early so finance, CRM, and operations stay connected.",
      },
      {
        title: "Outcome-led roadmaps",
        description:
          "Every release maps to operational efficiency, revenue enablement, or risk reduction — not feature theatre.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "We clarify commercial goals, users, constraints, and success metrics before a single screen is designed.",
      },
      {
        step: "02",
        title: "Blueprint",
        description:
          "Information architecture, product scope, and delivery plan with phased releases your leadership can approve.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Iterative delivery with demos, quality gates, and production discipline so progress stays visible.",
      },
      {
        step: "04",
        title: "Launch & evolve",
        description:
          "Go-live support, training, and a backlog prioritised by business impact.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Discovery",
        price: "from £4,500",
        note: "Workshops, scope, and delivery blueprint",
      },
      {
        name: "MVP / Pilot",
        price: "from £25,000",
        note: "First production release for a defined use case",
      },
      {
        name: "Platform",
        price: "Custom SOW",
        note: "Multi-module SaaS or enterprise build",
      },
    ],
    faqs: [
      {
        question: "Do you build greenfield SaaS or modernise existing systems?",
        answer:
          "Both. We ship new products from discovery through launch, and we also rebuild or extend systems that have outgrown their original design.",
      },
      {
        question: "Can you work with our internal product and engineering teams?",
        answer:
          "Yes. We commonly embed alongside client teams, share ownership of the roadmap, and hand over cleanly when you want to run the product in-house.",
      },
      {
        question: "How do you keep enterprise projects on track?",
        answer:
          "Fixed discovery, phased releases, named decision-makers, and written acceptance criteria for each milestone.",
      },
    ],
    relatedSlugs: ["ai-solutions", "enterprise-systems", "cloud-devops"],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & Automation",
    shortTitle: "AI Solutions",
    primaryKeyword: "AI automation for enterprise",
    metaTitle: "AI Agents, Chatbots & Automation | Zevriyon Technologies",
    metaDescription:
      "Zevriyon Technologies builds AI chatbots, assistants, voice agents, workflow automation, and knowledge systems that cut cost-to-serve and accelerate decisions.",
    intro:
      "AI only creates value when it removes real operational load. Zevriyon designs assistants, chatbots, voice agents, and workflow automation that plug into your data and processes — so support, sales, and operations move faster with fewer handoffs.",
    summary:
      "Practical AI systems that reduce manual work and improve customer response.",
    icon: "ai",
    image: "/images/service-panel-3.png",
    imageAlt: "AI automation and digital systems visual",
    benefits: [
      {
        title: "Customer support that scales",
        description:
          "Chat and voice agents that resolve routine requests, escalate cleanly, and keep humans focused on high-value work.",
      },
      {
        title: "Workflow automation",
        description:
          "Replace repetitive ops chains with reliable automations across tools, approvals, and notifications.",
      },
      {
        title: "Knowledge that answers itself",
        description:
          "Document search and RAG systems so teams find accurate answers inside policies, SOPs, and product docs.",
      },
      {
        title: "Governed by design",
        description:
          "Clear boundaries, auditability, and human oversight where decisions matter.",
      },
      {
        title: "Integrated into the stack",
        description:
          "Connected to CRM, helpdesk, booking, and internal systems — not a disconnected demo chatbot.",
      },
      {
        title: "Measured business impact",
        description:
          "We define success as deflection rate, handling time, conversion lift, or cycle-time reduction.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Use-case selection",
        description:
          "Identify high-volume, high-cost workflows where AI can safely create value.",
      },
      {
        step: "02",
        title: "Data & guardrails",
        description:
          "Map sources, permissions, escalation paths, and evaluation criteria.",
      },
      {
        step: "03",
        title: "Pilot",
        description:
          "Ship a controlled release with monitoring and human review loops.",
      },
      {
        step: "04",
        title: "Scale",
        description:
          "Expand coverage, harden integrations, and train teams to operate the system.",
      },
    ],
    pricingSnapshot: [
      {
        name: "AI Opportunity Audit",
        price: "from £3,500",
        note: "Prioritised use cases and ROI hypotheses",
      },
      {
        name: "Pilot Agent",
        price: "from £12,000",
        note: "One production workflow with reporting",
      },
      {
        name: "Programme",
        price: "Custom SOW",
        note: "Multi-agent / multi-channel rollout",
      },
    ],
    faqs: [
      {
        question: "Will you force AI into every project?",
        answer:
          "No. We recommend AI where it reduces cost, risk, or cycle time. If a simpler automation or UX change is better, we say so.",
      },
      {
        question: "Can AI systems use our private documents securely?",
        answer:
          "Yes. We design retrieval and access controls around your data boundaries and deployment preferences.",
      },
      {
        question: "How do you avoid hallucinated answers in customer support?",
        answer:
          "Ground responses in approved knowledge, constrain tool use, escalate uncertainty, and review real conversations during pilots.",
      },
    ],
    relatedSlugs: ["custom-software", "enterprise-systems", "product-strategy"],
  },
  {
    slug: "enterprise-systems",
    title: "CRM, ERP, Portals & Dashboards",
    shortTitle: "Enterprise Systems",
    primaryKeyword: "custom CRM ERP dashboards",
    metaTitle: "CRM, ERP, Portals & Dashboards | Zevriyon Technologies",
    metaDescription:
      "Zevriyon Technologies builds CRM and ERP workflows, admin panels, customer and vendor portals, and executive dashboards that improve visibility and control.",
    intro:
      "Spreadsheets and bolted-on tools eventually break under growth. Zevriyon designs enterprise systems — CRM and ERP workflows, admin panels, customer portals, vendor portals, and dashboards — so leadership sees reality and teams execute with less friction.",
    summary:
      "Operational systems and portals that give teams control and leadership clarity.",
    icon: "systems",
    image: "/images/service-panel-1.png",
    imageAlt: "Enterprise dashboard and portal interface mockup",
    benefits: [
      {
        title: "Single source of operational truth",
        description:
          "Replace fragmented spreadsheets with roles, permissions, and workflows people trust.",
      },
      {
        title: "Customer & vendor portals",
        description:
          "Self-serve experiences that cut inbound tickets and improve partner collaboration.",
      },
      {
        title: "Executive dashboards",
        description:
          "KPIs and operational views that support decisions without waiting on monthly reports.",
      },
      {
        title: "Admin panels that reduce support load",
        description:
          "Internal tools designed for speed, audit trails, and safe bulk actions.",
      },
      {
        title: "CRM & ERP alignment",
        description:
          "Custom modules and integrations that fit your sales, fulfilment, and finance processes.",
      },
      {
        title: "Adoption as a delivery goal",
        description:
          "Training, migration, and UX designed so the system becomes how work gets done.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Process mapping",
        description:
          "Document current workflows, pain points, and compliance needs with operators — not just stakeholders.",
      },
      {
        step: "02",
        title: "System design",
        description:
          "Define entities, permissions, reporting, and migration approach before build.",
      },
      {
        step: "03",
        title: "Implement",
        description:
          "Deliver modules in priority order so value appears before the full programme finishes.",
      },
      {
        step: "04",
        title: "Operate",
        description:
          "Handover, training, and iteration based on real usage data.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Ops Assessment",
        price: "from £4,000",
        note: "Process map and system recommendation",
      },
      {
        name: "Core Module",
        price: "from £18,000",
        note: "First production workflow or portal",
      },
      {
        name: "Enterprise Suite",
        price: "Custom SOW",
        note: "Multi-module CRM/ERP/portal programme",
      },
    ],
    faqs: [
      {
        question: "Should we customise an existing CRM or build our own?",
        answer:
          "We help you decide. Sometimes configuration wins; sometimes a custom system is cheaper than fighting a platform that does not fit.",
      },
      {
        question: "Can you migrate historical data safely?",
        answer:
          "Yes. Migration planning, validation, and rollback paths are part of delivery for operational systems.",
      },
      {
        question: "Do you build reporting for non-technical leaders?",
        answer:
          "Yes. Dashboards are designed for the decisions they support, not raw database dumps.",
      },
    ],
    relatedSlugs: ["custom-software", "ai-solutions", "cloud-devops"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Applications",
    shortTitle: "Mobile Apps",
    primaryKeyword: "enterprise mobile app development",
    metaTitle: "Enterprise Mobile App Development | Zevriyon Technologies",
    metaDescription:
      "Zevriyon Technologies builds customer and workforce mobile apps that improve engagement, field operations, and revenue — with reliability and clear product ownership.",
    intro:
      "Mobile is often where customers buy and field teams deliver. Zevriyon designs and builds mobile applications that stay fast, secure, and maintainable — whether you need a customer product, booking experience, or internal operations app.",
    summary:
      "Customer and workforce apps designed for reliability and long-term ownership.",
    icon: "mobile",
    image: "/images/website-design-service.png",
    imageAlt: "Mobile application product experience",
    benefits: [
      {
        title: "Product thinking, not just screens",
        description:
          "We define journeys, retention loops, and operational requirements before pixels.",
      },
      {
        title: "Offline-aware field workflows",
        description:
          "Apps that support real-world conditions for teams who cannot rely on perfect connectivity.",
      },
      {
        title: "Secure by default",
        description:
          "Auth, session handling, and data access designed for enterprise expectations.",
      },
      {
        title: "Backend + app as one system",
        description:
          "APIs, admin tools, and notifications planned together so the product does not fracture.",
      },
      {
        title: "Store-ready delivery",
        description:
          "Release process, monitoring, and iteration plans that continue after launch day.",
      },
      {
        title: "Measurable adoption",
        description:
          "Analytics tied to activation, completion, and support load — not vanity downloads.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Product framing",
        description:
          "Clarify users, jobs-to-be-done, and commercial success metrics.",
      },
      {
        step: "02",
        title: "Experience design",
        description:
          "Flows and prototypes validated with stakeholders before engineering scale-up.",
      },
      {
        step: "03",
        title: "Build & harden",
        description:
          "Iterative releases with QA, performance, and security checks.",
      },
      {
        step: "04",
        title: "Launch & improve",
        description:
          "Store submission support, monitoring, and a prioritised improvement backlog.",
      },
    ],
    pricingSnapshot: [
      {
        name: "App Discovery",
        price: "from £4,500",
        note: "Scope, UX direction, and technical plan",
      },
      {
        name: "MVP App",
        price: "from £30,000",
        note: "First production release for core journeys",
      },
      {
        name: "Product Programme",
        price: "Custom SOW",
        note: "Multi-platform roadmap with ongoing delivery",
      },
    ],
    faqs: [
      {
        question: "Native, cross-platform, or progressive web app?",
        answer:
          "We recommend based on device needs, offline requirements, budget, and time-to-market — not a one-size preference.",
      },
      {
        question: "Can the app connect to our existing systems?",
        answer:
          "Yes. Integration planning is part of discovery so mobile does not become an island.",
      },
      {
        question: "Do you support post-launch maintenance?",
        answer:
          "Yes. We can run retainers for releases, monitoring, and continuous improvement.",
      },
    ],
    relatedSlugs: ["custom-software", "product-strategy", "cloud-devops"],
  },
  {
    slug: "cloud-devops",
    title: "APIs, Cloud Solutions & DevOps",
    shortTitle: "Cloud & DevOps",
    primaryKeyword: "cloud API DevOps consulting",
    metaTitle: "Cloud Solutions, APIs & DevOps | Zevriyon Technologies",
    metaDescription:
      "Zevriyon Technologies designs APIs, cloud architecture, and DevOps pipelines that improve reliability, security, and delivery speed for software products.",
    intro:
      "Great products fail when infrastructure and delivery are fragile. Zevriyon builds APIs, cloud foundations, and DevOps practices that keep releases predictable, environments secure, and systems observable as you scale.",
    summary:
      "Reliable cloud foundations, APIs, and delivery pipelines for serious products.",
    icon: "cloud",
    image: "/images/seo-services.png",
    imageAlt: "Cloud infrastructure and systems architecture visual",
    benefits: [
      {
        title: "APIs that other teams can trust",
        description:
          "Clear contracts, versioning, and documentation so partners and internal products integrate safely.",
      },
      {
        title: "Cloud architecture for growth",
        description:
          "Environments designed for cost control, resilience, and sensible scaling — not accidental complexity.",
      },
      {
        title: "Delivery without drama",
        description:
          "CI/CD, reviews, and release discipline that shorten lead time and reduce production surprises.",
      },
      {
        title: "Observability",
        description:
          "Logging, alerting, and health signals so issues are found before customers report them.",
      },
      {
        title: "Security posture",
        description:
          "Secrets handling, access control, and hardening practices built into the operating model.",
      },
      {
        title: "Platform enablement",
        description:
          "We leave your team with runbooks and ownership, not a black box only we can touch.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "Review architecture, delivery bottlenecks, risk, and cost drivers.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Target architecture and pipeline plan with clear migration steps.",
      },
      {
        step: "03",
        title: "Implement",
        description:
          "Ship infrastructure and API improvements in controlled increments.",
      },
      {
        step: "04",
        title: "Harden",
        description:
          "Monitoring, documentation, and operating practices for day-two ownership.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Platform Review",
        price: "from £3,500",
        note: "Architecture and delivery assessment",
      },
      {
        name: "Foundation Sprint",
        price: "from £10,000",
        note: "CI/CD, environments, or API hardening",
      },
      {
        name: "Cloud Programme",
        price: "Custom SOW",
        note: "Migration, platform, or multi-service delivery",
      },
    ],
    faqs: [
      {
        question: "Do you work with existing AWS or Vercel setups?",
        answer:
          "Yes. We improve what you have where it makes sense, and redesign where the current setup blocks scale or security.",
      },
      {
        question: "Can you support regulated environments?",
        answer:
          "We design for auditability, access control, and operational discipline. Specific compliance programmes are scoped per engagement.",
      },
      {
        question: "Will this slow product delivery?",
        answer:
          "Done well, DevOps and solid APIs speed delivery by reducing firefighting and integration rework.",
      },
    ],
    relatedSlugs: ["custom-software", "enterprise-systems", "mobile-apps"],
  },
  {
    slug: "product-strategy",
    title: "Product Strategy, UI/UX & Digital Transformation",
    shortTitle: "Product Strategy",
    primaryKeyword: "digital transformation product strategy",
    metaTitle: "Product Strategy, UI/UX & Transformation | Zevriyon Technologies",
    metaDescription:
      "Zevriyon Technologies helps leadership teams define product strategy, UX, and digital transformation programmes that turn ambition into shippable software.",
    intro:
      "Technology programmes fail when strategy, experience, and delivery stay disconnected. Zevriyon helps organisations decide what to build, design experiences people can use, and run transformation in phases that protect operations while creating momentum.",
    summary:
      "Strategy and UX that turn digital ambition into shippable, adopted products.",
    icon: "strategy",
    image: "/images/service-panel-4.png",
    imageAlt: "Product strategy and brand systems visual",
    benefits: [
      {
        title: "Clarity before commitment",
        description:
          "Prioritised roadmaps, opportunity sizing, and decision frameworks for leadership.",
      },
      {
        title: "UI/UX that drives adoption",
        description:
          "Interfaces designed around tasks, risk, and speed — not decorative redesigns.",
      },
      {
        title: "Transformation in phases",
        description:
          "Change programmes sequenced so operations keep running while capability improves.",
      },
      {
        title: "Stakeholder alignment",
        description:
          "Workshops and artefacts that get product, ops, IT, and commercial teams on one page.",
      },
      {
        title: "Design systems that scale",
        description:
          "Reusable patterns that keep multi-product experiences coherent and cheaper to extend.",
      },
      {
        title: "From strategy to engineering",
        description:
          "We do not stop at decks — recommendations connect directly to buildable scopes.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Align",
        description:
          "Capture goals, constraints, and success definitions with decision-makers.",
      },
      {
        step: "02",
        title: "Diagnose",
        description:
          "Map journeys, systems, and organisational friction that block outcomes.",
      },
      {
        step: "03",
        title: "Design",
        description:
          "Prototype experiences and define the transformation roadmap.",
      },
      {
        step: "04",
        title: "Activate",
        description:
          "Hand into delivery with clear ownership, KPIs, and first release scope.",
      },
    ],
    pricingSnapshot: [
      {
        name: "Strategy Sprint",
        price: "from £5,000",
        note: "Prioritised roadmap and recommendations",
      },
      {
        name: "UX Engagement",
        price: "from £8,000",
        note: "Research, flows, and validated prototypes",
      },
      {
        name: "Transformation Programme",
        price: "Custom SOW",
        note: "Multi-workstream change with delivery partners",
      },
    ],
    faqs: [
      {
        question: "Can you run strategy without also building the product?",
        answer:
          "Yes. Many clients engage us for strategy and UX first, then choose in-house or Zevriyon delivery for build.",
      },
      {
        question: "How do you handle resistance to change?",
        answer:
          "We involve operators early, show working prototypes, and sequence releases so teams feel progress without operational shock.",
      },
      {
        question: "Is this only for large enterprises?",
        answer:
          "No. Growth companies use the same discipline when the cost of a wrong build is high.",
      },
    ],
    relatedSlugs: ["custom-software", "ai-solutions", "mobile-apps"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return services.filter((service) => slugs.includes(service.slug));
}

export const serviceSlugs = services.map((service) => service.slug);
