import styles from './MetricCard.module.css'

/**
 * Carta KPI académica reutilizable. El icono/contenido se compone a través de children.
 *
 * @param {{ title: string, value: string, detail: string, caption: string, tone?: 'green' | 'gold', children: import('react').ReactNode }} props
 */
function MetricCard({ title, value, detail, caption, tone = 'green', children }) {
  const cardClassName = tone === 'gold'
    ? `${styles.metricCard} ${styles.gold}`
    : styles.metricCard

  return (
    <article className={cardClassName}>
      <div className={styles.cardTop}>
        <span className={styles.title}>{title}</span>
        {children}
      </div>
      <div className={styles.value}>{value}</div>
      <div className={styles.cardBottom}>
        <strong>{detail}</strong>
        <span>{caption}</span>
      </div>
    </article>
  )
}

export default MetricCard
