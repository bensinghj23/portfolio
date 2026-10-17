export const personalInfo = {
  name: "BENSINGH",
  displayName: "Bensingh",
  title: "AI Engineer & Full Stack Developer",
  tagline:
    "Building AI-powered software, scalable web applications, and digital experiences that solve real-world problems.",
  email: "bensinghj23@gmail.com",
  phone: undefined as string | undefined,
  location: "India",
  available: true,
  roles: [
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Creative Video Editor",
  ],
  social: {
    github: "https://github.com/bensinghj23",
    linkedin: "https://www.linkedin.com/in/bensinghj/",
    instagram: "https://www.instagram.com/lord._.rento/",
    instagramEditing: "https://www.instagram.com/itx._.rento/",
    twitter: "https://x.com/rento_editz",
    email: "mailto:bensinghj23@gmail.com",
  },
  resumeUrl: "/resume.pdf",
  githubUsername: "bensinghj23",
};

export const aboutStats = [
  { label: "Projects", value: 15, suffix: "+" },
  { label: "Certificates", value: 20, suffix: "+" },
  { label: "Internships", value: 2, suffix: "+" },
  { label: "GitHub Contributions", value: 1000, suffix: "+" },
];

export const skills = {
  Frontend: [
    { name: "React", icon: "react", level: 95, color: "#61DAFB" },
    { name: "Next.js", icon: "nextdotjs", level: 90, color: "#000000" },
    { name: "Tailwind CSS", icon: "tailwindcss", level: 92, color: "#06B6D4" },
    { name: "TypeScript", icon: "typescript", level: 88, color: "#3178C6" },
  ],
  Backend: [
    { name: "Node.js", icon: "nodedotjs", level: 88, color: "#339933" },
    { name: "Express", icon: "express", level: 85, color: "#000000" },
    { name: "MongoDB", icon: "mongodb", level: 82, color: "#47A248" },
    { name: "Firebase", icon: "firebase", level: 78, color: "#FFCA28" },
  ],
  AI: [
    { name: "Python", icon: "python", level: 90, color: "#3776AB" },
    { name: "TensorFlow", icon: "tensorflow", level: 80, color: "#FF6F00" },
    { name: "Pandas", icon: "pandas", level: 82, color: "#150458" },
    { name: "NumPy", icon: "numpy", level: 85, color: "#013243" },
    { name: "Scikit-learn", icon: "scikitlearn", level: 78, color: "#F7931E" },
  ],
  Tools: [
    { name: "Git", icon: "git", level: 90, color: "#F05032" },
    { name: "GitHub", icon: "github", level: 92, color: "#181717" },
    { name: "VS Code", icon: "visualparadigm", level: 95, color: "#007ACC" },
    { name: "Figma", icon: "figma", level: 75, color: "#F24E1E" },
    { name: "Docker", icon: "docker", level: 68, color: "#2496ED" },
    { name: "Postman", icon: "postman", level: 85, color: "#FF6C37" },
  ],
};

