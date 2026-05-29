import React from 'react'

const navItems = [
  { label: 'projects', href: '#projects' },
  { label: 'about', href: '#about' },
  { label: 'parcours', href: '#parcours' },
  { label: 'contact', href: '#contact' },
]

function Header() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="topbar">
      <div className="inner">
        <div className="tb-left">
          <span className="lights"><i /><i /><i /></span>
          <span className="tb-path">dine@beddi: ~/portfolio</span>
        </div>
        <nav className="tb-nav">
          {navItems.map((item) => (
            <a key={item.href} onClick={() => scrollTo(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header
