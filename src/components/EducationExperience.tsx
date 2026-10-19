import React, { useState } from 'react'
import { GraduationCap, Briefcase, Building, Award, Check, ExternalLink } from 'lucide-react'
import { educationData, experienceData } from '../data/education'

export const EducationExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'education' | 'experience'>('both')

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#071F27] border-t border-[#164652] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#092830] border border-[#164652] text-[#42E6B0] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Academic & Practical Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Education & Practical Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Academic grounding in business analytics combined with hands-on leadership in data acquisition, AI systems development, and university technical workshops.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'both'
                  ? 'bg-[#0D3038] text-[#42E6B0] border border-[#42E6B0]/60 shadow-sm'
                  : 'bg-[#092830] text-slate-300 hover:text-white border border-[#164652]'
              }`}
            >
              All Milestones
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-[#0D3038] text-[#42E6B0] border border-[#42E6B0]/60 shadow-sm'
                  : 'bg-[#092830] text-slate-300 hover:text-white border border-[#164652]'
              }`}
            >
              Education
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-[#0D3038] text-[#42E6B0] border border-[#42E6B0]/60 shadow-sm'
                  : 'bg-[#092830] text-slate-300 hover:text-white border border-[#164652]'
              }`}
            >
              Practical Projects
            </button>
          </div>
        </div>

        {/* Two Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: Education */}
          {(activeTab === 'both' || activeTab === 'education') && (
            <div className={`space-y-6 ${activeTab === 'education' ? 'lg:col-span-2 max-w-3xl mx-auto w-full' : ''}`}>
              <div className="flex items-center gap-3 pb-3 border-b border-[#164652]">
                <div className="w-9 h-9 rounded-xl bg-[#092830] border border-[#164652] shadow-sm flex items-center justify-center text-[#42E6B0]">
                  <GraduationCap className="w-5 h-5 text-[#42E6B0]" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-6 rounded-2xl bg-[#092830] border border-[#164652] shadow-md hover:border-[#42E6B0]/60 transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#0D3038] text-[#42E6B0] border border-[#42E6B0]/30">
                        {edu.duration}
                      </span>
                      {edu.grade && (
                        <span className="text-xs font-semibold text-cyan-200">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-[#27C5E8] mb-2">
                      {edu.field}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
                      <Building className="w-3.5 h-3.5 text-[#42E6B0]" />
                      <span>{edu.institution}</span>
                    </div>

                    {edu.highlights && (
                      <ul className="space-y-2 pt-3 border-t border-[#164652]">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#42E6B0] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Experience & Practical Learning */}
          {(activeTab === 'both' || activeTab === 'experience') && (
            <div className={`space-y-6 ${activeTab === 'experience' ? 'lg:col-span-2 max-w-3xl mx-auto w-full' : ''}`}>
              <div className="flex items-center gap-3 pb-3 border-b border-[#164652]">
                <div className="w-9 h-9 rounded-xl bg-[#092830] border border-[#164652] shadow-sm flex items-center justify-center text-[#42E6B0]">
                  <Briefcase className="w-5 h-5 text-[#42E6B0]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Practical Learning & Leadership
                </h3>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 rounded-2xl bg-[#092830] border border-[#164652] shadow-md hover:border-[#42E6B0]/60 transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#0D3038] text-slate-200 border border-[#164652]">
                        {exp.duration}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#42E6B0]">
                          {exp.type}
                        </span>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#42E6B0]/15 hover:bg-[#42E6B0]/25 text-[#42E6B0] hover:text-white border border-[#42E6B0]/30 text-xs font-semibold transition-colors"
                          >
                            <span>{exp.linkText || 'Live Demo'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-[#27C5E8] mb-3">
                      {exp.organization}
                    </p>

                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 pt-3 border-t border-[#164652] mb-4">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#42E6B0] mt-1.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skillsLearned.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#0D3038] text-slate-300 border border-[#164652]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
