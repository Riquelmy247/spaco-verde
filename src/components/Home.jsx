import { Hero } from './Hero'
import { About } from './About'
import { Services } from './Services'
import { GalleryPreview } from './GalleryPreview'
import { Contact } from './Contact'

export function Home({ siteData }) {
  return (
    <>
      <Hero branding={siteData.branding} contact={siteData.contact} />
      <About about={siteData.about} />
      <Services services={siteData.services} />
      <GalleryPreview gallery={siteData.gallery} />
      <Contact contact={siteData.contact} />
    </>
  )
}

