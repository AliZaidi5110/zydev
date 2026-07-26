import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/case-studies",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    lastModified: new Date(study.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes];
}
