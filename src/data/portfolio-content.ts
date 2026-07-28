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