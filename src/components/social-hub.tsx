"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import {
  FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail,
  FiExternalLink, FiUsers, FiCode, FiCamera, FiMessageSquare,
} from "react-icons/fi";

type SocialCard = {
  id: string;
  platform: string;
  handle: string;
  description: string;
  href: string;
  icon: React.ElementType;
  metaIcon: React.ElementType;
  metaLabel: string;
  metaValue: string;
  gradient: string;
  hoverGradient: string;
};

const socialCards: SocialCard[] = [
  {
    id: "github",
    platform: "GitHub",
    handle: "@bensingh",
    description: "Open source projects, AI experiments, and full-stack applications.",
    href: personalInfo.social.github,
    icon: FiGithub,
    metaIcon: FiCode,
    metaLabel: "Repositories",
    metaValue: "5+",
    gradient: "from-neutral-900/20 to-neutral-800/20",
    hoverGradient: "from-neutral-800/30 to-neutral-900/30",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    handle: "Bensingh J",
    description: "Professional updates, career milestones, and tech articles.",
    href: personalInfo.social.linkedin,
    icon: FiLinkedin,
    metaIcon: FiUsers,
    metaLabel: "Connections",
    metaValue: "Connect",
    gradient: "from-blue-600/10 to-blue-700/10",
    hoverGradient: "from-blue-600/20 to-blue-700/20",
  },
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@bensingh",
    description: "Behind-the-scenes builds, tech setups, and creative projects.",
    href: personalInfo.social.instagram,
    icon: FiInstagram,
    metaIcon: FiCamera,
    metaLabel: "Posts",
    metaValue: "Follow",
    gradient: "from-pink-500/10 to-purple-600/10",
    hoverGradient: "from-pink-500/20 to-purple-600/20",
  },
  {
    id: "instagram-editing",
    platform: "Instagram (Editing)",
    handle: "@itx._.rento",
    description: "Creative video editing and visual content.",
    href: personalInfo.social.instagramEditing,
    icon: FiInstagram,
    metaIcon: FiCamera,
    metaLabel: "Posts",
    metaValue: "Follow",
    gradient: "from-purple-500/10 to-pink-600/10",
    hoverGradient: "from-purple-500/20 to-pink-600/20",
  },
  {
    id: "twitter",
    platform: "X (Twitter)",
    handle: "@bensingh",
    description: "Dev thoughts, AI discoveries, and hot takes on the tech world.",
    href: personalInfo.social.twitter,
    icon: FiTwitter,
    metaIcon: FiMessageSquare,
    metaLabel: "Tweets",
    metaValue: "Follow",
    gradient: "from-sky-500/10 to-sky-600/10",
    hoverGradient: "from-sky-500/20 to-sky-600/20",
  },
  {
    id: "email",
    platform: "Email",
    handle: personalInfo.email,
    description: "Best way to reach me for collaborations, internships, or projects.",
    href: personalInfo.social.email,
    icon: FiMail,
    metaIcon: FiMessageSquare,
    metaLabel: "Response time",
    metaValue: "< 24h",
    gradient: "from-green-500/10 to-emerald-600/10",
    hoverGradient: "from-green-500/20 to-emerald-600/20",
  },
];

export function SocialHub() {
  return (
    <section id="social" className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Connect
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            Find Me Online
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            Follow my work, connect professionally, or just say hello.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {socialCards.map((card, i) => {
            const Icon = card.icon;
            const MetaIcon = card.metaIcon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl glass hover:shadow-xl transition-all duration-500"
              >
                {/* Card background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} group-hover:${card.hoverGradient} transition-all duration-500`}
                />

                <div className="relative p-6 flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <motion.a
                      href={card.href}
                      target={card.id !== "email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full glass hover:bg-foreground/10"
                      aria-label={`Visit ${card.platform}`}
                      whileHover={{ scale: 1.15, rotate: -5 }}
                    >
                      <FiExternalLink size={16} />
                    </motion.a>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="font-semibold">{card.platform}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium">{card.handle}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>

                  {/* Meta stat */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MetaIcon size={12} />
                      <span>{card.metaLabel}</span>
                    </div>
                    <span className="text-sm font-semibold">{card.metaValue}</span>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={card.href}
                    target={card.id !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="mt-1 w-full text-center text-xs font-medium py-2.5 rounded-xl bg-foreground/5 hover:bg-foreground hover:text-background transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={`Visit Ben's ${card.platform}`}
                  >
                    {card.id === "email" ? "Send Email" : "Visit Profile"}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
