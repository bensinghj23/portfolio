import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorFollowerBoundary } from "@/components/cursor-follower-boundary";
import { MotionProvider } from "@/components/motion-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://bensingh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Bensingh | AI Engineer & Full Stack Developer",
    template: "%s | Bensingh",
  },
  description:
    "Bensingh — AI Engineer, Full Stack Developer, and Machine Learning Enthusiast. Building AI-powered software, scalable web applications, and digital experiences that solve real-world problems.",
  keywords: [
    "Bensingh",
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "Computer Vision",
  ],
  authors: [{ name: "Bensingh", url: BASE_URL }],
  creator: "Bensingh",
  publisher: "Bensingh",
  openGraph: {
    title: "Bensingh | AI Engineer & Full Stack Developer",
    description:
      "Building AI-powered software, scalable web applications, and digital experiences that solve real-world problems.",
    url: BASE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Bensingh",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bensingh — AI Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bensingh | AI Engineer & Full Stack Developer",
    description:
      "Building AI-powered software, scalable web applications, and digital experiences that solve real-world problems.",
    creator: "@bensingh",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bensingh",
  url: BASE_URL,
  image: `${BASE_URL}/ben.jpeg`,
  jobTitle: "AI Engineer & Full Stack Developer",
  description:
    "Building AI-powered software, scalable web applications, and digital experiences that solve real-world problems.",
  sameAs: [
    "https://github.com/bensingh",
    "https://linkedin.com/in/bensingh",
    "https://x.com/bensingh",
    "https://instagram.com/bensingh",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full Stack Development",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "Computer Vision",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme initialisation — prevents flash */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
        {/* JSON-LD structured data */}
        <Script
          id="person-json-ld"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <MotionProvider>
            <SmoothScroll>
              <CursorFollowerBoundary />
              <ScrollProgress />
              <Navigation />
              <main>{children}</main>
            </SmoothScroll>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
