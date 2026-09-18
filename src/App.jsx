import './App.css'

const principles = [
  'Educación clara y sin diagnósticos',
  'Consentimiento explícito y revocable',
  'Datos locales y respeto por la privacidad',
  'Estimación con incertidumbre y contexto'
]

const cards = [
  {
    title: 'Hoy',
    text: 'La vista principal prioriza la fase estimada, su ventana y la explicación necesaria para interpretarla.'
  },
  {
    title: 'Consentimiento',
    text: 'La persona afectada controla qué comparte y puede retirarlo con claridad.'
  },
  {
    title: 'Cómo funciona',
    text: 'La app explica que la estimación local tiene margen, no sustituye la conversación ni la decisión propia.'
  }
]

function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <div className="eyebrow">Consonaapp</div>
        <h1>Comprender el ciclo sin perder el respeto.</h1>
        <p className="lead">
          Una web app pensada para móvil y escritorio, con experiencia local, clara y centrada en
          el consentimiento, la conversación y la educación.
        </p>
        <div className="cta-row">
          <button type="button" className="primary">Empezar</button>
          <button type="button" className="secondary">Cómo funciona</button>
        </div>
      </header>

      <section className="principles">
        <div className="section-heading">
          <span className="pill">Principios</span>
          <h2>Base de producto</h2>
        </div>
        <ul>
          {principles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cards">
        {cards.map(({ title, text }) => (
          <article key={title} className="card">
            <span className="card-kicker">{title}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="status-panel">
        <div>
          <span className="pill neutral">Estado</span>
          <h2>Base PWA lista</h2>
        </div>
        <p>
          Esta versión inicial cumple con una estructura responsive, visión de producto y soporte de
          instalación como PWA para uso en móvil y escritorio.
        </p>
      </section>
    </main>
  )
}

export default App
