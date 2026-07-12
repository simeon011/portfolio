import { motion } from 'framer-motion'
import { PAGES, FILE, ICON, CNT, social } from '../data.js'

export default function Sidebar({ page, go, onOpenCmd }) {
  return (
    <aside>
      <div className="id">
        <div className="avatar">🐍</div>
        <div><div className="nm">Simeon G.</div><div className="rl">Python Developer</div></div>
      </div>
      <div className="now-at"><span className="d" />Now: <b>Assoc. Software Dev (Intern)</b> @ ISI Markets</div>
      <button className="kbd-hint" onClick={onOpenCmd}>Search / jump to…<span className="k">Ctrl K</span></button>
      <p className="rail-label">Explorer</p>
      <div className="navlist">
        {PAGES.map((p) => (
          <button key={p} className={`navi${page === p ? ' active' : ''}`} onClick={() => go(p)}>
            <span className="ic">{ICON[p]}</span>
            <span className="lbl">{FILE[p]}</span>
            {CNT[p] && <span className="cnt">{CNT[p]}</span>}
          </button>
        ))}
      </div>
      <div className="rail-foot">
        <div className="socials">
          <a className="soc" href={`mailto:${social.email}`} title="Email">✉</a>
          <a className="soc" href={social.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">in</a>
          <a className="soc" href={social.github} target="_blank" rel="noreferrer" title="GitHub">🐙</a>
        </div>
        <div className="status"><span className="live" />python 3.12 · online</div>
      </div>
    </aside>
  )
}
