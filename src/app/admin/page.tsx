"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLock, FiUnlock, FiLogOut, FiCode, FiBook, FiAward,
  FiUsers, FiMail, FiBarChart2, FiEye, FiDownload,
  FiCheckCircle, FiFolder, FiClock, FiStar,
} from "react-icons/fi";
import { projects, blogPosts, achievements, skills } from "@/lib/data";

// ─── Auth Gate ────────────────────────────────────────────────────────────────

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Invalid password");
      } else {
        onLogin();
      }
    } catch {
      setError("Connection error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm"
      >
        <div className="p-8 rounded-2xl glass shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="p-4 rounded-full bg-foreground/5 mb-4">
              <FiLock size={24} />
            </div>
            <h1 className="text-2xl font-bold">Admin Access</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter password to continue</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-foreground/20 outline-none text-sm"
              autoFocus
            />
            {error && (
              <p className="text-xs text-red-500 font-medium">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="loading-spinner" />
              ) : (
                <>
                  <FiUnlock size={16} />
                  Login
                </>
              )}
            </button>
          </form>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Default password: <code className="font-mono">admin123</code>
            <br />
            Set <code className="font-mono">ADMIN_PASSWORD</code> env var in production.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

type Tab = "overview" | "projects" | "blog" | "achievements" | "skills" | "messages";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "overview", label: "Overview", icon: FiBarChart2 },
  { id: "projects", label: "Projects", icon: FiFolder },
  { id: "blog", label: "Blog", icon: FiBook },
  { id: "achievements", label: "Achievements", icon: FiAward },
  { id: "skills", label: "Skills", icon: FiCode },
  { id: "messages", label: "Messages", icon: FiMail },
];

const overviewStats = [
  { icon: FiEye, label: "Page Views", value: "3,240", change: "+12%" },
  { icon: FiUsers, label: "Visitors", value: "1,102", change: "+8%" },
  { icon: FiDownload, label: "Resume Downloads", value: "87", change: "+24%" },
  { icon: FiStar, label: "GitHub Stars", value: "74", change: "+6%" },
];

const mockMessages = [
  { name: "Alice Johnson", email: "alice@example.com", subject: "Collaboration Opportunity", date: "Jul 28, 2026", read: false },
  { name: "Rahul Kumar", email: "rahul@startup.io", subject: "Internship Offer", date: "Jul 25, 2026", read: true },
  { name: "Sarah Lee", email: "sarah@design.co", subject: "Freelance Project", date: "Jul 20, 2026", read: true },
];

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    onLogout();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-foreground/5">
              <FiLock size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold">Admin Dashboard</p>
              <p className="text-xs text-muted-foreground">Bensingh Portfolio</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs font-medium hover:bg-foreground hover:text-background transition-all"
          >
            <FiLogOut size={14} />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <nav className="lg:w-52 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-foreground text-background"
                      : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Content */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeTab === "overview" && <OverviewTab />}
                {activeTab === "projects" && <ProjectsTab />}
                {activeTab === "blog" && <BlogTab />}
                {activeTab === "achievements" && <AchievementsTab />}
                {activeTab === "skills" && <SkillsTab />}
                {activeTab === "messages" && <MessagesTab />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">Portfolio analytics at a glance</p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {overviewStats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl glass"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-foreground/5">
                  <Icon size={16} />
                </div>
                <span className="text-xs font-medium text-green-500">{s.change}</span>
              </div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="p-6 rounded-2xl glass">
        <h3 className="text-sm font-semibold mb-4">Quick Stats</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">{projects.length}</p>
            <p className="text-xs text-muted-foreground">Total Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{blogPosts.length}</p>
            <p className="text-xs text-muted-foreground">Blog Posts</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{achievements.length}</p>
            <p className="text-xs text-muted-foreground">Achievements</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Projects</h2>
        <span className="text-xs text-muted-foreground">{projects.length} total</span>
      </div>
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="p-5 rounded-2xl glass flex items-center justify-between gap-4"
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold truncate">{p.title}</span>
              {p.featured && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 flex-shrink-0">Featured</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">{p.category} · {p.status}</p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <p className="text-sm font-semibold">{p.progress}%</p>
              <p className="text-xs text-muted-foreground">complete</p>
            </div>
            <div className="w-16 h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full rounded-full bg-foreground" style={{ width: `${p.progress}%` }} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function BlogTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Blog Posts</h2>
        <span className="text-xs text-muted-foreground">{blogPosts.length} posts</span>
      </div>
      {blogPosts.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="p-5 rounded-2xl glass"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{p.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{p.category}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <FiClock size={11} />
                {p.readTime} min
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mt-3">
            {p.tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/5 text-muted-foreground">#{tag}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AchievementsTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Achievements</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="p-5 rounded-2xl glass"
          >
            <div className="flex items-center gap-2 mb-2">
              <FiCheckCircle size={14} className="text-green-500 flex-shrink-0" />
              <span className="text-sm font-semibold">{a.title}</span>
            </div>
            <p className="text-xs text-muted-foreground">{a.issuer} · {a.date}</p>
            <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-foreground/5 text-muted-foreground capitalize">{a.type}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Skills</h2>
      {Object.entries(skills).map(([cat, items]) => (
        <div key={cat}>
          <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">{cat}</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {items.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between p-3 rounded-xl glass">
                <span className="text-sm font-medium">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 rounded-full bg-border overflow-hidden">
                    <div className="h-full rounded-full bg-foreground" style={{ width: `${skill.level}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-8 text-right">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MessagesTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Messages</h2>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-foreground/5 text-muted-foreground">
          {mockMessages.filter((m) => !m.read).length} unread
        </span>
      </div>
      {mockMessages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className={`p-5 rounded-2xl glass flex items-start gap-4 ${!msg.read ? "border border-foreground/10" : ""}`}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-muted to-accent flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold">{msg.name.charAt(0)}</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold truncate">{msg.name}</span>
              <span className="text-xs text-muted-foreground flex-shrink-0">{msg.date}</span>
            </div>
            <p className="text-xs font-medium truncate mt-0.5">{msg.subject}</p>
            <p className="text-xs text-muted-foreground">{msg.email}</p>
          </div>
          {!msg.read && (
            <div className="w-2 h-2 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page entry ───────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Try to verify existing cookie-based session by hitting a no-op
    fetch("/api/admin/auth", { method: "GET" })
      .then(() => {})
      .catch(() => {})
      .finally(() => setChecking(false));
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner" />
      </div>
    );
  }

  return authed ? (
    <Dashboard onLogout={() => setAuthed(false)} />
  ) : (
    <LoginForm onLogin={() => setAuthed(true)} />
  );
}
