import { Link } from 'react-router-dom'

export function GalleryPreview({ gallery }) {
  return (
    <section className="section section-light">
      <div className="container gallery-preview">
        <div className="section-text animate-fade-up">
          <h2 className="section-title">{gallery.title}</h2>
          <p className="section-description">
            Veja inspirações do nosso espaço, decorações e estrutura. Em breve, esta galeria será atualizada com fotos
            reais dos eventos realizados no Spaço Verde.
          </p>
          <Link to="/galeria" className="btn btn-primary">
            Ver Galeria Completa
          </Link>
        </div>
        <div className="gallery-preview-grid animate-fade-up-delay">
          {gallery.categories
            .filter((c) => c.id !== 'all')
            .slice(0, 4)
            .map((category) => (
              <div key={category.id} className="gallery-preview-card">
                <div className="gallery-preview-image-placeholder" />
                <span className="gallery-preview-label">{category.label}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

