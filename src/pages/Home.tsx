import "../styles/index.css"
import HeroBanner from "../features/components/HeroBanner"
import GoalsSection from "../components/GoalsSection"
import AboutSection from "../components/AboutSection"
import SessionSelector from "../components/SessionSelector"

function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 ">
      <HeroBanner/>
      <GoalsSection />
      <AboutSection />
      <SessionSelector/>
    </div>
  )
}

export default Home
