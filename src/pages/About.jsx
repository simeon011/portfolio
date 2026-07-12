import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { aboutStory, skillGroups, learning, facts } from '../data.js'

const TABS = [['story', 'Story'], ['skills', 'Skills'], ['now', 'Now']]

export default function About() {
  const [tab, setTab] = useState('story')

  return (
    <div className="page">
      <div className="wrap">
        <Reveal><p className="cmt"><b>#</b> about.py — tabbed profile</p></Reveal>
        <Reveal delay={0.06}><h2 style={{ marginBottom: '20px' }}>About Me</h2></Reveal>
        <Reveal delay={0.12}>
          <div className="tabbar">
            {TABS.map(([id, label]) => (
              <button key={id} className={`tab${tab === id ? ' active' : ''}`} onClick={() => setTab(id)}>{label}</button>
            ))}
          </div>

          <motion.div key={tab} className="tabpanel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {tab === 'story' && aboutStory.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}

              {tab === 'skills' && skillGroups.map(([g, items]) => (
                <div className="skillgroup" key={g}>
                  <div className="gt"># {g}</div>
                  <div className="chips">{items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
                </div>
              ))}

              {tab === 'now' && (
                <>
                  <div className="learnbar" style={{ marginBottom: '22px' }}>
                    {learning.map(([label, pct]) => (
                      <div key={label} style={{ marginBottom: '14px' }}>
                        <div className="lb-row"><span>{label}</span><span>{pct}%</span></div>
                        <div className="bar"><motion.i initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.9, ease: 'easeOut' }} /></div>
                      </div>
                    ))}
                  </div>
                  {facts.map(([ic, txt], i) => (
                    <div className="factrow" key={i} style={i === facts.length - 1 ? { border: 'none' } : undefined}>
                      <span className="fi">{ic}</span><div dangerouslySetInnerHTML={{ __html: txt }} />
                    </div>
                  ))}
                </>
              )}
          </motion.div>
        </Reveal>
      </div>
    </div>
  )
}
