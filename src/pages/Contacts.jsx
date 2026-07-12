import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { social, CV_URL, FORMSPREE_URL } from '../data.js'

export default function Contacts() {
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const [copied, setCopied] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const fd = new FormData(form)
    const name = (fd.get('name') || '').trim()
    const email = (fd.get('email') || '').trim()
    const msg = (fd.get('msg') || '').trim()
    const errs = {}
    if (name.length < 2) errs.name = 'Please enter your name'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = 'Please enter a valid email'
    if (msg.length < 4) errs.msg = 'Please write a short message'
    setErrors(errs)
    if (Object.keys(errs).length) return

    setSending(true)
    setSendError('')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      if (res.ok) setSent(true)
      else {
        const data = await res.json().catch(() => ({}))
        setSendError(data?.errors?.[0]?.message || 'Something went wrong. Please email me directly.')
      }
    } catch {
      setSendError('Network error. Please email me directly.')
    } finally {
      setSending(false)
    }
  }

  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1600) }
    if (navigator.clipboard) navigator.clipboard.writeText(social.email).then(done).catch(done)
    else done()
  }

  return (
    <div className="page">
      <div className="wrap">
        <Reveal><p className="cmt"><b>#</b> contacts.py — send a message</p></Reveal>
        <Reveal delay={0.06}><h2>Contacts</h2></Reveal>
        <Reveal delay={0.12}><p className="sub" style={{ margin: '8px 0 24px' }}>Open to opportunities and collaboration. Write to me directly below.</p></Reveal>

        <Reveal delay={0.18}>
          <div className="cwrap">
            {sent ? (
              <div className="cform card">
                <div className="form-ok"><div className="ico">✅</div><h3>Message sent!</h3>
                  <p>Thanks for reaching out — I'll get back to you soon.</p></div>
              </div>
            ) : (
              <form className="cform card" onSubmit={onSubmit} noValidate>
                <div className={`fg${errors.name ? ' invalid' : ''}`}>
                  <label>Your name</label><input name="name" placeholder="Jane Doe" />
                  {errors.name && <div className="err-msg">{errors.name}</div>}
                </div>
                <div className={`fg${errors.email ? ' invalid' : ''}`}>
                  <label>Email</label><input name="email" placeholder="jane@example.com" />
                  {errors.email && <div className="err-msg">{errors.email}</div>}
                </div>
                <div className={`fg${errors.msg ? ' invalid' : ''}`}>
                  <label>Message</label><textarea name="msg" placeholder="Hi Simeon, I'd love to talk about..." />
                  {errors.msg && <div className="err-msg">{errors.msg}</div>}
                </div>
                {sendError && <div className="err-msg" style={{ marginBottom: '12px' }}>{sendError}</div>}
                <button type="submit" className="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message →'}</button>
              </form>
            )}

            <div className="cside">
              <div className="cline card" onClick={copy}>
                <span className="ci">✉️</span>
                <div><div className="cl">Email</div><div className="cv">{social.email}</div></div>
                <span className="copy" style={copied ? { color: 'var(--green)' } : undefined}>{copied ? 'copied ✓' : 'copy'}</span>
              </div>
              <a className="cline card" href={social.linkedin} target="_blank" rel="noreferrer">
                <span className="ci">💼</span><div><div className="cl">LinkedIn</div><div className="cv">linkedin.com/in/simeon</div></div>
              </a>
              <a className="cline card" href={social.github} target="_blank" rel="noreferrer">
                <span className="ci">🐙</span><div><div className="cl">GitHub</div><div className="cv">github.com/simeon011</div></div>
              </a>
              <a className="dlcv" href={CV_URL} download>⬇ Download CV (PDF)</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="foot"><span className="kw">if</span> __name__ == <span className="str">"__main__"</span>: build_something(<span className="str">"together"</span>)</p>
        </Reveal>
      </div>
    </div>
  )
}
