# Zydev

Production-ready Next.js website for **Zydev**, an international software agency building enterprise SaaS, custom platforms, AI automation, mobile apps, and cloud systems.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- MDX/Markdown blog content in `content/blog`
- Vercel Analytics + Speed Insights

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and configure form delivery:

- `CONTACT_WEBHOOK_URL` — Google Sheets / CRM webhook, **or**
- `RESEND_API_KEY` + `CONTACT_TO_EMAIL` — email via Resend

Without either, submissions still succeed in development and are logged to the console.

## Content

- **Services / case studies:** typed data in `lib/services.ts` and `lib/case-studies.ts`
- **Blog:** add `.md` / `.mdx` files under `content/blog/` with frontmatter (`title`, `description`, `publishedAt`, `author`, `tags`)

## Deploy

Deploy to Vercel, set the env vars above, and point the production domain to `https://www.zydev.co.uk` (update `lib/site.ts` if your domain differs).
