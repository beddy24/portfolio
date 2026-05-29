import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    id: 'banque-mobile',
    name: 'banque-mobile',
    subtitle: '/ application cartes prépayées',
    meta: '2025 · stage',
    defaultOpen: true,
    role: '// Développeur Backend Full-Stack — Banque Nationale de Mauritanie',
    desc: "Architecture backend complète pour une application mobile de gestion de cartes prépayées. API REST sécurisées pour les transactions bancaires, intégration base Oracle via JPA/Hibernate, tests unitaires & d'intégration validés sous Postman, collaboration avec l'équipe Flutter en Scrum.",
    kv: [
      { k: 'role', v: 'Backend / Full-Stack' },
      { k: 'durée', v: '8 semaines · Nouakchott' },
      { k: 'résultat', v: 'Appli performante, qualité de code bancaire' },
    ],
    chips: ['Java', 'Spring Boot', 'API REST', 'Oracle', 'JPA/Hibernate', 'Flutter'],
    imgLabel: 'capture / archi',
  },
  {
    id: 'mern-app',
    name: 'mern-app',
    subtitle: '/ web app + CI/CD',
    meta: '2024',
    defaultOpen: false,
    role: '// Application Web full-stack avec pipeline automatisé',
    desc: "Front React responsive avec gestion d'état avancée, backend API REST Node/Express et authentification JWT. Tests front (Jest) et back (Mocha/Chai), pipeline GitLab CI/CD complet : build, tests automatisés et déploiement.",
    kv: [
      { k: 'role', v: 'Full-Stack' },
      { k: 'tests', v: 'Jest · Mocha/Chai' },
      { k: 'ci', v: 'GitLab · build → test → deploy' },
    ],
    chips: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'GitLab CI'],
    imgLabel: "capture de l'app",
  },
  {
    id: 'academic-projects',
    name: 'academic-projects',
    subtitle: '/ Angular · Java · SQL · Python',
    meta: '2023–24',
    defaultOpen: false,
    role: '// Projets académiques — Polytech Nantes',
    desc: "Interfaces web modernes et composants réutilisables en Angular, algorithmes d'optimisation et structures de données complexes en Java, schémas et requêtes SQL avancées (MySQL/PostgreSQL), automatisation et analyse de données en Python.",
    kv: [{ k: 'focus', v: 'Algorithmique · data · UI' }],
    chips: ['Angular', 'Java', 'PostgreSQL', 'Python', 'NumPy/Pandas'],
    imgLabel: 'capture / diagramme',
  },
]

function ProjectCard({ project }) {
  const [open, setOpen] = useState(project.defaultOpen)
  const ref = useReveal()

  return (
    <div ref={ref} className={`proj reveal${open ? ' open' : ''}`}>
      <div className="proj-head" onClick={() => setOpen(!open)}>
        <span className="chev">▶</span>
        <span className="proj-name">{project.name}</span>
        <span className="dim" style={{ fontSize: 13 }}>{project.subtitle}</span>
        <span className="proj-meta">{project.meta}</span>
      </div>
      <div className="proj-body">
        <div className="proj-inner">
          <div>
            <div className="proj-role">{project.role}</div>
            <p className="proj-desc">{project.desc}</p>
            {project.kv.map(({ k, v }) => (
              <div className="kv" key={k}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
            <div className="stack">
              {project.chips.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
          <div className="proj-img-placeholder">{project.imgLabel}</div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const tagRef = useReveal()
  const titleRef = useReveal()

  return (
    <section id="projects">
      <div className="wrap">
        <div ref={tagRef} className="sec-tag reveal">
          <span className="hash">$</span>
          <span>ls&nbsp;~/projects</span>
          <span className="grow" />
          <span>03</span>
        </div>
        <h2 ref={titleRef} className="sec-title reveal" style={{ marginBottom: 26 }}>
          Travaux sélectionnés
        </h2>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
