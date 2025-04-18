import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Experience'
// import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </main>
  )
}
