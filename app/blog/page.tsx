import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Notes on software delivery, AI adoption, product strategy, and digital transformation — from the Zevriyon Technologies team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="section-pad border-b border-ink/8">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Thinking for builders and buyers of software"
            description="Short notes on delivery, AI adoption, and product decisions that affect commercial outcomes."
            as="h1"
          />
        </Container>
      </section>
      <section className="section-pad">
        <Container className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                <span className="mx-2 text-ink/20">·</span>
                {post.readingMinutes} min read
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                <Link href={`/blog/${post.slug}`} className="hover:text-coral">
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
