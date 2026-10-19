import React, { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Copy,
  Check
} from 'lucide-react'
import { LinkedinIcon } from './SocialIcons'
import { profileData } from '../data/profile'


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Please enter your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.'
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.'
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate reliable dispatch & formulate mailto fallback link
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      // Open email client with pre-filled details so message is genuinely received
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hello Mani Shankar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      // Open mailto link
      window.location.href = mailtoUrl
    }, 900)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#071F27] text-white border-t border-[#164652] relative scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#27C5E8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#42E6B0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D3038] border border-[#42E6B0]/30 text-[#42E6B0] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let’s Connect
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I’m interested in opportunities where I can apply analytics, solve business problems, and continue learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Info & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#092830] border border-[#164652] space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Feel free to reach out directly via email, connect on LinkedIn, or drop a message via the form.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-[#071F27] border border-[#164652] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#0D3038] flex items-center justify-center text-[#42E6B0] shrink-0 border border-[#42E6B0]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Email</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#42E6B0] truncate block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#0D3038] transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#42E6B0]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-[#071F27] border border-[#164652] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D3038] flex items-center justify-center text-[#27C5E8] shrink-0 border border-[#27C5E8]/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Phone</span>
                  <a href={`tel:${profileData.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#27C5E8]">
                    {profileData.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#071F27] border border-[#164652] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D3038] flex items-center justify-center text-[#F2C811] shrink-0 border border-[#F2C811]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {profileData.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-[#164652]">
                <span className="text-xs font-semibold text-slate-400 block mb-3">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071F27] border border-[#164652] hover:border-[#42E6B0] text-slate-300 hover:text-[#42E6B0] text-xs font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#092830] border border-[#164652] shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Fill in the details below. All fields are validated before submission.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#0D3038] border border-[#42E6B0]/50 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#42E6B0]/20 text-[#42E6B0] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your message draft has been initiated. You can also send directly to{' '}
                    <span className="text-[#42E6B0] font-semibold">{profileData.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="mt-3 px-5 py-2 text-xs font-bold rounded-full bg-[#164652] hover:bg-[#071F27] text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name <span className="text-[#42E6B0]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#071F27] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42E6B0] transition-all placeholder:text-slate-500 ${
                          errors.name ? 'border-red-400' : 'border-[#164652]'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-[#42E6B0]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#071F27] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42E6B0] transition-all placeholder:text-slate-500 ${
                          errors.email ? 'border-red-400' : 'border-[#164652]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject <span className="text-[#42E6B0]">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Business Analyst Opportunity / Project Collaboration"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#071F27] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42E6B0] transition-all placeholder:text-slate-500 ${
                        errors.subject ? 'border-red-400' : 'border-[#164652]'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message <span className="text-[#42E6B0]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, job description, or message..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#071F27] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42E6B0] transition-all placeholder:text-slate-500 ${
                        errors.message ? 'border-red-400' : 'border-[#164652]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#42E6B0] to-[#27C5E8] hover:from-[#35d8a1] hover:to-[#1ebad9] text-[#071F27] font-bold text-sm transition-all duration-300 shadow-md shadow-[#42E6B0]/20 hover:shadow-[#42E6B0]/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#071F27]" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#071F27]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
