"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { aboutStats } from "@/lib/data";
import { FiUser, FiBook, FiBriefcase, FiTarget } from "react-icons/fi";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const aboutCards = [
  {
    icon: FiUser,
    title: "Who I Am",
    content:
      "I am Bensingh J, a B.Tech Artificial Intelligence & Data Science student at St. Xavier's Catholic College of Engineering (SXCCE), Nagercoil. I am passionate about software development, web technologies, artificial intelligence, and data analytics.",
  },
  {
    icon: FiBook,
    title: "Education",
    content:
      "Currently pursuing a B.Tech in Artificial Intelligence & Data Science at SXCCE, Nagercoil. Completed Higher Secondary Education at GHSS, Karungal.",
  },
  {
    icon: FiBriefcase,
    title: "Experience",
    content:
      "Hands-on experience through internships in Full Stack Development at AK Infopark and Java programming at White Aura X, plus multiple web applications and AI-driven projects.",
  },
  {
    icon: FiTarget,
    title: "Goals",
    content:
      "Aiming to leverage AI, Data Science, and Full Stack Development to build impactful software solutions. Open to exciting internship opportunities, collaborations, and real-world problem solving.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl" />
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
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Know Me Better
          </h2>
        </motion.div>

        {/* About Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group p-6 md:p-8 rounded-2xl glass hover:shadow-xl transition-all duration-500 cursor-default"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-300 flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <card.icon size={20} />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group text-center p-6 rounded-2xl glass hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
