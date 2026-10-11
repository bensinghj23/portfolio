"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import {
  FiGithub, FiStar, FiGitBranch, FiUsers, FiExternalLink,
  FiCode, FiActivity, FiBook,
} from "react-icons/fi";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
};

type GithubStats = {
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  name: string;
  bio: string | null;
};

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
  default: "#8b8b8b",
};

function RepoCard({ repo, index }: { repo: Repo; index: number }) {
  const lang = repo.language ?? "Unknown";
  const color = languageColors[lang] ?? languageColors["default"];
  const updated = new Date(repo.updated_at).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group flex flex-col gap-3 p-5 rounded-2xl glass hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <FiBook size={15} className="text-muted-foreground flex-shrink-0" />
          <span className="text-sm font-semibold truncate group-hover:text-foreground transition-colors">
            {repo.name}
          </span>
        </div>
        <FiExternalLink
          size={14}
          className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
        />
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
        {repo.description ?? "No description provided."}
      </p>

      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/5 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <FiStar size={12} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FiGitBranch size={12} />
          {repo.forks_count}
        </span>
        <span className="ml-auto">{updated}</span>
      </div>
    </motion.a>
  );
}

export function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const username = personalInfo.githubUsername;

  useEffect(() => {
    async function fetchGithub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`/api/github?type=user&username=${username}`),
          fetch(`/api/github?type=repos&username=${username}`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API failed");
        const [userData, reposData] = await Promise.all([userRes.json(), reposRes.json()]);
        setStats(userData);
        setRepos(reposData.slice(0, 6));
      } catch {
        setError(true);
        // Use fallback placeholder data
        setStats({
          followers: 0,
          following: 0,
          public_repos: 0,
          avatar_url: "",
          name: "Bensingh J",
          bio: "AI & Data Science Engineer | Full Stack Developer",
        });
        setRepos([
          {
            id: 1,
            name: "electrical-shop-record-management",
            description: "Software system for managing electrical shop records, products, transactions, and customers.",
            html_url: personalInfo.social.github,
            stargazers_count: 0,
            forks_count: 0,
            language: "JavaScript",
            updated_at: new Date().toISOString(),
            topics: ["web-app", "management-system"],
          },
          {
            id: 2,
            name: "smart-public-complaint-management",
            description: "Web-based platform for submitting, tracking, and resolving public complaints.",
            html_url: personalInfo.social.github,
            stargazers_count: 0,
            forks_count: 0,
            language: "JavaScript",
            updated_at: new Date().toISOString(),
            topics: ["web-app", "complaint-management"],
          },
          {
            id: 3,
            name: "ai-based-campus-safety",
            description: "AI-based solution for campus safety through intelligent monitoring and alerts.",
            html_url: personalInfo.social.github,
            stargazers_count: 0,
            forks_count: 0,
            language: "Python",
            updated_at: new Date().toISOString(),
            topics: ["ai", "machine-learning", "safety"],
          },
          {
            id: 4,
            name: "blockchain-medical-records",
            description: "Blockchain-based secure medical records sharing with data integrity and privacy.",
            html_url: personalInfo.social.github,
            stargazers_count: 0,
            forks_count: 0,
            language: "Python",
            updated_at: new Date().toISOString(),
            topics: ["blockchain", "medical-records"],
          },
          {
            id: 5,
            name: "local-industry-support-platform",
            description: "Platform to connect, support, and promote local industries.",
            html_url: personalInfo.social.github,
            stargazers_count: 0,
            forks_count: 0,
            language: "JavaScript",
            updated_at: new Date().toISOString(),
            topics: ["web-app", "local-industry"],
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchGithub();
  }, [username]);

  const statCards = stats
    ? [
        { icon: FiCode, label: "Repositories", value: stats.public_repos },
        { icon: FiUsers, label: "Followers", value: stats.followers },
        { icon: FiActivity, label: "Following", value: stats.following },
        { icon: FiStar, label: "Contributions", value: "1000+" },
      ]
    : [];

  return (
    <section id="github" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Open Source
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight">
            GitHub Activity
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            Building in public. Check out my open source work and contributions.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="loading-spinner" />
          </div>
        ) : (
          <>
            {/* Stats Row */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-between gap-6 p-6 rounded-2xl glass mb-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-muted to-accent overflow-hidden flex items-center justify-center border-2 border-border">
                    {stats.avatar_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={stats.avatar_url} alt={stats.name} className="w-full h-full object-cover" />
                    ) : (
                      <FiGithub size={22} />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{stats.name}</p>
                    <p className="text-xs text-muted-foreground">{stats.bio ?? `@${username}`}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {statCards.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <p className="text-xl md:text-2xl font-bold">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-transform"
                >
                  <FiGithub size={16} />
                  View Profile
                </a>
              </motion.div>
            )}

            {error && (
              <p className="text-center text-xs text-muted-foreground mb-6">
                Showing placeholder data — connect to the GitHub API to display live stats.
              </p>
            )}

            {/* Repos Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
