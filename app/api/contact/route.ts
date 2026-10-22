import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { siteConfig } from "@/lib/site";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;

type RateBucket = { count: number; resetAt: number };

const rateBuckets = new Map<string, RateBucket>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = rateBuckets.get(ip);

  if (!existing || existing.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  existing.count += 1;
  rateBuckets.set(ip, existing);
  return existing.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form submission." },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
    let delivered = false;

    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          source: "zevriyon-website",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error("Contact webhook failed", response.status);
        return NextResponse.json(
          { error: "Unable to send your message right now." },
          { status: 502 },
        );
      }
      delivered = true;
    } else if (resendKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.CONTACT_FROM_EMAIL ??
            "Zevriyon Website <onboarding@resend.dev>",
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

      if (!response.ok) {
        const detail = await response.text().catch(() => "");
        console.error("Resend failed", response.status, detail);
        return NextResponse.json(
          { error: "Unable to send your message right now." },
          { status: 502 },
        );
      }
      delivered = true;
    } else if (process.env.NODE_ENV === "production") {
      console.error(
        "Contact form submitted but CONTACT_WEBHOOK_URL / RESEND_API_KEY are not configured.",
      );
      return NextResponse.json(
        {
          error:
            "Contact delivery is not configured. Please email us directly.",
        },
        { status: 503 },
      );
    } else {
      console.log("Contact form submission (dev):", parsed.data);
      delivered = true;
    }

    return NextResponse.json({ ok: true, delivered });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