export const projects = [
  {
    id: "ai-portfolio-platform",
    title: "AI Portfolio Platform",
    description:
      "An intelligent portfolio platform that uses AI to match developers with recruiters, auto-generate project summaries, and personalise content for each visitor.",
    category: "AI",
    image: "/projects/ai-portfolio.jpg",
    technologies: ["Next.js", "Python", "OpenAI API", "Pinecone", "Tailwind"],
    status: "In Progress",
    progress: 60,
    github: "https://github.com/bensingh/ai-portfolio-platform",
    live: null,
    caseStudy: "/projects/ai-portfolio-platform",
    featured: true,
    overview:
      "An AI-driven platform that intelligently presents portfolio content — generating personalised summaries for recruiters, matching skills to job descriptions, and surfacing the most relevant projects for each visitor.",
    features: [
      "AI-generated project summaries via OpenAI GPT-4",
      "Semantic search across portfolio projects with Pinecone",
      "Visitor intent detection to personalise content",
      "Recruiter dashboard with candidate matching",
      "Real-time analytics on engagement and interest signals",
    ],
    challenges: [
      "Generating accurate, non-hallucinated project descriptions",
      "Low-latency semantic search for real-time personalisation",
    ],
    solutions: [
      "Implemented retrieval-augmented generation (RAG) with Pinecone vector store",
      "Used streaming responses and edge caching for sub-200ms latency",
    ],
    architecture:
      "Next.js App Router frontend, Python FastAPI backend, OpenAI GPT-4 for generation, Pinecone for vector search, deployed on Vercel + Railway.",
    timeline: [
      { date: "Mar 2025", title: "Concept & Architecture" },
      { date: "Apr 2025", title: "RAG Pipeline Built" },
      { date: "Jun 2025", title: "Frontend Integration" },
      { date: "Aug 2025", title: "Beta Launch" },
    ],
    gallery: [],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Platform",
    description:
      "Intelligent conversational AI platform with natural language processing, context memory, and multi-model support.",
    category: "AI",
    image: "/projects/chatbot.jpg",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Redis"],
    status: "In Progress",
    progress: 65,
    github: "https://github.com/bensingh/ai-chatbot",
    live: "https://ai-chatbot-bs.vercel.app",
    caseStudy: "/projects/ai-chatbot",
    featured: true,
    overview:
      "An AI-powered chatbot platform that understands context, remembers conversation history, and provides intelligent multi-turn responses.",
    features: [
      "Natural language understanding with transformer models",
      "Context-aware multi-turn conversations",
      "Multi-language support (12+ languages)",
      "Real-time analytics dashboard",
      "Custom training on domain-specific data",
    ],
    challenges: [
      "Training accurate NLP models with limited labelled data",
      "Maintaining conversation context across sessions",
    ],
    solutions: [
      "Used transfer learning with pre-trained transformer models",
      "Implemented Redis-based session memory with TTL",
    ],
    architecture:
      "Python FastAPI backend with TensorFlow model serving, React frontend, Redis for session storage, PostgreSQL for analytics.",
    timeline: [
      { date: "Feb 2024", title: "Model Training Started" },
      { date: "Apr 2024", title: "First Prototype" },
      { date: "Jul 2024", title: "Beta Testing" },
    ],
    gallery: [],
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "An Awwwards-inspired personal portfolio with GSAP animations, Three.js effects, AI chat assistant, and admin dashboard.",
    category: "Web App",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Tailwind"],
    status: "Active",
    progress: 90,
    github: "https://github.com/bensingh/portfolio",
    live: "https://bensingh.dev",
    caseStudy: "/projects/portfolio-website",
    featured: true,
    overview:
      "An award-winning style portfolio with smooth animations, dark/light mode, AI chat assistant, and a secure admin dashboard.",
    features: [
      "Smooth scroll with Lenis",
      "Framer Motion page transitions",
      "AI Chat Assistant",
      "Admin Dashboard with cookie-based auth",
      "Dark/Light mode",
    ],
    challenges: [
      "Performance optimisation while maintaining complex animations",
      "SEO optimisation with dynamic content",
    ],
    solutions: [
      "Lazy loading, code splitting, and dynamic imports",
      "Dynamic metadata generation and structured data",
    ],
    architecture:
      "Next.js App Router with React Server Components, Framer Motion for animations, GSAP for complex sequences, Tailwind v4.",
    timeline: [
      { date: "Jun 2024", title: "Design & Planning" },
      { date: "Jul 2024", title: "Development" },
      { date: "Aug 2024", title: "Launch" },
    ],
    gallery: [],
  },
  {
    id: "machine-learning-projects",
    title: "Machine Learning Projects",
    description:
      "A curated collection of ML experiments — from classic algorithms to deep learning models — built with real-world datasets.",
    category: "AI",
    image: "/projects/ml-projects.jpg",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Jupyter"],
    status: "Active",
    progress: 80,
    github: "https://github.com/bensingh/ml-projects",
    live: null,
    caseStudy: "/projects/machine-learning-projects",
    featured: true,
    overview:
      "A growing repository of machine learning experiments covering supervised/unsupervised learning, deep neural networks, and NLP — each with clean notebooks, documentation, and reproducible results.",
    features: [
      "Sentiment analysis on social media data",
      "Image classification with CNNs",
      "Time series forecasting for financial data",
      "Recommendation engine using collaborative filtering",
      "Text summarisation with transformer fine-tuning",
    ],
    challenges: [
      "Handling imbalanced datasets in classification tasks",
      "Preventing overfitting on small labelled datasets",
    ],
    solutions: [
      "Applied SMOTE oversampling and class-weight adjustments",
      "Used dropout regularisation and data augmentation",
    ],
    architecture:
      "Python-based notebooks with Scikit-learn and TensorFlow/Keras. Each experiment is self-contained with its own data pipeline, model, and evaluation metrics.",
    timeline: [
      { date: "Jan 2023", title: "Repository Created" },
      { date: "Jun 2023", title: "10 Experiments Complete" },
      { date: "Jan 2024", title: "Deep Learning Module Added" },
      { date: "Jun 2024", title: "NLP Module Added" },
    ],
    gallery: [],
  },
  {
    id: "computer-vision-projects",
    title: "Computer Vision Projects",
    description:
      "Real-time object detection, face recognition, and image segmentation projects using OpenCV and deep learning.",
    category: "AI",
    image: "/projects/cv-projects.jpg",
    technologies: ["Python", "OpenCV", "YOLO", "TensorFlow", "MediaPipe"],
    status: "Active",
    progress: 70,
    github: "https://github.com/bensingh/cv-projects",
    live: null,
    caseStudy: "/projects/computer-vision-projects",
    featured: false,
    overview:
      "A collection of computer vision applications including real-time object detection with YOLOv8, pose estimation with MediaPipe, face recognition, and image segmentation for practical use cases.",
    features: [
      "Real-time object detection with YOLOv8",
      "Hand gesture recognition with MediaPipe",
      "Face detection and recognition pipeline",
      "Background removal and image segmentation",
      "OCR for document digitisation",
    ],
    challenges: [
      "Achieving real-time performance on consumer hardware",
      "Handling varied lighting and occlusion conditions",
    ],
    solutions: [
      "Optimised inference with ONNX runtime and model quantisation",
      "Applied histogram equalisation and adaptive thresholding for pre-processing",
    ],
    architecture:
      "Python scripts with OpenCV for frame processing, YOLO/MediaPipe for inference, optimised for real-time performance with ONNX runtime.",
    timeline: [
      { date: "Mar 2023", title: "Object Detection Module" },
      { date: "Jul 2023", title: "Face Recognition Added" },
      { date: "Nov 2023", title: "Pose Estimation Module" },
      { date: "Mar 2024", title: "OCR Pipeline Added" },
    ],
    gallery: [],
  },
  {
    id: "open-source-contributions",
    title: "Open Source Contributions",
    description:
      "Active contributions to open source repositories — bug fixes, feature additions, documentation, and community engagement.",
    category: "Open Source",
    image: "/projects/opensource.jpg",
    technologies: ["React", "Python", "TypeScript", "Node.js", "GitHub"],
    status: "Active",
    progress: 85,
    github: "https://github.com/bensingh",
    live: null,
    caseStudy: "/projects/open-source-contributions",
    featured: false,
    overview:
      "1000+ contributions across multiple open source projects. Focus areas include developer tooling, AI/ML libraries, and React ecosystem packages.",
    features: [
      "Bug fixes and performance improvements across popular repos",
      "Documentation rewrites for better onboarding",
      "New feature additions with full test coverage",
      "Community support and issue triage",
      "Maintaining personal open source packages",
    ],
    challenges: [
      "Understanding large codebases quickly before contributing",
      "Meeting varying code quality and style standards",
    ],
    solutions: [
      "Built a systematic codebase-reading workflow before any PR",
      "Adopted project-specific linting and testing standards",
    ],
    architecture:
      "Contributions span multiple tech stacks. Each PR includes: issue reference, change description, test evidence, and documentation update.",
    timeline: [
      { date: "2022", title: "First Open Source PR Merged" },
      { date: "2023", title: "500+ Contributions" },
      { date: "2024", title: "1000+ Contributions" },
      { date: "2025", title: "Maintaining Own OSS Packages" },
    ],
    gallery: [],
  },
];

