import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import { Project } from '../data/profile'

interface LightboxProps {
  project: Project | null
  onClose: () => void
}

export const Lightbox: React.FC<LightboxProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const dialog = closeButtonRef.current?.closest('[role="dialog"]')
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          aria-describedby="project-dialog-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-ink/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-bg rounded-3xl border border-token shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              type="button"
              aria-label="Close project details"
              className="absolute top-6 right-6 p-2 bg-primary text-accent rounded-full z-10 hover:scale-110 transition-transform"
            >
              <X size={24} />
            </button>

            <div className="md:w-1/2 bg-tint p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-6xl font-black font-display text-primary/20 mb-4 uppercase select-none">
                  {project.title.split(' ')[0]}
                </div>
                <div className="w-full aspect-video bg-card rounded-2xl border-2 border-token shadow-hard flex items-center justify-center p-4">
                  <span className="text-muted font-bold">Project preview</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <h2 id="project-dialog-title" className="text-4xl font-black font-display mb-2">{project.title}</h2>
              <div className="text-accent font-bold mb-8 uppercase tracking-widest text-sm">
                Role: {project.role}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-2 uppercase text-primary">The Challenge</h3>
                  <p id="project-dialog-description" className="text-muted leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 uppercase text-primary">The Outcome</h3>
                  <p className="text-muted leading-relaxed">{project.outcome}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 uppercase text-primary">Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="tech-chip px-4 py-2 rounded-full text-xs font-mono font-bold border border-token">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex gap-4">
                  {project.links.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-accent font-bold rounded-full hover:scale-105 transition-transform"
                    >
                      {link.label.toLowerCase().includes('github') ? <Github size={18} /> : <ExternalLink size={18} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
