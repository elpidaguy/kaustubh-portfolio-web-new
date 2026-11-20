import React from 'react'
import { motion } from 'framer-motion'
import { Award, Camera, Code2, Github, Linkedin, Rss, Layers3, ExternalLink, Instagram, Gamepad2, Cloud } from 'lucide-react'
import { profileData } from '../data/profile'
import { SquiggleDivider } from '../assets/illustrations/SquiggleDivider'
import { fadeUp } from '../motion/variants'

const profiles = [
  { label: 'GitHub', url: profileData.links.github, icon: Github },
  { label: 'LinkedIn', url: profileData.links.linkedin, icon: Linkedin },
  { label: 'Stack Overflow', url: profileData.links.stackoverflow, icon: Layers3 },
  { label: 'DEV', url: profileData.links.devto, icon: Rss },
  { label: 'Medium', url: profileData.links.medium, icon: Rss },
  { label: 'CodePen', url: profileData.links.codepen, icon: Code2 },
  { label: 'Pexels', url: profileData.links.pexels, icon: Camera },
  { label: 'Instagram', url: profileData.links.instagram, icon: Instagram },
  { label: 'Steam', url: profileData.links.steam, icon: Gamepad2 },
  { label: 'Credly', url: profileData.links.credly, icon: Award },
  { label: 'AWS Community', url: profileData.links.awsCommunity, icon: Cloud },
] as const

const OnlinePresence: React.FC = () => {
  return (
    <section id="presence" className="py-24">
      <h2 className="text-5xl font-black font-display mb-2">Find Me Online</h2>
      <SquiggleDivider className="w-32 h-6 text-primary mb-12" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {profiles.map(({ label, url, icon: Icon }) => (
          <motion.a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${profileData.name} on ${label} (opens in a new tab)`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex items-center justify-between gap-4 p-5 bg-card rounded-2xl border border-token shadow-sm hover:shadow-hard transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          >
            <span className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-tint flex items-center justify-center text-primary">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="font-bold font-display">{label}</span>
            </span>
            <ExternalLink size={17} className="text-muted group-hover:text-primary" aria-hidden="true" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default OnlinePresence
