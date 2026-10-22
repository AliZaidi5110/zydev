"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "zevriyon-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function store(value: "accepted" | "essential") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage failures
    }
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent("zevriyon-consent", { detail: { value } }),
    );
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl border border-ink/10 bg-white p-5 shadow-lift sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <p className="text-sm leading-relaxed text-slate">
        We use essential cookies to run this site and optional analytics to
        improve it. See our{" "}
        <Link href="/privacy" className="font-semibold text-ink underline">
          Privacy Policy
        </Link>{" "}
        for details.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" onClick={() => store("accepted")} className="!py-2.5">
          Accept analytics
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="!py-2.5"
          onClick={() => store("essential")}
        >
          Essential only
        </Button>
      </div>
    </div>
  );
}
