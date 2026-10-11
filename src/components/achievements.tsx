"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "@/lib/data";
import { FiX, FiAward, FiBookOpen, FiCode } from "react-icons/fi";

const typeIcons: Record<string, React.ElementType> = {
  certificate: FiBookOpen,
  hackathon: FiAward,
  award: FiCode,
};

export function Achievements() {
  const [selected, setSelected] = useState<typeof achievements[0] | null>(null);

  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Certificates & Awards
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((item, i) => {
            const Icon = typeIcons[item.type] || FiAward;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setSelected(item)}
                className="group p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-300 w-fit mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.issuer}</p>
                {item.date && (
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full p-8 rounded-2xl glass shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <FiX size={18} />
              </button>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {selected.issuer}
                  {selected.date && ` • ${selected.date}`}
                </p>
                <p className="text-sm leading-relaxed">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
