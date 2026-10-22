"use client";

import { useState } from "react";

type DemoScenario = {
  id: string;
  title: string;
  badge: string;
  prompt: string;
  output: string;
  metrics: { label: string; value: string }[];
};

const SCENARIOS: DemoScenario[] = [
  {
    id: "rag",
    title: "Enterprise Knowledge & RAG Search",
    badge: "Vector AI Search",
    prompt: "Extract key compliance terms and SLA commitments from 450+ client contracts.",
    output: "Analyzed 452 PDF documents in 1.4 seconds. Found 12 contracts with custom 99.99% SLA penalty clauses and 3 expiring compliance audit deadlines in Q4.",
    metrics: [
      { label: "Search Speed", value: "1.4s" },
      { label: "Accuracy", value: "99.4%" },
      { label: "Hours Saved", value: "120 hrs/mo" },
    ],
  },
  {
    id: "qualifier",
    title: "AI Lead & CRM Qualifier",
    badge: "Autonomous Agent",
    prompt: "Qualify incoming inbound leads, verify LinkedIn headcount, and assign high-value deals to Account Executives.",
    output: "Lead #4910 (Enterprise SaaS, 250+ employees) qualified with 94/100 score. Automatically enriched CRM record and scheduled discovery call on Executive calendar.",
    metrics: [
      { label: "Response Time", value: "< 30 sec" },
      { label: "Conversion Lift", value: "+38%" },
      { label: "Auto-Enriched", value: "100%" },
    ],
  },
  {
    id: "support",
    title: "24/7 AI Customer Copilot",
    badge: "Multi-Modal Agent",
    prompt: "Resolve tier-1 customer support tickets directly via API integration with Zendesk.",
    output: "Resolved billing query for User #8812, processed pro-rated refund via Stripe API, and updated subscription status without human intervention.",
    metrics: [
      { label: "Resolution Rate", value: "76%" },
      { label: "CSAT Score", value: "4.9/5" },
      { label: "Cost Per Ticket", value: "-82%" },
    ],
  },
];

export function AiPlaygroundDemo() {
  const [activeTab, setActiveTab] = useState<string>("rag");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  const handleTabChange = (id: string) => {
    setIsSimulating(true);
    setActiveTab(id);
    setTimeout(() => {
      setIsSimulating(false);
    }, 400);
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-5 sm:p-8 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-soft">
            Interactive AI Playground
          </span>
          <h3 className="font-display text-xl font-bold text-white mt-1">
            See Zevriyon AI Agents in Action
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabChange(item.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                activeTab === item.id
                  ? "bg-coral text-white shadow-cta"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {item.title.split(" ")[0]} {item.badge.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-12 items-center">
        {/* Terminal Input / Output */}
        <div className="md:col-span-7 rounded-xl border border-white/10 bg-black/80 p-4 sm:p-5 font-mono text-xs text-white/90">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[10px] text-white/40 uppercase tracking-widest">
              {scenario.badge}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-teal-soft font-semibold">user@zevriyon-agent ~$</span>
              <p className="mt-1 text-white/80 bg-white/5 p-2.5 rounded border border-white/5">
                "{scenario.prompt}"
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-coral">
                <span className="inline-block h-2 w-2 rounded-full bg-coral animate-pulse" />
                <span className="font-semibold text-[11px] uppercase tracking-wider">
                  {isSimulating ? "Processing Embeddings..." : "Agent Response Ready"}
                </span>
              </div>
              <p
                className={`mt-1.5 leading-relaxed transition-opacity duration-300 ${
                  isSimulating ? "opacity-30" : "opacity-100 text-teal-soft"
                }`}
              >
                {scenario.output}
              </p>
            </div>
          </div>
        </div>

        {/* Live Impact Metrics */}
        <div className="md:col-span-5 space-y-3">
          <span className="text-xs uppercase tracking-wider text-white/50 block font-semibold">
            Measured Enterprise Impact
          </span>
          {scenario.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:bg-white/10"
            >
              <span className="text-xs text-white/80">{metric.label}</span>
              <span className="font-display text-lg font-bold text-teal-soft">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
