import React from 'react'
import { motion } from 'framer-motion'
import { profileData } from '../data/profile'
import { ExpertiseIcon } from '../assets/illustrations/ExpertiseIcons'
import { fadeUp } from '../motion/variants'

const Expertise: React.FC = () => {
  const expertiseItems = [
    { name: 'csharp', title: 'Backend', skills: profileData.coreSkills.backend },
    { name: 'typescript', title: 'Frontend', skills: profileData.coreSkills.frontend },
    { name: 'sql', title: 'Data', skills: profileData.coreSkills.data },
    { name: 'aws', title: 'Cloud', skills: profileData.coreSkills.cloud },
    { name: 'kubernetes', title: 'Architecture', skills: profileData.coreSkills.architecture },
    { name: 'ai', title: 'AI/RAG', skills: profileData.coreSkills.ai }
  ]

  return (
    <section id="expertise" className="py-24">
      <h2 className="text-5xl font-black font-display mb-12">Expertise</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
            className="p-8 bg-card rounded-3xl border border-token shadow-sm hover:shadow-hard transition-all"
          >
            <ExpertiseIcon name={item.name as 'csharp' | 'typescript' | 'sql' | 'aws' | 'kubernetes' | 'ai'} className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold font-display mb-4">{item.title}</h3>
            <div className="flex flex-wrap gap-2">
              {item.skills.map(skill => (
                <span key={skill} className="tech-chip px-3 py-1 rounded-full text-xs font-mono font-bold">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Expertise
