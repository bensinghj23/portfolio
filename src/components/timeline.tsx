"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { FiCode, FiBriefcase, FiCoffee, FiAward, FiCpu, FiTarget } from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  code: FiCode,
  briefcase: FiBriefcase,
  coffee: FiCoffee,
  trophy: FiAward,
  brain: FiCpu,
  rocket: FiTarget,
};

export function Timeline() {
  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Professional Timeline
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.icon] || FiCode;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full glass flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}