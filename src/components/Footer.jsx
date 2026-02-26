export function Footer({ branding, contact }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-logo-text">{branding.name}</span>
          <p className="footer-tagline">{branding.tagline}</p>
        </div>
        <div className="footer-links">
          <a href={contact.whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={contact.instagramMain.url} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={contact.instagramCorporate.url} target="_blank" rel="noreferrer">
            Instagram Corporativo
          </a>
        </div>
        <div className="footer-meta">
          <p>
            &copy; {currentYear} {branding.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

