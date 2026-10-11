"use client";

import { motion } from "framer-motion";
import { internships } from "@/lib/data";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

export function Internships() {
  return (
    <section id="internships" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Internships
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Industry Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {internships.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group p-6 md:p-8 rounded-2xl glass hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-300 flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiBriefcase size={20} />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <FiMapPin size={12} />
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}