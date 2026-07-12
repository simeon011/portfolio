import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { heroCode } from '../data.js'

const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches
const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]))

export default function Home({ go }) {
  const [out, setOut] = useState([])
  const [ready, setReady] = useState(false)
  const [val, setVal] = useState('')
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    const lines = heroCode.map(([h, ind], i) => ({ n: i + 1, html: `<span style="padding-left:${ind * 1.5}em">${h}</span>` }))
    if (reduce) {
      setOut([...lines, { n: '', html: '<span class="pn"># interactive console — try: help</span>' }])
      setReady(true)
      return
    }
    let i = 0
    const step = () => {
      if (cancelled) return
      if (i >= lines.length) {
        setOut((o) => [...o, { n: '', html: '<span class="pn"># interactive console — try: help</span>' }])
        setReady(true)
        return
      }
      const item = lines[i]
      setOut((o) => [...o, item])
      i++
      setTimeout(step, i === 1 ? 230 : 150)
    }
    const t = setTimeout(step, 400)
    return () => { cancelled = true; clearTimeout(t) }
  }, [])

  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight }, [out, ready])
  useEffect(() => { if (ready) inputRef.current?.focus() }, [ready])

  const run = (raw) => {
    const c = raw.trim().toLowerCase()
    const push = (html) => setOut((o) => [...o, { n: '', html }])
    push(`<span><span class="prompt">&gt;&gt;&gt;</span> ${esc(raw)}</span>`)
    const map = { about: 'about', experience: 'experience', exp: 'experience', projects: 'projects', proj: 'projects', certs: 'certificates', certificates: 'certificates', contacts: 'contacts', contact: 'contacts', home: 'home' }
    const e = (h, cl) => push(`<span class="out ${cl || ''}">${h}</span>`)
    if (!c) return
    if (c === 'help') e('sections: about · experience · projects · certs · contacts &nbsp;|&nbsp; whoami · skills · clear', 'hi')
    else if (c === 'whoami') e('Simeon Golemdzhiev — Python Dev @ ISI Markets 🐍')
    else if (c === 'skills') e('Python, Django, PostgreSQL, ORM, DRF, Docker, AWS, Linux, JS, C, Git')
    else if (c === 'ls') e('about.py  experience.py  projects.py  certs.py  contacts.py')
    else if (c === 'clear') { setOut([]); return }
    else if (c === 'coffee' || c === '☕') e('brewing... ☕ powered by caffeine & Python', 'hi')
    else if (map[c]) { e(`opening ${map[c]}...`, 'hi'); setTimeout(() => go(map[c]), 350) }
    else e(`command not found: ${esc(c)} — try 'help'`, 'err')
  }

  const onKey = (e) => { if (e.key === 'Enter') { run(val); setVal('') } }

  return (
    <div className="page">
      <div className="wrap">
        <div className="hero">
          <div>
            <Reveal delay={0.05}><p className="cmt"><b>#</b> initializing developer...</p></Reveal>
            <Reveal delay={0.12}><h1>Simeon<br /><span className="grad">Golemdzhiev</span></h1></Reveal>
            <Reveal delay={0.19}><p className="role"><span>Python Developer</span><em>·</em>Django<em>·</em>PostgreSQL<em>·</em>Backend</p></Reveal>
            <Reveal delay={0.26}>
              <p className="sub">I build backend systems with Python &amp; Django — clean data models, solid APIs, containerized and deployed to the cloud. Recently graduated from the Technical University of Sofia and now working as an <strong style={{ color: 'var(--ink)' }}>Associate Software Developer (Intern) at ISI Markets</strong>.</p>
            </Reveal>
            <Reveal delay={0.33}>
              <div className="cta">
                <a className="btn primary" onClick={() => go('projects')}>Browse projects</a>
                <a className="btn ghost" onClick={() => go('contacts')}>Get in touch</a>
              </div>
            </Reveal>
          </div>

          <motion.div className="term" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="tbar"><i className="r" /><i className="am" /><i className="gr" /><span className="tt">developer.py — interactive</span></div>
            <div className="tbody" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
              {out.map((l, i) => (
                <div className="ln" key={i}><span className="num">{l.n}</span><span dangerouslySetInnerHTML={{ __html: l.html }} /></div>
              ))}
              {ready && (
                <div className="replRow">
                  <span className="prompt">&gt;&gt;&gt;</span>
                  <input ref={inputRef} className="repl-in" value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={onKey}
                    autoComplete="off" spellCheck="false" placeholder="type 'help' and press ↵" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
