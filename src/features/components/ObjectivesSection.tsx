import React from "react";

const steps = [
  {
    title: "Define",
    color: "text-red-400 border-red-200",
    numberColor: "text-red-200",
    number: "1",
    subtitle: "tu meta",
    question: "¿Dónde quieres ir?",
  },
  {
    title: "Evalúa",
    color: "text-orange-300 border-orange-100",
    numberColor: "text-orange-100",
    number: "2",
    subtitle: "tus opciones",
    question: "¿Dónde quieres ir?",
  },
  {
    title: "Actúa",
    color: "text-yellow-400 border-yellow-200",
    numberColor: "text-yellow-200",
    number: "3",
    subtitle: "Alcanza tu meta",
    question: "",
  },
];

const ObjectivesSection: React.FC = () => (
  <section className="w-full py-12">
    <div className="border-2 border-red-300 mb-12">
      <h2 className="text-3xl font-bold text-center py-8">
        Objetivos, puntos fuertes y oportunidades.
      </h2>
    </div>
    <div className="flex justify-center gap-12">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`relative bg-white rounded-[48px] border ${step.color} w-80 h-64 p-8 flex flex-col justify-between shadow-md`}
        >
          <div>
            <span className={`font-bold ${step.color} text-2xl`}>
              {step.title}
            </span>
            <span className="block text-black text-2xl font-normal">
              {step.subtitle}
            </span>
            {step.question && (
              <span className="block text-black mt-2 text-lg">
                {step.question}
              </span>
            )}
          </div>
          <span
            className={`absolute bottom-4 right-6 text-[120px] font-bold opacity-40 select-none pointer-events-none ${step.numberColor}`}
            style={{ lineHeight: "1" }}
          >
            {step.number}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default ObjectivesSection; 