import React from 'react'
import { motion } from 'framer-motion'
import { profileData } from '../data/profile'
import { fadeUp } from '../motion/variants'
import { SquiggleDivider } from '../assets/illustrations/SquiggleDivider'

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="text-5xl font-black font-display mb-2">Education</h2>
      <SquiggleDivider className="w-32 h-6 text-primary mb-12" />
      <div className="grid md:grid-cols-2 gap-6">
        {profileData.education.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 bg-card rounded-3xl border border-token shadow-sm"
          >
            <div className="text-accent font-bold font-mono mb-2">{edu.year}</div>
            <h3 className="text-2xl font-bold font-display mb-1">{edu.degree}</h3>
            <div className="text-muted">{edu.institution}</div>
            {edu.detail && <p className="mt-4 text-muted">{edu.detail}</p>}
            {edu.note && <p className="mt-2 text-sm text-muted">{edu.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
