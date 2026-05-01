import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoName}>Alexandre Saraiva</span>
          <span className={styles.logoSub}>Advocacia & Consultoria Jurídica</span>
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20uma%20consulta%20jurídica."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
              onClick={() => setMenuOpen(false)}
            >
              Fale Agora
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
