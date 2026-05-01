import styles from './Atuacao.module.css'

const areas = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: 'Cobranças Indevidas',
    desc: 'Taxas abusivas, juros ilegais, cobranças duplicadas ou por serviços não contratados. Você tem direito à devolução em dobro.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Negativação Injusta',
    desc: 'Nome no SPC/Serasa sem motivo justo? Além da retirada imediata, você pode ser indenizado por danos morais.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: 'Produto com Defeito',
    desc: 'Produto entregue com defeito, divergente ou que não funciona. Troca, reembolso ou reparação — você escolhe.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
      </svg>
    ),
    title: 'Serviço Não Prestado',
    desc: 'Pagou por um serviço que não foi entregue ou foi entregue de forma precária? Reembolso integral e indenização.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Plano de Saúde',
    desc: 'Negativa de cobertura, demora excessiva em autorização ou cancelamento abusivo de plano de saúde.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    ),
    title: 'E-commerce & Telecomunicações',
    desc: 'Compra online não entregue, cancelamento sem devolução e problemas com operadoras de internet, telefone e TV.',
  },
]

export default function Atuacao() {
  return (
    <section id="atuacao" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Especialidades</p>
          <h2 className={styles.title}>
            Áreas de <span className="gold-gradient">Atuação</span>
          </h2>
          <div className="section-divider" style={{ marginTop: '16px', marginBottom: '20px' }} />
          <p className={styles.subtitle}>
            O Código de Defesa do Consumidor protege você em diversas situações.
            Conheça as principais áreas em que atuamos.
          </p>
        </div>

        <div className={styles.grid}>
          {areas.map((area, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{area.icon}</div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
