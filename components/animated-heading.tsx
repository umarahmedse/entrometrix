'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedHeadingProps {
  children: string | string[]
  className?: string
  delay?: number
}

export function AnimatedHeading({ children, className = '', delay = 0 }: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
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

  const text = Array.isArray(children) ? children.join(' ') : children
  const characters = text.split('')

  return (
    <div ref={ref} className={className}>
      <motion.div>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.03,
              ease: [0.33, 0.66, 0.66, 1],
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
