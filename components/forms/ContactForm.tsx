"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${compact ? "" : "rounded-2xl border border-ink/8 bg-white p-6 shadow-soft sm:p-8"}`}
      noValidate
    >
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            autoComplete="name"
            className="field-input"
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className="field-input"
            placeholder="jane@company.co.uk"
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            className="field-input"
            placeholder="+44..."
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            {...register("company")}
            autoComplete="organization"
            className="field-input"
            placeholder="Your company"
          />
        </Field>
      </div>

      <Field label="Service interest" error={errors.service?.message}>
        <select {...register("service")} className="field-input">
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="How can we help?" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={compact ? 4 : 5}
          className="field-input resize-y"
          placeholder="Tell us about your goals, timeline, and budget if you have one."
        />
      </Field>

      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input {...register("website")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Get a Free Quote"}
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

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs font-medium text-coral">{error}</span>
      ) : null}
    </label>
  );
}
