import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import ExpertiseSection from '../components/ExpertiseSection'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WorkSection />
      <ExpertiseSection />
      <EducationSection />
      <ContactSection />
    </Layout>
  )
}

