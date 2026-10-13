import type { EducationItem, ExperienceItem } from '../types/portfolio'

export const educationData: EducationItem[] = [
  {
    id: "sandip-mba",
    degree: "MBA (Business Analytics)",
    field: "Business Analytics Specialization",
    institution: "Sandip University",
    duration: "2025 – Present",
    grade: "In Progress",
    highlights: [
      "Core Course Outcomes: Strategic Management, Business Automation, AI.",
      "Developing machine learning workflows and automated business decision frameworks.",
      "Practical coursework in predictive analytics, Power BI modeling, and Python."
    ]
  },
  {
    id: "loyola-bcom",
    degree: "B.COM (COMPUTERS)",
    field: "Computer Applications & Commerce",
    institution: "Andhra Loyola College",
    duration: "2022 – 2025",
    grade: "CGPA: 6.08",
    highlights: [
      "Course Outcomes: Accounts, R Programming, Python (basics).",
      "Foundation in financial accounting, business statistics, and computer databases.",
      "Practical labs in data organization, programming logic, and numerical analysis."
    ]
  },
  {
    id: "masters-hsc",
    degree: "HSC (M.E.C)",
    field: "Mathematics, Economics, Commerce",
    institution: "Masters C.Com Junior College",
    duration: "2022",
    grade: "72.6%",
    highlights: [
      "Course Outcomes: Maths, Economics, Commerce.",
      "Quantitative mathematics, micro/macro economic concepts, and commercial trade foundations."
    ]
  }
]

export const experienceData: ExperienceItem[] = [
  {
    id: "curriculab-project",
    role: "Project Developer — CurricuLab Student Management System",
    organization: "CurricuLab Academic Platform",
    type: "Academic & Systems Project",
    duration: "2025 – Present",
    description: "Built a student-centric study management system to simplify resource access, classroom integration, and AI-based academic support.",
    responsibilities: [
      "Designed and implemented study management workflows connecting student resources with classroom frameworks.",
      "Integrated Supabase relational databases for secure storage and synchronization.",
      "Integrated AI/ChatGPT APIs for on-demand academic explanation and student support.",
      "Gained deep experience in API integration, database management, teamwork, and real-world project deployment."
    ],
    skillsLearned: ["ChatGPT & AI APIs", "Supabase", "Antigravity IDE", "GitHub", "Teamwork"]
  },
  {
    id: "loan-eligibility-ai",
    role: "AI Developer — Loan Eligibility AI Assistant (ManiLoan)",
    organization: "FinTech & AI Initiative",
    type: "AI & FinTech Project",
    duration: "2025 – 2026",
    description: "Developed an AI-based support assistant to provide quick, reliable answers for loan seekers without requiring direct bank branch visits.",
    responsibilities: [
      "Engineered tailored system prompts and Groq API / LLM inference pipelines for banking inquiries.",
      "Implemented pre-qualification criteria evaluation across personal, home, and education loan categories.",
      "Integrated interactive chatbot and Stitch UI components via Antigravity IDE.",
      "Gained hands-on experience in prompt engineering, API handling, and banking customer AI solutions."
    ],
    skillsLearned: ["LLMs & Groq API", "Prompt Engineering", "Chatbot Development", "Stitch", "Bank AI Solutions"]
  },
  {
    id: "analytics-workshops",
    role: "Analytics & Applied AI Practical Sprints",
    organization: "Sandip University Department of Management",
    type: "Practical Academic Training",
    duration: "2025 – 2026",
    description: "Participated in faculty-led technical workshops covering Power BI dashboards, Generative AI business automation, and Machine Learning.",
    responsibilities: [
      "Engineered visual dashboards and DAX metrics during the Power BI Workshop (Dec 2025).",
      "Explored classification models and exploratory data mining using Orange Software (April 2026).",
      "Applied Generative AI techniques to automate business reporting and insight synthesis (April 2026)."
    ],
    skillsLearned: ["Power BI", "Orange ML", "Generative AI", "Data Mining", "Reporting"]
  }
]
