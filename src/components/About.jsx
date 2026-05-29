import React from 'react'
import { useReveal } from '../hooks/useReveal'

const skills = [
  { k: 'backend', v: 'Java · Spring Boot · Node · Express · REST' },
  { k: 'frontend', v: 'React · Angular · TS · HTML/CSS · Flutter' },
  { k: 'data', v: 'Oracle · PostgreSQL · MySQL · MongoDB' },
  { k: 'tests', v: 'Unitaires · intégration · Postman · TDD' },
  { k: 'devops', v: 'Git · GitLab · CI/CD · Docker · Maven' },
  { k: 'méthodes', v: 'Agile/Scrum · API design · code review' },
]

function About() {
  const tagRef = useReveal()
  const photoRef = useReveal()
  const contentRef = useReveal()

  return (
    <section id="about">
      <div className="wrap">
        <div ref={tagRef} className="sec-tag reveal">
          <span className="hash">$</span>
          <span>cat&nbsp;profile.json</span>
          <span className="grow" />
          <span>02</span>
        </div>
        <div className="about-grid">
          <div ref={photoRef} className="about-photo-placeholder reveal">photo</div>
          <div ref={contentRef} className="reveal">
            <div className="json">
              <span className="pun">{'{'}</span><br />
              &nbsp;&nbsp;<span className="key">"nom"</span><span className="pun">:</span>{' '}
              <span className="str">"Dine Beddi"</span><span className="pun">,</span><br />
              &nbsp;&nbsp;<span className="key">"rôle"</span><span className="pun">:</span>{' '}
              <span className="str">"Développeur Full-Stack"</span><span className="pun">,</span><br />
              &nbsp;&nbsp;<span className="key">"formation"</span><span className="pun">:</span>{' '}
              <span className="str">"M1 Ingénieur — Polytech Nantes"</span><span className="pun">,</span><br />
              &nbsp;&nbsp;<span className="key">"localisation"</span><span className="pun">:</span>{' '}
              <span className="str">"Nantes, France"</span><span className="pun">,</span><br />
              &nbsp;&nbsp;<span className="key">"langues"</span><span className="pun">:</span>{' '}
              <span className="str">{'["FR (C2)", "EN (TOEIC)", "AR", "ES"]'}</span><span className="pun">,</span><br />
              &nbsp;&nbsp;<span className="key">"statut"</span><span className="pun">:</span>{' '}
              <span className="str">"recherche_alternance"</span><br />
              <span className="pun">{'}'}</span>
            </div>
            <p className="about-prose">
              Autonomie, rigueur et curiosité technique. Pratique quotidienne des tests, du CI/CD et
              de l'Agile — j'aime livrer un code propre, testé et maintenable. Centres d'intérêt :
              hackathons, aviron, football, échecs.
            </p>
            <div className="skills">
              {skills.map(({ k, v }) => (
                <div className="srow" key={k}>
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
