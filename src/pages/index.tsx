import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ProjectShowcase from '../components/ProjectShowcase'
import SkillsSection from '../components/SkillsSection'
import ExperienceTimeline from '../components/ExperienceTimeline'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SkillsSection />
      <ProjectShowcase />
      <ExperienceTimeline />
      <ContactSection />
    </Layout>
  )
}

