import React from 'react'
import { useReveal } from '../hooks/useReveal'

const entries = [
  {
    date: 'juin–août 2025',
    role: 'Stage Développeur Backend Full-Stack',
    org: 'Banque Nationale de Mauritanie — Nouakchott',
    desc: "Application mobile bancaire (cartes prépayées) : backend Java/Spring Boot, API REST sécurisées, intégration Oracle, tests et suivi du déploiement en production.",
  },
  {
    date: '2023 — 2026',
    role: "Diplôme d'Ingénieur Informatique — M1",
    org: 'Polytech Nantes — 4ᵉ année',
    desc: "Développement (Java, Spring, Angular, React, Node), qualité logicielle (tests, CI/CD, code review), méthodologies Agile/Scrum, projets collaboratifs Git/GitLab.",
  },
  {
    date: '2019 — 2020',
    role: 'Baccalauréat Mathématiques — Mention Bien',
    org: 'École Privée Menhel — Mauritanie',
    desc: "Bilingue français (C2), anglais (TOEIC), arabe natif, notions d'espagnol.",
  },
]

function LogItem({ entry }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="log-item reveal">
      <div className="log-date">{entry.date}</div>
      <div className="log-role">{entry.role}</div>
      <div className="log-org">{entry.org}</div>
      <p className="log-desc">{entry.desc}</p>
    </div>
  )
}

function Timeline() {
  const tagRef = useReveal()

  return (
    <section id="parcours">
      <div className="wrap">
        <div ref={tagRef} className="sec-tag reveal">
          <span className="hash">$</span>
          <span>git&nbsp;log&nbsp;--parcours</span>
          <span className="grow" />
          <span>01</span>
        </div>
        <div className="log">
          {entries.map((e, i) => (
            <LogItem key={i} entry={e} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
