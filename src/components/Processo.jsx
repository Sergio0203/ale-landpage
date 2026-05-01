import styles from './Processo.module.css'

const steps = [
  {
    num: '01',
    title: 'Consulta Gratuita',
    desc: 'Entre em contato pelo WhatsApp. Explicamos seu caso em linguagem simples e avaliamos se você tem direito a indenização — sem compromisso.',
  },
  {
    num: '02',
    title: 'Análise do Caso',
    desc: 'Reunimos os documentos necessários e elaboramos a estratégia mais adequada: negociação extrajudicial ou ação judicial.',
  },
  {
    num: '03',
    title: 'Atuação Estratégica',
    desc: 'Trabalhamos para resolver seu caso da forma mais rápida e eficiente, mantendo você informado em cada etapa do processo.',
  },
  {
    num: '04',
    title: 'Resultado Garantido',
    desc: 'Seu problema resolvido: seja pelo reconhecimento do seu direito, indenização por danos morais ou materiais, ou exclusão do nome.',
  },
]

const WHATSAPP_URL = 'https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20uma%20consulta%20jurídica.'

export default function Processo() {
  return (
    <section id="processo" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Metodologia</p>
          <h2 className={styles.title}>
            Como <span className="gold-gradient">Funciona</span>
          </h2>
          <div className="section-divider" style={{ marginTop: '16px', marginBottom: '20px' }} />
          <p className={styles.subtitle}>
            Processo simples, transparente e focado no seu resultado.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              {i < steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Pronto para defender seus direitos?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Iniciar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
