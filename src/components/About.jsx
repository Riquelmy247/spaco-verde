export function About({ about }) {
  return (
    <section id="about" className="section section-light">
      <div className="container section-grid">
        <div className="section-text animate-fade-up">
          <h2 className="section-title">{about.title}</h2>
          <p className="section-description">{about.description}</p>
          <ul className="about-highlights">
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section-side-card animate-fade-up-delay">
          <h3 className="side-card-title">Eventos que realizamos</h3>
          <ul className="chip-list">
            {about.eventTypes.map((type) => (
              <li key={type} className="chip">
                {type}
              </li>
            ))}
          </ul>
          <p className="side-card-note">
            Do íntimo ao grandioso, customizamos o espaço para que cada celebração tenha a sua própria identidade.
          </p>
        </div>
      </div>
    </section>
  )
}

