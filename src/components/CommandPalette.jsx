import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { PAGES, FILE, ICON } from '../data.js'

export default function CommandPalette({ go, onClose }) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef(null)

  let filtered = PAGES.filter((p) => p.includes(q.toLowerCase()) || FILE[p].toLowerCase().includes(q.toLowerCase()))
  if (!filtered.length) filtered = PAGES

  useEffect(() => { const t = setTimeout(() => inputRef.current?.focus(), 30); return () => clearTimeout(t) }, [])
  useEffect(() => { setSel(0) }, [q])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => (s + 1) % filtered.length) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => (s + filtered.length - 1) % filtered.length) }
      else if (e.key === 'Enter' && filtered[sel]) { onClose(); go(filtered[sel]) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [filtered, sel, go, onClose])

  const choose = (p) => { onClose(); go(p) }

  return (
    <motion.div className="cmdk" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <motion.div className="cmdk-box" initial={{ opacity: 0, y: -12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: [0.3, 1.2, 0.5, 1] }}>
        <div className="cmdk-in">
          <span className="p">&gt;</span>
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a section…" autoComplete="off" />
        </div>
        <div className="cmdk-list">
          {filtered.map((p, i) => (
            <button key={p} className={`cmdk-item${i === sel ? ' sel' : ''}`} onMouseEnter={() => setSel(i)} onClick={() => choose(p)}>
              <span className="ic">{ICON[p]}</span>{FILE[p]}<span className="go">jump ↵</span>
            </button>
          ))}
        </div>
        <div className="cmdk-foot"><span>↑↓ navigate</span><span>↵ open</span><span>esc close</span></div>
      </motion.div>
    </motion.div>
  )
}
