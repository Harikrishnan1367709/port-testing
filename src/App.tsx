import { Suspense } from "react"
import { Hero } from "./components/Hero"
import { FeaturesSection } from "./components/FeaturesSection"
import { SecondaryFeaturesSection } from "./components/SecondaryFeaturesSection"
import { PricingSection } from "./components/PricingSection"
import { VideoPlayerSection } from "./components/VideoPlayerSection"
import { PartnersSection } from "./components/PartnersSection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Hero />
          <SecondaryFeaturesSection />
          <FeaturesSection />
          <PricingSection />
          <VideoPlayerSection />
          <PartnersSection />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App