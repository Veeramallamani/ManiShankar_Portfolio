import React from 'react'
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react'
import { certificationsData } from '../data/certifications'

export const Certifications: React.FC = () => {
  if (!certificationsData || certificationsData.length === 0) return null

  return (
    <section className="py-16 bg-[#071F27] border-t border-[#164652] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#42E6B0] mb-1">
              <Award className="w-4 h-4 text-[#42E6B0]" />
              <span>Verified Achievements</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Certifications & Technical Workshops
            </h2>
          </div>
          <span className="text-xs text-slate-300 font-medium">
            Academic Competitions & Faculty Workshops
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl bg-[#092830] border border-[#164652] hover:border-[#42E6B0]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#42E6B0]/10 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0D3038] border border-[#164652] flex items-center justify-center text-[#42E6B0] shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-200 px-2.5 py-0.5 rounded-full bg-[#0D3038] border border-[#164652]">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#42E6B0] mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#164652] flex items-center gap-1.5 text-[11px] text-[#42E6B0] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Participation & Completion</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
