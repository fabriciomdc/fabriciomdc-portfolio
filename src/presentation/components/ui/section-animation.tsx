import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

interface SectionAnimationProps {
  children: ReactNode
  variant?: "fadeInUp" | "fadeIn" | "scaleIn"
  className?: string
  delay?: number
}

export const SectionAnimation = ({
  children,
  variant = "fadeInUp",
  className,
  delay = 0,
}: SectionAnimationProps) => {
  const variants = {
    fadeInUp,
    fadeIn,
    scaleIn,
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
