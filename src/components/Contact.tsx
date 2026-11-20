import React, { FormEvent, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profileData } from '../data/profile'
import { Github, Linkedin, ArrowUpRight, Download, Rss, Layers3, Code2, Camera } from 'lucide-react'

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [formStatus, setFormStatus] = useState('')
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const height = useTransform(scrollYProgress, [0, 1], ["60vh", "100vh"])
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.9, 1])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    setFormStatus('Opening your email application...')
    window.location.href = `mailto:${profileData.links.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" ref={containerRef} className="relative min-h-screen bg-ink overflow-hidden">
      <motion.div 
        style={{ height }}
        className="w-full bg-primary flex flex-col items-center justify-center text-accent px-6"
      >
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-4xl w-full text-center space-y-12"
        >
          <h2 className="text-7xl md:text-9xl font-black font-display tracking-tighter leading-none">
            LET'S <br /> WORK <br /> TOGETHER
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left mt-20">
            <div className="space-y-8">
              <div className="group cursor-pointer">
                <p className="text-xs font-bold uppercase tracking-widest text-accent/50 mb-2">Email</p>
                <a href={`mailto:${profileData.links.email}`} className="text-2xl md:text-4xl font-bold font-display flex items-center gap-4 group-hover:translate-x-2 transition-transform">
                  {profileData.links.email} <ArrowUpRight className="text-accent/50" />
                </a>
                <a href={`tel:${profileData.phone.replace(/[^+\d]/g, '')}`} className="mt-3 block text-lg md:text-xl font-bold font-display">
                  {profileData.phone}
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href={profileData.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-4 bg-ink text-accent rounded-full hover:scale-110 transition-transform shadow-hard">
                  <Github size={32} />
                </a>
                <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-4 bg-ink text-accent rounded-full hover:scale-110 transition-transform shadow-hard">
                  <Linkedin size={32} />
                </a>
                <a href={profileData.links.stackoverflow} target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow profile" className="p-4 bg-ink text-accent rounded-full hover:scale-110 transition-transform shadow-hard">
                  <Layers3 size={32} />
                </a>
                <a href={profileData.links.devto} target="_blank" rel="noopener noreferrer" aria-label="DEV profile" className="p-4 bg-ink text-accent rounded-full hover:scale-110 transition-transform shadow-hard">
                  <Rss size={32} />
                </a>
                <a href={profileData.links.codepen} target="_blank" rel="noopener noreferrer" aria-label="CodePen profile" className="p-4 bg-ink text-accent rounded-full hover:scale-110 transition-transform shadow-hard">
                  <Code2 size={32} />
                </a>
                <a href={profileData.links.pexels} target="_blank" rel="noopener noreferrer" aria-label="Pexels profile" className="p-4 bg-ink text-accent rounded-full hover:scale-110 transition-transform shadow-hard">
                  <Camera size={32} />
                </a>
                <a href={profileData.links.resume} download aria-label="Download resume" className="p-4 bg-ink text-accent rounded-full hover:scale-110 transition-transform shadow-hard">
                  <Download size={32} />
                </a>
              </div>
            </div>

            <div className="bg-ink/20 p-8 rounded-3xl border-2 border-accent/20 backdrop-blur-md">
              <h3 className="text-2xl font-bold font-display mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-bold mb-1">Name</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required className="w-full bg-transparent border-b-2 border-accent/40 py-3 focus:border-accent outline-none text-xl transition-colors" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-bold mb-1">Email</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required className="w-full bg-transparent border-b-2 border-accent/40 py-3 focus:border-accent outline-none text-xl transition-colors" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold mb-1">Message</label>
                  <textarea id="contact-message" name="message" rows={4} required className="w-full bg-transparent border-b-2 border-accent/40 py-3 focus:border-accent outline-none text-xl transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-accent text-primary font-black uppercase tracking-widest text-xl rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-hard">
                  Send it
                </button>
                <p aria-live="polite" className="text-sm font-medium">{formStatus}</p>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
