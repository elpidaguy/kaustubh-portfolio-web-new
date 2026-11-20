import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Award } from 'lucide-react'
import { profileData } from '../data/profile'
import { fadeUp } from '../motion/variants'
import { SquiggleDivider } from '../assets/illustrations/SquiggleDivider'

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24">
      <h2 className="text-5xl font-black font-display mb-2">Achievements</h2>
      <SquiggleDivider className="w-32 h-6 text-primary mb-12" />
      <div className="grid md:grid-cols-3 gap-6">
        {profileData.achievements.map((achievement) => (
          <motion.a
            key={achievement.title}
            href={achievement.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group p-8 bg-card rounded-3xl border border-token shadow-sm hover:shadow-hard transition-all"
          >
            <Award className="w-10 h-10 text-primary mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold font-display mb-3">{achievement.title}</h3>
            <p className="text-muted leading-relaxed mb-6">{achievement.subtitle}</p>
            <span className="inline-flex items-center gap-2 font-bold text-primary">
              View credential <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Achievements
