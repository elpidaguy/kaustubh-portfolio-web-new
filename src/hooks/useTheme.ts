import { useState, useEffect } from 'react'

export type Theme = 'paper' | 'ink'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved === 'paper' || saved === 'ink') return saved
      // Default to paper (light) as per user request
      return 'paper'
    }
    return 'paper'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'paper' ? 'ink' : 'paper'))
  }

  return { theme, toggleTheme, setTheme }
}
