"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useAnimationControls,
} from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typewriter effect for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentRole.substring(0, prev.length - 1);
        } else {
          return currentRole.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: FiInstagram, href: personalInfo.social.instagram, label: "Instagram" },
    { icon: FiTwitter, href: personalInfo.social.twitter, label: "X" },
    { icon: FiMail, href: personalInfo.social.email, label: "Email" },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(120, 120, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 120, 180, 0.15) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-32">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Available for Internship
            </motion.div>

            {/* Animated Role with Typewriter */}
            <div className="h-24 md:h-28">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
              >
                <span className="text-muted-foreground">I'm a </span>
                <span className="text-gradient">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-0.5 h-8 md:h-10 bg-foreground ml-1 align-middle"
                />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <HiOutlineEye size={18} />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:border-foreground"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-background transition-colors">
                  <FiDownload size={18} />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Large Name & Image */}
          <div className="relative flex items-center justify-center">
            {/* Large Name Typography with Parallax */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,13vw,11rem)] font-black leading-none text-center select-none"
              >
                <motion.span
                  className="text-outline block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  BENSINGH
                  J
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-border shadow-2xl"
            >
              <Image
                src="/ben.jpeg"
                alt="Bensingh J — AI & Data Science Engineer | Full Stack Developer"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* Enhanced floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full glass hidden md:flex items-center justify-center"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-50" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full glass hidden md:flex items-center justify-center"
              animate={{
                y: [0, 15, 0],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 opacity-50" />
            </motion.div>
          </div>
        </div>

        {/* Social Links - Vertical */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={social.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <div className="p-3 rounded-full glass hover:bg-foreground hover:text-background transition-all duration-300">
                <social.icon size={18} />
              </div>
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {social.label}
              </span>
            </motion.a>
          ))}
          <div className="w-px h-16 bg-border" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
