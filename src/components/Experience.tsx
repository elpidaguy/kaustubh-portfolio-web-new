import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profileData } from '../data/profile'
import { fadeUp } from '../motion/variants'
import { SquiggleDivider } from '../assets/illustrations/SquiggleDivider'

const Experience: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="py-24" ref={containerRef}>
      <h2 className="text-5xl font-black font-display mb-2">Experience</h2>
      <SquiggleDivider className="w-32 h-6 text-primary mb-12" />
      
      <div className="relative">
        <motion.div
          className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-token"
          style={{ scaleY: lineScale }}
        />
        
        <div className="space-y-12">
          {profileData.experience.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-bg border-4 border-primary flex items-center justify-center font-bold font-mono text-xs">
                {index + 1}
              </div>
              <div className="p-8 bg-card rounded-3xl border border-token shadow-sm">
                <h3 className="text-2xl font-bold font-display">{item.role}</h3>
                <div className="text-accent font-bold mb-4">{item.company} • {item.dates}</div>
                <ul className="space-y-2 text-muted">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
