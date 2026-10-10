import styles from './Dashboard.module.css'

/**
 * Presentational dashboard layout. It receives page copy through props and
 * renders its content through children, keeping data ownership in App.
 *
 * @param {{ eyebrow: string, title: string, description: string, period: string, children: import('react').ReactNode }} props
 */
function Dashboard({ eyebrow, title, description, period, children }) {
  return (
    <div className={styles.dashboard}>
      <header className={styles.pageHeading}>
        <div>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.periodBadge}><span />{period}</div>
      </header>
      {children}
    </div>
  )
}

export default Dashboard
