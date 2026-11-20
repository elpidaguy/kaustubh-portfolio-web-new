import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profileData } from '../data/profile'
import { Github, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg border-t border-token p-6 md:p-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-2"
            >
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer