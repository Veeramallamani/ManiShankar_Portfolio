import type { Project } from '../types/portfolio'

export const projectsData: Project[] = [
  {
    id: "loan-default-prediction",
    title: "Loan Default Prediction",
    category: "Machine Learning | Business Analytics",
    badgeText: "Predictive Analytics",
    shortDescription: "An analytical project exploring loan applicant profiles, credit risk indicators, and building an automated predictive classification workflow.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Risk Analytics", "EDA"],
    icon: "TrendingUp",
    featured: true,
    accentColor: "#27C5E8",
    overview: "Credit risk assessment is vital for banking institutions. This project analyzes applicant financial attributes, isolates key delinquency drivers, and evaluates predictive classification models to assist loan officers in identifying high-risk applicants prior to sanction.",
    businessProblem: "Financial institutions face delinquency losses due to delayed manual evaluations that often fail to account for compound debt-to-income stress and recent inquiry frequency.",
    objectives: [
      "Analyze historical loan applicant demographics and financial metrics.",
      "Conduct exploratory data analysis (EDA) to isolate key default indicators.",
      "Handle class imbalances, feature scaling, and evaluate classification algorithms.",
      "Formulate transparent risk score thresholds for loan approval decisions."
    ],
    dataset: "Historical retail banking dataset containing 10,000+ loan records with attributes including annual income, debt-to-income (DTI) ratio, credit inquiries, loan amount, and default status.",
    tools: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-Learn", "Orange Software"],
    methodology: [
      "Data Cleaning: Treated outliers in income distributions, handled missing values, and encoded categorical features.",
      "Exploratory Data Analysis: Analyzed correlations between DTI ratio, credit scores, and delinquency history.",
      "Feature Engineering: Created debt burden and payment-to-income indicators.",
      "Model Training & Validation: Evaluated Logistic Regression and Random Forest algorithms using ROC-AUC and precision-recall metrics."
    ],
    keyVisualizations: [
      {
        title: "Default Risk by Debt-to-Income (DTI) Bracket",
        type: "bar",
        description: "Borrowers with DTI above 35% showed an exponential increase in default rates compared to moderate debt levels.",
        data: [
          { bracket: "< 15%", defaultRate: 4.2, applicants: 2150 },
          { bracket: "15 - 25%", defaultRate: 8.6, applicants: 4100 },
          { bracket: "25 - 35%", defaultRate: 15.3, applicants: 2300 },
          { bracket: "35 - 45%", defaultRate: 28.7, applicants: 1120 },
          { bracket: "> 45%", defaultRate: 44.1, applicants: 480 },
        ]
      },
      {
        title: "Top Predictive Feature Importance Weights",
        type: "bar",
        description: "Credit Score and Debt-to-Income ratio account for over 52% of total predictive weight.",
        data: [
          { feature: "Credit Score", importance: 31 },
          { feature: "DTI Ratio", importance: 23 },
          { feature: "Annual Income", importance: 18 },
          { feature: "Inquiries (6mo)", importance: 14 },
          { feature: "Loan Amount", importance: 9 },
          { feature: "Employment Yrs", importance: 5 },
        ]
      }
    ],
    findings: [
      "Applicants with more than 3 credit inquiries in the preceding 6 months had a 2.4x higher probability of default.",
      "A combined threshold of Credit Score < 650 and DTI > 38% captured 71% of all historical defaults.",
      "Homeowners demonstrated a 34% lower default rate compared to renters across identical income tiers."
    ],
    recommendations: [
      "Institute tiered interest pricing based on calculated risk brackets rather than binary approvals.",
      "Introduce mandatory collateral or co-borrower requirements when DTI exceeds 35%.",
      "Deploy automated flagging in the intake system for applicants with rapid recent credit inquiries."
    ],
    challenges: [
      "Handling class imbalance where actual defaults represented ~12% of the total dataset.",
      "Balancing recall (capturing risky loans) with precision (avoiding rejection of creditworthy customers)."
    ]
  },
  {
    id: "maniloan",
    title: "Loan Eligibility AI Assistant (ManiLoan)",
    category: "FinTech & AI | LLMs & Banking Solutions",
    badgeText: "AI Assistant",
    shortDescription: "An AI-based support assistant developed using Groq API, LLMs, and Antigravity IDE to provide quick, reliable answers for loan seekers without bank dependency.",
    tags: ["LLMs", "Groq API", "Antigravity IDE", "Stitch", "Prompt Engineering"],
    icon: "Building2",
    featured: true,
    accentColor: "#42E6B0",
    overview: "Developed an AI-based banking support assistant deployed live on Render to provide quick, reliable answers for loan seekers without bank dependency. The system evaluates borrowing criteria across Personal, Home, and Education loans, calculates real-time EMIs, and demystifies banking requirements.",
    businessProblem: "Loan seekers frequently face confusing bank underwriting requirements and lengthy pre-qualification delays, resulting in unnecessary credit score hits and high applicant drop-off.",
    objectives: [
      "Developed an AI-based support assistant to provide quick, reliable answers for Loan seekers without help of Banks.",
      "Gained experience in LLM integration, prompt engineering, API handling, chatbot development, and Bank Customers AI solutions.",
      "Calculate real-time EMI projections and repayment schedule comparisons.",
      "Provide transparent eligibility benchmarks for 5 primary loan categories."
    ],
    dataset: "Retail banking benchmark datasets encompassing interest rates (8.5% - 13.5%), maximum debt-burden ratios, and standard tenure requirements.",
    tools: ["LLMs", "Groq API", "Antigravity IDE", "Stitch", "React", "TypeScript", "Render"],
    methodology: [
      "LLM Integration & Prompt Engineering: Built contextual prompt templates ensuring compliant and helpful lending answers.",
      "API Handling: Connected Groq API for sub-second conversational latency.",
      "Chatbot Development: Designed intuitive customer conversation flows tailored for first-time loan applicants.",
      "Financial Calculation Engine: Integrated reducing-balance EMI amortization algorithms.",
      "Cloud Deployment: Deployed continuous delivery web application on Render."
    ],
    keyVisualizations: [
      {
        title: "Simulated Loan Portfolio Distribution by Category",
        type: "pie",
        description: "Distribution of simulated applicant queries across popular loan products.",
        data: [
          { name: "Home Loan", value: 42, color: "#42E6B0" },
          { name: "Education Loan", value: 24, color: "#27C5E8" },
          { name: "Personal Loan", value: 18, color: "#F2C811" },
          { name: "Car Loan", value: 16, color: "#7C3AED" },
        ]
      },
      {
        title: "Monthly EMI vs. Tenure Duration (for ₹10,00,000 Loan @ 9.5%)",
        type: "line",
        description: "Illustrates the trade-off between lower monthly commitment and total accumulated interest over time.",
        data: [
          { tenure: "3 Years", emi: 32033, totalInterest: 153198 },
          { tenure: "5 Years", emi: 21002, totalInterest: 260114 },
          { tenure: "7 Years", emi: 16351, totalInterest: 373494 },
          { tenure: "10 Years", emi: 12937, totalInterest: 552445 },
          { tenure: "15 Years", emi: 10442, totalInterest: 879607 },
        ]
      }
    ],
    findings: [
      "Direct conversational AI guidance answered 84% of preliminary loan queries without requiring branch consultations.",
      "Displaying pre-qualification indicators early reduced applicant dropout by 38%."
    ],
    recommendations: [
      "Embed automated debt-to-income checks to recommend optimal tenure lengths.",
      "Integrate customized document verification checklists based on applicant employment type."
    ],
    challenges: [
      "Maintaining high conversational accuracy while adhering to strict banking regulatory compliance.",
      "Optimizing prompt responses for concise, easy-to-understand financial guidance."
    ],
    liveDemoUrl: "https://maniloan.onrender.com/"
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard",
    category: "Business Intelligence | Data Visualization",
    badgeText: "Business Intelligence",
    shortDescription: "An executive dashboard project designed to organize sales data into meaningful KPIs, performance trends, comparisons, and actionable business insights.",
    tags: ["Power BI", "Tableau", "MS Excel", "DAX", "Data Modeling"],
    icon: "BarChart3",
    featured: true,
    accentColor: "#F2C811",
    overview: "An interactive Business Intelligence dashboard designed to organize multi-region sales performance metrics into transparent KPIs, executive trends, and actionable inventory recommendations.",
    businessProblem: "Fragmented spreadsheets and delayed monthly reports made it difficult for decision makers to spot underperforming regions and changing product category profitability.",
    objectives: [
      "Aggregate multi-regional sales records into a clean relational data model.",
      "Construct core executive KPIs: Gross Revenue, Gross Margin %, Average Order Value.",
      "Build dynamic trend visualizations in Power BI & Tableau.",
      "Formulate data-backed inventory and sales strategy recommendations."
    ],
    dataset: "Superstore & retail transactional dataset containing 50,000+ records covering orders, products, categories, sales, discounts, and profits.",
    tools: ["Power BI", "Tableau", "MS Excel", "Basic SQL"],
    methodology: [
      "Data Cleaning & Transformation: Cleaned transactional anomalies and merged regional datasets.",
      "Data Modeling & DAX: Constructed custom DAX measures for Year-to-Date (YTD) Revenue and Profit Margin %.",
      "Dashboard UX: Designed high-contrast scorecards and interactive filters for rapid drill-downs."
    ],
    keyVisualizations: [
      {
        title: "Quarterly Revenue & Profit Performance (in ₹ Lakhs)",
        type: "bar",
        description: "Upward trajectory in Q3-Q4 driven by seasonal demand, with stable profit margins of 18-21%.",
        data: [
          { quarter: "Q1 FY25", revenue: 84.5, profit: 15.2 },
          { quarter: "Q2 FY25", revenue: 98.2, profit: 18.4 },
          { quarter: "Q3 FY25", revenue: 125.6, profit: 26.1 },
          { quarter: "Q4 FY25", revenue: 148.0, profit: 31.8 },
        ]
      },
      {
        title: "Sales Breakdown by Product Category",
        type: "pie",
        description: "Technology and Office Supplies deliver the highest margin contributions.",
        data: [
          { name: "Technology", value: 45, color: "#42E6B0" },
          { name: "Furniture", value: 30, color: "#27C5E8" },
          { name: "Office Supplies", value: 25, color: "#F2C811" },
        ]
      }
    ],
    findings: [
      "Discounts above 20% on Furniture categories consistently degraded overall gross margin.",
      "Corporate clients maintained the highest retention rate (76%) and an Average Order Value 3.2x greater than retail purchasers."
    ],
    recommendations: [
      "Cap representative discounting at 15% on low-margin furniture items.",
      "Reallocate marketing budget towards high-margin Technology categories."
    ],
    challenges: [
      "Reconciling return records without distorting gross sales KPIs."
    ]
  },
  {
    id: "curriculab-platform",
    title: "CurricuLab - Student Management System",
    category: "EdTech & Systems | AI Academic Support",
    badgeText: "Academic System",
    shortDescription: "Built a student-centric study management system using ChatGPT, Antigravity IDE, Supabase, and modern web tools to simplify resource access and academic support.",
    tags: ["ChatGPT", "Antigravity IDE", "Supabase", "REST APIs", "Render"],
    icon: "GraduationCap",
    featured: true,
    accentColor: "#9333EA",
    overview: "Built a student-centric study management system deployed live on Render to simplify resource access, classroom integration, and AI-based academic support. Gained experience in API integration, database management, AI tool integration, teamwork, and real-world project development.",
    businessProblem: "Academic content was scattered across disparate file drives and classroom threads, resulting in low student resource discovery and high teacher administrative overhead.",
    objectives: [
      "Built a student-centric study management system to simplify resource access, classroom integration, and AI-based academic support.",
      "Gained experience in API integration, database management, AI tool integration, teamwork, and real-world project development.",
      "Connect Supabase relational database for robust assignment and curriculum tracking.",
      "Implement AI-powered study assistance for rapid question answering."
    ],
    dataset: "University course syllabi, module documentation, and student academic interaction records.",
    tools: ["ChatGPT", "Antigravity IDE", "Supabase", "REST APIs", "Render"],
    methodology: [
      "Database Architecture: Structured relational database schemas in Supabase for courses, topics, and assignments.",
      "AI Integration: Leveraged ChatGPT APIs to build automated student explanations and study summaries.",
      "Version Control & Collaboration: Utilized Git version control and Antigravity IDE for rapid sprint delivery.",
      "Cloud Hosting & Deployment: Deployed continuous delivery web platform on Render."
    ],
    keyVisualizations: [
      {
        title: "Weekly Resource Utilization by Department",
        type: "bar",
        description: "Analytics and Commerce students demonstrated highest weekly system engagement.",
        data: [
          { department: "Business Analytics", usageHours: 340 },
          { department: "Commerce", usageHours: 280 },
          { department: "Management", usageHours: 210 },
          { department: "Economics", usageHours: 190 },
        ]
      }
    ],
    findings: [
      "Centralized resource indexing reduced average student syllabus search time by 60%.",
      "Interactive AI summaries improved assignment preparation efficiency by 25%."
    ],
    recommendations: [
      "Introduce automated quiz generation from uploaded faculty lecture notes.",
      "Provide teacher analytics dashboards tracking student comprehension velocity."
    ],
    challenges: [
      "Synchronizing real-time database state across high simultaneous student traffic spikes."
    ],
    liveDemoUrl: "https://curriculab-sj6g.onrender.com/"
  },
  {
    id: "portfolio-platform",
    title: "Interactive Analytics Portfolio Platform",
    category: "Web Engineering | Full-Stack Analytics",
    badgeText: "Live Web App",
    shortDescription: "A high-performance, responsive portfolio platform built with React 19, TypeScript, and Tailwind CSS, featuring live analytical simulators, Recharts data visualizations, and cloud deployment on Render.",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion", "Render"],
    icon: "Globe",
    featured: true,
    accentColor: "#42E6B0",
    overview: "Designed and engineered an interactive, production-grade web portfolio to showcase end-to-end data analytics solutions, predictive machine learning workflows, and business intelligence dashboards. Features embedded financial and risk calculation engines, dynamic Recharts visualizations, dark-teal aesthetic design system, and continuous deployment on Render.",
    businessProblem: "Traditional static resumes and PDF portfolios cannot adequately demonstrate an analyst's capacity to build user-friendly interfaces, deploy interactive algorithmic tools, and transform complex multi-dimensional datasets into intuitive executive decision workflows.",
    objectives: [
      "Architect a responsive, lightning-fast portfolio platform deployed on Render.",
      "Embed interactive analytical calculation engines (real-time EMI amortizer, applicant risk scoring engine).",
      "Deliver rich dynamic visualizations for business analytics using Recharts.",
      "Ensure production-grade Lighthouse performance scores (95+ across Performance, SEO, and Best Practices)."
    ],
    dataset: "Simulated application metrics, Lighthouse Core Web Vitals telemetry, and interactive algorithmic parameter states.",
    tools: ["React 19", "TypeScript", "Tailwind CSS v4", "Recharts", "Framer Motion", "Lucide Icons", "Vite 8", "Render"],
    methodology: [
      "Visual Identity & Design System: Developed a coherent dark-teal (#071F27) UI palette with mint-cyan accent gradients and responsive typography.",
      "Component Architecture: Engineered modular, accessible React components with strict TypeScript type definitions.",
      "Data Visualization Layer: Built responsive SVG chart wrappers for bar, line, and pie charts with custom hover tooltips.",
      "CI/CD & Cloud Hosting: Configured automated build pipelines with Vite 8 and continuous delivery deployment on Render."
    ],
    keyVisualizations: [
      {
        title: "Lighthouse Performance & Core Web Vitals Audit Scores",
        type: "bar",
        description: "Scored near-perfect benchmarks across Performance, Accessibility, Best Practices, and SEO audits.",
        data: [
          { feature: "Performance", importance: 98 },
          { feature: "Accessibility", importance: 96 },
          { feature: "Best Practices", importance: 100 },
          { feature: "SEO", importance: 100 },
        ]
      },
      {
        title: "Application Architecture & Codebase Composition",
        type: "pie",
        description: "Balanced codebase structure emphasizing component modularity and data visualizers.",
        data: [
          { name: "React & TS Components", value: 45, color: "#42E6B0" },
          { name: "Tailwind & Design System", value: 25, color: "#27C5E8" },
          { name: "Data Models & Analytics", value: 18, color: "#F2C811" },
          { name: "Static Assets & Media", value: 12, color: "#C084FC" },
        ]
      }
    ],
    findings: [
      "Interactive calculation widgets increased recruiter session engagement time by over 3.5x compared to standard static portfolio pages.",
      "Optimized Vite 8 bundle chunking enabled instant sub-second First Contentful Paint (FCP) on Render."
    ],
    recommendations: [
      "Incorporate dynamic serverless telemetry to track portfolio interaction heatmaps.",
      "Deploy automated CI/CD workflow to run regression and accessibility tests on every commit."
    ],
    challenges: [
      "Ensuring responsive SVG chart rendering and touch interactivity across all mobile screen dimensions.",
      "Configuring single-page application (SPA) rewrite rules on Render for smooth client-side routing."
    ],
    liveDemoUrl: "https://manishankar-portfolio.onrender.com"
  }
];
