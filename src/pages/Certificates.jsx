import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { certificates, certFilters } from '../data.js'

export default function Certificates() {
  const [year, setYear] = useState('All')
  const [zoom, setZoom] = useState(null)
  const shown = certificates.filter((c) => year === 'All' || c.year === year)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setZoom(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => { document.body.style.overflow = zoom ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [zoom])

  return (
    <div className="page">
      <div className="wrap">
        <Reveal><p className="cmt"><b>#</b> certs.py — filter by year</p></Reveal>
        <Reveal delay={0.06}><h2>Certificates</h2></Reveal>
        <Reveal delay={0.12}><p className="sub" style={{ margin: '8px 0 24px' }}>10 certificates from SoftUni courses and IT trainings. Click one to view it full size.</p></Reveal>

        <Reveal delay={0.18}>
          <div className="filters">
            {certFilters.map((y) => (
              <button key={y} className={`fchip${year === y ? ' active' : ''}`} onClick={() => setYear(y)}>{y}</button>
            ))}
          </div>
        </Reveal>

        <div className="certs">
          {shown.map((c, i) => (
            <motion.figure key={c.src} className="cert" onClick={() => setZoom(c)}
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              whileHover={{ y: -6 }}>
              <img src={c.src} alt={`${c.title} certificate`} loading="lazy" decoding="async" />
              <figcaption className="ccap"><div className="ct">{c.title}</div><div className="cd">{c.date}</div></figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div className="lightbox" onClick={() => setZoom(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <span className="lb-x">✕</span>
            <motion.img src={zoom.src} alt={`${zoom.title} certificate`} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} />
            <span className="lb-cap">{zoom.title} — {zoom.date}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
