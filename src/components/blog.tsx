"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { FiClock, FiArrowRight, FiSearch, FiX } from "react-icons/fi";

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

export function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [search, activeCategory, activeTag]);

  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Blog
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Latest Articles
          </h2>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <FiSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-10 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-foreground/20 outline-none text-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary"
            >
              <FiX size={14} />
            </button>
          )}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-5"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "glass hover:bg-foreground/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full text-[11px] transition-all duration-300 ${
                activeTag === tag
                  ? "bg-foreground/10 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              #{tag}
            </button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <motion.div layout className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl glass overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="h-44 bg-gradient-to-br from-muted to-accent relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-black text-foreground/5">{post.title.charAt(0)}</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full glass">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FiClock size={11} />
                        {post.readTime} min read
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{formatDate(post.date)}</span>
                    </div>

                    <h3 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-foreground transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/5 text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium mt-auto pt-2 border-t border-border/50 hover:gap-3 transition-all duration-300"
                    >
                      Read Article <FiArrowRight size={12} />
                    </Link>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-3 text-center py-20 text-muted-foreground text-sm"
              >
                No articles match your search.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
