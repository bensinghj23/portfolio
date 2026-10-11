import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import { BlogPost } from "./blog-post";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return {};
  return {
    title: `${post.title} | Bensingh`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
