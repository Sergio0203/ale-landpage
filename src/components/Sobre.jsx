import styles from './Sobre.module.css'

const valores = [
  { label: 'Compromisso', desc: 'Dedicação total ao seu caso, do início ao resultado final.' },
  { label: 'Transparência', desc: 'Comunicação clara, sem termos jurídicos desnecessários.' },
  { label: 'Resultados', desc: 'Foco em soluções práticas e eficientes para o seu problema.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Sobre o Advogado</p>
          <h2 className={styles.title}>
            Alexandre <span className="gold-gradient">Saraiva</span>
          </h2>
          <div className={styles.divider} />

          <p className={styles.text}>
            O Dr. Alexandre Saraiva fundou seu escritório com o propósito claro de oferecer
            uma advocacia de excelência no Direito do Consumidor — ágil, acessível e focada
            em resultados reais para cada cliente.
          </p>
          <p className={styles.text}>
            Sua atuação é marcada pelo rigor técnico, pela atenção individualizada a cada caso
            e pelo comprometimento em encontrar a melhor solução, seja pela via extrajudicial
            ou judicial.
          </p>

          <div className={styles.valores}>
            {valores.map((v, i) => (
              <div key={i} className={styles.valor}>
                <div className={styles.valorIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <div>
                  <strong className={styles.valorLabel}>{v.label}</strong>
                  <p className={styles.valorDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
