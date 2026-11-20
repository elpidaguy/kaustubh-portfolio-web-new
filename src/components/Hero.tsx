import React from 'react'
import { motion } from 'framer-motion'
import { profileData } from '../data/profile'
import { HeroCharacter } from '../assets/illustrations/HeroCharacter'
import { fadeUp, stagger, marqueeVariants } from '../motion/variants'

const Hero: React.FC = () => {
  const allSkills = [
    ...profileData.coreSkills.backend,
    ...profileData.coreSkills.frontend,
    ...profileData.coreSkills.data,
    ...profileData.coreSkills.cloud,
    ...profileData.coreSkills.architecture,
    ...profileData.coreSkills.ai
  ]

  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-8xl font-black font-display tracking-tighter leading-none mb-6 text-mainText"
          >
            {profileData.name.split(' ')[0]} <br />
            <span className="text-mainText">{profileData.name.split(' ')[1]}</span>
          </motion.h1>
          
          <motion.p
            variants={fadeUp}
            className="text-2xl md:text-3xl font-medium mb-4 text-muted"
          >
            {profileData.title}
          </motion.p>
          
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl mb-10 max-w-xl text-muted/80 leading-relaxed"
          >
            {profileData.valueProposition}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="px-8 py-4 bg-primary text-accent font-bold rounded-full shadow-hard hover:scale-105 transition-transform"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-bg border-2 border-token font-bold rounded-full hover:bg-tint transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative order-first lg:order-last"
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
          <HeroCharacter className="relative z-10" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-token py-8 bg-bg">
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          className="flex whitespace-nowrap gap-12"
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {allSkills.map((skill) => (
                <span key={skill} className="text-4xl font-black font-display uppercase tracking-widest text-muted/20 hover:text-primary transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
