import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.9, 0.32, 1] }}
    >
      {children}
    </motion.div>
  )
}
