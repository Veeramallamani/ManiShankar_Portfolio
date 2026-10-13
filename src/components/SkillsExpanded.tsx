import React from 'react'
import { Database, BarChart2, Briefcase, Cpu, CheckCircle } from 'lucide-react'
import { expandedSkillCategories } from '../data/skills'

export const SkillsExpanded: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Data Analysis':
        return <Database className="w-5 h-5 text-[#42E6B0]" />
      case 'Business Intelligence':
        return <BarChart2 className="w-5 h-5 text-[#27C5E8]" />
      case 'Business Analysis & Strategy':
        return <Briefcase className="w-5 h-5 text-[#F2C811]" />
      case 'Tools & Environment':
        return <Cpu className="w-5 h-5 text-[#C084FC]" />
      default:
        return <Database className="w-5 h-5 text-[#42E6B0]" />
    }
  }

  return (
    <section id="skills-expanded" className="py-20 bg-white border-t border-[#DDE7EC] text-[#102536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7F9] text-[#0089A5] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102536] tracking-tight mb-4">
            Technical Expertise & Analytical Domains
          </h2>
          <p className="text-sm sm:text-base text-[#61758A] leading-relaxed">
            Categorized competency framework covering quantitative modeling, business intelligence dashboards, and strategic analytical decision support.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {expandedSkillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#42E6B0] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#102536]">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#61758A] mb-5 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills Pill List */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:border-[#42E6B0] transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-[#0089A5]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
