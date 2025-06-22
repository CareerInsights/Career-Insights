import "../styles/index.css"
import { ButtonLink } from "../components/ButtonLink"
import HeroBanner from "../features/components/HeroBanner"
import DianaSection from "../features/components/DianaSection"

function Home() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 p-6">
    <HeroBanner/>
    <DianaSection/> 
      <h1 className="text-3xl font-bold underline text-gray-800">
        Test de orientación laboral
      </h1>
      <ButtonLink to="/test">Realizar</ButtonLink>
    </div>
  )
}

export default Home
