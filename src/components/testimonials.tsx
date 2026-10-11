"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from "react-icons/fi";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            What People Say
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full glass">
                  <FiMessageSquare size={24} />
                </div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic mb-8">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">{testimonials[current].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full glass hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-foreground w-6" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}