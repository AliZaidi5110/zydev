import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Markdown } from "@/components/ui/Markdown";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return getPostSlugs().map((filename) => ({
    slug: filename.replace(/\.mdx?$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return buildMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const related = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article>
        <header className="border-b border-ink/8 py-16 sm:py-20">
          <Container className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate">
              <ol className="flex flex-wrap gap-2">
                <li>
                  <Link href="/" className="hover:text-coral">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="hover:text-coral">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ink">Article</li>
              </ol>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              <span className="mx-2 text-ink/20">·</span>
              {post.readingMinutes} min read
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-slate">{post.description}</p>
          </Container>
        </header>

        <Container className="max-w-3xl py-12 sm:py-16">
          <Markdown content={post.content} />

          {related.length ? (
            <aside className="mt-14 border-t border-ink/10 pt-10">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Keep reading
              </h2>
              <ul className="mt-5 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="font-medium text-coral hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </Container>
      </article>

      <CtaBanner />
    </>
  );
}
