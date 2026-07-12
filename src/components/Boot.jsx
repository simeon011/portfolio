import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { bootLines } from '../data.js'

const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches

export default function Boot({ onDone }) {
  const [shown, setShown] = useState(reduce ? bootLines.length : 0)

  useEffect(() => {
    if (reduce) { const t = setTimeout(onDone, 300); return () => clearTimeout(t) }
    if (shown >= bootLines.length) { const t = setTimeout(onDone, 480); return () => clearTimeout(t) }
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 350 : 300)
    return () => clearTimeout(t)
  }, [shown, onDone])

  useEffect(() => {
    const skip = () => onDone()
    window.addEventListener('keydown', skip)
    window.addEventListener('click', skip)
    return () => { window.removeEventListener('keydown', skip); window.removeEventListener('click', skip) }
  }, [onDone])

  return (
    <motion.div id="boot" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <div className="boot-inner">
        {bootLines.slice(0, shown).map((l, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
            dangerouslySetInnerHTML={{ __html: l }} />
        ))}
      </div>
      <div className="skip">press <b>any key</b> to skip</div>
    </motion.div>
  )
}
