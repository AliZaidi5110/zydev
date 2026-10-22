"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";

const TURNOVER_TIERS = [
  {
    turnover: "£5,000",
    label: "Small Shop / Cafe",
    standardFee: "£1,470",
    zevriyonFee: "£570",
    annualSaving: "£900",
  },
  {
    turnover: "£15,000",
    label: "High-Street Retail / Salon",
    standardFee: "£3,570",
    zevriyonFee: "£1,530",
    annualSaving: "£2,040",
  },
  {
    turnover: "£35,000",
    label: "Busy Restaurant / Pub",
    standardFee: "£7,770",
    zevriyonFee: "£3,450",
    annualSaving: "£4,320",
  },
  {
    turnover: "£75,000+",
    label: "Multi-Lane / High-Volume",
    standardFee: "£16,170",
    zevriyonFee: "£7,350",
    annualSaving: "£8,820",
  },
];

const POS_CARDS = [
  {
    id: "handheld",
    title: "Smart Handheld Card Machines",
    category: "Hospitality & Mobile",
    description:
      "Ultra-fast 0.5s contactless payments with 4G SIM + Wi-Fi. Perfect for tableside billing, cafes, bars, and mobile service merchants.",
    image: "/images/pos/pos-contactless-tap.png",
    imageAlt: "Contactless phone payment on smart Android POS terminal",
    features: [
      "Apple Pay, Google Pay & Contactless",
      "0.5-second instant authorisation",
      "Integrated 4G roaming SIM + dual Wi-Fi",
      "Tip-on-screen & digital SMS receipts",
    ],
    pillBadge: "0.5s Fast Tap",
    accentColor: "from-teal/20 to-teal/5",
    borderGlow: "group-hover:border-teal-soft/40",
  },
  {
    id: "retail",
    title: "Retail Smart Touchscreen EPOS",
    category: "High Street & Countertop",
    description:
      "Modern Android POS terminal featuring vibrant interactive touch displays, integrated barcode lookup, inventory sync, and tax calculation.",
    image: "/images/pos/pos-retail-terminal.jpg",
    imageAlt: "Retail store clerk and customer using smart Android POS terminal",
    features: [
      "Vibrant high-res touchscreen interface",
      "Multi-staff PIN logins & permissions",
      "Tax refund & automated VAT receipts",
      "Real-time product catalog & stock sync",
    ],
    pillBadge: "Retail Certified",
    accentColor: "from-coral/20 to-coral/5",
    borderGlow: "group-hover:border-coral/40",
  },
  {
    id: "zero-rental",
    title: "Shift4 Partner & Zero Rental Deals",
    category: "Merchant Cost Savings",
    description:
      "Official partner offering £0/month card terminal hardware packages with transparent interchange-plus transaction fees and next-day settlement.",
    image: "/images/pos/pos-shift4-table.jpg",
    imageAlt: "Smart card machine and Shift4 Partner flyer on dining table",
    features: [
      "£0 monthly terminal rental options",
      "No hidden compliance fees or contracts",
      "Next-day payouts into your UK bank",
      "Free statement analysis & rate audit",
    ],
    pillBadge: "£0 Monthly Rental*",
    accentColor: "from-amber-500/20 to-amber-500/5",
    borderGlow: "group-hover:border-amber-400/40",
  },
  {
    id: "food-truck",
    title: "Quick-Service & Food Venues",
    category: "Fast Food & Pop-ups",
    description:
      "Engineered for high-volume rush hours. Rugged, drop-tested hardware with offline payment caching so trade never halts during signal drops.",
    image: "/images/pos/pos-hospitality-foodtruck.jpg",
    imageAlt: "Food truck chef serving customer with fast POS counter system",
    features: [
      "High-speed transaction throughput",
      "Offline payment store-and-forward",
      "Split bills & item modifier support",
      "Automatic end-of-day Z-reports",
    ],
    pillBadge: "Rush-Hour Ready",
    accentColor: "from-sky-500/20 to-sky-500/5",
    borderGlow: "group-hover:border-sky-400/40",
  },
];

