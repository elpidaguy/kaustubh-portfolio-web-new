import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profileData, Project } from '../data/profile'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'
import { SquiggleDivider } from '../assets/illustrations/SquiggleDivider'
import { fadeUp } from '../motion/variants'
import { Lightbox } from './Lightbox'

const Projects: React.FC = () => {
  const [filteredProjects, setFilteredProjects] = useState(profileData.featuredProjects)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const handleFilter = (tags: string[]) => {
    if (tags.length === 0) {
      setFilteredProjects(profileData.featuredProjects)
    } else {
      setFilteredProjects(
        profileData.featuredProjects.filter(project =>
          project.stack.some(tag => tags.includes(tag))
        )
      )
    }
  }

  return (
    <section id="projects" className="py-24" ref={containerRef}>
      <h2 className="text-5xl font-black font-display mb-2">Work</h2>
      <SquiggleDivider className="w-32 h-6 text-primary mb-12" />
      
      <ProjectFilter projects={profileData.featuredProjects} onFilter={handleFilter} />
      
      <motion.div
        className="relative mt-16"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="absolute inset-0 bg-accent/10 rounded-full blur-3xl"
          style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) }}
        />
        
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 10, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="h-full"
            >
              <ProjectCard
                title={project.title}
                problem={project.problem}
                role={project.role}
                stack={project.stack}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Lightbox 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}

export default Projects

