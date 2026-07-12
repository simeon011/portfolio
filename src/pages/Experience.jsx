import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  const [i, setI] = useState(0)
  const e = experience[i]

  return (
    <div className="page">
      <div className="wrap">
        <Reveal><p className="cmt"><b>#</b> experience.py — click a role to inspect</p></Reveal>
        <Reveal delay={0.06}><h2>Experience</h2></Reveal>
        <Reveal delay={0.12}><p className="sub" style={{ margin: '8px 0 26px' }}>From first lines of C# to my first developer role. <span style={{ color: 'var(--yellow)' }}>Select an entry on the left.</span></p></Reveal>

        <Reveal delay={0.18}>
          <div className="md">
            <div className="md-list">
              {experience.map((x, idx) => (
                <button key={x.t} className={`md-item${idx === i ? ' active' : ''}`} onClick={() => setI(idx)}>
                  <div className="mi-top"><span className="mi-ico">{x.ic}</span><h4>{x.t}</h4></div>
                  <div className="mi-per">{x.per}</div>
                </button>
              ))}
            </div>
            <div className="md-detail card">
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <span className="dt-tag">{e.tag}</span>
                <h3>{e.t}</h3>
                <p className="dt-place">{e.place} · {e.per}</p>
                <ul>{e.pts.map((p, j) => <li key={j}>{p}</li>)}</ul>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
