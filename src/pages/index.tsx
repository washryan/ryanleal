import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SkillsSection from '../components/SkillsSection'
import ProjectShowcase from '../components/ProjectShowcase'
import ExperienceTimeline from '../components/ExperienceTimeline'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SkillsSection id="expertise" />
      <ProjectShowcase id="projects" />
      <ExperienceTimeline id="experience" />
      <ContactSection id="contact" />
    </Layout>
  )
}

