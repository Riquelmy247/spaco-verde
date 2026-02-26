export function Services({ services }) {
  const { socialEvents, corporateEvents, title } = services

  return (
    <section id="services" className="section section-muted">
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2 className="section-title">{title}</h2>
          <p className="section-description">
            Estrutura completa, buffet especializado e ambientação pensada em cada detalhe para o seu evento.
          </p>
        </div>
        <div className="cards-grid">
          <article className="card animate-fade-up">
            <div className="card-icon">🎉</div>
            <h3 className="card-title">{socialEvents.title}</h3>
            <p className="card-description">{socialEvents.description}</p>
            <ul className="card-list">
              {socialEvents.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card animate-fade-up-delay">
            <div className="card-icon">🏢</div>
            <h3 className="card-title">{corporateEvents.title}</h3>
            <p className="card-description">{corporateEvents.description}</p>
            <ul className="card-list">
              {corporateEvents.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="card-footer">
              Instagram corporativo:{' '}
              <a href={corporateEvents.instagramUrl} target="_blank" rel="noreferrer">
                {corporateEvents.instagramHandle}
              </a>
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

