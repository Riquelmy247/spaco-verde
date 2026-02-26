import { useCallback, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export function Navbar({ navigation, branding }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // fecha o menu sempre que a rota mudar
    setIsOpen(false)
  }, [location.pathname])

  const handleSectionClick = useCallback(
    (target) => {
      if (location.pathname !== '/') {
        navigate('/')
        // Aguarda o React renderizar a Home antes de rolar
        setTimeout(() => {
          const el = document.getElementById(target)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 150)
      } else {
        const el = document.getElementById(target)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    },
    [location.pathname, navigate],
  )

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="nv-header">
      <div className="nv-container">
        <div className="nv-logo-area">
          <Link to="/" className="nv-logo-link" aria-label={branding.logoAlt}>
            <div className="nv-logo-placeholder" />
            <span className="nv-logo-text">{branding.name}</span>
          </Link>
        </div>
        <button
          type="button"
          className={`nv-burger ${isOpen ? 'is-open' : ''}`}
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <svg
            className="nv-burger-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <nav className={`nv-nav ${isOpen ? 'is-open' : ''}`}>
          <ul className="nv-nav-list">
            {navigation.links.map((link) => {
              if (link.type === 'route') {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.target}
                      className={`nv-nav-link ${location.pathname === link.target ? 'is-active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              }

              return (
                <li key={link.id}>
                  <button
                    type="button"
                    className="nv-nav-link nv-nav-button"
                    onClick={() => handleSectionClick(link.target)}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