export const liveProjects = [
  {
    name: "AI Portfolio Platform",
    progress: 60,
    status: "Active",
    description: "AI-driven recruiter matching and content personalisation",
  },
  {
    name: "AI Chatbot Platform",
    progress: 65,
    status: "Active",
    description: "NLP-powered conversational AI",
  },
  {
    name: "Personal Portfolio",
    progress: 90,
    status: "Active",
    description: "This website — animated & feature-rich",
  },
  {
    name: "Computer Vision Projects",
    progress: 70,
    status: "Active",
    description: "YOLOv8, MediaPipe, and OCR pipelines",
  },
];

export const timeline = [
  {
    year: "2020",
    title: "Started Programming",
    description:
      "Began my journey with Python and web development fundamentals. Built first CLI tools and simple websites.",
    icon: "code",
  },
  {
    year: "2021",
    title: "First Web Dev Internship",
    description:
      "Web Development Intern at a local startup, building real-world applications with React and Node.js.",
    icon: "briefcase",
  },
  {
    year: "2022",
    title: "Java Enterprise Internship",
    description:
      "Enterprise Java development internship, working on backend systems and RESTful API design.",
    icon: "coffee",
  },
  {
    year: "2023",
    title: "Hackathons & Open Source",
    description:
      "Participated in 5+ hackathons, winning awards for innovative AI solutions. Started contributing to open source.",
    icon: "trophy",
  },
  {
    year: "2024",
    title: "AI & Full Stack Mastery",
    description:
      "Deep diving into AI/ML — TensorFlow, LLMs, and RAG systems — while building production full-stack applications.",
    icon: "brain",
  },
  {
    year: "2025",
    title: "Current & Future Goals",
    description:
      "Building AI-powered SaaS products, contributing to open source, and seeking impactful internship opportunities.",
    icon: "rocket",
  },
];

