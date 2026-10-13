import type { SkillItem } from '../types/portfolio'

export const primarySkills: SkillItem[] = [
  {
    id: "excel",
    name: "MS Excel",
    category: "core",
    iconName: "excel",
    description: "Data Analysis, Formulas, Pivot Tables, Reporting",
    color: "#107C41"
  },
  {
    id: "power-bi",
    name: "Power BI",
    category: "core",
    iconName: "powerbi",
    description: "Data Modeling, DAX, Interactive BI Dashboards",
    color: "#F2C811"
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "core",
    iconName: "tableau",
    description: "Visual Storytelling, Analytics Dashboards",
    color: "#E97627"
  },
  {
    id: "python",
    name: "Python",
    category: "core",
    iconName: "python",
    description: "Data Preprocessing, Pandas, NumPy, Analytics",
    color: "#3776AB"
  },
  {
    id: "r-prog",
    name: "R Programming",
    category: "core",
    iconName: "r",
    description: "Statistical Computing, Exploratory Analysis",
    color: "#276DC3"
  },
  {
    id: "sql",
    name: "Basic SQL",
    category: "core",
    iconName: "sql",
    description: "Database Queries, Joins, Relational Data",
    color: "#00758F"
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    category: "core",
    iconName: "analysis",
    description: "Pattern Discovery, Business Reporting",
    color: "#7C3AED"
  },
  {
    id: "presentation",
    name: "Presentation",
    category: "core",
    iconName: "presentation",
    description: "Executive Summaries, Business Communication",
    color: "#D24726"
  }
]

export const toolsAndOthers = [
  { name: "MS Excel", icon: "FileSpreadsheet" },
  { name: "Power BI", icon: "BarChart3" },
  { name: "Tableau", icon: "PieChart" },
  { name: "Antigravity IDE", icon: "Code2" },
  { name: "Supabase", icon: "Database" },
  { name: "Groq API / LLMs", icon: "Cpu" },
  { name: "GitHub", icon: "GitBranch" },
  { name: "Orange Software", icon: "BrainCircuit" },
  { name: "VS Code", icon: "FileCode" },
  { name: "MS Office", icon: "Briefcase" }
]

export const resumeSkillsStructure = {
  programmingLanguages: [
    { name: "Python", level: "Proficient" },
    { name: "R Programming", level: "Intermediate" },
    { name: "Basic SQL", level: "Foundational" }
  ],
  tools: [
    { name: "MS Excel", level: "Advanced" },
    { name: "Power BI", level: "Proficient" },
    { name: "Tableau", level: "Intermediate" }
  ],
  softSkills: [
    "Analytical Thinking",
    "Teamwork",
    "Creative Thinking",
    "Problem Solving"
  ]
}

export const expandedSkillCategories = [
  {
    title: "Programming & Query Languages",
    description: "Scripting and database querying used for statistical analysis and data manipulation.",
    skills: ["Python (Pandas, NumPy, Preprocessing)", "R Programming (Statistical Computing)", "Basic SQL (Queries, Joins, Filtering)"]
  },
  {
    title: "BI & Visualization Tools",
    description: "Enterprise analytics tools transforming tabular metrics into actionable decisions.",
    skills: ["MS Excel (Pivot Tables, Lookup Formulas, Data Modeling)", "Power BI (Interactive Reports, DAX)", "Tableau (Visual Dashboards & Charts)"]
  },
  {
    title: "Applied AI & Development Tools",
    description: "Modern frameworks and developer tools leveraged across academic and FinTech projects.",
    skills: ["LLMs & Groq API Handling", "Antigravity IDE", "Supabase Database Integration", "GitHub Version Control", "Orange ML Software"]
  },
  {
    title: "Core Soft Skills & Methodologies",
    description: "Interpersonal and cognitive strengths demonstrated across team projects.",
    skills: ["Analytical Thinking", "Teamwork & Collaboration", "Creative Problem Solving", "Strategic Management", "Business Reporting"]
  }
]
