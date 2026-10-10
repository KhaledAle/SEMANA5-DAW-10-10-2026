import styles from './Dashboard.module.css'

/**
 * Layout presentacional del dashboard. Recibe el contenido de la página a través de props y
 * renderiza su contenido a través de children, manteniendo la propiedad de los datos en App.
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
