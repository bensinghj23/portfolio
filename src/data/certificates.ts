export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  pdf?: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    id: "unity-essentials-pathway",
    title: "Unity Essentials Pathway",
    issuer: "Unity Technologies",
    date: "15 October 2025",
    description: "Completed Unity's foundational learning pathway for creating interactive real-time experiences.",
    skills: ["Unity", "Game Development", "Real-Time 3D"],
    image: "/assets/unity.png",
    credentialUrl: "https://www.credly.com/go/SBtzPuXI",
  },
  {
    id: "startuptn-idea-presentation",
    title: "Dream Kanyakumari 2026 Idea Presentation",
    issuer: "StartupTN & Noorul Islam Centre for Higher Education",
    date: "14 February 2026",
    description: "Participated in the Dream Kanyakumari 2026 idea presentation event.",
    skills: ["Entrepreneurship", "Idea Presentation", "Innovation"],
    image: "/assets/TNstartup.png",
  },
  {
    id: "tn-impact-industrial-hackathon",
    title: "TN-IMPACT 2026 Industrial Hackathon",
    issuer: "TANCAM, KIT & Dassault Systèmes",
    date: "14 March 2026",
    description: "Participated in the Tamil Nadu Industry Modernization, Problem-solving and Advanced Creative Tech industrial hackathon.",
    skills: ["Problem Solving", "Industrial Innovation", "Hackathon"],
    image: "/assets/TN impact.png",
  },
  {
    id: "voyce-blockchain-paper-presentation",
    title: "VOYCE'26 Blockchain Paper Presentation",
    issuer: "Mar Ephraem College of Engineering and Technology",
    date: "27 March 2026",
    description: "Presented a paper on blockchain-based medical records at the VOYCE'26 national-level technical symposium.",
    skills: ["Blockchain", "Medical Records", "Research Presentation"],
    image: "/assets/symbosyam.jpg",
  },
  {
    id: "vision2venture-startup-idea-presentation",
    title: "Vision2Venture Startup Idea Presentation",
    issuer: "St. Xavier's Catholic College of Engineering",
    date: "29 August 2025",
    description: "Participated in the Vision2Venture intra-college startup idea presentation competition.",
    skills: ["Startup Ideation", "Pitching", "Innovation"],
    image: "/assets/sx startup.png",
  },
  {
    id: "robotics-innovation-challenge",
    title: "Robotics Innovation Challenge — Second Prize",
    issuer: "St. Xavier's Catholic College of Engineering",
    date: "17 April 2026",
    description: "Received second prize in the Robotics Innovation Challenge during Tech Fest 2026.",
    skills: ["Robotics", "Innovation", "Problem Solving"],
    image: "/assets/robotics.jpg",
  },
  {
    id: "neurax-technical-hackathon",
    title: "NeuraX'26 Technical Hackathon",
    issuer: "St. Xavier's Catholic College of Engineering",
    date: "5 February 2026",
    description: "Participated in NeuraX'26, an eight-hour intra-college technical hackathon.",
    skills: ["Hackathon", "Technical Problem Solving", "Collaboration"],
    image: "/assets/NeuraX.png",
  },
  {
    id: "icccda-conference",
    title: "ICCCDA'26 Conference Participation",
    issuer: "St. Xavier's Catholic College of Engineering",
    date: "12–14 March 2026",
    description: "Participated in the 2nd International Conference on Cognitive Computing and Data Analytics.",
    skills: ["Cognitive Computing", "Data Analytics", "Research"],
    image: "/assets/ICCDA.png",
  },
  {
    id: "hackfest-2026",
    title: "HackFest'2026",
    issuer: "St. Xavier's Catholic College of Engineering",
    date: "9–11 March 2026",
    description: "Participated in the HackFest'2026 intra-college technical hackathon.",
    skills: ["Hackathon", "Software Development", "Teamwork"],
    image: "/assets/Hackfest'26'.png",
  },
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development — Second Prize",
    issuer: "St. Xavier's Catholic College of Engineering",
    date: "17 April 2026",
    description: "Received second prize in the Full Stack Web Development event during Tech Fest 2026.",
    skills: ["Full Stack Development", "Web Development", "Problem Solving"],
    image: "/assets/fullstack.jpg",
  },
  {
    id: "ak-infopark-full-stack-internship",
    title: "Full Stack Web Development Internship",
    issuer: "AK Infopark",
    date: "December 2025",
    description: "Completed a Full Stack Web Development internship at AK Infopark.",
    skills: ["Full Stack Development", "Web Development", "Professional Experience"],
    image: "/assets/Akinfopark intern.jpeg",
  },
  {
    id: "engineers-day-quiz",
    title: "Engineer's Day Quiz Competition",
    issuer: "ACM & ACM-W, St. Xavier's Catholic College of Engineering",
    date: "15 September 2025",
    description: "Received a certificate of achievement for the Engineer's Day 2025 quiz competition.",
    skills: ["Technical Quiz", "Computer Science", "Problem Solving"],
    image: "/assets/ACM quiz.png",
  },
  {
    id: "engineers-day-idea-presentation",
    title: "Engineer's Day Idea Presentation Competition",
    issuer: "ACM & ACM-W, St. Xavier's Catholic College of Engineering",
    date: "15 September 2025",
    description: "Received a certificate of achievement for the Engineer's Day 2025 idea presentation competition.",
    skills: ["Idea Presentation", "Innovation", "Communication"],
    image: "/assets/acm idea.png",
  },
];
