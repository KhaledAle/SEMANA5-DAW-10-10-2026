import Dashboard from './components/Dashboard.jsx'
import MetricCard from './components/MetricCard.jsx'
import styles from './App.module.css'

// PASO 1: Scaffold del proyecto y configuración de Vite + React.
// El proyecto ya usa Vite; la estructura src/components/ y src/styles/
// separa los componentes reutilizables de los estilos globales mínimos.

const metrics = [
  {
    title: 'Estudiantes matriculados',
    value: '1,284',
    detail: '+8.2%',
    caption: 'respecto al ciclo anterior',
    icon: '01',
    tone: 'green',
  },
  {
    title: 'Promedio general',
    value: '15.8',
    detail: '+0.6',
    caption: 'puntos este semestre',
    icon: '02',
    tone: 'gold',
  },
  {
    title: 'Asistencia promedio',
    value: '92.4%',
    detail: '+2.1%',
    caption: 'en las últimas 4 semanas',
    icon: '03',
    tone: 'green',
  },
  {
    title: 'Cursos activos',
    value: '36',
    detail: '4',
    caption: 'cursos por concluir',
    icon: '04',
    tone: 'gold',
  },
]

const courses = [
  { name: 'Ingeniería de Software II', code: 'IS-401', progress: 84, students: 42 },
  { name: 'Bases de Datos Avanzadas', code: 'IS-305', progress: 76, students: 38 },
  { name: 'Inteligencia Artificial', code: 'IS-502', progress: 68, students: 35 },
]

const activity = [
  { initials: 'MR', name: 'María Rodríguez', event: 'Entregó el proyecto final', time: 'Hace 12 min' },
  { initials: 'JC', name: 'José Campos', event: 'Registró asistencia · IS-401', time: 'Hace 38 min' },
  { initials: 'AL', name: 'Ana López', event: 'Publicó notas parciales', time: 'Hace 1 h' },
]

const weeklyAttendance = [
  { day: 'Lun', value: 76 },
  { day: 'Mar', value: 88 },
  { day: 'Mié', value: 70 },
  { day: 'Jue', value: 96 },
  { day: 'Vie', value: 84 },
  { day: 'Sáb', value: 58 },
]