export const achievements = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
    type: "certificate",
    description:
      "Advanced 5-course specialisation covering neural networks, CNNs, RNNs, and ML project structuring.",
    image: "/achievements/ai-cert.jpg",
  },
  {
    title: "Hackathon Winner — 1st Place",
    issuer: "TechFest 2024",
    date: "2024",
    type: "hackathon",
    description:
      "First place award for building an AI-powered healthcare diagnostic tool in a 48-hour hackathon.",
    image: "/achievements/hackathon.jpg",
  },
  {
    title: "Meta Full Stack Certificate",
    issuer: "Meta / Coursera",
    date: "2023",
    type: "certificate",
    description:
      "Professional certificate in full stack web development covering React, Node.js, and databases.",
    image: "/achievements/meta-cert.jpg",
  },
  {
    title: "1000+ GitHub Contributions",
    issuer: "GitHub",
    date: "2024",
    type: "award",
    description:
      "Achieved 1000+ contributions milestone through consistent open source work and personal projects.",
    image: "/achievements/opensource.jpg",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    type: "certificate",
    description:
      "Foundational cloud certification covering AWS core services, security, architecture, and pricing.",
    image: "/achievements/aws-cert.jpg",
  },
  {
    title: "Google ML Bootcamp",
    issuer: "Google Developers",
    date: "2023",
    type: "hackathon",
    description:
      "Completed Google's intensive ML bootcamp with hands-on TensorFlow and Keras projects.",
    image: "/achievements/google-ml.jpg",
  },
];

