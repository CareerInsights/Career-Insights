import "../styles/index.css"
import { ButtonLink } from "../components/ButtonLink"
import banner from "../assets/imgBanner.png"

function Home() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 p-6">
      <section className="py-8 bg-white rounded-2xl shadow-2xl">
      <div className="relative flex items-center w-full max-w-6xl mx-auto px-8">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img src={banner} alt="Illustration" className="w-full h-auto rounded-xl" />
        </div>

        {/* Right Side - Text and Button */}
        <div className="w-1/2 flex flex-col items-start justify-center pl-8 space-y-6">
          {/* Text */}
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            SIMPLIFICAMOS EL PROCESO <br />
            CENTRÁNDONOS EN LO QUE <br />
            REALMENTE IMPORTA.
          </h1>

          {/* Button */}
          <button className="flex items-center space-x-2 bg-yellow-400 text-gray-900 font-medium py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors">
            <span>Descubre cómo</span>
          </button>
        </div>
      </div>
    </section>

      <h1 className="text-3xl font-bold underline text-gray-800">
        Test de orientación laboral
      </h1>
      <ButtonLink to="/test">Realizar</ButtonLink>
    </div>
  )
}

export default Home