const Icon = ({ name }) => {
  const paths = {
    overview: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    courses: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z" /><path d="M4 5.5v13A2.5 2.5 0 0 1 6.5 16H20" /></>,
    students: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    reports: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.4.8l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.4-.8l-1.7.6-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.7l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.4-.8l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.4.8l1.7-.6 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.7Z" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

function App() {
  // PASO 2: Limpieza de boilerplate y configuración del componente raíz <App>
  // como único orquestador: aquí se definen y distribuyen los datos de ejemplo.
  return (
    <div className={styles.appShell}>
      <aside className={styles.sidebar} aria-label="Navegación principal">
        <a className={styles.brand} href="#inicio" aria-label="UNCP, inicio">
          <span className={styles.brandMark}>U</span>
          <span className={styles.brandText}>
            <strong>UNCP</strong>
            <small>INGENIERÍA DE SISTEMAS</small>
          </span>
        </a>

        <div className={styles.navLabel}>MENÚ PRINCIPAL</div>
        <nav className={styles.navigation}>
          <a className={`${styles.navItem} ${styles.navItemActive}`} href="#inicio" aria-current="page">
            <Icon name="overview" /> <span>Panel general</span>
          </a>
          <a className={styles.navItem} href="#cursos"><Icon name="courses" /> <span>Cursos</span></a>
          <a className={styles.navItem} href="#actividad"><Icon name="students" /> <span>Estudiantes</span></a>
          <a className={styles.navItem} href="#asistencia"><Icon name="reports" /> <span>Rendimiento</span></a>
        </nav>

        <div className={styles.sidebarBottom}>
          <a className={styles.navItem} href="#configuracion"><Icon name="settings" /> <span>Configuración</span></a>
          <div className={styles.sidebarNote}>
            <span className={styles.noteDot} />
            <div><strong>Ciclo académico</strong><span>2026 - II · En curso</span></div>
          </div>
          <div className={styles.profile}>
            <div className={styles.avatar}>JP</div>
            <div className={styles.profileText}><strong>Juan Pérez</strong><span>Administrador</span></div>
            <span className={styles.profileMore}>•••</span>
          </div>
        </div>
      </aside>

      <main className={styles.mainContent} id="inicio">
        <header className={styles.topbar}>
          <div className={styles.breadcrumb}>Facultad <span>/</span> <strong>Panel general</strong></div>
          <div className={styles.topbarActions}>
            <button className={styles.searchButton} type="button" aria-label="Buscar"><Icon name="search" /></button>
            <button className={styles.notificationButton} type="button" aria-label="Notificaciones">
              <Icon name="bell" /><span className={styles.notificationDot} />
            </button>
            <div className={styles.topbarDivider} />
            <span className={styles.topbarDate}>Sábado, 10 de octubre</span>
          </div>
        </header>

        {/* PASO 3: Implementación del flujo unidireccional de datos con Props y
            composición con children. App entrega los datos a Dashboard y compone
            MetricCard como contenido. Ambos componentes están documentados con
            JSDoc y no utilizan state. */}
        <Dashboard
          eyebrow="SÁBADO, 10 DE OCTUBRE DE 2026"
          title="Resumen académico"
          description="Indicadores clave de la Facultad de Ingeniería de Sistemas."
          period="Ciclo 2026 - II"
        >
          <section className={styles.metricsGrid} aria-label="Indicadores académicos">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                detail={metric.detail}
                caption={metric.caption}
                tone={metric.tone}
              >
                <span className={styles.metricIcon} aria-hidden="true">{metric.icon}</span>
              </MetricCard>
            ))}
          </section>

          <section className={styles.contentGrid}>
            <article className={styles.panel} id="asistencia">
              <div className={styles.panelHeader}>
                <div><h2>Asistencia semanal</h2><p>Promedio de asistencia por día</p></div>
                <button className={styles.selectButton} type="button">Esta semana <span>⌄</span></button>
              </div>
              <div className={styles.chartLegend}><span /> Asistencia registrada <strong>82%</strong></div>
              <div className={styles.chart} role="img" aria-label="Gráfico de asistencia semanal: lunes 76%, martes 88%, miércoles 70%, jueves 96%, viernes 84%, sábado 58%">
                <div className={styles.chartGrid}>
                  <span>100%</span><span>75%</span><span>50%</span><span>25%</span>
                </div>
                <div className={styles.barGroup}>
                  {weeklyAttendance.map(({ day, value }) => (
                    <div className={styles.barColumn} key={day}>
                      <div className={styles.barTrack}><div className={styles.bar} style={{ height: `${value}%` }} /></div>
                      <span>{day}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.chartFooter}><span>0 clases registradas</span><span>Meta institucional: 85%</span></div>
            </article>

            <article className={styles.panel} id="actividad">
              <div className={styles.panelHeader}>
                <div><h2>Actividad reciente</h2><p>Últimos movimientos académicos</p></div>
                <button className={styles.moreButton} type="button" aria-label="Más opciones">•••</button>
              </div>
              <ul className={styles.activityList}>
                {activity.map((item) => (
                  <li className={styles.activityItem} key={item.name}>
                    <span className={styles.activityAvatar}>{item.initials}</span>
                    <div className={styles.activityInfo}><strong>{item.name}</strong><span>{item.event}</span></div>
                    <time>{item.time}</time>
                  </li>
                ))}
              </ul>
              <a className={styles.textLink} href="#actividad">Ver toda la actividad <Icon name="arrow" /></a>
            </article>
          </section>

          <section className={styles.panel} id="cursos">
            <div className={styles.panelHeader}>
              <div><h2>Rendimiento por curso</h2><p>Avance académico del ciclo actual</p></div>
              <a className={styles.textLink} href="#cursos">Ver todos los cursos <Icon name="arrow" /></a>
            </div>
            <div className={styles.courseTable}>
              <div className={styles.tableHeader}><span>CURSO</span><span>ESTUDIANTES</span><span>AVANCE DEL CURSO</span><span>ESTADO</span></div>
              {courses.map((course) => (
                <div className={styles.courseRow} key={course.code}>
                  <div className={styles.courseName}><strong>{course.name}</strong><span>{course.code}</span></div>
                  <span className={styles.studentCount}>{course.students} estudiantes</span>
                  <div className={styles.progressCell}><div className={styles.progressTrack}><span style={{ width: `${course.progress}%` }} /></div><strong>{course.progress}%</strong></div>
                  <span className={styles.status}><i /> En curso</span>
                </div>
              ))}
            </div>
          </section>

          <footer className={styles.footer}>
            <span>© 2026 Universidad Nacional del Centro del Perú</span>
            <span>Facultad de Ingeniería de Sistemas</span>
          </footer>
        </Dashboard>
      </main>
    </div>
  )
}

export default App
