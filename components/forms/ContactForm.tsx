"use client";

import { useId, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import {
  contactSchema,
  serviceOptions,
  type ContactFormValues,
} from "@/lib/validations";

type ContactFormProps = {
  defaultService?: string;
  compact?: boolean;
};

export function ContactForm({
  defaultService,
  compact = false,
}: ContactFormProps) {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: defaultService ?? "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset({ service: defaultService ?? "", website: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  function field(name: keyof ContactFormValues) {
    const error = errors[name]?.message;
    const id = `${formId}-${name}`;
    const errorId = `${id}-error`;
    return {
      id,
      error,
      errorId,
      describedBy: error ? errorId : undefined,
      invalid: Boolean(error),
    };
  }

  const nameField = field("name");
  const emailField = field("email");
  const phoneField = field("phone");
  const companyField = field("company");
  const serviceField = field("service");
  const messageField = field("message");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
      aria-busy={status === "loading"}
      onChange={() => {
        if (status === "success") setStatus("idle");
      }}
    >
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <FieldShell label="Name" htmlFor={nameField.id} error={nameField.error} errorId={nameField.errorId}>
          <input
            {...register("name")}
            id={nameField.id}
            aria-invalid={nameField.invalid || undefined}
            aria-describedby={nameField.describedBy}
            autoComplete="name"
            className="field-input"
            placeholder="Jane Smith"
          />
        </FieldShell>
        <FieldShell label="Email" htmlFor={emailField.id} error={emailField.error} errorId={emailField.errorId}>
          <input
            {...register("email")}
            id={emailField.id}
            aria-invalid={emailField.invalid || undefined}
            aria-describedby={emailField.describedBy}
            type="email"
            autoComplete="email"
            className="field-input"
            placeholder="jane@company.co.uk"
          />
        </FieldShell>
        <FieldShell label="Phone" htmlFor={phoneField.id} error={phoneField.error} errorId={phoneField.errorId}>
          <input
            {...register("phone")}
            id={phoneField.id}
            aria-invalid={phoneField.invalid || undefined}
            aria-describedby={phoneField.describedBy}
            type="tel"
            autoComplete="tel"
            className="field-input"
            placeholder="+44..."
          />
        </FieldShell>
        <FieldShell label="Company" htmlFor={companyField.id} error={companyField.error} errorId={companyField.errorId}>
          <input
            {...register("company")}
            id={companyField.id}
            aria-invalid={companyField.invalid || undefined}
            aria-describedby={companyField.describedBy}
            autoComplete="organization"
            className="field-input"
            placeholder="Your company"
          />
        </FieldShell>
      </div>

      <FieldShell label="Service interest" htmlFor={serviceField.id} error={serviceField.error} errorId={serviceField.errorId}>
        <select
          {...register("service")}
          id={serviceField.id}
          aria-invalid={serviceField.invalid || undefined}
          aria-describedby={serviceField.describedBy}
          className="field-input"
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FieldShell>

      <FieldShell label="How can we help?" htmlFor={messageField.id} error={messageField.error} errorId={messageField.errorId}>
        <textarea
          {...register("message")}
          id={messageField.id}
          aria-invalid={messageField.invalid || undefined}
          aria-describedby={messageField.describedBy}
          rows={compact ? 4 : 5}
          className="field-input resize-y"
          placeholder="Tell us about your goals, timeline, and budget if you have one."
        />
      </FieldShell>

      <div className="hidden" aria-hidden>
        <label>
          Website
          <input {...register("website")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Sending..." : siteConfig.cta.primary}
      </Button>

      {status === "success" ? (
        <p className="text-sm font-medium text-teal" role="status">
          Thanks — your message is on its way. We’ll reply within one business
          day.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-coral" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}

function FieldShell({
  label,
  htmlFor,
  error,
  errorId,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  errorId: string;
  children: ReactNode;
}) {
  return (
    <div className="block text-sm">
      <label htmlFor={htmlFor} className="mb-1.5 block font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <span id={errorId} className="mt-1 block text-xs font-medium text-coral">
          {error}
        </span>
      ) : null}
    </div>
  );
}