export const blogPosts = [
  {
    id: "building-ai-apps",
    title: "Building AI-Powered Applications with Python",
    excerpt:
      "A comprehensive guide to integrating machine learning models into production web applications — from training to deployment.",
    content: `
# Building AI-Powered Applications with Python

Integrating machine learning into web applications has never been more accessible. In this guide, we walk through the complete journey from training a model to serving it in a production environment.

## Why Python for AI Web Apps?

Python dominates the AI/ML landscape for good reason. Its ecosystem — TensorFlow, PyTorch, scikit-learn, FastAPI — makes it the ideal choice for building intelligent backends.

## Architecture Overview

A typical AI-powered web application consists of:

- **Model Training Pipeline** — Data preprocessing, training, evaluation
- **Model Serving API** — FastAPI endpoint that accepts inputs and returns predictions
- **Frontend Application** — React or Next.js interface consuming the API

## Step 1: Training Your Model

\`\`\`python
import tensorflow as tf
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10, validation_data=(X_test, y_test))
model.save('model.h5')
\`\`\`

## Step 2: Serving with FastAPI

\`\`\`python
from fastapi import FastAPI
import tensorflow as tf
import numpy as np

app = FastAPI()
model = tf.keras.models.load_model('model.h5')

@app.post("/predict")
async def predict(data: dict):
    features = np.array(data['features']).reshape(1, -1)
    prediction = model.predict(features)
    return {"prediction": float(prediction[0][0])}
\`\`\`

## Conclusion

With Python's rich ecosystem and FastAPI's performance, building production-ready AI applications is straightforward. The key is good data pipelines and solid model evaluation practices.
    `,
    category: "AI",
    tags: ["Python", "Machine Learning", "Web Development", "FastAPI"],
    date: new Date("2024-07-15"),
    readTime: 8,
    image: "/blog/ai-apps.jpg",
    author: "Bensingh",
  },
  {
    id: "nextjs-performance",
    title: "Optimizing Next.js Applications for Production",
    excerpt:
      "Learn the best practices for building blazing-fast Next.js applications — image optimisation, code splitting, caching strategies, and Core Web Vitals.",
    content: `
# Optimizing Next.js Applications for Production

Performance is not optional — it directly impacts user experience and SEO rankings. Here's how to make your Next.js app production-ready.

## Core Web Vitals

Google's Core Web Vitals measure real-world user experience:

- **LCP** (Largest Contentful Paint) — loading performance
- **FID** (First Input Delay) — interactivity
- **CLS** (Cumulative Layout Shift) — visual stability

## Image Optimisation

Next.js's Image component handles lazy loading, format conversion, and responsive sizing automatically:

\`\`\`jsx
import Image from 'next/image'

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority
      placeholder="blur"
    />
  )
}
\`\`\`

## Code Splitting with Dynamic Imports

Heavy components should only load when needed:

\`\`\`tsx
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/Chart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
})
\`\`\`

## Conclusion

With Next.js's built-in optimisations and these techniques, achieving a Lighthouse score above 95 is very achievable.
    `,
    category: "Web Development",
    tags: ["Next.js", "Performance", "React", "Core Web Vitals"],
    date: new Date("2024-06-20"),
    readTime: 6,
    image: "/blog/nextjs-perf.jpg",
    author: "Bensingh",
  },
  {
    id: "ml-beginners",
    title: "Machine Learning for Beginners: A Practical Guide",
    excerpt:
      "Start your ML journey with hands-on examples, real datasets, and real-world project ideas — no PhD required.",
    content: `
# Machine Learning for Beginners: A Practical Guide

Machine learning feels intimidating at first, but with the right mental model and tools, anyone with programming knowledge can get started.

## The ML Mental Model

At its core, ML is about finding patterns in data:

- You have **data** (examples with answers)
- You train a **model** (mathematical function)
- The model learns to **predict** answers for new examples

## Your First ML Model

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

iris = load_iris()
X, y = iris.data, iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")
\`\`\`

## Next Steps

- Learn NumPy and Pandas for data manipulation
- Study linear algebra and probability basics
- Build 3-5 projects with real datasets from Kaggle
- Explore deep learning with TensorFlow or PyTorch

The best way to learn ML is by doing. Start with a problem you care about.
    `,
    category: "AI",
    tags: ["Machine Learning", "Python", "Tutorial", "Beginners"],
    date: new Date("2024-05-10"),
    readTime: 10,
    image: "/blog/ml-beginners.jpg",
    author: "Bensingh",
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Software Engineer at Google",
    content:
      "Bensingh is one of the most talented young developers I've had the pleasure of mentoring. His ability to combine AI concepts with full-stack development is impressive, and his code quality is production-ready.",
    avatar: "/testimonials/priya.jpg",
    company: "Google",
  },
  {
    name: "Rahul Mehta",
    role: "CTO at TechStartup India",
    content:
      "We brought Bensingh on as an intern and were blown away by his initiative. He shipped features independently, wrote clean code, and even improved our deployment pipeline. Exceptional talent.",
    avatar: "/testimonials/rahul.jpg",
    company: "TechStartup",
  },
  {
    name: "Dr. Ananya Patel",
    role: "Professor, Computer Science",
    content:
      "Bensingh consistently goes beyond the curriculum. His hackathon projects demonstrate a rare ability to identify real problems and build elegant technical solutions. A future industry leader.",
    avatar: "/testimonials/ananya.jpg",
    company: "University",
  },
  {
    name: "James Wilson",
    role: "Open Source Maintainer",
    content:
      "Bensingh's contributions to our project were thoughtful, well-documented, and immediately mergeable. He understands open source culture and writes code that future maintainers will thank him for.",
    avatar: "/testimonials/james.jpg",
    company: "Open Source",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    institution: "Anna University, Tamil Nadu",
    year: "2021 – 2025",
    description:
      "Specialisation in Artificial Intelligence and Machine Learning. Coursework covered data structures, algorithms, DBMS, computer networks, machine learning, deep learning, and software engineering.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Computer Science",
    institution: "State Board of Tamil Nadu",
    year: "2019 – 2021",
    description:
      "Completed with distinction. Core subjects included Computer Science, Mathematics, Physics, and Chemistry.",
  },
];

