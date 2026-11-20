import React from 'react'

interface EmptyStateProps {
  title?: string
  decorative?: boolean
  message?: string
}

export const EmptyState404: React.FC<EmptyStateProps> = ({ title = "404 Not Found", decorative = false, message = "Page or content not found." }) => (
  <div className="flex flex-col items-center justify-center p-12 text-center" role={decorative ? undefined : "region"} aria-label={title}>
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-36 mb-6" aria-hidden="true">
      <circle cx="100" cy="100" r="80" fill="var(--color-tint)" stroke="var(--color-primary)" strokeWidth="4" />
      <path d="M60 120C70 140 130 140 140 120" stroke="var(--color-ink)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="75" cy="80" r="10" fill="var(--color-primary)" />
      <circle cx="125" cy="80" r="10" fill="var(--color-primary)" />
    </svg>
    <h2 className="text-3xl font-bold font-display mb-2">{title}</h2>
    <p className="text-muted">{message}</p>
  </div>
)
