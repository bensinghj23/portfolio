"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";

const categories = ["All", "AI", "Web App", "Full Stack"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "glass hover:bg-foreground/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative rounded-2xl overflow-hidden glass hover:shadow-xl transition-all duration-500"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-muted to-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background text-foreground hover:scale-110 transition-transform"
                    >
                      <FiGithub size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-background text-foreground hover:scale-110 transition-transform"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    {project.caseStudy && (
                      <a
                        href={project.caseStudy}
                        className="p-3 rounded-full bg-background text-foreground hover:scale-110 transition-transform"
                      >
                        <FiFileText size={18} />
                      </a>
                    )}
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-xs font-medium">
                    {project.status}
                  </div>
                  {/* Progress */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                    <div
                      className="h-full bg-foreground transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground whitespace-nowrap px-2 py-1 rounded-full bg-border/50">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-foreground/5 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