export const internships = [
  {
    role: "Full Stack Web Development Intern",
    company: "Local Tech Startup, Tamil Nadu",
    duration: "Jun 2021 – Aug 2021",
    description:
      "Built and maintained React.js front-end features and Node.js/Express REST APIs. Worked with MongoDB for data persistence and contributed to the company's customer-facing dashboard.",
  },
  {
    role: "Java Enterprise Development Intern",
    company: "Software Solutions Firm, Tamil Nadu",
    duration: "May 2022 – Jul 2022",
    description:
      "Developed backend modules using Core Java and Spring Boot. Gained hands-on experience with RESTful API design, relational databases, and enterprise software architecture patterns.",
  },
];

export const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Custom ML models, NLP pipelines, computer vision systems, and RAG-based AI applications tailored to your use case.",
    icon: "brain",
  },
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications using React, Next.js, Node.js, and MongoDB — from design to deployment.",
    icon: "code",
  },
  {
    title: "API & Backend Development",
    description:
      "Scalable REST and GraphQL APIs with Node.js, Express, FastAPI, and Python — built for performance and reliability.",
    icon: "server",
  },
  {
    title: "Frontend UI/UX Development",
    description:
      "Premium, responsive interfaces with Tailwind CSS, Framer Motion, and GSAP — pixel-perfect across all devices.",
    icon: "layout",
  },
  {
    title: "Data Analysis & Visualisation",
    description:
      "Python-powered data pipelines with Pandas, NumPy, and Matplotlib — turning raw data into actionable insights.",
    icon: "chart",
  },
  {
    title: "Creative Video Editing",
    description:
      "Professional video editing with DaVinci Resolve and Premiere Pro — reels, motion graphics, and brand content.",
    icon: "coffee",
  },
];
