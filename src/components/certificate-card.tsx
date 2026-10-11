"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward, FiCalendar } from "react-icons/fi";
import type { Certificate } from "@/data/certificates";

export function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: Math.min(index * 0.05, 0.35), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
        <Image
          src={certificate.image}
          alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          <FiAward aria-hidden="true" size={14} />
          <span>{certificate.issuer}</span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{certificate.title}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <FiCalendar aria-hidden="true" size={13} />
          <span>{certificate.date}</span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {certificate.description}
        </p>
        <Link
          href={`/certificates/${certificate.id}`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-foreground hover:text-background"
          aria-label={`View ${certificate.title} certificate details`}
        >
          View Certificate
          <FiArrowUpRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </motion.article>
  );
}
