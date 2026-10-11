"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
  SiReact, SiNodedotjs, SiMongodb, SiPython, SiPandas, SiNumpy,
  SiGit, SiGithub, SiJavascript, SiHtml5, SiCss, SiBootstrap, SiMysql,
} from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
  react: SiReact,
  nodedotjs: SiNodedotjs,
  mongodb: SiMongodb,
  python: SiPython,
  pandas: SiPandas,
  numpy: SiNumpy,
  git: SiGit,
  github: SiGithub,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  bootstrap: SiBootstrap,
  mysql: SiMysql,
};

const categoryDescriptions: Record<string, string> = {
  "Programming Languages": "Core languages I use to build software",
  Frontend: "Building responsive, interactive user interfaces",
  Backend: "Server-side logic and API development",
  Database: "Storing and managing data efficiently",
  Tools: "Development tools and productivity stack",
  "AI & Data Science": "Machine learning and data-driven solutions",
};

function SkillCard({ name, icon, color, index }: { name: string; icon: string; color: string; level: number; index: number }) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: Math.min(index * 0.06, 0.5), duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl glass cursor-default transition-all duration-300"
    >
      {/* Gradient hover bg */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle, ${color}, transparent)` }}
      />

      {/* Icon */}
      {Icon ? (
        <motion.div
          className="p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground/10 transition-colors"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          <Icon
            size={24}
            style={{ color }}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
      ) : (
        <div className="p-3 rounded-xl bg-foreground/5 w-12 h-12 flex items-center justify-center">
          <span className="text-xs font-bold text-muted-foreground">{name.slice(0, 2).toUpperCase()}</span>
        </div>
      )}

      <span className="text-xs font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Hover over any card to explore — each technology is a tool I use to ship real products.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-16">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight">{category}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{categoryDescriptions[category]}</p>
                </div>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground font-medium">{items.length} skills</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {items.map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    level={skill.level}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
