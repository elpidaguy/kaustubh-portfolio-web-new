import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Expertise from "./components/Expertise"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Blogs from "./components/Blogs"
import OnlinePresence from "./components/OnlinePresence"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useTheme } from "./hooks/useTheme"
import { Preloader } from "./components/Preloader"
import { CustomCursor } from "./components/CustomCursor"

function App() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("hero")
  const [loading, setLoading] = useState(() => {
    const session = sessionStorage.getItem('portfolio-session')
    if (session) return false
    return true
  })

  useEffect(() => {
    if (!loading) {
      sessionStorage.setItem('portfolio-session', 'active')
    }
  }, [loading])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "expertise", "experience", "education", "achievements", "blogs", "presence", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-bg text-mainText selection:bg-primary selection:text-accent font-sans">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <CustomCursor />
      <Header activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Education />
        <Achievements />
        <Blogs />
        <OnlinePresence />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
