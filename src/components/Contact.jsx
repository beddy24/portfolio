import React from 'react'
import { useReveal } from '../hooks/useReveal'

function Contact() {
  const tagRef = useReveal()
  const boxRef = useReveal()

  return (
    <section id="contact">
      <div className="wrap">
        <div ref={tagRef} className="sec-tag reveal">
          <span className="hash">$</span>
          <span>./contact.sh</span>
          <span className="grow" />
          <span>00</span>
        </div>
        <div ref={boxRef} className="contact-box reveal">
          <div className="l">
            <span className="grn">➜</span> Disponible pour une alternance — discutons.
          </div>
          <div className="cgrid">
            <a className="citem" href="mailto:beddy19029@gmail.com">
              <span className="k">email</span> beddy19029@gmail.com
            </a>
            <a className="citem" href="tel:+33679185479">
              <span className="k">tel</span> +33 6 79 18 54 79
            </a>
            <span className="citem">
              <span className="k">loc</span> Nantes, France
            </span>
            <span className="citem">
              <span className="k">status</span>{' '}
              <span className="grn">disponible · 2026</span>
            </span>
          </div>
        </div>
        <footer>
          <span>© 2026 dine beddi</span>
          <span>built with vim &amp; coffee ☕</span>
        </footer>
      </div>
    </section>
  )
}

export default Contact
