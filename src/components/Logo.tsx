import React from 'react'

interface LogoProps {
  size?: number
  showText?: boolean
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ size = 32, showText = true, className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 font-sans ${className}`}>
      {/* Crisp geometric M icon matching reference image */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <rect width="40" height="40" rx="10" fill="#092830" />
        <path
          d="M10 29V12L20 22L30 12V29"
          stroke="url(#logo_grad)"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="22" r="2.2" fill="#27C5E8" />
        <defs>
          <linearGradient id="logo_grad" x1="10" y1="12" x2="30" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#42E6B0" />
            <stop offset="1" stopColor="#27C5E8" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-xl font-bold tracking-tight text-white select-none">
          Mani Shankar
        </span>
      )}
    </div>
  )
}
