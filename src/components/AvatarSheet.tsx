import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { profileData } from '../data/profile'

export const AvatarSheet: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [isOpen, onClose])

  return (
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close About panel"
              className="fixed inset-0 z-[90] cursor-default bg-ink/40"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              id="about-sheet"
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-sheet-title"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[100] w-full max-w-md overflow-y-auto border-l border-token bg-bg p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 id="about-sheet-title" className="text-3xl font-bold font-display">About Me</h2>
                <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close About panel" className="p-2 hover:bg-tint rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-8">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-2xl" />
                  <img
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="relative w-full h-full object-cover rounded-2xl border-2 border-token shadow-hard"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>

                <div className="space-y-4 text-lg leading-relaxed">
                  <p>{profileData.about}</p>
                  <div className="pt-4 p-4 bg-tint rounded-xl border border-token">
                    <span className="font-bold text-primary">Currently:</span> SSE2 at First American India
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-bold mb-4 font-display">Education</h3>
                  <div className="space-y-4">
                    {profileData.education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-accent pl-4">
                        <div className="font-bold">{edu.degree}</div>
                        <div className="text-sm text-muted">{edu.institution} • {edu.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>,
      document.body
    )
  )
}
