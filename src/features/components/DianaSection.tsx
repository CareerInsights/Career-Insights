import React from "react";
import goalImage from "/workspaces/Career-Insights/src/assets/image/goal-setting.svg";
import defineObjective from "/workspaces/Career-Insights/src/assets/image/define-objetive.svg";
import addCircle from "/workspaces/Career-Insights/src/assets/image/add-circule.svg";
import startHere from "/workspaces/Career-Insights/src/assets/image/start-here.svg";
import expand from "/workspaces/Career-Insights/src/assets/image/expand.svg.svg";
import { Link } from "react-router-dom";

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
                <div className="flex flex-col md:flex-row items-center border border-logo-dos rounded-2xl shadow-md p-6 gap-6">
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
                <div className="flex flex-col md:flex-row items-center border border-logo-dos rounded-2xl shadow-md p-6 gap-6">
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
                <div className="flex flex-col md:flex-row items-center border border-logo-dos rounded-2xl shadow-md p-6 gap-6">
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
                <div className="flex flex-col md:flex-row items-center border border-logo-dos rounded-2xl shadow-md p-6 gap-6">
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
                <div className="flex flex-col md:flex-row items-start justify-between border border-logo-dos rounded-2xl p-8 shadow-md gap-6">
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
                    <div className="flex flex-col gap-6 md:w-[30%]">

                        <Link to={"/"}>
                            {/* LINKEDIN */}
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-logo-cuatro translate-x-2 translate-y-2 z-0"></div>
                                <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-blue-300 text-black font-semibold z-10 shadow hover:bg-logo-cuatro transition text-xl">
                                    LINKEDIN <span className="text-blue-500">→</span>
                                </button>
                            </div>
                        </Link>


                        {/* TIKTOK */}
                        <Link to={"/"}>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-logo-dos translate-x-2 translate-y-2 z-0"></div>
                                <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-yellow-300 text-black font-semibold z-10 shadow hover:bg-logo-dos transition text-xl">
                                    TIKTOK <span className="text-yellow-500">→</span>
                                </button>
                            </div>
                        </Link>

                        {/* EMAIL */}
                        <Link to={"/"}>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-logo-uno translate-x-2 translate-y-2 z-0"></div>
                                <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-red-300 text-black font-semibold z-10 shadow hover:bg-logo-uno transition text-xl">
                                    EMAIL <span className="text-red-500">→</span>
                                </button>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DianaSection;