"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, projects } from "@/lib/data";
import { FiX, FiSend, FiCpu } from "react-icons/fi";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

const responses: Record<string, string> = {
  "who is bensingh": `Bensingh J is an AI & Data Science Engineer and Full Stack Developer based in Nagercoil, Tamil Nadu, India. He is currently pursuing a B.Tech in Artificial Intelligence & Data Science at St. Xavier's Catholic College of Engineering (SXCCE), Nagercoil.`,
  "bensingh": `Bensingh J is an AI & Data Science Engineer and Full Stack Developer based in Nagercoil, Tamil Nadu, India. He is currently pursuing a B.Tech in Artificial Intelligence & Data Science at St. Xavier's Catholic College of Engineering (SXCCE), Nagercoil.`,
  "show projects": `Here are some of Bensingh's projects:\n\n${featuredProjects.map((p) => `• ${p.title} — ${p.description}`).join("\n")}\n\nVisit the Projects section to explore all projects!`,
  "projects": `Here are some of Bensingh's projects:\n\n${featuredProjects.map((p) => `• ${p.title} — ${p.description}`).join("\n")}\n\nVisit the Projects section to explore all projects!`,
  "show skills": `Bensingh's key skills include:\n\n• Programming Languages: Python, Java, JavaScript\n• Frontend: HTML5, CSS3, React.js, Bootstrap\n• Backend: Node.js\n• Database: MySQL, MongoDB\n• Tools: Git, GitHub, VS Code, Canva\n• AI & Data Science: Pandas, NumPy, Machine Learning, Data Analytics`,
  "skills": `Bensingh's key skills include:\n\n• Programming Languages: Python, Java, JavaScript\n• Frontend: HTML5, CSS3, React.js, Bootstrap\n• Backend: Node.js\n• Database: MySQL, MongoDB\n• Tools: Git, GitHub, VS Code, Canva\n• AI & Data Science: Pandas, NumPy, Machine Learning, Data Analytics`,
  "download resume": `You can download Bensingh's resume using the Resume button in the navigation or the Download Resume button in the hero section.`,
  "resume": `You can download Bensingh's resume using the Resume button in the navigation or the Download Resume button in the hero section.`,
  "contact": `You can reach Bensingh through:\n• Email: ${personalInfo.email}\n• LinkedIn: ${personalInfo.social.linkedin}\n• GitHub: ${personalInfo.social.github}\n\nOr use the contact form on this website!`,
  "github": `Bensingh is actively building and contributing to open source on GitHub. Check out the GitHub section on this page or visit: ${personalInfo.social.github}`,
  "electrical shop": `The Electrical Shop Record Management System is a software system for managing electrical shop records, products, transactions, customers, and related shop-management operations.`,
  "complaint": `The Smart Public Complaint Management System is a web-based platform for submitting, tracking, managing, and resolving public complaints efficiently.`,
  "campus safety": `The AI-Based Campus Safety System is designed to improve campus safety through intelligent monitoring, detection, alerts, and related safety-support features.`,
  "medical records": `The Blockchain-Based Secure Medical Records Sharing project focuses on secure and controlled sharing of medical records while improving data integrity, privacy, and accessibility.`,
  "local industry": `The Local Industry Support Platform is designed to connect, support, or promote local industries and improve access to relevant information and opportunities.`,
  "machine learning": `Bensingh works with Pandas, NumPy, Machine Learning, and Data Analytics to build data-driven solutions. Check the Projects section for AI-based projects!`,
  "internship": `Bensingh is currently available for internship opportunities! He has completed internships in Full Stack Development (AK Infopark) and Java (White Aura X). Reach out via the contact form.`,
  "available": `Yes! Bensingh is currently available for internships and collaborations. Use the contact form or email directly at ${personalInfo.email}`,
  "default": `Hi! I'm Bensingh's AI assistant. I can tell you about:\n\n• Who is Bensingh?\n• Show projects\n• Show skills\n• Download resume\n• Contact Bensingh\n• GitHub activity\n• Internship availability\n\nWhat would you like to know?`,
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  // Try longest matching key first to avoid partial matches triggering the wrong response
  const sortedKeys = Object.keys(responses).filter((k) => k !== "default").sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (lower.includes(key)) {
      return responses[key];
    }
  }
  return responses["default"];
}

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: responses["default"] },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9995] p-4 rounded-full bg-foreground text-background shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Open AI Chat Assistant"
      >
        <FiCpu size={22} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-[9995] w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl glass shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-foreground/10">
                  <FiCpu size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Bensingh&apos;s AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Ask me anything</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Close chat"
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-foreground text-background rounded-br-md"
                        : "bg-secondary rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce [animation-delay:0.1s]" />
                      <span className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-foreground/20 outline-none text-sm"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-foreground text-background hover:scale-105 transition-transform disabled:opacity-40"
                  disabled={!input.trim()}
                  aria-label="Send message"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
