import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { siteConfig } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form submission." },
        { status: 400 },
      );
    }

    // Honeypot — silently succeed for bots
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          source: "zydev-website",
          submittedAt: new Date().toISOString(),
        }),
      });
    } else if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "Zydev Website <onboarding@resend.dev>",
          to: [toEmail],
          subject: `New enquiry from ${parsed.data.name}`,
          text: [
            `Name: ${parsed.data.name}`,
            `Email: ${parsed.data.email}`,
            `Phone: ${parsed.data.phone ?? "—"}`,
            `Company: ${parsed.data.company ?? "—"}`,
            `Service: ${parsed.data.service ?? "—"}`,
            "",
            parsed.data.message,
          ].join("\n"),
        }),
      });
    } else if (process.env.NODE_ENV === "production") {
      console.warn(
        "Contact form submitted but CONTACT_WEBHOOK_URL / RESEND_API_KEY are not configured.",
      );
    } else {
      console.log("Contact form submission:", parsed.data);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
