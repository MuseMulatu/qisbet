import { Hero } from '../components/Hero'
import { Portfolio } from '../components/Portfolio'
import { Awards } from '../components/Awards'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Team } from '../components/Team'
import { Footer } from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero">
          <Hero />
        </section>
        <section id="how-it-works" aria-label="How it works">
          <About />
        </section>
        <section id="experiences" aria-label="Experiences">
          <Portfolio />
        </section>
        <section id="prestige" aria-label="Prestige">
          <Awards />
        </section>
        <section id="community" aria-label="Community">
          <Team />
        </section>
      </main>
      <Footer />
    </div>
  )
}
