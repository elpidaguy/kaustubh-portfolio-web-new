import React from 'react'

interface IconProps {
  name: 'csharp' | 'typescript' | 'sql' | 'aws' | 'kubernetes' | 'ai'
  title?: string
  decorative?: boolean
  className?: string
}

export const ExpertiseIcon: React.FC<IconProps> = ({ name, title = `${name} icon`, decorative = true, className = "w-8 h-8" }) => {
  const renderPath = () => {
    switch (name) {
      case 'csharp':
        return <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="var(--color-primary)" stroke="var(--color-ink)" strokeWidth="2" />
      case 'typescript':
        return <rect x="2" y="2" width="20" height="20" rx="4" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="2" />
      case 'sql':
        return <ellipse cx="12" cy="12" rx="10" ry="6" fill="var(--color-tint)" stroke="var(--color-primary)" strokeWidth="2" />
      case 'aws':
        return <path d="M2 12C2 12 6 6 12 6C18 6 22 12 22 12C22 12 18 18 12 18C6 18 2 12 2 12Z" fill="var(--color-primary)" stroke="var(--color-accent)" strokeWidth="2" />
      case 'kubernetes':
        return <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="2" />
      case 'ai':
        return <circle cx="12" cy="12" r="9" fill="var(--color-primary)" stroke="var(--color-accent)" strokeWidth="2" />
    }
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden={decorative} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : title}>
      {renderPath()}
    </svg>
  )
}
