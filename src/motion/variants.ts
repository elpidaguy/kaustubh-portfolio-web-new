import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export const imageReveal: Variants = {
  hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.8, ease: 'easeInOut' } }
}

export const floatLoop: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

export const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: { x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }
  }
}
