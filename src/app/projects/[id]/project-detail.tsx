"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle, FiAlertCircle, FiLayers, FiCalendar } from "react-icons/fi";
import type { projects } from "@/lib/data";

type Project = typeof projects[number];

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-muted-foreground">
              {project.category}
            </span>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                project.status === "Active" || project.status === "Active Development"
                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                  : project.status === "In Progress"
                  ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                  : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>Development Progress</span>
              <span className="font-medium">{project.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="h-full rounded-full bg-foreground"
              />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <FiGithub size={16} />
                View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-transform"
              >
                <FiExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-6 rounded-2xl glass"
        >
          <h2 className="text-lg font-semibold mb-3">Overview</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 p-6 rounded-2xl glass"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiLayers size={18} />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full bg-foreground/5 text-muted-foreground font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Architecture */}
        {project.architecture && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-10 p-6 rounded-2xl glass"
          >
            <h2 className="text-lg font-semibold mb-3">Architecture</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.architecture}</p>
          </motion.section>
        )}

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 p-6 rounded-2xl glass"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiCheckCircle size={18} />
            Features
          </h2>
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 text-sm"
              >
                <FiCheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{f}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          <div className="p-6 rounded-2xl glass">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiAlertCircle size={18} />
              Challenges
            </h2>
            <ul className="space-y-2">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl glass">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiCheckCircle size={18} />
              Solutions
            </h2>
            <ul className="space-y-2">
              {project.solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Timeline */}
        {project.timeline.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mb-10 p-6 rounded-2xl glass"
          >
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <FiCalendar size={18} />
              Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6">
                {project.timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex items-start gap-4 pl-8"
                  >
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-foreground/10 border border-border flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground">{item.date}</p>
                      <p className="text-sm font-medium mt-0.5">{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
