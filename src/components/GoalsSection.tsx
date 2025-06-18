import React from "react";

const GoalsSection: React.FC = () => (
  <section className="w-full">
    <div className="border-2 border-border-navbar mb-12">
      <h2 className="text-3xl font-bold text-center py-8">
        Objetivos, puntos fuertes y oportunidades.
      </h2>
    </div>
    <div className="flex justify-center gap-12">
      {/* Card 1 */}
      <div className="relative bg-white rounded-[48px] border text-red-400 border-red-200 w-80 h-50 p-8 flex flex-col justify-between shadow-md m-10 overflow-hidden">
        <div>
          <span className="font-bold text-red-400 text-2xl font-ubuntu">
            Define
          </span>
          <span className="block text-black text-2xl font-normal font-ubuntu">
            tu meta
          </span>
          <span className="block text-black mt-2 text-lg font-ubuntu">
            ¿Dónde quieres ir?
          </span>
        </div>
        <span
          className="absolute right-[-20px] ight-[-100px] bottom-[-180px] text-[420px] font-bold font-chloe select-none pointer-events-none text-border-navbar"
          style={{ lineHeight: "1" }}
        >
          1
        </span>
      </div>
      {/* Card 2 */}
      <div className="relative bg-white rounded-[48px] border text-career border-orange-100 w-80 h-50 p-8 flex flex-col justify-between shadow-md m-10 overflow-hidden">
        <div className="relative z-10">
          <span className="font-bold text-career text-2xl font-ubuntu">
            Evalúa
          </span>
          <span className="block text-black text-2xl font-normal font-ubuntu">
            tus opciones
          </span>
          <span className="block text-black mt-2 text-lg font-ubuntu">
            ¿Dónde quieres ir?
          </span>
        </div>
        <span
          className="absolute right-[-100px] bottom-[-180px] text-[420px] font-bold font-chloe select-none pointer-events-none text-career z-0"
          style={{ lineHeight: "1" }}
        >
          2
        </span>
      </div>
      {/* Card 3 */}
      <div className="relative bg-white rounded-[48px] border text-logo-dos border-yellow-200 w-80 h-50 p-8 flex flex-col justify-between shadow-md m-10 overflow-hidden">
        <div className="relative z-10">
          <span className="font-bold text-logo-dos text-2xl font-ubuntu">
            Actúa
          </span>
          <span className="block text-black text-2xl font-normal font-ubuntu">
            Alcanza tu meta
          </span>
        </div>
        <span
          className="absolute right-[-100px] bottom-[-180px] text-[420px] font-bold font-chloe select-none pointer-events-none text-logo-dos z-0"
          style={{ lineHeight: "1" }}
        >
          3
        </span>
      </div>
    </div>
  </section>
);

export default GoalsSection;
