"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Internships } from "@/components/internships";
import { Projects } from "@/components/projects";
import { LiveTracker } from "@/components/live-tracker";
import { Timeline } from "@/components/timeline";
import { Achievements } from "@/components/achievements";
import { Certificates } from "@/components/certificates";
import { Services } from "@/components/services";
import { Blog } from "@/components/blog";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

// Lazy load heavier sections for performance
const GithubSection = dynamic(
  () => import("@/components/github-section").then((m) => ({ default: m.GithubSection })),
  { ssr: false, loading: () => null }
);

const SocialHub = dynamic(
  () => import("@/components/social-hub").then((m) => ({ default: m.SocialHub })),
  { loading: () => null }
);

const AIChatAssistant = dynamic(
  () => import("@/components/ai-chat").then((m) => ({ default: m.AIChatAssistant })),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Internships />
      <Projects />
      <LiveTracker />
      <GithubSection />
      <Timeline />
      <Achievements />
      <Certificates />
      <Services />
      <Blog />
      <Testimonials />
      <SocialHub />
      <Contact />
      <Footer />
      <AIChatAssistant />
    </>
  );
}
