import { useState, useEffect } from 'react'

export type Palette = 'cobalt-lime' | 'coral-mint' | 'violet-yellow'

export function usePalette() {
  const [palette, setPalette] = useState<Palette>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-palette')
      if (saved === 'cobalt-lime' || saved === 'coral-mint' || saved === 'violet-yellow') return saved
    }
    return 'cobalt-lime'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    localStorage.setItem('portfolio-palette', palette)
  }, [palette])

  return { palette, setPalette }
}
