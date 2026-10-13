import React from 'react'
import { MapPin, GraduationCap, Mail, Phone, Settings, ExternalLink, Sparkles } from 'lucide-react'
import { profileData } from '../data/profile'
import { primarySkills, toolsAndOthers } from '../data/skills'
import { SkillIcon } from './SkillIcon'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-[#102536] border-t border-[#DDE7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: About Me */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#61758A]">
                ABOUT ME
              </span>
              <span className="w-8 h-[3px] bg-[#42E6B0] rounded-full" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102536] tracking-tight leading-[1.2] mb-6">
              A Curious Learner with a Data-Driven Mindset
            </h2>

            {/* Narrative Description from Resume */}
            <p className="text-[#61758A] text-base sm:text-lg leading-relaxed mb-6">
              {profileData.aboutDescription}
            </p>

            {/* Soft Skills Badges from Resume */}
            <div className="mb-6 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0089A5] mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Soft Skills</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {profileData.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white border border-[#DDE7EC] text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Info Cards / List */}
            <div className="space-y-3.5 pt-2 border-t border-slate-100">
              {/* Location */}
              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="w-8 h-8 rounded-full bg-[#EBF7F9] flex items-center justify-center text-[#27C5E8] shrink-0">
                  <MapPin className="w-4 h-4 text-[#0089A5]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  {profileData.location}
                </span>
              </div>

              {/* Role */}
              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="w-8 h-8 rounded-full bg-[#EBF7F9] flex items-center justify-center text-[#27C5E8] shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#0089A5]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800">{profileData.role}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="w-8 h-8 rounded-full bg-[#EBF7F9] flex items-center justify-center text-[#27C5E8] shrink-0">
                  <Mail className="w-4 h-4 text-[#0089A5]" />
                </div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-xs sm:text-sm font-medium text-[#0089A5] hover:text-[#061B22] hover:underline transition-colors"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="w-8 h-8 rounded-full bg-[#EBF7F9] flex items-center justify-center text-[#27C5E8] shrink-0">
                  <Phone className="w-4 h-4 text-[#0089A5]" />
                </div>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-xs sm:text-sm font-medium text-slate-800 hover:text-[#0089A5] transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
            </div>

            {/* Quick action: View Experience */}
            <div className="mt-8">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0089A5] hover:text-[#061B22] group"
              >
                <span>Explore Education & Academic Background</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: My Skills Grid */}
          <div id="skills" className="lg:col-span-7 flex flex-col scroll-mt-28">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#61758A]">
                MY SKILLS
              </span>
              <span className="w-8 h-[3px] bg-[#42E6B0] rounded-full" />
            </div>

            {/* 8 Skill Cards Grid (4 columns on desktop, 2 on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 mt-2">
              {primarySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="group bg-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#42E6B0] transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  {/* Skill Brand Icon */}
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    <SkillIcon name={skill.name} size={42} />
                  </div>

                  {/* Skill Title */}
                  <span className="text-sm font-bold text-[#102536] group-hover:text-[#0089A5] transition-colors">
                    {skill.name}
                  </span>

                  {/* Hidden subtle tooltip/subtext */}
                  <span className="text-[11px] text-slate-400 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.description?.split(',')[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Tools & Others Horizontal Bar matching mockup & resume */}
            <div className="mt-6 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#102536] uppercase tracking-wide mb-2.5">
                <Settings className="w-3.5 h-3.5 text-[#0089A5]" />
                <span>Tools & Technologies Stack</span>
              </div>
              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs sm:text-sm font-medium text-[#61758A]">
                {toolsAndOthers.map((tool, idx) => (
                  <React.Fragment key={tool.name}>
                    <span className="hover:text-[#102536] transition-colors">{tool.name}</span>
                    {idx < toolsAndOthers.length - 1 && (
                      <span className="text-slate-300 select-none">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Link to view grouped expertise below */}
            <div className="mt-4 text-right">
              <a
                href="#skills-expanded"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0089A5] hover:text-[#061B22]"
              >
                <span>View Comprehensive Competency Matrix</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
