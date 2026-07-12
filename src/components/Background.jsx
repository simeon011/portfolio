import { useEffect, useRef } from 'react'

const SYM = ['def', 'class', 'import', 'self', 'return', '>>>', 'lambda', 'async', 'yield', 'None', 'django', 'pip', '{ }']
const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches

export default function Background() {
  const canvasRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    const ctx = cv.getContext('2d')
    let raf, last = 0, ps = []
    const rs = () => { cv.width = window.innerWidth; cv.height = window.innerHeight }
    const mk = () => ({
      x: Math.random() * cv.width, y: cv.height + Math.random() * 280,
      sp: 0.3 + Math.random() * 0.55, t: SYM[(Math.random() * SYM.length) | 0],
      s: 11 + Math.random() * 5, o: 0.05 + Math.random() * 0.08, b: Math.random() > 0.5,
    })
    rs(); window.addEventListener('resize', rs)
    ps = Array.from({ length: 22 }, () => { const p = mk(); p.y = Math.random() * cv.height; return p })

    if (!reduce) {
      const loop = (t) => {
        raf = requestAnimationFrame(loop)
        if (t - last < 34) return
        last = t
        ctx.clearRect(0, 0, cv.width, cv.height)
        for (const p of ps) {
          ctx.font = `${p.s}px "JetBrains Mono", ui-monospace, monospace`
          ctx.fillStyle = p.b ? `rgba(91,163,232,${p.o})` : `rgba(255,212,59,${p.o})`
          ctx.fillText(p.t, p.x, p.y)
          p.y -= p.sp
          if (p.y < -20) Object.assign(p, mk())
        }
      }
      raf = requestAnimationFrame(loop)
    }
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', rs) }
  }, [])

  useEffect(() => {
    if (reduce) return
    const glow = glowRef.current
    let tx = window.innerWidth / 2, ty = window.innerHeight * 0.4, cx = tx, cy = ty, raf
    const onMove = (e) => { tx = e.clientX; ty = e.clientY }
    window.addEventListener('mousemove', onMove)
    const follow = () => {
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12
      glow.style.left = cx + 'px'; glow.style.top = cy + 'px'
      raf = requestAnimationFrame(follow)
    }
    follow()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove) }
  }, [])

  return (
    <>
      <canvas id="dots" ref={canvasRef} />
      <div className="glow-y" />
      <div className="cursor-glow" ref={glowRef} />
      <div className="sheen" />
    </>
  )
}
