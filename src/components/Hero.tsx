import React from 'react'
import { ArrowRight, Mail, BarChart2, GraduationCap, Star } from 'lucide-react'
import { profileData } from '../data/profile'

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#061B22] via-[#08222B] to-[#092830]"
    >
      {/* Background ambient teal glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#42E6B0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#27C5E8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D3038] border border-[#42E6B0]/40 text-[#42E6B0] text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <BarChart2 className="w-4 h-4 text-[#42E6B0]" />
              <span>{profileData.badge}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              <span className="block text-slate-100 font-bold mb-1">Hi, I’m</span>
              <span className="gradient-text-mint text-5xl sm:text-6xl md:text-7xl">
                {profileData.name}
              </span>
            </h1>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100 mt-2 mb-4 tracking-tight">
              {profileData.headline}
            </h2>

            {/* Bio Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {profileData.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              {/* Primary: View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#42E6B0] to-[#27C5E8] hover:from-[#35d8a1] hover:to-[#1ebad9] text-[#061B22] font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#42E6B0]/20 hover:shadow-[#42E6B0]/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-[#061B22] stroke-[2.5]" />
              </a>

              {/* Secondary: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#092830]/80 hover:bg-[#0D3038] text-white hover:text-[#42E6B0] border border-[#27C5E8]/40 hover:border-[#42E6B0] font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#42E6B0]" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Mani Shankar Portrait Composition */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] mx-auto">
              
              {/* Decorative Handwritten text: "Data Analytics Growth" with underline */}
              <div className="absolute -top-6 -right-2 sm:-top-8 sm:right-2 z-20 pointer-events-none select-none text-right">
                <span className="font-handwriting text-2xl sm:text-3xl text-cyan-200 tracking-wide block rotate-[-8deg] drop-shadow-md">
                  Data<br />Analytics<br />Growth
                </span>
                {/* Hand-drawn curved underline swoosh */}
                <svg
                  className="w-20 h-5 sm:w-24 sm:h-6 text-[#42E6B0] -mt-1 ml-auto"
                  viewBox="0 0 100 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14C24 6 58 5 95 18M78 8L96 19L84 22"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Soft Ambient Radial Blur behind the circle */}
              <div className="absolute inset-0 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[370px] md:h-[370px] mx-auto rounded-full bg-[#42E6B0]/15 blur-2xl -z-10 pointer-events-none" />

              {/* Unified Circle Portrait: image fits 100% with the circle and glowing border */}
              <div className="relative z-10 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[370px] md:h-[370px] mx-auto rounded-full p-1 sm:p-1.5 bg-gradient-to-tr from-[#42E6B0] via-[#27C5E8] to-[#0b3c45] shadow-2xl shadow-black/60">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#092830] flex items-center justify-center">
                  <img
                    src="/mani_portrait.jpg"
                    alt="Mani Shankar - Business Analytics Student wearing professional black blazer"
                    className="w-full h-full object-cover object-[center_16%] filter contrast-[1.03] brightness-[1.02] select-none"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Overlapping Glass Statistics Panel matching reference image */}
              <div className="relative z-30 -mt-8 sm:-mt-10 mx-auto w-full px-2 sm:px-4">


                <div className="glass-panel rounded-2xl p-3 sm:p-4 shadow-xl shadow-black/40 grid grid-cols-3 divide-x divide-[#42E6B0]/20 text-center">
                  
                  {/* Stat 1: Academic Projects */}
                  <div className="px-1.5 sm:px-2 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[#42E6B0] mb-0.5 sm:mb-1">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#42E6B0]" />
                      <span className="text-base sm:text-xl font-bold text-white tracking-tight">2+</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight">
                      Academic Projects
                    </span>
                  </div>

                  {/* Stat 2: Tools & Technologies */}
                  <div className="px-1.5 sm:px-2 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[#42E6B0] mb-0.5 sm:mb-1">
                      <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#42E6B0]" />
                      <span className="text-base sm:text-xl font-bold text-white tracking-tight">5+</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight">
                      Tools & Technologies
                    </span>
                  </div>

                  {/* Stat 3: Learning Mindset */}
                  <div className="px-1.5 sm:px-2 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[#42E6B0] mb-0.5 sm:mb-1">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#42E6B0]" />
                      <span className="text-base sm:text-xl font-bold text-white tracking-tight">100%</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight">
                      Learning Mindset
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
