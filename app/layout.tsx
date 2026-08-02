import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { AnalyticsGate } from "@/components/analytics/AnalyticsGate";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { OrganizationSchema } from "@/components/seo/JsonLd";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${siteConfig.name} | Enterprise Software, AI & Digital Platforms`,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  keywords: [
    "enterprise software agency",
    "custom SaaS development",
    "AI automation",
    "AI agents and chatbots",
    "RAG systems",
    "CRM ERP dashboards",
    "mobile app development",
    "cloud DevOps",
    "digital transformation",
    "Zydev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <OrganizationSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <AnalyticsGate />
      </body>
    </html>
  );
}
