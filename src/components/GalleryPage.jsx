import { useMemo, useState } from 'react'

export function GalleryPage({ gallery }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages = useMemo(() => {
    if (!gallery.images || gallery.images.length === 0) {
      return []
    }
    if (activeCategory === 'all') return gallery.images
    return gallery.images.filter((img) => img.category === activeCategory)
  }, [activeCategory, gallery.images])

  const hasImages = filteredImages.length > 0

  return (
    <section className="section section-gallery-page">
      <div className="container">
        <header className="section-header animate-fade-up">
          <h1 className="section-title">{gallery.title}</h1>
          <p className="section-description">{gallery.description}</p>
        </header>

        <div className="gallery-filters animate-fade-up-delay">
          {gallery.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`chip chip-filter ${activeCategory === category.id ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid animate-fade-up-delay">
          {hasImages ? (
            filteredImages.map((image) => (
              <figure key={image.id} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
                {image.caption && <figcaption className="gallery-caption">{image.caption}</figcaption>}
              </figure>
            ))
          ) : (
            <div className="gallery-empty">
              <div className="gallery-empty-illustration" />
              <h2>Em breve, fotos incríveis por aqui</h2>
              <p>
                Nossa equipe está preparando uma seleção especial de imagens do Spaço Verde para inspirar o seu próximo
                evento.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

