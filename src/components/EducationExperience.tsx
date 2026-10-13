import React, { useState } from 'react'
import { GraduationCap, Briefcase, Building, Award, Check } from 'lucide-react'
import { educationData, experienceData } from '../data/education'

export const EducationExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'education' | 'experience'>('both')

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F5F8FA] border-t border-[#DDE7EC] text-[#102536] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDE7EC] text-[#0089A5] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Academic & Practical Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102536] tracking-tight mb-4">
            Education & Practical Experience
          </h2>
          <p className="text-sm sm:text-base text-[#61758A] leading-relaxed">
            Academic grounding in business analytics combined with hands-on leadership in data acquisition and student innovation workshops.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'both'
                  ? 'bg-[#061B22] text-[#42E6B0] shadow-sm'
                  : 'bg-white text-slate-600 hover:text-black border border-[#DDE7EC]'
              }`}
            >
              All Milestones
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'education'
                  ? 'bg-[#061B22] text-[#42E6B0] shadow-sm'
                  : 'bg-white text-slate-600 hover:text-black border border-[#DDE7EC]'
              }`}
            >
              Education
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'experience'
                  ? 'bg-[#061B22] text-[#42E6B0] shadow-sm'
                  : 'bg-white text-slate-600 hover:text-black border border-[#DDE7EC]'
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
              <div className="flex items-center gap-3 pb-3 border-b border-[#DDE7EC]">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#DDE7EC] shadow-sm flex items-center justify-center text-[#0089A5]">
                  <GraduationCap className="w-5 h-5 text-[#0089A5]" />
                </div>
                <h3 className="text-xl font-bold text-[#102536]">Education</h3>
              </div>

              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#42E6B0] transition-all hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EBF7F9] text-[#0089A5]">
                        {edu.duration}
                      </span>
                      {edu.grade && (
                        <span className="text-xs font-semibold text-slate-500">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-[#102536] mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-[#0089A5] mb-2">
                      {edu.field}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                      <Building className="w-3.5 h-3.5" />
                      <span>{edu.institution}</span>
                    </div>

                    {edu.highlights && (
                      <ul className="space-y-2 pt-3 border-t border-slate-100">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-[#0089A5] shrink-0 mt-0.5" />
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
              <div className="flex items-center gap-3 pb-3 border-b border-[#DDE7EC]">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#DDE7EC] shadow-sm flex items-center justify-center text-[#0089A5]">
                  <Briefcase className="w-5 h-5 text-[#0089A5]" />
                </div>
                <h3 className="text-xl font-bold text-[#102536]">
                  Practical Learning & Leadership
                </h3>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#42E6B0] transition-all hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F1F5F9] text-slate-700">
                        {exp.duration}
                      </span>
                      <span className="text-xs font-semibold text-[#0089A5]">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#102536] mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-slate-600 mb-3">
                      {exp.organization}
                    </p>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0089A5] mt-1.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skillsLearned.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F8FAFC] text-slate-600 border border-slate-200"
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
