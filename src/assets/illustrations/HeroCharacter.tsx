import React from 'react'

interface IllustrationProps {
  title?: string
  decorative?: boolean
  className?: string
}

export const HeroCharacter: React.FC<IllustrationProps> = ({ title = "Developer illustration", decorative = true, className = "" }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full max-w-md mx-auto drop-shadow-xl ${className}`}
    aria-hidden={decorative}
    role={decorative ? undefined : "img"}
    aria-label={decorative ? undefined : title}
  >
    <circle cx="200" cy="200" r="160" fill="var(--color-tint)" />
    <path
      d="M120 280C120 235.817 155.817 200 200 200C244.183 200 280 235.817 280 280V320H120V280Z"
      fill="var(--color-primary)"
    />
    <circle cx="200" cy="140" r="50" fill="var(--color-accent)" />
    <rect x="150" y="260" width="100" height="70" rx="12" fill="var(--color-ink)" />
    <rect x="160" y="270" width="80" height="50" rx="4" fill="#1F2937" />
    <path d="M185 290L205 300L185 310V290Z" fill="var(--color-accent)" />
    <circle cx="185" cy="135" r="6" fill="var(--color-ink)" />
    <circle cx="215" cy="135" r="6" fill="var(--color-ink)" />
    <path d="M190 155C195 160 205 160 210 155" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" />
  </svg>
)
