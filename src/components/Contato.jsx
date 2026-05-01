import styles from './Contato.module.css'

const WHATSAPP_URL = 'https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20uma%20consulta%20jurídica%20sobre%20direito%20do%20consumidor.'

export default function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Fale Conosco</p>
          <h2 className={styles.title}>
            Defenda Seus <span className="gold-gradient">Direitos</span> Agora
          </h2>
          <div className="section-divider" style={{ marginTop: '16px', marginBottom: '20px' }} />
          <p className={styles.subtitle}>
            A primeira consulta é gratuita. Entre em contato e descubra se você
            tem direito a indenização.
          </p>
        </div>

        <div className={styles.contactBox}>
          <div className={styles.whatsappCard}>
            <div className={styles.whatsappIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className={styles.whatsappInfo}>
              <h3 className={styles.whatsappTitle}>WhatsApp</h3>
              <p className={styles.whatsappDesc}>Atendimento rápido e direto. Resposta em até 1 hora.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              Iniciar Conversa
            </a>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <span className={styles.infoLabel}>Horário de Atendimento</span>
                <span className={styles.infoVal}>Seg – Sex, 08h às 18h</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <span className={styles.infoLabel}>Atendimento</span>
                <span className={styles.infoVal}>Presencial & Online</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.29 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <div>
                <span className={styles.infoLabel}>Telefone / WhatsApp</span>
                <span className={styles.infoVal}>(11) 99999-9999</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <span className={styles.infoLabel}>E-mail</span>
                <span className={styles.infoVal}>contato@alexandresaraiva.adv.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
