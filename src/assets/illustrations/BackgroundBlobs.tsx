import React from 'react'

interface BlobProps {
  variant?: 1 | 2 | 3
  title?: string
  decorative?: boolean
  className?: string
}

export const BackgroundBlobs: React.FC<BlobProps> = ({ variant = 1, title = "Background decoration", decorative = true, className = "" }) => {
  if (variant === 1) {
    return (
      <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full opacity-30 pointer-events-none ${className}`} aria-hidden={decorative} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : title}>
        <path d="M0 100C120 180 380 20 500 100V200H0V100Z" fill="var(--color-primary)" />
      </svg>
    )
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full opacity-30 pointer-events-none ${className}`} aria-hidden={decorative} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : title}>
        <path d="M0 50C150 0 350 200 500 50V200H0V50Z" fill="var(--color-accent)" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-32 h-32 opacity-20 pointer-events-none ${className}`} aria-hidden={decorative} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : title}>
      <circle cx="100" cy="100" r="90" fill="var(--color-primary)" stroke="var(--color-accent)" strokeWidth="10" />
    </svg>
  )
}
