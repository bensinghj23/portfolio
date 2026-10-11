"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiAward, FiCalendar, FiDownload, FiExternalLink, FiLayers } from "react-icons/fi";
import type { Certificate } from "@/data/certificates";

export function CertificateDetail({ certificate }: { certificate: Certificate }) {
  const asset = certificate.pdf ?? certificate.image;

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <Link href="/certificates" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <FiArrowLeft aria-hidden="true" size={16} />
            Back to Certificates
          </Link>
        </motion.div>

        <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/5 px-3 py-1.5"><FiAward aria-hidden="true" size={13} />{certificate.issuer}</span>
            <span className="inline-flex items-center gap-1.5"><FiCalendar aria-hidden="true" size={13} />{certificate.date}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{certificate.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{certificate.description}</p>
        </motion.header>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="overflow-hidden rounded-2xl glass">
          {certificate.pdf ? (
            <iframe title={`${certificate.title} certificate`} src={certificate.pdf} className="h-[70vh] w-full bg-background" />
          ) : (
            <div className="relative min-h-[280px] bg-foreground/5 md:min-h-[520px]">
              <Image src={certificate.image} alt={`${certificate.title} certificate issued by ${certificate.issuer}`} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain p-2 md:p-4" priority />
            </div>
          )}
        </motion.section>

        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl glass p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold"><FiLayers aria-hidden="true" size={18} />Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => <span key={skill} className="rounded-full bg-foreground/5 px-3 py-1.5 text-xs font-medium text-muted-foreground">{skill}</span>)}
            </div>
          </motion.section>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href={asset} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105"><FiExternalLink aria-hidden="true" size={16} />View Full Certificate</a>
            <a href={asset} download className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"><FiDownload aria-hidden="true" size={16} />Download Certificate</a>
            {certificate.credentialUrl && <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"><FiExternalLink aria-hidden="true" size={16} />Verify Credential</a>}
          </div>
        </div>
      </div>
    </main>
  );
}
