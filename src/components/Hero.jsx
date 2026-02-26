export function Hero({ branding, contact }) {
  const handlePrimaryCta = () => {
    window.open(contact.whatsappLink, '_blank')
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content container animate-fade-up">
        <span className="hero-label">Chácara para eventos em Uberlândia</span>
        <h1 className="hero-title">{branding.name}</h1>
        <p className="hero-subtitle">{branding.tagline}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={handlePrimaryCta}>
            Reservar pelo WhatsApp
          </button>
          <a href={contact.instagramMain.url} target="_blank" rel="noreferrer" className="btn btn-outline">
            Ver Instagram
          </a>
        </div>
        <p className="hero-note">
          Espaço perfeito para casamentos, aniversários, formaturas, confraternizações e eventos corporativos.
        </p>
      </div>
    </section>
  )
}

