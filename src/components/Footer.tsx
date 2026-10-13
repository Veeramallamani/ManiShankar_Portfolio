import { Mail, ArrowUp } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './SocialIcons'
import { Logo } from './Logo'
import { profileData } from '../data/profile'


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#05151B] text-slate-300 border-t border-[#0D3038] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#0D3038]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-block" aria-label="Mani Shankar - Home">
              <Logo />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Business Analytics student specializing in exploratory data analysis, predictive modeling, and executive BI dashboards. Dedicated to evidence-backed decision support.
            </p>
            <div className="text-xs text-slate-400">
              Location: <span className="text-slate-300 font-semibold">{profileData.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#42E6B0] transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect & Social */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#092830] border border-[#164652] hover:border-[#42E6B0] flex items-center justify-center text-slate-300 hover:text-[#42E6B0] transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#092830] border border-[#164652] hover:border-[#42E6B0] flex items-center justify-center text-slate-300 hover:text-[#42E6B0] transition-colors"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>


              <a
                href={`mailto:${profileData.email}`}
                className="w-9 h-9 rounded-xl bg-[#092830] border border-[#164652] hover:border-[#42E6B0] flex items-center justify-center text-slate-300 hover:text-[#42E6B0] transition-colors"
                title="Email Mani Shankar"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={profileData.resumePath}
                download="Mani_Shankar_Resume.pdf"
                className="text-xs text-[#42E6B0] hover:underline font-semibold block"
              >
                Download Curriculum Vitae (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Mani Shankar. All rights reserved. Crafted for Business Analytics & Trainee Roles.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#42E6B0] transition-colors py-1 px-2 rounded focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
