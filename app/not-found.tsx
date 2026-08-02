import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="section-pad">
      <Container className="max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
          The page you’re looking for doesn’t exist or has moved. Try the
          homepage, services, or case studies.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Go home</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
          <Button href="/case-studies" variant="ghost">
            Case studies
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate">
          Or browse{" "}
          <Link href="/services" className="font-semibold text-coral hover:underline">
            services
          </Link>{" "}
          and{" "}
          <Link href="/ai-solutions" className="font-semibold text-coral hover:underline">
            AI solutions
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
