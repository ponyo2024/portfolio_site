import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Now from '@/components/Now'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <main className="pt-16">
      <NavBar />
      <Hero />
      <Projects />
      <Now />
      <Contact />
    </main>
  )
}
