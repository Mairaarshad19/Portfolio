export const educationContent = {
  degree: "BS Computer Science",
  institution: "UET Lahore",
  year: "Expected July 2028",
  coursework: [
    "Design and Analysis of Algorithms",
    "Advanced Database Management Systems",
    "Theory of Automata",
    "Computer Organization and Assembly Language",
    "Object-Oriented Programming",
    "Artificial Intelligence",
    "Information Security",
    "Computer Networks",
  ],
  honors: "Honhaar Scholarship (fully funded)",
};

export const aboutContent = {
  paragraph: [
    "I'm a Computer Science student at UET Lahore, expected to graduate in 2028. Right now I split my time between two internships at FlyRank — one on backend AI engineering (Express.js, RAG pipelines, structured-output workflows) and one focused on AI fluency and workflow design. Alongside that, I'm building and maintaining a live production website for a freight forwarding client using Next.js 15 and TypeScript.",
    "I like backend work the most: API design, PostgreSQL schemas, and the layered architecture that keeps a codebase maintainable as it grows.",
  ],
  quickFacts: [
    { label: "Location", value: "Lahore, Pakistan" },
    { label: "Education", value: "BS CS, UET Lahore — Class of 2028" },
    { label: "Current Focus", value: "Backend + Full-Stack" },
  ],
};

export interface Experience {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export const experienceContent: Experience[] = [
  {
    role: "Backend AI Engineering Intern",
    company: "FlyRank",
    dates: "July 2025 – Present",
    bullets: [
      "Building and structuring API endpoints and payloads using Express.js prior to implementation",
      "Building and maintaining RAG (Retrieval-Augmented Generation) pipelines with source grounding and evaluation capability",
      "Developing structured-output pipelines and tool-calling workflows for agent tasks",
      "Constructing lightweight evaluation rubrics and test suites for backend workflows",
    ],
  },
  {
    role: "AI Fluency Intern",
    company: "FlyRank",
    dates: "July 2025 – Present",
    bullets: [
      "Documenting and executing a repeatable daily AI-assisted workflow with clear handoffs across tools",
      "Building and applying an evaluation checklist to critique AI-generated drafts for accuracy, context, and completeness",
      "Designing and publishing a capstone artifact with AI as a core development partner",
    ],
  },
  {
    role: "Startup Project Lead Intern",
    company: "Ustadam (AI-based EdTech startup)",
    dates: "June 2025 – August 2025",
    bullets: [
      "Planned the MVP roadmap for an AI-based EdTech platform across backend, frontend, database, and AI integration phases",
      "Designed system architecture, user flow diagrams, and relational database schema for a scalable platform",
      "Built a 5-year financial model covering operating costs, revenue forecasting, and ROI estimation",
      "Managed sprint cycles for a 4-member team through weekly task allocation and progress tracking",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
}

export const projectsContent: Project[] = [
  {
    name: "Allied Shipping Agency Website",
    description:
      "A live, production website for a freight forwarding and logistics company, built solo and actively maintained for a real client. Focused on performance, responsive design, and clean corporate UI/UX — from hero sections to sticky navigation to CTA-optimized layouts.",
    techStack: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    links: {
      live: "", // TODO: add live URL
    },
    featured: true,
  },
  {
    name: "QueryMind (SmartCRM)",
    description:
      "Co-designed a multi-paradigm data platform unifying relational (PostgreSQL), graph (Neo4j), and vector (Qdrant) databases under one natural-language query interface — no SQL, Cypher, or vector-search expertise required. Contributed to the layered system architecture and helped define an LLM-based intent classification system mapping queries to 17 CRM-specific intents.",
    techStack: ["PostgreSQL", "Neo4j", "Qdrant", "FastAPI", "Google Gemini", "Python"],
    links: {},
    featured: false,
  },
  {
    name: "Vulnerable-by-Design",
    description:
      "Built a cybersecurity training platform demonstrating 8+ OWASP Top 10 vulnerabilities (SQL Injection, XSS, IDOR, Broken Access Control) with a SIEM-style logging system processing 1000+ security events and a real-time incident response dashboard.",
    techStack: ["Python", "Flask", "SQLite"],
    links: {},
    featured: false,
  },
  {
    name: "VOXLINK",
    description:
      "Developed an offline, voice-controlled classroom automation system using Flutter and ESP32 with no dependency on internet or cloud APIs. Implemented on-device intent-matching across 114 phrase variations and Bluetooth Classic (SPP) communication for real-time hardware control.",
    techStack: ["Flutter", "ESP32", "Bluetooth Classic (SPP)", "Arduino C++"],
    links: {},
    featured: false,
  },
  {
    name: "Smart Emergency Response System",
    description:
      "Built a full-stack desktop app for ambulance dispatch and coverage analysis, implementing core data structures from scratch — Priority Queue, Graph, AVL Tree, Hash Table — with a Dijkstra's-algorithm routing engine and Google Maps integration for live tracking.",
    techStack: ["C#", ".NET", "MySQL", "Google Maps API"],
    links: {},
    featured: false,
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsContent: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C++", "C#", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js 15", "Express.js", "React", "Tailwind CSS", "FastAPI", "Flask", "Flutter"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Neo4j", "MySQL", "SQLite", "Qdrant (vector DB)"],
  },
  {
    category: "Tools & Practices",
    skills: [
      "Git/GitHub",
      "Docker",
      "Vercel",
      "RESTful API design",
      "Layered architecture (BL/DL/UI)",
      "Repository pattern",
    ],
  },
];

export const heroContent = {
  name: "Maira Arshad",
  role: "Backend-Leaning Full-Stack Developer",
  intro: [
    "BS Computer Science student at UET Lahore (2028), currently building backend systems and RAG pipelines at FlyRank, and shipping a live production website for a freight logistics client.",
    "I like working close to the database and the API layer.",
  ],
  buttons: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    { label: "Download Resume", href: "#", variant: "secondary" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Mairaarshad19",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mairaarshad/",
    },
    {
      label: "Email",
      href: "mailto:mairaarshad019@gmail.com",
    },
  ],
};