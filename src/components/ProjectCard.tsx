import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  problem: string
  role: string
  stack: string[]
  onClick?: () => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, problem, role, stack, onClick }) => {
  return (
    <motion.article
      className="group relative bg-card p-8 rounded-3xl border border-token shadow-sm hover:shadow-hard transition-all h-full flex flex-col"
    >
      {onClick && (
        <button
          type="button"
          onClick={onClick}
          className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          aria-label={`Open details for ${title}`}
        />
      )}

      <div className="absolute top-6 right-6 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
        <ExternalLink size={20} className="text-primary" />
      </div>

      <div className="mb-8">
        <div className="w-full aspect-video bg-tint rounded-2xl border-2 border-token shadow-sm overflow-hidden group-hover:shadow-hard transition-all flex items-center justify-center">
           <span className="text-muted font-bold uppercase tracking-widest text-xs">Project Preview</span>
        </div>
      </div>

      <h3 className="text-3xl font-black font-display mb-2 group-hover:text-primary transition-colors text-mainText">{title}</h3>
      <div className="text-accent font-bold mb-4 uppercase tracking-tighter text-sm">{role}</div>
      
      <p className="text-muted mb-6 line-clamp-3 leading-relaxed">
        {problem}
      </p>

      <div className="mt-auto pt-6 border-t border-token flex flex-wrap gap-2">
        {stack.slice(0, 3).map((tech) => (
          <span key={tech} className="tech-chip px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border border-token">
            {tech}
          </span>
        ))}
        {stack.length > 3 && (
          <span className="tech-chip px-3 py-1 rounded-full text-[10px] font-mono font-bold">
            +{stack.length - 3}
          </span>
        )}
      </div>
    </motion.article>
  )
}
