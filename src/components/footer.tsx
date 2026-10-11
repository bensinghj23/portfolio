"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import {
  FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail, FiArrowUp,
} from "react-icons/fi";

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: FiInstagram, href: personalInfo.social.instagram, label: "Instagram" },
    { icon: FiTwitter, href: personalInfo.social.twitter, label: "X" },
    { icon: FiMail, href: personalInfo.social.email, label: "Email" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer ref={sectionRef} className="relative overflow-hidden border-t border-border pt-20 md:pt-28 pb-10">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-80 bg-gradient-to-t from-foreground/[0.03] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large CTA Text */}
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
            Open to Opportunities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
            <span className="block">Let&apos;s Build</span>
            <span className="block mt-1 text-outline">Something</span>
            <motion.span
              className="block mt-1 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{ backgroundSize: "200% auto" }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Amazing.
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm md:text-base text-muted-foreground max-w-md mx-auto"
          >
            Whether it&apos;s an internship, a freelance project, a collaboration, or just a coffee chat — I&apos;m all ears.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-medium shadow-lg"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-tight"
          >
            BEN
            SINGH 
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label={social.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                whileHover={{ scale: 1.15, y: -2 }}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright + Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Bensingh J
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full glass hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
