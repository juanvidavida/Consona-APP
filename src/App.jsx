import './App.css'

const orientationCards = [
  {
    eyebrow: 'Conocimiento general',
    title: 'Qué pasa en su cuerpo',
    text: 'La fase lútea se describe, en general, como el periodo posterior a la ovulación y anterior a un nuevo sangrado. Una fecha calculada no confirma que ese proceso ocurra así en una persona concreta.'
  },
  {
    eyebrow: 'Conversación',
    title: 'Qué puedes preguntarle',
    text: '“¿Cómo estás hoy? ¿Hay algo que prefieras que tenga en cuenta?” Una pregunta abierta deja espacio para escuchar sin dar nada por hecho.'
  },
  {
    eyebrow: 'Acción propia',
    title: 'Qué te toca a ti',
    text: 'Organiza tus propias responsabilidades, comunica tus planes con claridad y deja espacio para ajustar la logística si la otra persona lo pide.'
  },
  {
    eyebrow: 'Antiestereotipo',
    title: 'Qué no asumir',
    text: 'Una fase estimada no explica cómo se siente alguien, qué necesita o cómo quiere que actúes. La conversación directa sigue siendo lo importante.'
  }
]

function App() {
  const today = new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date())

  return (
    <main className="today-shell">
      <a className="skip-link" href="#contenido-principal">Saltar al contenido principal</a>

      <header className="app-header" aria-label="Encabezado de Consona">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span className="brand-name">Consona</span>
        </div>
        <span className="demo-badge">Prototipo local</span>
      </header>

      <section className="demo-notice" aria-label="Estado del prototipo">
        <span className="notice-dot" aria-hidden="true" />
        <p>
          Ejemplo con datos ficticios: no representa a ninguna persona ni guarda información de ciclo.
        </p>
      </section>

      <div id="contenido-principal" className="today-content" tabIndex="-1">
        <header className="today-heading">
          <div>
            <p className="eyebrow">Panel principal</p>
            <h1>Hoy</h1>
            <p className="today-date">{today}</p>
          </div>
          <a className="text-link" href="#como-funciona">Cómo funciona <span aria-hidden="true">↓</span></a>
        </header>

        <section className="phase-panel" aria-labelledby="phase-title">
          <div className="phase-topline">
            <p className="eyebrow phase-eyebrow">Estimación por fechas confirmadas</p>
            <span className="updated-label">Actualizado hoy</span>
          </div>

          <div className="phase-layout">
            <div className="phase-copy">
              <p className="cycle-day">Ciclo · día 18</p>
              <h2 id="phase-title">Fase lútea</h2>
              <p className="phase-caption">
                La fase destacada forma parte de una secuencia estimada de fechas; no describe cómo se siente una persona.
              </p>
            </div>

            <figure className="cycle-figure" aria-labelledby="cycle-figure-title" aria-describedby="cycle-figure-description">
              <p id="cycle-figure-title" className="cycle-figure-title">Rueda del ciclo</p>
              <div className="cycle-display">
                <div className="cycle-wheel" aria-hidden="true" />
                <div className="cycle-center">
                  <span>Fase actual</span>
                  <strong>Fase lútea</strong>
                  <small>Día 18</small>
                </div>
                <ul className="cycle-labels" aria-label="Fases representadas en la rueda">
                  <li className="cycle-label label-menstruation">Menstruación</li>
                  <li className="cycle-label label-follicular">Fase folicular</li>
                  <li className="cycle-label label-ovulation">Ventana ovulatoria<br /><span>estimada</span></li>
                  <li className="cycle-label label-luteal is-current"><span>Fase lútea</span><em>Actual</em></li>
                </ul>
                <span className="next-cycle" aria-hidden="true">↻ Siguiente ciclo</span>
              </div>
              <figcaption id="cycle-figure-description">
                Las fases aparecen en orden temporal. La intensidad marca la fase mostrada en este ejemplo ficticio; no confirma procesos biológicos individuales.
              </figcaption>
            </figure>
          </div>

          <div className="estimate-details">
            <div>
              <p className="detail-label">Ventana estimada</p>
              <p className="detail-value">15–24 de septiembre</p>
            </div>
            <div className="detail-divider" aria-hidden="true" />
            <div>
              <p className="detail-label">Margen mostrado</p>
              <p className="detail-value">10 días</p>
            </div>
          </div>

          <p className="phase-context">
            La ventana muestra el margen de la estimación. Puede cambiar cuando se confirme una nueva fecha.
          </p>
        </section>

        <section className="orientation-section" aria-labelledby="orientation-title">
          <div className="section-intro">
            <p className="eyebrow">Orientación para hoy</p>
            <h2 id="orientation-title">Un contexto para conversar, no para suponer.</h2>
          </div>

          <div className="orientation-grid">
            {orientationCards.map(({ eyebrow, title, text }) => (
              <article key={title} className="orientation-card">
                <p className="card-eyebrow">{eyebrow}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="how-it-works" aria-labelledby="how-title">
          <div>
            <p className="eyebrow">Transparencia</p>
            <h2 id="how-title">Cómo se calcula</h2>
          </div>
          <div className="how-copy">
            <p>
              Cuando esté disponible con las garantías necesarias, Consona mostrará una estimación local a partir de fechas pasadas confirmadas y un rango que refleje la variación. No diagnostica, no confirma la ovulación y no se utiliza como anticonceptivo.
            </p>
            <p>
              Este prototipo no implementa seguimiento, almacenamiento, aprendizaje ni datos personales. Solo presenta el diseño de una vista posible con información ficticia.
            </p>
          </div>
        </section>
      </div>

      <footer className="app-footer">
        <p>Consona · educación, conversación y respeto.</p>
        <span>Sin datos personales en este prototipo</span>
      </footer>
    </main>
  )
}

export default App
