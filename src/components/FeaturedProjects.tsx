import React, { useState } from 'react'
import { Folder, ArrowRight, Layers } from 'lucide-react'
import { projectsData } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import type { Project } from '../types/portfolio'

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll
    ? projectsData
    : projectsData.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F5F8FA] border-t border-[#DDE7EC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching mockup */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#DDE7EC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DDE7EC] shadow-sm flex items-center justify-center text-[#0089A5]">
              <Folder className="w-5 h-5 text-[#0089A5]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#61758A]">
                PORTFOLIO WORK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102536] tracking-tight">
                Featured Projects
              </h2>
            </div>
          </div>

          {/* Right link matching reference image: "View All Projects ->" */}
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0089A5] hover:text-[#061B22] transition-colors self-start sm:self-auto group"
          >
            <span>{showAll ? 'Show Featured Only' : 'View All Projects'}</span>
            <ArrowRight className="w-4 h-4 text-[#0089A5] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Project Cards Grid (matching 3 cards in mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Supporting notice banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#DDE7EC] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EBF7F9] text-[#0089A5] flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#102536]">
                Interactive Analytical Deep Dives
              </p>
              <p className="text-xs text-[#61758A]">
                Click on any project card above to explore problem statements, datasets, methodologies, and interactive charts.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F5F8FA] text-[#0089A5] border border-[#DDE7EC] shrink-0">
            {displayedProjects.length} Projects Available
          </span>
        </div>

      </div>
    </section>
  )
}
