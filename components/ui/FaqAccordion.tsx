"use client";

import { useState } from "react";
import type { ServiceFaq } from "@/lib/services";

type FaqAccordionProps = {
  faqs: ServiceFaq[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={faq.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink transition hover:text-coral"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span
                  aria-hidden
                  className={`text-xl leading-none text-coral transition ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pr-8 text-sm leading-relaxed text-slate sm:text-base"
            >
              {isOpen ? <p>{faq.answer}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
