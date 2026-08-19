"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectType = {
  id: string;
  name: string;
  baseWeeks: number;
  baseCost: number;
  icon: string;
  description: string;
};

const PROJECT_TYPES: ProjectType[] = [
  {
    id: "saas",
    name: "Custom SaaS Platform",
    baseWeeks: 8,
    baseCost: 15000,
    icon: "💻",
    description: "Multi-tenant web applications, billing, user access & API engine.",
  },
  {
    id: "ai",
    name: "AI Solutions & Agents",
    baseWeeks: 6,
    baseCost: 12000,
    icon: "🤖",
    description: "Custom AI agents, LLM integrations, automated RAG & smart workflows.",
  },
  {
    id: "enterprise",
    name: "Enterprise System / ERP",
    baseWeeks: 10,
    baseCost: 20000,
    icon: "🏢",
    description: "Internal operations platforms, custom CRM, portals & data pipelines.",
  },
  {
    id: "mobile",
    name: "Mobile Application",
    baseWeeks: 8,
    baseCost: 14000,
    icon: "📱",
    description: "Cross-platform iOS & Android mobile apps with real-time sync.",
  },
];

const SCOPES = [
  { id: "mvp", name: "Core MVP", multiplier: 1, label: "Core features to launch fast" },
  { id: "growth", name: "Growth & Scale", multiplier: 1.4, label: "Advanced features & optimizations" },
  { id: "enterprise", name: "Full Enterprise", multiplier: 1.9, label: "Complete ecosystem & SLA support" },
];

const ADDONS = [
  { id: "ux", name: "Product UX/UI Design", price: 3500, weeks: 2 },
  { id: "integrations", name: "3rd Party API Integrations", price: 2500, weeks: 1 },
  { id: "analytics", name: "Custom Analytics & BI", price: 3000, weeks: 1.5 },
  { id: "devops", name: "CI/CD & Cloud Infrastructure", price: 2000, weeks: 1 },
];

export function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<string>("saas");
  const [selectedScope, setSelectedScope] = useState<string>("mvp");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["ux"]);

  const currentType = useMemo(
    () => PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0],
    [selectedType]
  );

  const currentScope = useMemo(
    () => SCOPES.find((s) => s.id === selectedScope) || SCOPES[0],
    [selectedScope]
  );

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    let cost = currentType.baseCost * currentScope.multiplier;
    let weeks = currentType.baseWeeks * (currentScope.multiplier * 0.85);

    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) {
        cost += addon.price;
        weeks += addon.weeks;
      }
    });

    return {
      estimatedCost: Math.round(cost),
      estimatedWeeks: Math.round(weeks),
    };
  }, [currentType, currentScope, selectedAddons]);

  return (
    <section aria-labelledby="estimator-heading" className="section-pad bg-canvas border-t border-ink/8">
      <Container>
        <SectionHeading
          id="estimator-heading"
          eyebrow="Interactive Calculator"
          title="Estimate your project timeline & scope"
          description="Select your project requirements below to get instant scope guidance and delivery estimates."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Controls Column */}
          <div className="space-y-8 lg:col-span-7">
            {/* Step 1: Select Type */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-teal block mb-3">
                1. Project Type
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                      selectedType === type.id
                        ? "border-coral bg-white shadow-lift ring-2 ring-coral/15"
                        : "border-ink/10 bg-white/60 hover:bg-white hover:border-ink/20"
                    }`}
                  >
                    <span className="text-2xl mb-1">{type.icon}</span>
                    <span className="font-display font-semibold text-ink text-base">
                      {type.name}
                    </span>
                    <span className="text-xs text-slate mt-1 leading-relaxed">
                      {type.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Scope */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-teal block mb-3">
                2. Project Scale
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {SCOPES.map((scope) => (
                  <button
                    key={scope.id}
                    type="button"
                    onClick={() => setSelectedScope(scope.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedScope === scope.id
                        ? "border-coral bg-white shadow-soft ring-2 ring-coral/15"
                        : "border-ink/10 bg-white/60 hover:bg-white"
                    }`}
                  >
                    <span className="block font-semibold text-ink text-sm">
                      {scope.name}
                    </span>
                    <span className="block text-xs text-slate mt-0.5">
                      {scope.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-teal block mb-3">
                3. Optional Capabilities
              </label>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {ADDONS.map((addon) => {
                  const active = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-lg border text-sm transition-all ${
                        active
                          ? "border-teal bg-teal-soft/20 font-medium text-ink"
                          : "border-ink/10 bg-white/60 text-slate hover:bg-white"
                      }`}
                    >
                      <span>{addon.name}</span>
                      <span
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                          active ? "bg-teal text-white" : "bg-ink/10 text-slate"
                        }`}
                      >
                        {active ? "✓" : "+"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Card Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-ink/12 bg-ink p-6 text-white shadow-2xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-soft">
                  Estimated Summary
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-mono text-white/80">
                  Agile Sprint Delivery
                </span>
              </div>

              <div className="my-6 space-y-4">
                <div>
                  <span className="text-xs text-white/60 block">Project Type</span>
                  <span className="font-display text-lg font-semibold text-white">
                    {currentType.name} ({currentScope.name})
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 rounded-xl bg-white/5 p-4 border border-white/10">
                  <div>
                    <span className="text-xs text-white/60 block">Estimated Time</span>
                    <span className="font-display text-2xl font-bold text-teal-soft">
                      ~{calculation.estimatedWeeks} Weeks
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-white/60 block">Est. Budget Range</span>
                    <span className="font-display text-2xl font-bold text-white">
                      £{calculation.estimatedCost.toLocaleString()}+
                    </span>
                  </div>
                </div>

                <div className="text-xs text-white/70 leading-relaxed">
                  Includes full architecture, weekly demo cadence, CI/CD pipeline, performance audit, and dedicated delivery lead.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/contact?type=${encodeURIComponent(currentType.name)}&weeks=${calculation.estimatedWeeks}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-coral px-5 py-3.5 text-sm font-semibold text-white shadow-cta transition hover:bg-coral-dark hover:scale-[1.02]"
                >
                  <span>Book Strategy Sprint for this Estimate</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <p className="mt-3 text-center text-[11px] text-white/50">
                  No obligation. We will review your exact requirements during discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
