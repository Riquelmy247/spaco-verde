export function Contact({ contact }) {
  return (
    <section id="contact" className="section section-muted">
      <div className="container contact-grid">
        <div className="contact-info animate-fade-up">
          <h2 className="section-title">Contato</h2>
          <p className="section-description">
            Fale conosco para conhecer melhor o Spaço Verde, verificar datas disponíveis e solicitar uma proposta
            personalizada para o seu evento.
          </p>

          <div className="contact-block">
            <h3>WhatsApp</h3>
            <p>Atendimento rápido e direto com nossa equipe.</p>
            <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary">
              Conversar pelo WhatsApp
            </a>
          </div>

          <div className="contact-block">
            <h3>Instagram</h3>
            <ul className="contact-list">
              <li>
                <span>Perfil principal:</span>{' '}
                <a href={contact.instagramMain.url} target="_blank" rel="noreferrer">
                  {contact.instagramMain.handle}
                </a>
              </li>
              <li>
                <span>Perfil corporativo:</span>{' '}
                <a href={contact.instagramCorporate.url} target="_blank" rel="noreferrer">
                  {contact.instagramCorporate.handle}
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-block">
            <h3>Endereço</h3>
            <p>{contact.address}</p>
          </div>
        </div>

        <div className="contact-map animate-fade-up-delay">
          <div className="map-wrapper">
            <iframe
              title="Mapa Spaço Verde"
              src={contact.googleMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

