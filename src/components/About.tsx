import React from 'react'
import { motion } from 'framer-motion'
import { profileData } from '../data/profile'
import { fadeUp } from '../motion/variants'
import { SquiggleDivider } from '../assets/illustrations/SquiggleDivider'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-token">
      <div className="max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-5xl font-black font-display mb-2">About</h2>
          <SquiggleDivider className="w-32 h-6 text-primary mb-8" />
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6 text-xl leading-relaxed text-muted">
              <p>{profileData.about}</p>
              <div className="flex items-center gap-4 p-4 bg-tint rounded-2xl border border-token shadow-sm">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-wider text-primary">
                  Currently: SSE2 at First American India
                </span>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-3xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="relative z-10 w-full aspect-square object-cover rounded-3xl border-2 border-token grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
