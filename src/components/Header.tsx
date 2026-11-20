import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { profileData } from '../data/profile'
import { PaletteSwitcher } from './PaletteSwitcher'
import { AvatarSheet } from './AvatarSheet'

interface HeaderProps {
  activeSection: string
  theme: 'paper' | 'ink'
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ activeSection, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const navItems = [
    { id: 'expertise', label: 'Expertise' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'presence', label: 'Profiles' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-bg/80 backdrop-blur-md border-b border-token">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold font-display tracking-tighter text-mainText">
          KJ<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium hover:text-primary transition-colors ${activeSection === item.id ? 'text-primary' : 'text-muted'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:block">
            <PaletteSwitcher />
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-tint rounded-full transition-colors text-mainText"
            aria-label={`Switch to ${theme === 'paper' ? 'dark' : 'light'} theme`}
            aria-pressed={theme === 'ink'}
          >
            {theme === 'paper' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={() => setIsAboutOpen(true)}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-accent hover:scale-110 transition-transform shadow-sm"
            aria-label="Open About"
            aria-expanded={isAboutOpen}
            aria-controls="about-sheet"
          >
            <img
              src={profileData.profileImage}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </button>

          <button
            className="md:hidden p-2 text-mainText"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-token md:hidden p-6 space-y-4 shadow-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-xl font-bold font-display"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-token">
              <PaletteSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AvatarSheet isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </header>
  )
}

export default Header
