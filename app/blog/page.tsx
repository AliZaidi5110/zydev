import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical guides on website performance, SEO, Google Business Profile, and digital growth for UK businesses — from the Zydev team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-ink/8 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Ideas that help you grow"
            description="Short, practical articles for UK business owners who want clearer digital results."
            as="h1"
          />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                <span className="mx-2 text-ink/20">·</span>
                {post.readingMinutes} min read
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-coral"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-coral"
              >
                Read article →
              </Link>
            </article>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
