import React from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../hooks/useCursor'

export const CustomCursor: React.FC = () => {
  const { cursorXSpring, cursorYSpring, isPointer } = useCursor()

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-accent"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: isPointer ? 1.5 : 1,
      }}
    />
  )
}
