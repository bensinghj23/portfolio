"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiShare2, FiTwitter, FiLinkedin, FiLink } from "react-icons/fi";
import { formatDate } from "@/lib/utils";
import type { blogPosts } from "@/lib/data";
import { useState } from "react";

type Post = typeof blogPosts[number];

export function BlogPost({ post }: { post: Post }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Very simple markdown-to-HTML: render code blocks, headings, lists, bold, paragraphs
  const renderMarkdown = (md: string) => {
    const lines = md.trim().split("\n");
    const html: string[] = [];
    let inCode = false;
    let inList = false;

    for (const line of lines) {
      if (line.startsWith("```")) {
        if (!inCode) {
          if (inList) { html.push("</ul>"); inList = false; }
          html.push('<pre class="p-4 rounded-xl bg-foreground/5 overflow-x-auto text-xs leading-relaxed my-4"><code>');
          inCode = true;
        } else {
          html.push("</code></pre>");
          inCode = false;
        }
        continue;
      }

      if (inCode) {
        html.push(line.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
        continue;
      }

      if (!line.trim()) {
        if (inList) { html.push("</ul>"); inList = false; }
        continue;
      }

      if (line.startsWith("# ")) {
        if (inList) { html.push("</ul>"); inList = false; }
        html.push(`<h1 class="text-2xl md:text-3xl font-bold mt-10 mb-4">${line.slice(2)}</h1>`);
      } else if (line.startsWith("## ")) {
        if (inList) { html.push("</ul>"); inList = false; }
        html.push(`<h2 class="text-xl md:text-2xl font-semibold mt-8 mb-3">${line.slice(3)}</h2>`);
      } else if (line.startsWith("### ")) {
        if (inList) { html.push("</ul>"); inList = false; }
        html.push(`<h3 class="text-lg font-semibold mt-6 mb-2">${line.slice(4)}</h3>`);
      } else if (line.startsWith("- ")) {
        if (!inList) { html.push('<ul class="space-y-2 my-4 ml-4">'); inList = true; }
        const content = line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        html.push(`<li class="flex items-start gap-2 text-muted-foreground text-sm"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0"></span>${content}</li>`);
      } else {
        if (inList) { html.push("</ul>"); inList = false; }
        const para = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-foreground/5 text-xs font-mono">$1</code>');
        html.push(`<p class="text-muted-foreground leading-relaxed my-3 text-sm">${para}</p>`);
      }
    }
    if (inList) html.push("</ul>");
    return html.join("\n");
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiArrowLeft size={16} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-muted-foreground">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <FiClock size={12} />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                <span className="text-xs font-bold">B</span>
              </div>
              <div>
                <p className="text-sm font-medium">{post.author}</p>
                <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <FiShare2 size={12} /> Share
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://bensingh.dev/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-foreground hover:text-background transition-all"
                aria-label="Share on Twitter"
              >
                <FiTwitter size={14} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://bensingh.dev/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-foreground hover:text-background transition-all"
                aria-label="Share on LinkedIn"
              >
                <FiLinkedin size={14} />
              </a>
              <button
                onClick={copyLink}
                className="p-2 rounded-full glass hover:bg-foreground hover:text-background transition-all"
                aria-label="Copy link"
              >
                <FiLink size={14} />
              </button>
              {copied && (
                <span className="text-xs text-green-500 font-medium">Copied!</span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose-custom p-6 md:p-8 rounded-2xl glass"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      </div>
    </main>
  );
}
