import { ArrowRight, TrendingUp, Building2, BarChart3, GraduationCap, ExternalLink, Globe } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import type { Project } from '../types/portfolio'


interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getIcon = () => {
    switch (project.icon) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#42E6B0]" />
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#27C5E8]" />
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#F2C811]" />
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#C084FC]" />
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#42E6B0]" />
      default:
        return <TrendingUp className="w-5 h-5 text-[#42E6B0]" />
    }
  }

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative bg-[#092830] hover:bg-[#0D3038] border border-[#164652] hover:border-[#42E6B0]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#42E6B0]/10 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
    >
      {/* Top row matching mockup: Icon on left, Title, and Arrow circle button on right */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#071F27] border border-[#164652] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              {getIcon()}
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#42E6B0]/90 block">
                {project.category.split('|')[0].trim()}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#42E6B0] transition-colors leading-snug">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Circular arrow button matching mockup */}
          <div className="w-9 h-9 rounded-full bg-[#071F27] border border-[#164652] group-hover:border-[#42E6B0] group-hover:bg-[#42E6B0] flex items-center justify-center shrink-0 transition-all duration-300">
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#071F27] transition-colors group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Short Project Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.shortDescription}
        </p>
      </div>

      {/* Bottom tags & modal trigger prompt */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#071F27] text-slate-300 border border-[#164652]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-[#071F27] text-slate-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action bar */}
        <div className="pt-3 border-t border-[#164652]/70 flex items-center justify-between text-xs text-slate-400">
          <span className="text-[#42E6B0] font-semibold group-hover:underline flex items-center gap-1">
            <span>View Analysis Details</span>
            <ArrowRight className="w-3 h-3" />
          </span>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#42E6B0]/15 hover:bg-[#42E6B0]/25 text-[#42E6B0] hover:text-white border border-[#42E6B0]/30 transition-colors font-medium text-[11px]"
                title="Open Live Website / Demo"
              >
                <span>Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white p-1"
                title="GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
