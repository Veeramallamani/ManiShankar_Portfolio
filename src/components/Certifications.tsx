import React from 'react'
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react'
import { certificationsData } from '../data/certifications'

export const Certifications: React.FC = () => {
  if (!certificationsData || certificationsData.length === 0) return null

  return (
    <section className="py-16 bg-white border-t border-[#DDE7EC] text-[#102536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#61758A] mb-1">
              <Award className="w-4 h-4 text-[#0089A5]" />
              <span>Verified Achievements</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102536] tracking-tight">
              Certifications & Co-Curricular Recognition
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Academic Competitions & Workshops
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#42E6B0] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0089A5] shadow-2xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 px-2.5 py-0.5 rounded-full bg-white border border-slate-200">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#102536] mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#0089A5] mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#61758A] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-[#0089A5] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Participation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
