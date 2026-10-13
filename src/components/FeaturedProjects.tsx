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
    <section id="projects" className="py-20 lg:py-28 bg-[#071F27] border-t border-[#164652] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#164652]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#092830] border border-[#164652] shadow-sm flex items-center justify-center text-[#42E6B0]">
              <Folder className="w-5 h-5 text-[#42E6B0]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#42E6B0]">
                PORTFOLIO WORK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Featured Projects
              </h2>
            </div>
          </div>

          {/* Right link: "View All Projects ->" */}
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#42E6B0] hover:text-white transition-colors self-start sm:self-auto group cursor-pointer"
          >
            <span>{showAll ? 'Show Featured Only' : 'View All Projects'}</span>
            <ArrowRight className="w-4 h-4 text-[#42E6B0] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Project Cards Grid */}
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
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#092830] border border-[#164652] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0D3038] text-[#42E6B0] flex items-center justify-center shrink-0 border border-[#42E6B0]/30">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Interactive Analytical Deep Dives
              </p>
              <p className="text-xs text-slate-300">
                Click on any project card above to explore problem statements, datasets, methodologies, and interactive charts.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0D3038] text-[#42E6B0] border border-[#164652] shrink-0">
            {displayedProjects.length} Projects Available
          </span>
        </div>

      </div>
    </section>
  )
}
