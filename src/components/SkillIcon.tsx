import React from 'react'

interface SkillIconProps {
  name: string
  className?: string
  size?: number
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = "", size = 36 }) => {
  switch (name.toLowerCase()) {
    case 'excel':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#107C41" />
          <path d="M12 11H28C29.1 11 30 11.9 30 13V27C30 28.1 29.1 29 28 29H12C10.9 29 10 28.1 10 27V13C10 11.9 10.9 11 12 11Z" fill="#107C41" />
          <path d="M15 15L25 25M25 15L15 25" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <rect x="13" y="13" width="14" height="14" rx="2" fill="#185C37" />
          <text x="20" y="24" fill="white" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">X</text>
        </svg>
      )

    case 'advanced-excel':
    case 'advanced excel':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#0F7B42" />
          <rect x="8" y="8" width="24" height="24" rx="4" fill="#185C37" />
          <text x="17" y="24" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">X</text>
          {/* Sparkle / star indicator for advanced */}
          <path d="M28 11L29 14L32 15L29 16L28 19L27 16L24 15L27 14Z" fill="#42E6B0" />
        </svg>
      )

    case 'powerbi':
    case 'power bi':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#FBF3D5" />
          {/* Power BI 3-step yellow bars */}
          <rect x="12" y="21" width="4" height="10" rx="1" fill="#ECA500" />
          <rect x="18" y="16" width="4" height="15" rx="1" fill="#F2C811" />
          <rect x="24" y="11" width="4" height="20" rx="1" fill="#F9A825" />
        </svg>
      )

    case 'tableau':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Tableau constellation / cross dots */}
          <circle cx="20" cy="9" r="1.8" fill="#E8762D" />
          <circle cx="20" cy="31" r="1.8" fill="#E8762D" />
          <circle cx="9" cy="20" r="1.8" fill="#E8762D" />
          <circle cx="31" cy="20" r="1.8" fill="#E8762D" />

          <circle cx="20" cy="15" r="2.2" fill="#5C8792" />
          <circle cx="20" cy="25" r="2.2" fill="#5C8792" />
          <circle cx="15" cy="20" r="2.2" fill="#5C8792" />
          <circle cx="25" cy="20" r="2.2" fill="#5C8792" />

          {/* Center */}
          <circle cx="20" cy="20" r="2.6" fill="#D3362D" />

          {/* Diagonals */}
          <circle cx="14" cy="14" r="1.6" fill="#F1A228" />
          <circle cx="26" cy="14" r="1.6" fill="#5B93C5" />
          <circle cx="14" cy="26" r="1.6" fill="#719857" />
          <circle cx="26" cy="26" r="1.6" fill="#6C5975" />
        </svg>
      )

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#F0F4F8" />
          <path d="M19.7 10C14.8 10 15.1 12.1 15.1 12.1L15.1 14.3H20.1V15H13.2C13.2 15 10 14.6 10 19.6C10 24.5 12.8 24.3 12.8 24.3H14.5V22C14.5 19.3 16.8 19.3 16.8 19.3H21.7C24.1 19.3 24.1 17 24.1 17V12.4C24.1 12.4 24.6 10 19.7 10ZM17.1 11.5C17.6 11.5 18 11.9 18 12.4C18 12.9 17.6 13.3 17.1 13.3C16.6 13.3 16.2 12.9 16.2 12.4C16.2 11.9 16.6 11.5 17.1 11.5Z" fill="#387EB8" />
          <path d="M20.3 30C25.2 30 24.9 27.9 24.9 27.9L24.9 25.7H19.9V25H26.8C26.8 25 30 25.4 30 20.4C30 15.5 27.2 15.7 27.2 15.7H25.5V18C25.5 20.7 23.2 20.7 23.2 20.7H18.3C15.9 20.7 15.9 23 15.9 23V27.6C15.9 27.6 15.4 30 20.3 30ZM22.9 28.5C22.4 28.5 22 28.1 22 27.6C22 27.1 22.4 26.7 22.9 26.7C23.4 26.7 23.8 27.1 23.8 27.6C23.8 28.1 23.4 28.5 22.9 28.5Z" fill="#FFE873" />
        </svg>
      )

    case 'r':
    case 'r programming':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#F0F4F8" />
          <ellipse cx="20" cy="20" rx="14" ry="10" stroke="#276DC3" strokeWidth="2.5" fill="#E6EDF5" />
          <text x="21" y="26" fill="#165BAA" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">R</text>
        </svg>
      )

    case 'sql':
    case 'basic sql':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#E6F4FA" />
          <ellipse cx="20" cy="14" rx="10" ry="4" fill="#00758F" />
          <path d="M10 14V22C10 24.2 14.5 26 20 26C25.5 26 30 24.2 30 22V14" stroke="#00758F" strokeWidth="2.5" fill="none" />
          <path d="M10 22V27C10 29.2 14.5 31 20 31C25.5 31 30 29.2 30 27V22" stroke="#00758F" strokeWidth="2.5" fill="none" />
          <text x="20" y="23" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SQL</text>
        </svg>
      )

    case 'data analysis':
    case 'data-analysis':
    case 'analysis':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#6D28D9" />
          {/* Trend graph */}
          <path d="M11 27L17 21L22 24L29 14" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="29" cy="14" r="2.2" fill="#42E6B0" />
          <rect x="10" y="29" width="20" height="2" rx="1" fill="#C4B5FD" />
        </svg>
      )

    case 'presentation':
    case 'presentations':
    case 'business presentations':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect width="40" height="40" rx="8" fill="#D24726" />
          {/* Slide screen */}
          <rect x="9" y="10" width="22" height="15" rx="2" fill="white" fillOpacity="0.2" />
          <rect x="9" y="10" width="22" height="15" rx="2" stroke="white" strokeWidth="1.5" />
          {/* Pie in presentation */}
          <circle cx="20" cy="17.5" r="4.5" fill="white" />
          <path d="M20 17.5L23.5 20.5" stroke="#D24726" strokeWidth="1.5" />
          {/* Stand */}
          <path d="M20 25V29M16 29H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )

    default:
      return (
        <div
          style={{ width: size, height: size }}
          className="rounded-lg bg-teal-800 text-teal-200 flex items-center justify-center font-bold text-xs"
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      )
  }
}
