import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  readingMinutes: number;
  content: string;
};

function ensureBlogDirectory() {
  if (!fs.existsSync(blogDirectory)) {
    fs.mkdirSync(blogDirectory, { recursive: true });
  }
}

export function getPostSlugs() {
  ensureBlogDirectory();
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const mdxPath = path.join(blogDirectory, `${realSlug}.mdx`);
  const mdPath = path.join(blogDirectory, `${realSlug}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug: realSlug,
    title: String(data.title ?? realSlug),
    description: String(data.description ?? ""),
    publishedAt: String(data.publishedAt ?? new Date().toISOString()),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    author: String(data.author ?? "Zydev Team"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingMinutes: Math.max(1, Math.ceil(stats.minutes)),
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}
