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
    "I'm a Computer Science undergraduate with a strong pull toward backend systems — the part of an application most people never see, but where the real architecture decisions live. That interest took shape through coursework in algorithms and database systems, and became concrete through hands-on internship work building production APIs.",
    "At FlyRank, I built RESTful API endpoints and RAG pipelines using Express.js and PostgreSQL, applying layered architecture and the repository pattern to keep systems maintainable as they grow. I independently built and deployed Allied Shipping Agency Website, a live production site for a real freight logistics client, using Next.js 15 end to end — from UI to CI/CD deployment on Vercel. I've also worked across relational, graph, and vector databases on QueryMind, a multi-paradigm CRM platform unifying PostgreSQL, Neo4j, and Qdrant behind one interface.",
    "I care about writing code that's still legible six months later — clear API contracts, sensible schema design, and architecture that doesn't need a rewrite the moment requirements shift. I'm currently looking for backend and full-stack engineering roles where I can keep building systems that actually hold up in production.",
  ],
  journeyMilestones: [
    "CS @ UET Lahore",
    "First Internship — Ustadam",
    "Backend Engineering — FlyRank",
    "Live Client Project Shipped",
  ],
  certifications: [
    "AI Fluency Framework & Foundations — Anthropic",
    "SQL (Basic & Intermediate) — HackerRank",
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
  roles: [
    "Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "API Designer",
  ],
  role: "Computer Science undergraduate with **4 internships** across backend engineering, AI workflows, and mobile development. Built and shipped **5 projects**, including a live production website using Next.js 15, RESTful APIs and RAG pipelines with Express.js and PostgreSQL, and a multi-database AI platform. BSc Computer Science at **UET Lahore**, Class of 2028.",
  intro: [],
  buttons: [
    { label: "Download Resume", href: "/Maira_Arshad_Resume.pdf", variant: "primary" },
    { label: "Contact Me", href: "#contact", variant: "secondary" },
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
