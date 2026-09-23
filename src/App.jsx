import { useState } from 'react'
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

const consentPrinciples = [
  {
    number: '01',
    title: 'Decisión directa',
    text: 'La persona afectada debe recibir la explicación y decidir por sí misma si autoriza el uso de datos. Nadie puede aceptar en su nombre.'
  },
  {
    number: '02',
    title: 'Control local',
    text: 'Las fechas, cálculos y datos derivados solo pueden permanecer en el dispositivo que los conserva. No se envían a un servidor ni se sincronizan.'
  },
  {
    number: '03',
    title: 'Retirada con efecto',
    text: 'Una retirada debe bloquear nuevas consultas y eliminar los datos locales y cálculos derivados aplicables cuando el dispositivo reciba la solicitud.'
  }
]

function TodayView({ today }) {
  return (
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
  )
}

function DataControlView({ showRevocationDetail, onToggleRevocationDetail }) {
  return (
    <div id="contenido-principal" className="consent-content" tabIndex="-1">
      <header className="consent-heading">
        <div>
          <p className="eyebrow">Control local</p>
          <h1>Control de datos</h1>
          <p>
            La persona afectada debe conservar el control de cualquier autorización. Este prototipo no activa ni conserva datos personales.
          </p>
        </div>
        <span className="consent-status-pill">Sin autorización activa</span>
      </header>

      <section className="consent-intro" aria-labelledby="consent-intro-title">
        <div className="consent-intro-icon" aria-hidden="true">✓</div>
        <div>
          <p className="eyebrow">Antes de cualquier dato</p>
          <h2 id="consent-intro-title">La autorización no se presupone.</h2>
          <p>
            La persona que consulta Consona no puede habilitar datos de otra persona desde esta pantalla. Un flujo futuro deberá solicitar la decisión directamente a la persona afectada, explicar el uso local y permitir retirarla.
          </p>
        </div>
      </section>

      <section className="consent-principles" aria-labelledby="consent-principles-title">
        <div className="section-intro">
          <p className="eyebrow">Principios de la autorización</p>
          <h2 id="consent-principles-title">Qué tendría que proteger el flujo real.</h2>
        </div>
        <ol className="consent-principle-grid">
          {consentPrinciples.map(({ number, title, text }) => (
            <li key={number} className="consent-principle-card">
              <span className="principle-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="revocation-panel" aria-labelledby="revocation-title">
        <div>
          <p className="eyebrow">Retirada y borrado</p>
          <h2 id="revocation-title">Retirar debe tener un efecto claro.</h2>
          <p>
            Cuando exista una autorización válida, retirarla deberá bloquear nuevas consultas y activar el borrado local correspondiente. No se puede prometer un borrado inmediato en un dispositivo sin conexión.
          </p>
          <button
            type="button"
            className="outline-button"
            aria-expanded={showRevocationDetail}
            onClick={onToggleRevocationDetail}
          >
            {showRevocationDetail ? 'Ocultar el detalle de retirada' : 'Ver el efecto de la retirada'}
          </button>
        </div>

        <div className={`revocation-detail ${showRevocationDetail ? 'is-visible' : ''}`} aria-live="polite">
          {showRevocationDetail ? (
            <>
              <strong>En el flujo real, la retirada deberá:</strong>
              <ul>
                <li>bloquear nuevas estimaciones y consultas que dependan de la autorización;</li>
                <li>borrar los datos locales, cálculos derivados, claves y caché aplicables;</li>
                <li>mostrar con honestidad si un dispositivo aún no ha podido recibir la revocación.</li>
              </ul>
            </>
          ) : (
            <p>El detalle se muestra solo al solicitarlo. No hay una autorización activa en este prototipo.</p>
          )}
        </div>
      </section>

      <section className="consent-availability" aria-labelledby="availability-title">
        <div>
          <p className="eyebrow">Estado del prototipo</p>
          <h2 id="availability-title">No hay datos que revisar ni retirar.</h2>
          <p>
            Esta demostración no almacena autorización, fechas, perfiles, cálculos ni historial. La acción de retirada queda deshabilitada hasta que existan las garantías técnicas, jurídicas y de seguridad exigidas por ADR-001.
          </p>
        </div>
        <div className="disabled-action">
          <button type="button" disabled aria-describedby="withdrawal-unavailable">
            Retirar una autorización
          </button>
          <p id="withdrawal-unavailable">No hay ninguna autorización creada en este prototipo.</p>
        </div>
      </section>

      <section className="consent-limits" aria-labelledby="limits-title">
        <p className="eyebrow">Límites permanentes</p>
        <h2 id="limits-title">Lo que Consona no registra ni deduce.</h2>
        <ul>
          <li>Consentimiento sexual, deseo sexual, límites o disponibilidad.</li>
          <li>Mensajes, notas libres, contactos, nombres, ubicación o vigilancia de conducta.</li>
          <li>Datos de ciclo o actividad enviados a servidores, analítica, telemetría o copias de seguridad.</li>
        </ul>
      </section>
    </div>
  )
}

function App() {
  const [activeView, setActiveView] = useState('today')
  const [showRevocationDetail, setShowRevocationDetail] = useState(false)
  const today = new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date())

  const isControlView = activeView === 'control'

  function showToday() {
    setActiveView('today')
    setShowRevocationDetail(false)
  }

  function showDataControl() {
    setActiveView('control')
  }

  return (
    <main className="today-shell">
      <a className="skip-link" href="#contenido-principal">Saltar al contenido principal</a>

      <header className="app-header" aria-label="Encabezado de Consona">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span className="brand-name">Consona</span>
        </div>
        <div className="header-actions">
          <button
            type="button"
            className="header-control"
            aria-pressed={isControlView}
            onClick={isControlView ? showToday : showDataControl}
          >
            {isControlView ? 'Volver a Hoy' : 'Control de datos'}
          </button>
          <span className="demo-badge">Prototipo local</span>
        </div>
      </header>

      <section className="demo-notice" aria-label="Estado del prototipo">
        <span className="notice-dot" aria-hidden="true" />
        <p>
          Ejemplo con datos ficticios: no representa a ninguna persona ni guarda información de ciclo o autorización.
        </p>
      </section>

      {isControlView ? (
        <DataControlView
          showRevocationDetail={showRevocationDetail}
          onToggleRevocationDetail={() => setShowRevocationDetail((current) => !current)}
        />
      ) : (
        <TodayView today={today} />
      )}

      <footer className="app-footer">
        <p>Consona · educación, conversación y respeto.</p>
        <span>Sin datos personales en este prototipo</span>
      </footer>
    </main>
  )
}

export default App
