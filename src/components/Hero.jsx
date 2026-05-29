import React, { useRef, useState } from 'react'

const ASCII = ` ____  _              ____           _     _ _
|  _ \\(_)_ __   ___  | __ )  ___  __| | __| (_)
| | | | | '_ \\ / _ \\ |  _ \\ / _ \\/ _\` |/ _\` | |
| |_| | | | | |  __/ | |_) |  __/ (_| | (_| | |
|____/|_|_| |_|\\___| |____/ \\___|\\__,_|\\__,_|_|`

const CMDS = {
  help: () => `commandes: <span class="grn">whoami projects skills stack contact log clear sudo</span>`,
  whoami: () => `Dine Beddi — Développeur Full-Stack, M1 Polytech Nantes. En recherche d'<span class="amb">alternance 2026</span>.`,
  projects: () => `<span class="cyn">banque-mobile</span> (2025) · <span class="cyn">mern-app</span> (2024) · <span class="cyn">academic-projects</span> (2023–24) — <span class="dim">voir la section ci-dessous ↓</span>`,
  skills: () => `Java · Spring Boot · API REST · Angular · React · TypeScript · Node · SQL · Docker · CI/CD`,
  stack: () => `backend: Java/Spring · front: Angular/React · db: Oracle/Postgres/Mongo · ops: GitLab CI`,
  contact: () => `✉ <span class="grn">beddy19029@gmail.com</span> · ☎ +33 6 79 18 54 79 · 📍 Nantes`,
  log: () => `2025 stage BNM · 2023–26 M1 Polytech · 2019–20 Bac mention bien`,
  sudo: (arg) =>
    arg === 'hire'
      ? `<span class="grn">[sudo] permission accordée ✓</span> — écrivez à beddy19029@gmail.com 🎉`
      : `usage: sudo hire`,
  clear: null,
}

function Prompt() {
  return (
    <>
      <span className="grn">dine@beddi</span>
      <span className="faint">:</span>
      <span className="cyn">~</span>
      <span className="faint">$</span>{' '}
    </>
  )
}

function Hero() {
  const [history, setHistory] = useState([])
  const inputRef = useRef(null)
  const bodyRef = useRef(null)

  const handleKey = (e) => {
    if (e.key !== 'Enter') return
    const raw = e.target.value.trim()
    e.target.value = ''

    if (!raw) {
      setHistory((h) => [...h, { type: 'echo', text: '' }])
      return
    }

    const [cmd, ...rest] = raw.split(/\s+/)
    const fn = CMDS[cmd.toLowerCase()]
    let entries = [{ type: 'echo', text: raw }]

    if (fn === null) {
      setHistory([])
      return
    } else if (fn) {
      entries.push({ type: 'output', html: fn(rest.join(' ').toLowerCase()) })
    } else {
      entries.push({
        type: 'output',
        html: `<span class="mag">zsh: command not found: ${cmd.replace(/</g, '&lt;')}</span> — tape <span class="grn">help</span>`,
      })
    }

    setHistory((h) => [...h, ...entries])
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }, 0)
  }

  return (
    <div className="hero">
      <div className="wrap">
        <pre className="ascii">{ASCII}</pre>
        <p className="tagline">
          <b>Développeur Full-Stack</b> · Java 21+ · Spring Boot · Angular · React{' '}
          <span className="dim">— Nantes, FR</span>
        </p>

        <div className="term">
          <div className="term-head">
            <span className="lights"><i /><i /><i /></span>
            <span>— zsh — dine@beddi —</span>
          </div>
          <div
            className="term-body"
            ref={bodyRef}
            onClick={() => inputRef.current?.focus()}
          >
            <div className="ln"><Prompt />whoami</div>
            <div className="ln dim">
              Étudiant ingénieur (M1, Polytech Nantes), spécialisé full-stack avec une expérience
              concrète en milieu bancaire. En recherche d'<span className="amb">alternance 2026</span>.
            </div>
            <div className="ln" style={{ marginTop: 8 }}><Prompt />cat stack.txt</div>
            <div className="ln"><span className="cyn">backend</span> <span className="faint">→</span> Java · Spring Boot · API REST · JPA/Hibernate</div>
            <div className="ln"><span className="cyn">frontend</span> <span className="faint">→</span> Angular · React · TypeScript · Flutter</div>
            <div className="ln"><span className="cyn">devops</span> <span className="faint">→</span> Git · GitLab · CI/CD · Docker · tests</div>

            {history.map((entry, i) =>
              entry.type === 'echo' ? (
                <div key={i} className="ln">
                  <Prompt />{entry.text}
                </div>
              ) : (
                <div
                  key={i}
                  className="ln"
                  dangerouslySetInnerHTML={{ __html: entry.html }}
                />
              )
            )}

            <div className="cmd-line">
              <span className="ps"><b>dine@beddi</b>:~$</span>
              <input
                ref={inputRef}
                className="cmd-input"
                autoComplete="off"
                spellCheck={false}
                autoFocus
                onKeyDown={handleKey}
              />
            </div>
          </div>
        </div>
        <p className="hint">
          Tape une commande — essaie <b>help</b>, <b>projects</b>, <b>skills</b>, <b>contact</b> ou <b>sudo hire</b>.
        </p>
      </div>
    </div>
  )
}

export default Hero
