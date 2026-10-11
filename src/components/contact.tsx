"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { FiSend, FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail, FiMapPin, FiCheck, FiPhone } from "react-icons/fi";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: FiInstagram, href: personalInfo.social.instagram, label: "Instagram" },
    { icon: FiTwitter, href: personalInfo.social.twitter, label: "X" },
    { icon: FiMail, href: personalInfo.social.email, label: "Email" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-foreground/20 outline-none text-sm transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-foreground/20 outline-none text-sm transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-foreground/20 outline-none text-sm transition-all"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-foreground/20 outline-none text-sm transition-all resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-all duration-300"
              >
                {submitted ? (
                  <>
                    <FiCheck size={18} />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl glass">
              <div className="flex items-center gap-3 mb-4">
                <FiMapPin size={18} />
                <span className="text-sm font-medium">Location</span>
              </div>
              <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
            </div>

            <div className="p-6 rounded-2xl glass">
              <div className="flex items-center gap-3 mb-4">
                <FiMail size={18} />
                <span className="text-sm font-medium">Email</span>
              </div>
              <a href={personalInfo.social.email} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {personalInfo.email}
              </a>
            </div>

            {personalInfo.phone && (
              <div className="p-6 rounded-2xl glass">
                <div className="flex items-center gap-3 mb-4">
                  <FiPhone size={18} />
                  <span className="text-sm font-medium">Phone</span>
                </div>
                <p className="text-sm text-muted-foreground">{personalInfo.phone}</p>
              </div>
            )}

            <div className="p-6 rounded-2xl glass">
              <h3 className="text-sm font-medium mb-4">Social Links</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass hover:bg-foreground hover:text-background transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}