"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const servicePanels = [
  {
    title: "Custom Software & Enterprise SaaS",
    href: "/services/custom-software",
    bg: "#ABF5FF",
    image: "/images/service-panel-1.png",
    imageAlt: "Custom software and SaaS product interface",
    summary:
      "Platforms designed around your commercial model — SaaS products, marketplaces, booking systems, and industry software.",
    features: [
      "Enterprise SaaS products",
      "Marketplace platforms",
      "Booking systems",
      "Healthcare & property platforms",
      "Recruitment platforms",
    ],
  },
  {
    title: "AI Solutions & Automation",
    href: "/ai-solutions",
    bg: "#c6cfff",
    image: "/images/service-panel-2.png",
    imageAlt: "AI automation and digital product systems",
    summary:
      "Agents, chatbots, and workflow automation that cut cost-to-serve and accelerate decisions.",
    features: [
      "AI chatbots & assistants",
      "Voice agents",
      "Workflow automation",
      "Knowledge & RAG systems",
      "Customer support AI",
    ],
  },
  {
    title: "CRM, ERP, Portals & Dashboards",
    href: "/services/enterprise-systems",
    bg: "#ffb8b0",
    image: "/images/service-panel-3.png",
    imageAlt: "Enterprise dashboards and operational systems",
    summary:
      "Operational systems that replace spreadsheet chaos with clear workflows, portals, and leadership visibility.",
    features: [
      "CRM & ERP workflows",
      "Admin panels",
      "Customer portals",
      "Vendor portals",
      "Executive dashboards",
    ],
  },
  {
    title: "B2B Telemarketing & UK POS Sales",
    href: "/services/telemarketing-pos",
    bg: "#a7f3d0",
    image: "/images/card-payments.jpg",
    imageAlt: "UK card machines, POS terminals, and merchant payment systems",
    summary:
      "Dedicated outbound telemarketing teams driving merchant acquisition, card terminal sales, and EPOS upgrades across the UK.",
    features: [
      "Outbound merchant acquisition",
      "EPOS & smart terminal sales",
      "UK hospitality & retail outreach",
      "Merchant rates comparison & switching",
      "TPS-compliant verified appointments",
    ],
  },
  {
    title: "Product Strategy & Digital Transformation",
    href: "/services/product-strategy",
    bg: "#fbe8a4",
    image: "/images/service-panel-4.png",
    imageAlt: "Product strategy and transformation programmes",
    summary:
      "Strategy, UX, and phased transformation so leadership commits to the right product before expensive build begins.",
    features: [
      "Product strategy",
      "UI/UX design",
      "Digital transformation",
      "Roadmapping",
      "Design systems",
    ],
  },
] as const;

function PlusIcon() {
  return (
    <span
      aria-hidden
      className="mt-0.5 inline-flex w-4 shrink-0 font-semibold text-ink"
    >
      +
    </span>
  );
}

export function ServicesShowcase() {
  const areaRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const area = areaRef.current;
    const title = titleRef.current;
    if (!area || !title) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const words = title.querySelectorAll<HTMLElement>("[data-word]");
      gsap.from(words, {
        opacity: 0,
        y: 28,
        stagger: 0.09,
        ease: "none",
        scrollTrigger: {
          trigger: title,
          start: "top 75%",
          end: "top 35%",
          scrub: 0.7,
        },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const panelEls = gsap.utils.toArray<HTMLElement>("[data-panel-pin]");
        panelEls.forEach((section) => {
          gsap.fromTo(
            section,
            {
              transformOrigin: "100% 0% 0px",
              yPercent: 0,
              rotate: 0,
              scale: 1,
            },
            {
              yPercent: 5,
              rotate: 12,
              scale: 0.82,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                pin: section,
                scrub: 1,
                start: "top 18%",
                end: "bottom 75%",
                endTrigger: area,
                pinSpacing: false,
              },
            },
          );
        });
      });
    }, area);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={areaRef}
      aria-labelledby="services-heading"
      className="relative bg-black text-white"
    >
      <Container className="relative pt-16 sm:pt-20 lg:pt-24">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
          Services
        </p>

        <h2
          id="services-heading"
          ref={titleRef}
          className="mx-auto mb-12 max-w-4xl text-center font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:mb-16 sm:text-5xl lg:mb-20 lg:text-6xl xl:text-7xl"
        >
          <span data-word className="inline-block text-white">
            Solutions
          </span>{" "}
          <span data-word className="inline-block text-white">that</span>
          <br />
          <span data-word className="inline-block text-white/45">
            Drive
          </span>{" "}
          <span data-word className="inline-block text-white/45">
            results
          </span>
        </h2>
      </Container>

      <div className="relative px-4 pb-8 sm:px-6 sm:pb-12 lg:pb-[35vh]">
        {servicePanels.map((panel, index) => (
          <article
            key={panel.title}
            data-panel-pin
            className="relative mx-auto mb-5 w-[min(100%,1080px)] overflow-hidden rounded-[2rem] px-5 py-7 text-ink sm:mb-6 sm:px-8 sm:py-9 lg:mb-8 lg:min-h-[400px] lg:px-10 lg:py-10"
            style={{
              backgroundColor: panel.bg,
              zIndex: index + 1,
            }}
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem]">
              <Link
                href={panel.href}
                className="underline-offset-4 transition hover:underline"
              >
                {panel.title}
              </Link>
            </h3>

            <div className="mt-6 flex flex-col gap-6 lg:mt-7 lg:flex-row lg:items-center lg:gap-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/5 shadow-soft lg:aspect-[5/4] lg:w-[42%] lg:max-w-[380px]">
                <Image
                  src={panel.image}
                  alt={panel.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>

              <div className="flex-1">
                <p className="max-w-xl text-sm leading-relaxed text-ink/75 sm:text-base">
                  {panel.summary}
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {panel.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium text-ink"
                    >
                      <PlusIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center pb-14 sm:pb-16">
        <Button
          href="/contact"
          className="!rounded-full !bg-white !px-7 !py-3.5 !text-ink hover:!bg-white/90"
        >
          Book A Quick Call
        </Button>
      </div>
    </section>
  );
}
