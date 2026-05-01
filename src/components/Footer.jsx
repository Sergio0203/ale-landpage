import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <img src="/logo2.png" alt="Alexandre Saraiva" className={styles.logoImg} />
            <div>
              <p className={styles.brandName}>Alexandre Saraiva</p>
              <p className={styles.brandSub}>Advocacia & Consultoria Jurídica</p>
            </div>
          </div>

          <nav className={styles.links}>
            <a href="#hero">Início</a>
            <a href="#atuacao">Atuação</a>
            <a href="#sobre">Sobre</a>
            <a href="#processo">Como Funciona</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.container}>
          <p className={styles.legal}>
            © {new Date().getFullYear()} Alexandre Saraiva Advocacia e Consultoria Jurídica. Todos os direitos reservados.
          </p>
          <p className={styles.oab}>
            OAB/SP 000.000 — Este site tem caráter meramente informativo e não constitui consultoria jurídica.
          </p>
        </div>
      </div>
    </footer>
  )
}
