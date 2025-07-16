import React from "react";
import banner from "../../assets/image/Selecting team-rafiki.svg"
// import { Link } from "react-router-dom";

const HeroBanner: React.FC = () => {
    const handleScrollServicios = () => {
      const section = document.getElementById("servicios");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
        <div className="relative flex justify-center items-center min-h-[600px] bg-transparent overflow-visible">
          <div className="relative z-10 bg-white rounded-[48px] border border-logo-dos shadow-lg flex flex-row items-center w-7xl max-w-10xl min-h-[300px] px-12 py-1">
            <div className="flex-1 flex justify-center items-center w-[500px] h-[500px]  overflow-hidden">
          <img
            src={banner}
            alt="Ilustración"
            className="w-[800px] h-[700px] object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start pl-4">
            <h1 className="text-4xl font-bold mb-8 leading-tight text-black">
              SIMPLIFICAMOS
              EL PROCESO<br />
              CENTRÁNDONOS
              EN LO QUE<br />
              REALMENTE
              IMPORTA.
            </h1>
            <button
              className="mt-2 flex items-center gap-2 bg-logo-dos text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-yellow-200 transition text-xl"
              onClick={handleScrollServicios}
            >
              Descubre cómo
            </button>
          </div>
        </div>
      </div>
    );
  };

export default HeroBanner;