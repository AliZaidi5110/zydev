import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalised === "/" ? "" : normalised}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og-default.png",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
