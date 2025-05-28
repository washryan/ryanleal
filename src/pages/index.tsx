import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Skills3DCarousel from "../components/Skills3DCarousel"
import ProjectShowcase from "../components/ProjectShowcase"
import ExperienceTimeline from "../components/ExperienceTimeline"
import ContactSection from "../components/ContactSection"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Skills3DCarousel id="expertise" />
      <ProjectShowcase id="projects" />
      <ExperienceTimeline id="experience" />
      <ContactSection id="contact" />
    </Layout>
  )
}
