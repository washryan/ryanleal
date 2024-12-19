import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import ExpertiseSection from '../components/ExpertiseSection'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WorkSection />
      <ExpertiseSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </Layout>
  )
}

