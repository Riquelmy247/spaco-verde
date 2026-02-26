import { Routes, Route } from 'react-router-dom'
import { siteData } from './siteData'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { GalleryPage } from './components/GalleryPage'
import { Footer } from './components/Footer'
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton'

function App() {
  return (
    <div className="app-root">
      <Navbar navigation={siteData.navigation} branding={siteData.branding} />
      <main>
        <Routes>
          <Route path="/" element={<Home siteData={siteData} />} />
          <Route path="/galeria" element={<GalleryPage gallery={siteData.gallery} />} />
        </Routes>
      </main>
      <Footer branding={siteData.branding} contact={siteData.contact} />
      <WhatsAppFloatingButton contact={siteData.contact} />
    </div>
  )
}

export default App
