import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FILE } from './data.js'
import Background from './components/Background.jsx'
import Sidebar from './components/Sidebar.jsx'
import Boot from './components/Boot.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Certificates from './pages/Certificates.jsx'
import Contacts from './pages/Contacts.jsx'

const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches
const PAGE_COMP = { home: Home, about: About, experience: Experience, projects: Projects, certificates: Certificates, contacts: Contacts }

function Clock() {
  const [t, setT] = useState('--:--')
  useEffect(() => {
    const tick = () => { const d = new Date(); setT(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`) }
    tick(); const id = setInterval(tick, 10000); return () => clearInterval(id)
  }, [])
  return <span>{t}</span>
}

export default function App() {
  const [booted, setBooted] = useState(false)
  const [page, setPage] = useState('home')
  const [sweep, setSweep] = useState(null)
  const [cmdk, setCmdk] = useState(false)
  const busy = useRef(false)
  const pageRef = useRef('home')

  const go = useCallback((p) => {
    if (busy.current || p === pageRef.current) return
    busy.current = true
    pageRef.current = p
    if (reduce) { setPage(p); busy.current = false; return }
    setSweep(FILE[p])
    setTimeout(() => setPage(p), 270)
    setTimeout(() => { setSweep(null); busy.current = false }, 640)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setCmdk((o) => !o) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const Comp = PAGE_COMP[page]

  return (
    <>
      <Background />
      <AnimatePresence>{!booted && <Boot key="boot" onDone={() => setBooted(true)} />}</AnimatePresence>

      <div id="app">
        <Sidebar page={page} go={go} onOpenCmd={() => setCmdk(true)} />
        <main>
          <div className="topbar">
            <span className="crumb">simeon-portfolio / <b>{FILE[page]}</b></span>
            <span className="rt"><Clock /><span>UTF-8</span><span>main ●</span></span>
          </div>
          <div className="stage">
            {booted && <Comp key={page} go={go} />}
            <AnimatePresence>
              {sweep && (
                <div className="sweep">
                  <motion.div className="veil" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} />
                  <motion.div className="line" initial={{ top: '-4%' }} animate={{ top: '104%' }} transition={{ duration: 0.6, ease: [0.5, 0, 0.5, 1] }} />
                  <motion.div className="lab" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>▶ running {sweep}</motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      <AnimatePresence>{cmdk && <CommandPalette key="cmdk" go={go} onClose={() => setCmdk(false)} />}</AnimatePresence>
    </>
  )
}
