import React, { useState, useEffect } from 'react'
import { Download, Menu, X, FileText } from 'lucide-react'
import { Logo } from './Logo'
import { profileData } from '../data/profile'

interface NavbarProps {
  onOpenResumeModal?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Section spy
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (id: string) => {
    setActiveSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#061B22]/90 backdrop-blur-md border-b border-[#0D3038] shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#061B22] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#42E6B0]/50 rounded-lg p-1"
            aria-label="Mani Shankar - Home"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 py-1.5 focus:outline-none focus:text-[#42E6B0] ${
                    isActive
                      ? 'text-[#42E6B0] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Subtle active pill indicator matching mockup */}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-0 right-0 h-[2.5px] bg-[#42E6B0] rounded-full shadow-[0_0_8px_#42E6B0]" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Action Button: Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.resumePath}
              download="Mani_Shankar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#42E6B0] border border-[#27C5E8]/60 hover:border-[#42E6B0] hover:bg-[#42E6B0]/10 rounded-full transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(66,230,176,0.2)] focus:outline-none focus:ring-2 focus:ring-[#42E6B0]"
              title="Download PDF Resume"
            >
              <Download className="w-3.5 h-3.5 text-[#42E6B0]" />
              <span>Download Resume</span>
            </a>

            {onOpenResumeModal && (
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="p-2 text-slate-300 hover:text-[#42E6B0] hover:bg-[#0D3038] rounded-full transition-colors border border-transparent hover:border-[#0D3038]"
                title="Preview Resume"
                aria-label="Preview Resume Modal"
              >
                <FileText className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={profileData.resumePath}
              download="Mani_Shankar_Resume.pdf"
              className="p-2 text-[#42E6B0] border border-[#27C5E8]/50 rounded-full"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42E6B0]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#0D3038] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#0D3038] text-[#42E6B0] font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-[#092830]'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
              <div className="pt-2">
                <a
                  href={profileData.resumePath}
                  download="Mani_Shankar_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#061B22] bg-gradient-to-r from-[#42E6B0] to-[#27C5E8] rounded-full shadow-md mt-1"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
