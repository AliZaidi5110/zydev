export type AiSolution = {
  slug: string;
  title: string;
  summary: string;
  useCase: string;
  outcomes: string[];
};

export const aiSolutions: AiSolution[] = [
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    summary:
      "Website and in-app chatbots that answer product, booking, and policy questions with clear escalation to humans.",
    useCase:
      "A property platform uses a chatbot to handle tender FAQ and onboarding questions so agents and contractors get instant answers outside office hours.",
    outcomes: [
      "24/7 first-response coverage",
      "Fewer repetitive support tickets",
      "Clean handoff to human agents",
    ],
  },
  {
    slug: "ai-assistants",
    title: "AI Assistants",
    summary:
      "Internal assistants that help staff draft replies, summarise records, and prepare next actions inside existing workflows.",
    useCase:
      "A clinic operations team uses an assistant to draft follow-up messages and summarise consultation notes into structured CRM fields.",
    outcomes: [
      "Faster admin cycles",
      "More consistent customer communication",
      "Less copy-paste between tools",
    ],
  },
  {
    slug: "ai-voice-agents",
    title: "AI Voice Agents",
    summary:
      "Voice agents that qualify inbound calls, capture intent, and route high-value conversations to the right person.",
    useCase:
      "A salon group uses a voice agent to take after-hours booking requests and sync confirmed details into the appointment system.",
    outcomes: [
      "Missed-call recovery",
      "Structured booking intake",
      "Lower call-centre load",
    ],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    summary:
      "Automations that classify, route, and enrich work items across CRM, email, and internal tools.",
    useCase:
      "A business consultancy auto-classifies inbound leads by service type and prepares a briefing pack for the right specialist.",
    outcomes: [
      "Shorter lead response time",
      "Fewer manual triage steps",
      "Better specialist matching",
    ],
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support",
    summary:
      "Support systems that resolve routine issues, surface account context, and escalate with full conversation history.",
    useCase:
      "An e-commerce brand deflects order-status and returns questions while escalating payment disputes with full customer context.",
    outcomes: [
      "Higher self-serve resolution",
      "Better agent productivity",
      "Consistent policy answers",
    ],
  },
  {
    slug: "ai-knowledge-base",
    title: "AI Knowledge Base",
    summary:
      "Living knowledge systems that keep policies, SOPs, and product docs searchable and answerable for staff.",
    useCase:
      "A multi-site operations team replaces scattered PDFs with a governed knowledge base staff can query in natural language.",
    outcomes: [
      "Faster onboarding",
      "Fewer tribal-knowledge gaps",
      "Version-controlled answers",
    ],
  },
  {
    slug: "rag-systems",
    title: "RAG Systems",
    summary:
      "Retrieval-augmented generation grounded in your approved documents — not open-web guesswork.",
    useCase:
      "A regulated services firm answers staff questions from approved contracts, playbooks, and compliance packs with source citations.",
    outcomes: [
      "Grounded responses",
      "Traceable source references",
      "Lower hallucination risk",
    ],
  },
  {
    slug: "openai-integration",
    title: "OpenAI Integration",
    summary:
      "Production OpenAI integrations with tool use, evaluation, and monitoring wired into your product and ops stack.",
    useCase:
      "A SaaS product embeds OpenAI to generate draft reports from structured operational data with human review before publish.",
    outcomes: [
      "Faster content and report drafting",
      "Controlled model usage",
      "Reviewable generation workflows",
    ],
  },
  {
    slug: "anthropic-integration",
    title: "Anthropic Integration",
    summary:
      "Anthropic-powered assistants for long-context analysis, careful reasoning, and internal decision support.",
    useCase:
      "Leadership teams use Anthropic models to compare vendor proposals and summarise risk themes before award decisions.",
    outcomes: [
      "Better proposal comparison",
      "Clearer risk summaries",
      "Faster decision support",
    ],
  },
  {
    slug: "document-search",
    title: "Document Search",
    summary:
      "Search across contracts, manuals, and shared drives with filters your teams actually understand.",
    useCase:
      "Facilities managers find the right SLA clause or contractor certificate in seconds instead of digging through folders.",
    outcomes: [
      "Reduced document hunting time",
      "Higher compliance confidence",
      "Shared searchable archive",
    ],
  },
  {
    slug: "semantic-search",
    title: "Semantic Search",
    summary:
      "Meaning-based search so people find the right answer even when wording does not match exactly.",
    useCase:
      "Support teams find related tickets and knowledge articles by intent, not only keyword match.",
    outcomes: [
      "Higher search success rate",
      "Less duplicate investigation",
      "Faster issue resolution",
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    summary:
      "End-to-end automation programmes that combine AI, rules, and integrations to remove operational drag.",
    useCase:
      "A growth company automates quote follow-ups, onboarding checklists, and weekly KPI digests across CRM and email.",
    outcomes: [
      "Lower cost-to-serve",
      "More predictable operations",
      "Staff focus on high-value work",
    ],
  },
];

export const aiEngagementSteps = [
  {
    step: "01",
    title: "Select high-value use cases",
    description:
      "We prioritise workflows with clear volume, cost, or cycle-time impact — and safe automation boundaries.",
  },
  {
    step: "02",
    title: "Ground in your data",
    description:
      "Knowledge sources, permissions, evaluation criteria, and escalation paths are designed before launch.",
  },
  {
    step: "03",
    title: "Pilot with measurement",
    description:
      "A controlled release proves deflection, handling time, or conversion lift before wider rollout.",
  },
  {
    step: "04",
    title: "Scale and govern",
    description:
      "Monitoring, review loops, and ownership models keep AI systems reliable as coverage expands.",
  },
];
