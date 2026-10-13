import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedProjects } from './components/FeaturedProjects'
import { SkillsExpanded } from './components/SkillsExpanded'
import { EducationExperience } from './components/EducationExperience'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ProjectModal } from './components/ProjectModal'
import { ResumeModal } from './components/ResumeModal'
import type { Project } from './types/portfolio'


export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#071F27] text-[#F5FAFC] selection:bg-[#42E6B0]/30 selection:text-[#42E6B0]">
      {/* Top Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      <main>
        {/* 1. Hero Section matching reference mockup */}
        <Hero />

        {/* 2. About Me & My Skills side-by-side matching mockup */}
        <About />

        {/* 3. Featured Projects section matching mockup 3 cards */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Expanded Skills & Competencies Domain Matrix */}
        <SkillsExpanded />

        {/* 5. Education & Practical Experience Milestones */}
        <EducationExperience />

        {/* 6. Certifications & Co-Curricular Recognitions */}
        <Certifications />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Details & Simulator Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Resume PDF Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  )
}

export default App
