import React from 'react'
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react'
import { profileData } from '../data/profile'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#092830] border border-[#164652] rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col h-[85vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#071F27] border-b border-[#164652] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0D3038] text-[#42E6B0] flex items-center justify-center border border-[#42E6B0]/30">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Mani Shankar — Professional Resume
              </h3>
              <span className="text-[11px] text-slate-400">
                Business Analytics Student • MBA Sandip University
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profileData.resumePath}
              download="Mani_Shankar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#42E6B0] to-[#27C5E8] text-[#071F27] text-xs font-bold shadow-md hover:brightness-105 transition-all"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#0D3038] transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF viewer frame */}
        <div className="flex-1 bg-slate-900 overflow-hidden relative">
          <iframe
            src={`${profileData.resumePath}#toolbar=1&navpanes=0`}
            title="Mani Shankar Resume Preview"
            className="w-full h-full border-none"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-[#071F27] border-t border-[#164652] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#42E6B0]" />
            <span>Official Curriculum Vitae (PDF format)</span>
          </div>
          <a
            href={profileData.resumePath}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white flex items-center gap-1 text-[11px]"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  )
}
