import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { projects, projectFilters } from '../data.js'

const featured = projects.find((p) => p.feat)
const rest = projects.filter((p) => !p.feat)

function TiltCard({ p }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `translateY(-6px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg)`
  }
  const onLeave = () => { ref.current.style.transform = '' }
  return (
    <a ref={ref} className="proj card" href={p.url} target="_blank" rel="noreferrer" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="proj-top"><span className="fold">🗀</span><span className="ext">→ git</span></div>
      <h3>{p.n}</h3><p>{p.d}</p>
      <div className="tags">{p.t.map((t) => <span key={t}>{t}</span>)}</div>
    </a>
  )
}

export default function Projects() {
  const [f, setF] = useState('All')
  const match = (p) => f === 'All' || p.t.includes(f)

  return (
    <div className="page">
      <div className="wrap">
        <Reveal><p className="cmt"><b>#</b> projects.py — filter by tech</p></Reveal>
        <Reveal delay={0.06}><h2>Projects</h2></Reveal>
        <Reveal delay={0.12}><p className="sub" style={{ margin: '8px 0 24px' }}>Built during my studies and personal practice. <span style={{ color: 'var(--yellow)' }}>Use the filters or hover to tilt.</span></p></Reveal>

        <Reveal delay={0.18}>
          <div className="filters">
            {projectFilters.map((x) => (
              <button key={x} className={`fchip${f === x ? ' active' : ''}`} onClick={() => setF(x)}>{x}</button>
            ))}
          </div>
        </Reveal>

        {match(featured) && (
          <motion.a className="featured" href={featured.url} target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="fl">
              <div className="fbadge">★ featured project</div>
              <h3>{featured.n}</h3><p>{featured.d2}</p>
              <div className="tags">{featured.t.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
            <div className="fr">🗂️</div>
          </motion.a>
        )}

        <div className="grid">
          {rest.filter(match).map((p, i) => (
            <motion.div key={p.n} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}>
              <TiltCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
