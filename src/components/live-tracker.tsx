"use client";

import { motion } from "framer-motion";
import { liveProjects } from "@/lib/data";

export function LiveTracker() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Live Tracker
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            What I'm Building Now
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {liveProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: Math.min(i * 0.1, 0.5), duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-5 md:p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">{project.name}</h3>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  project.status === "Active" 
                    ? "bg-green-500/10 text-green-600 dark:text-green-400" 
                    : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="relative h-2 rounded-full bg-border overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-y-0 left-0 rounded-full bg-foreground"
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">{project.progress}% complete</span>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      project.status === "Active" ? "bg-green-400" : "bg-yellow-400"
                    }`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${
                      project.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                    }`} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
