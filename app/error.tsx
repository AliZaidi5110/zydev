"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error boundary:", error);
  }, [error]);

  return (
    <section className="section-pad">
      <Container className="max-w-2xl text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          We hit an unexpected error
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
          Please try again. If the problem continues, contact us and we’ll help
          directly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <Button href="/contact" variant="secondary">
            Contact support
          </Button>
        </div>
      </Container>
    </section>
  );
}
