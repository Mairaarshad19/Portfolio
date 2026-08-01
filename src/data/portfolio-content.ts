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
    "I'm a Computer Science student at UET Lahore, expected to graduate in 2028. I completed two internships at FlyRank — one on backend AI engineering (Express.js, RAG pipelines, structured-output workflows) and one focused on AI fluency and workflow design. I also built and maintained a live production website for a freight forwarding client using Next.js 15 and TypeScript.",
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
    dates: "July 2026 – August 2026",
    bullets: [
      "Built and structured API endpoints and payloads using Express.js prior to implementation",
      "Built and maintained RAG (Retrieval-Augmented Generation) pipelines with source grounding and evaluation capability",
      "Developed structured-output pipelines and tool-calling workflows for agent tasks",
      "Constructed lightweight evaluation rubrics and test suites for backend workflows",
    ],
  },
  {
    role: "AI Fluency Intern",
    company: "FlyRank",
    dates: "July 2026 – August 2026",
    bullets: [
      "Documented and executed a repeatable daily AI-assisted workflow with clear handoffs across tools",
      "Built and applied an evaluation checklist to critique AI-generated drafts for accuracy, context, and completeness",
      "Designed and published a capstone artifact with AI as a core development partner",
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
  tagline: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
  screenshot?: string;
}

export const projectsContent: Project[] = [
  {
    name: "Allied Shipping Agency Website",
    description:
      "A live, production website for a freight forwarding and logistics company, built solo and actively maintained for a real client — focused on performance, responsive design, and clean corporate UI/UX.",
    techStack: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    links: {
      live: "https://allied-shipping-agency.vercel.app/",
      github: "https://github.com/Mairaarshad19/allied-shipping-website",
    },
    featured: true,
    screenshot: "/projects/allied-shipping.png",
    tagline: "Full-Stack Corporate Website || Freight & Logistics",
  },
  {
    name: "QueryMind (SmartCRM)",
    description:
      "Co-designed a multi-paradigm data platform unifying PostgreSQL, Neo4j, and Qdrant under one natural-language query interface — no SQL or vector-search expertise required.",
    techStack: ["PostgreSQL", "Neo4j", "Qdrant", "FastAPI", "Google Gemini", "Python"],
    links: {},
    featured: false,
    screenshot: "/projects/querymind.png",
    tagline: "Multi-Paradigm Data Platform || CRM & AI",
  },
  {
    name: "Smart Emergency Response System",
    description:
      "Built a full-stack desktop app for ambulance dispatch and coverage analysis, implementing core data structures from scratch — Priority Queue, Graph, AVL Tree, Hash Table — with Dijkstra's routing and Google Maps integration for live tracking.",
    techStack: ["C#", ".NET", "MySQL", "Google Maps API"],
    links: {
      github: "https://github.com/Mairaarshad19/Smart_Emergency_Response_System",
    },
    featured: false,
    screenshot: "/projects/smart-emergency.png",
    tagline: "Full-Stack Desktop App || Emergency Services",
  },
  {
    name: "VOXLINK",
    description:
      "Developed an offline, voice-controlled classroom automation system using Flutter and ESP32 — featuring on-device intent-matching across 114 phrase variations and Bluetooth Classic (SPP) for real-time hardware control.",
    techStack: ["Flutter", "ESP32", "Bluetooth Classic (SPP)", "Arduino C++"],
    links: {
      github: "https://github.com/Mairaarshad19/VOXLINK-VoiceAutomation",
    },
    featured: false,
    screenshot: "/projects/voxlink.png",
    tagline: "IoT Voice Automation || Classroom Systems",
  },
];

export interface Capability {
  title: string;
  description: string;
  icon: string;
}

export const capabilitiesContent: Capability[] = [
  {
    title: "Backend API Development",
    description:
      "Designing and building RESTful APIs with Express.js and FastAPI — from endpoint structuring and payload design to authentication and error handling. Applied this at FlyRank building structured-output pipelines and RAG systems.",
    icon: "Server",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Building complete web applications end-to-end with Next.js, TypeScript, and PostgreSQL — built and maintained a live production site for a freight logistics client, from UI to deployment.",
    icon: "Globe",
  },
  {
    title: "Database Design & Architecture",
    description:
      "Designing relational schemas and working across relational, graph, and vector databases (PostgreSQL, Neo4j, Qdrant) — applied in QueryMind's multi-paradigm CRM platform.",
    icon: "Database",
  },
  {
    title: "AI-Integrated Workflows",
    description:
      "Building structured-output pipelines, RAG systems, and evaluation rubrics for AI-assisted workflows — applied during my internship at FlyRank.",
    icon: "Cpu",
  },
];

export interface SkillTab {
  id: string;
  label: string;
  skills: string[];
}

export const skillsTabs: SkillTab[] = [
  {
    id: "languages-frameworks",
    label: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C++",
      "C#",
      "Next.js",
      "Express.js",
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Flask",
      "Flutter",
    ],
  },
  {
    id: "tools-databases",
    label: "Tools & Databases",
    skills: [
      "PostgreSQL",
      "Neo4j",
      "MySQL",
      "SQLite",
      "Qdrant",
      "Git/GitHub",
      "Docker",
      "Vercel",
    ],
  },
];

export const heroContent = {
  name: "Maira Arshad",
  role: "Computer Science undergraduate building backend systems and full-stack web applications. Interned at FlyRank building RESTful APIs, RAG pipelines, and structured-output workflows with Express.js and PostgreSQL. Independently built and deployed a production website for a freight logistics client using Next.js 15. BSc Computer Science at UET Lahore, Class of 2028.",
  intro: [],
  buttons: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    { label: "Get in Touch", href: "#contact", variant: "secondary" },
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
