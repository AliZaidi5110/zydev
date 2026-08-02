"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";

const STORAGE_KEY = "zydev-cookie-consent";

export function AnalyticsGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function sync() {
      try {
        setEnabled(window.localStorage.getItem(STORAGE_KEY) === "accepted");
      } catch {
        setEnabled(false);
      }
    }

    sync();
    const onConsent = () => sync();
    window.addEventListener("zydev-consent", onConsent as EventListener);
    return () =>
      window.removeEventListener("zydev-consent", onConsent as EventListener);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
