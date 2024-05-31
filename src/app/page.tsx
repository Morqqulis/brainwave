import Benefits from '@sections/Home/Benefits'
import Collaboration from '@sections/Home/Collaboration'
import Hero from '@sections/Home/Hero'
import Pricing from '@sections/Home/Pricing'
import Roadmap from '@sections/Home/Roadmap'
import Services from '@sections/Home/Services'
import { homeMeta } from '@settings/metadata'

export const metadata = homeMeta

export default function Home() {
   return (
      <main>
         <Hero />
         <Benefits />
         <Collaboration />
         <Services />
         <Pricing />
         <Roadmap />
      </main>
   )
}
