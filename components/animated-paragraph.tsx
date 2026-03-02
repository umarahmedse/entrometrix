'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedParagraphProps {
  children: string
  className?: string
  delay?: number
}

export function AnimatedParagraph({ children, className = '', delay = 0 }: AnimatedParagraphProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.p
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.33, 0.66, 0.66, 1],
      }}
      className={className}
    >
      {children}
    </motion.p>
  )
}
