export function WhatsAppFloatingButton({ contact }) {
  const handleClick = () => {
    window.open(contact.whatsappLink, '_blank')
  }

  return (
    <button
      type="button"
      className="whatsapp-floating-button"
      onClick={handleClick}
      aria-label="Falar com Spaço Verde pelo WhatsApp"
    >
      <span className="whatsapp-icon">💬</span>
    </button>
  )
}

