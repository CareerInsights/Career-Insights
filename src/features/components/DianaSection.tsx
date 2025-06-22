import React from "react";
import goalImage from "/workspaces/Career-Insights/src/assets/image/goal-setting.svg";
import defineObjective from "/workspaces/Career-Insights/src/assets/image/define-objetive.svg";
import addCircle from "/workspaces/Career-Insights/src/assets/image/add-circule.svg";
import startHere from "/workspaces/Career-Insights/src/assets/image/start-here.svg";
import expand from "/workspaces/Career-Insights/src/assets/image/expand.svg.svg";

const DianaSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-transparent">
      {/* Sección inicial */}
      <div className="bg-white rounded-[48px] border border-logo-dos shadow-lg flex flex-col md:flex-row items-center max-w-7xl w-full p-12 mb-16">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-6 text-black">
            ¿QUÉ ES LA TÉCNICA DIANA?
          </h2>
          <p className="text-gray-700 text-lg">
            La Técnica Diana es una herramienta visual que ayuda a las personas
            a identificar sus objetivos y acciones clave. Se basa en círculos
            concéntricos que representan diferentes niveles de acción,
            permitiendo un enfoque claro y gradual hacia la meta deseada.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={goalImage} alt="Técnica Diana" className="w-[80%] max-w-md" />
        </div>
      </div>

      {/* Título de pasos */}
      <h3 className="text-3xl font-bold text-center mb-10">
        Desglosemos paso a paso cómo funciona
      </h3>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md p-6 gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">DEFINE TU OBJETIVO IDEAL</h4>
            <p className="text-gray-700">
              Piensa en lo que realmente quieres. Escríbelo y colócalo en el centro de tu diana.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex justify-center">
            <img src={defineObjective} alt="Define objetivo" className="w-full h-auto" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md p-6 gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">AÑADE EL SIGUIENTE CÍRCULO</h4>
            <p className="text-gray-700">
              Identifica acciones o conocimientos que necesitas para acercarte a tu meta.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex justify-center">
            <img src={addCircle} alt="Añade círculo" className="w-full h-auto" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md p-6 gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">EMPIEZA DONDE ESTÁS</h4>
            <p className="text-gray-700">
              Aprovecha tus recursos actuales. El primer paso es el más importante.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex justify-center">
            <img src={startHere} alt="Empieza aquí" className="w-full h-auto" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md p-6 gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">AMPLÍA TU ALCANCE</h4>
            <p className="text-gray-700">
              Conecta con otros, busca apoyo y sigue construyendo sobre lo aprendido.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex justify-center">
            <img src={expand} alt="Amplía alcance" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* ¡DA EL PRIMER PASO! */}
      <div className="mt-16 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between bg-white rounded-2xl p-8 shadow-md gap-6">
          {/* Texto */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">¡DA EL PRIMER PASO!</h3>
            <p className="text-gray-700 text-base">
              La Técnica Diana no sólo consiste en alcanzar objetivos, sino también
              en definir tu punto de partida. Comienza con lo que tienes ahora,
              poco a poco, hasta acercarte a tus metas profesionales o académicas.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-4 md:w-[30%]">
            <button className="flex items-center justify-between bg-blue-100 text-blue-800 px-6 py-3 rounded-full shadow">
              LINKEDIN <span>→</span>
            </button>
            <button className="flex items-center justify-between bg-pink-100 text-pink-800 px-6 py-3 rounded-full shadow">
              TIKTOK <span>→</span>
            </button>
            <button className="flex items-center justify-between bg-red-100 text-red-800 px-6 py-3 rounded-full shadow">
              EMAIL <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DianaSection;