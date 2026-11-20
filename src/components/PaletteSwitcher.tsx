import React from 'react'
import { usePalette, Palette } from '../hooks/usePalette'

const palettes: { id: Palette; name: string; colors: string[] }[] = [
  { id: 'cobalt-lime', name: 'Cobalt/Lime', colors: ['#3577F6', '#D2FD51'] },
  { id: 'coral-mint', name: 'Coral/Mint', colors: ['#FF5C35', '#4ADE80'] },
  { id: 'violet-yellow', name: 'Violet/Yellow', colors: ['#8B5CF6', '#FACC15'] }
]

export const PaletteSwitcher: React.FC = () => {
  const { palette, setPalette } = usePalette()

  return (
    <div className="flex gap-2">
      {palettes.map((p) => (
        <button
          key={p.id}
          type="button"
          onClick={() => setPalette(p.id)}
          className="w-11 h-11 rounded-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-pressed={palette === p.id}
          aria-label={`Switch to ${p.name} palette`}
        >
          <span
            className={`w-6 h-6 rounded-full ${palette === p.id ? 'ring-2 ring-accent' : ''}`}
            style={{ background: `linear-gradient(to bottom right, ${p.colors[0]}, ${p.colors[1]})` }}
          />
        </button>
      ))}
    </div>
  )
}
