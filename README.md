# Mani Shankar — Business Analytics Portfolio Website

A modern, responsive, high-performance portfolio website built for **Mr. Mani Shankar Veeramalla**, Business Analytics Student (MBA at Sandip University).

Designed with a premium dark-teal and mint-green visual identity, interactive data visualizations, deep-dive project modals, and dynamic calculators.

---

## 🌟 Key Features

- **Hero Section:** Dark teal visual identity (`#061B22` / `#092830`), mint-cyan gradient headline, official portrait, handwritten accent script ("Business Analytics Growth"), and glassmorphism statistics card.
- **About Me & Skills Matrix:** Clean dual-column section featuring professional background, 8 dedicated skill cards (MS Excel, Power BI, Tableau, Python, R Programming, Basic SQL, Data Analysis, Presentation), and a modern tools tray.
- **Featured Projects with Interactive Modals:**
  - **Interactive Analytics Portfolio Platform:** High-performance web application built with React 19, TypeScript, Tailwind CSS, Recharts, and deployed live on Render ([https://manishankar-portfolio.onrender.com](https://manishankar-portfolio.onrender.com)).
  - **CurricuLab - Student Management System:** Academic resource platform with ChatGPT, Antigravity IDE, Supabase, and REST APIs, deployed live on Render ([https://curriculab-sj6g.onrender.com/](https://curriculab-sj6g.onrender.com/)).
  - **Loan Eligibility AI Assistant (ManiLoan):** AI-based banking assistant powered by Groq API and LLMs, deployed live on Render ([https://maniloan.onrender.com/](https://maniloan.onrender.com/)).
  - **Loan Default Prediction:** Machine learning credit risk classification pipeline.
- **Interactive Simulators:** Embedded within project modals using **Recharts** charts (ROC/risk distribution, category breakdown, EMI curves) and live risk/EMI calculation sliders.
- **Education & Experience Timelines:** Sandip University (MBA in Business Analytics), Andhra Loyola College (B.Com Computers), Masters C.Com Junior College, and practical leadership milestones.
- **Verified Certifications:** Power BI Workshop, Generative AI, and Machine Learning using Orange Software.
- **Contact & Direct Channels:** Form validation, direct email copy-to-clipboard, phone, location, and social links.
- **Resume Integration:** Live PDF download and inline modal preview serving `public/resume.pdf`.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts & Visualizations:** [Recharts](https://recharts.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or newer) installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/Veeramallamani/ManiShankar_Portfolio.git

# Navigate into the project folder
cd ManiShankar_Portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Building for Production

```bash
# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```text
Porfolio/
├── public/
│   ├── favicon.svg          # Custom geometric "M" brand icon
│   ├── mani_portrait.jpg    # Professional portrait
│   └── resume.pdf           # Curriculum Vitae PDF
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── SkillIcon.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── SkillsExpanded.tsx
│   │   ├── EducationExperience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── ResumeModal.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   └── SocialIcons.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── education.ts
│   │   └── certifications.ts
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
