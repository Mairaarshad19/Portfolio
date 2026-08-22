export interface Certification {
  name: string;
  issuer: string;
}

export const educationContent = {
  degree: "BS Computer Science",
  institution: "UET Lahore",
  coursework: [
    "Programming Fundamentals",
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Database Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Software Engineering",
  ],
  certifications: [
    { name: "AI Fluency Framework & Foundations", issuer: "Anthropic" },
    { name: "SQL (Basic & Intermediate)", issuer: "HackerRank" },
    { name: "Claude 101", issuer: "Anthropic Academy" },
  ],
};

export const aboutContent = {
  paragraph: [
    "I'm a backend-focused full-stack developer with a strong pull toward backend systems, the part of an application most people never see, but where the real architecture decisions live. That interest took shape through coursework in algorithms and databases, and became concrete through internship work building production APIs.",
    "At FlyRank, I built RESTful API endpoints and RAG pipelines using Express.js and PostgreSQL, applying layered architecture and the repository pattern to keep systems maintainable as they grow. I independently built and deployed Allied Shipping Agency Website, a live production site for a real freight logistics client, using Next.js 15 end to end, from UI to deployment on Vercel.",
    "I care about writing code that's still legible months later: clear API contracts, sensible schema design, and architecture that doesn't need a rewrite the moment requirements shift. I'm currently looking for backend and full-stack roles where I can keep building systems that hold up in production.",
  ],
  journeyMilestones: [
    "CS @ UET Lahore",
    "Startup Lead Intern at UET Lahore",
    "Backend Engineering at FlyRank",
    "Live Project Shipped",
  ],
};

export interface Experience {
  role: string;
  company: string;
  workMode: string;
  dates: string;
  bullets: string[];
}

export const experienceContent: Experience[] = [
  {
    role: "Backend AI Engineering Intern",
    company: "FlyRank",
    workMode: "Remote",
    dates: "July 2026 – August 2026",
    bullets: [
      "Built and structured **RESTful API** endpoints and payloads using **Express.js**, defining error responses prior to implementation",
      "Built and maintained **RAG (Retrieval-Augmented Generation)** pipelines with source grounding and evaluation capability",
      "Developed structured-output pipelines and tool-calling workflows for **AI agent** tasks",
      "Constructed evaluation rubrics and test suites to validate backend workflow reliability",
    ],
  },
  {
    role: "AI Fluency Intern",
    company: "FlyRank",
    workMode: "Remote",
    dates: "July 2026 – August 2026",
    bullets: [
      "Documented and executed a repeatable daily **AI-assisted workflow** with clear handoffs across tools",
      "Built and applied an evaluation checklist to critique **AI-generated** drafts for accuracy, context, and completeness",
      "Designed and published a capstone artifact with AI as a core development partner",
    ],
  },
  {
    role: "Startup Project Lead Intern",
    company: "Ustadam (AI-based EdTech startup)",
    workMode: "Hybrid, UET Lahore",
    dates: "June 2025 – August 2025",
    bullets: [
      "Planned the MVP roadmap for an **AI-based EdTech platform** across backend, frontend, database, and AI integration phases",
      "Designed **system architecture**, user flow diagrams, and a relational **database schema** for a scalable platform",
      "Built a **5-year** financial model covering operating costs, revenue forecasting, and ROI estimation",
      "Managed sprint cycles for a **4-member team** through weekly task allocation and progress tracking",
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
      "A live, production website for a freight forwarding and logistics company, built solo and actively maintained for a real client, focused on performance, responsive design, and clean corporate UI/UX.",
    techStack: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    links: {
      live: "https://www.alliedshippingpk.com/",
      github: "https://github.com/Mairaarshad19/allied-shipping-website",
    },
    featured: true,
    screenshot: "/projects/allied-shipping.png",
    tagline: "Full-Stack Corporate Website || Freight & Logistics",
  },
  {
    name: "QueryMind (SmartCRM)",
    description:
      "Co-designed a multi-paradigm data platform unifying PostgreSQL, Neo4j, and Qdrant under one natural-language query interface, with no SQL or vector-search expertise required.",
    techStack: ["PostgreSQL", "Neo4j", "Qdrant", "FastAPI", "Google Gemini", "Python"],
    links: {
      github: "https://github.com/Mairaarshad19/QueryMind-SmartCRM",
      live: "", // leave empty/omit if no live demo — button only shows when this has a value
    },
    featured: false,
    screenshot: "/projects/querymind.png",
    tagline: "Multi-Paradigm Data Platform || CRM & AI",
  },
  {
    name: "Smart Emergency Response System",
    description:
      "Built a full-stack desktop app for ambulance dispatch and coverage analysis, implementing core data structures from scratch: Priority Queue, Graph, AVL Tree, Hash Table, with Dijkstra's routing and Google Maps integration for live tracking.",
    techStack: ["C#", ".NET", "MySQL", "Google Maps API"],
    links: {
      github: "https://github.com/Mairaarshad19/Smart_Emergency_Response_System",
    },
    featured: false,
    tagline: "Full-Stack Desktop App || Emergency Services",
  },
  {
    name: "VOXLINK",
    description:
      "Developed an offline, voice-controlled classroom automation system using Flutter and ESP32, featuring on-device intent-matching across 114 phrase variations and Bluetooth Classic (SPP) for real-time hardware control.",
    techStack: ["Flutter", "ESP32", "Bluetooth Classic (SPP)", "Arduino C++"],
    links: {
      github: "https://github.com/Mairaarshad19/VOXLINK-VoiceAutomation",
    },
    featured: false,
    screenshot: "/projects/voxlink.png",
    tagline: "IoT Voice Automation || Classroom Systems",
  },
];

export interface ServiceOffer {
  title: string;
  description: string;
  icon: string;
}

/** Client-facing services. Each combines the deliverable with an honest reason to trust it. */
export const servicesContent: ServiceOffer[] = [
  {
    title: "Backend & API Development",
    description:
      "Building reliable APIs that handle real traffic without breaking, with clean, layered architecture designed to scale as usage grows.",
    icon: "Server",
  },
  {
    title: "Database Design & Architecture",
    description:
      "Designing databases properly from day one, preventing data loss and structural issues that come from rushed schema decisions.",
    icon: "Database",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Complete web applications built end-to-end with Next.js and React, backed by the same production-grade backend discipline.",
    icon: "Globe",
  },
  {
    title: "Secure, Production-Ready Code",
    description:
      "Writing systems that don't break in production, authentication, environment handling, and error cases considered from the start, not patched in later.",
    icon: "ShieldCheck",
  },
];

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

/** Full skill breakdown, ordered by real-world usage (most-used first). */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C++", "C#"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    skills: [
      "Next.js",
      "Express.js",
      "React",
      "Node.js",
      "FastAPI",
      "Flask",
      "Tailwind CSS",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "Neo4j", "Qdrant"],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    skills: ["Git/GitHub", "Docker", "Vercel"],
  },
  {
    id: "apis",
    label: "APIs & Integrations",
    skills: ["REST API", "Google Gemini API"],
  },
];

export const heroContent = {
  name: "Maira Arshad",
  role: "I build **reliable APIs**, **well-structured databases**, and systems that hold up under **real traffic**, not just something that works once.",
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