export function PosShowcaseSection() {
  const [selectedTier, setSelectedTier] = useState(1);
  const tier = TURNOVER_TIERS[selectedTier];

  return (
    <section
      id="pos-solutions"
      aria-labelledby="pos-showcase-heading"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      {/* Background radial atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,210,180,0.12),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(232,90,58,0.1),_transparent_45%)]"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <FadeIn className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-soft/30 bg-teal-soft/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-teal-soft backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-teal-soft animate-ping inline-block" />
              UK POS & Payment Telemarketing
            </div>
            <h2
              id="pos-showcase-heading"
              className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]"
            >
              Next-Gen POS Systems & Card Machines for UK Merchants
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              We sell and deploy high-performance Android POS terminals,
              contactless card machines, and EPOS software across the UK — backed
              by dedicated B2B telemarketing teams acquiring merchants every day.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
              <span className="text-teal-soft">✓</span> £0 Monthly Rental Options
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
              <span className="text-teal-soft">✓</span> Shift4 Authorised Partner
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
              <span className="text-teal-soft">✓</span> Next-Day UK Payouts
            </span>
          </FadeIn>
        </div>

        {/* Bento Grid Visual Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POS_CARDS.map((card, index) => (
            <FadeIn
              key={card.id}
              delay={index * 0.05}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                />

                {/* Floating status pill */}
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/25 bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md">
                  {card.pillBadge}
                </span>

                <span className="absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-wider text-teal-soft">
                  {card.category}
                </span>
              </div>

              {/* Card Content Area */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  {card.description}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4 text-xs text-white/75">
                  {card.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5">
                      <span className="mt-0.5 text-teal-soft">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Interactive UK Merchant Rate Savings Calculator */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.1] via-white/[0.04] to-black/60 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Context & Turnover Selector */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-soft">
                Interactive Merchant Savings Calculator
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                See How Much Your Business Saves by Switching POS
              </h3>
              <p className="mt-2 text-sm text-white/70">
                UK merchants typically pay 1.75% + terminal rental fees. With
                Zevriyon's card machine deals, you unlock low interchange rates
                and £0/month terminal rental options.
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Select your estimated monthly card turnover:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {TURNOVER_TIERS.map((item, idx) => (
                    <button
                      key={item.turnover}
                      type="button"
                      onClick={() => setSelectedTier(idx)}
                      className={`flex flex-col items-center justify-center rounded-xl border p-3 text-center transition ${
                        selectedTier === idx
                          ? "border-teal-soft bg-teal-soft/15 text-white shadow-cta"
                          : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="font-display text-base font-bold sm:text-lg">
                        {item.turnover}
                      </span>
                      <span className="text-[10px] text-white/50">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Comparative Metrics */}
            <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-black/60 p-6 text-center backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Estimated Annual Saving
              </p>
              <div className="mt-2 flex items-baseline justify-center gap-1 font-display text-4xl font-extrabold text-teal-soft sm:text-5xl">
                <span>{tier.annualSaving}</span>
                <span className="text-sm font-normal text-white/50">/year</span>
              </div>
              <p className="mt-1 text-xs text-white/50">
                Based on {tier.turnover}/mo card transactions
              </p>

              <div className="mt-6 space-y-2.5 border-t border-white/10 pt-4 text-xs">
                <div className="flex justify-between text-white/70">
                  <span>Typical Legacy Provider Cost:</span>
                  <span className="line-through text-white/40">{tier.standardFee}/yr</span>
                </div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Zevriyon Partner Package:</span>
                  <span className="text-teal-soft">{tier.zevriyonFee}/yr</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white shadow-cta transition hover:bg-coral-dark"
                >
                  Get Your Free POS Rate Review →
                </Link>
                <Link
                  href="/services/telemarketing-pos"
                  className="text-xs text-white/60 hover:text-white underline"
                >
                  Explore B2B Telemarketing & Campaigns
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
