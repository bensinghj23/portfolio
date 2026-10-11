"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { CertificateCard } from "@/components/certificate-card";

export function Certificates({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="certificates" className={standalone ? "relative py-8" : "relative bg-secondary/30 py-24 md:py-32"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Credentials</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">Certificates</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A selection of technical achievements, academic events, and professional learning milestones.
          </p>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
