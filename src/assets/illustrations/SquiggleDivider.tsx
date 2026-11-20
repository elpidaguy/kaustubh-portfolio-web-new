import React from 'react'

interface SquiggleProps {
  title?: string
  decorative?: boolean
  className?: string
}

export const SquiggleDivider: React.FC<SquiggleProps> = ({ title = "Section divider", decorative = true, className = "w-24 h-4 my-4" }) => (
  <svg viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden={decorative} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : title}>
    <path d="M0 8C25 0 25 16 50 8C75 0 75 16 100 8" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
  </svg>
)
