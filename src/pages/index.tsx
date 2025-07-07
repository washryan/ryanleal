import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ParallaxSection from "../components/ParallaxSection"
import Skills3DCarousel from "../components/Skills3DCarousel"
import ProjectShowcase from "../components/ProjectShowcase"
import ExperienceTimeline from "../components/ExperienceTimeline"
import ContactSection from "../components/ContactSection"

export default function Home() {
  return (
    <Layout>
      <Hero />

      <ParallaxSection speed={0.3}>
        <Skills3DCarousel id="expertise" />
      </ParallaxSection>

      <ParallaxSection speed={0.4} direction="down">
        <ProjectShowcase id="projects" />
      </ParallaxSection>

      <ParallaxSection speed={0.2}>
        <ExperienceTimeline id="experience" />
      </ParallaxSection>

      <ParallaxSection overlay={false}>
        <ContactSection id="contact" />
      </ParallaxSection>
    </Layout>
  )
}
