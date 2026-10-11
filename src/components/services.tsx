"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import {
  FiCode, FiLayout, FiServer, FiCoffee, FiTerminal, FiCpu, FiBarChart2,
} from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  coffee: FiCoffee,
  python: FiTerminal,
  brain: FiCpu,
  chart: FiBarChart2,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            What I Can Do
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FiCode;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-6 md:p-8 rounded-2xl glass hover:shadow-xl transition-all duration-500"
              >
                <motion.div
                  className="p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-300 w-fit mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={20} />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}