import React from "react";
import VisionBoard from "../assets/image/Vision-board-rafiki.svg";
import webinar from "../assets/image/Webinar-cuate.svg"
import cohorte from "../assets/image/Cohort-analysis-amico.svg"
import analyze from "../assets/image/Analyze-pana.svg"
import { Link } from 'react-router-dom';

interface Card {
  title: string;
  text: string;
  img: string;
  border: string;
  titleClass?: string;
  arrow?: boolean;
}

const cards: Card[] = [
  {
    title: "NUESTRA MISIÓN",
    text: "Orientación personalizada y recursos para ayudarle a tomar decisiones profesionales con confianza y claridad",
    img: VisionBoard,
    border: "border-red-200",
    titleClass: "text-black",
  },
  {
    title: "A QUIÉN SERVIMOS",
    text: "Te ofrecemos ideas y herramientas para explorar opciones profesionales, comprender el panorama del sector y tomar decisiones informadas sobre tu futuro.",
    img: webinar,
    border: "border-gray-200",
    titleClass: "text-black",
  },
  {
    title: "RECURSOS COMPLETOS",
    text: "Gran cantidad de recursos que abarcan temas como la elaboración de currículos, la preparación de entrevistas, estrategias para establecer contactos y mucho más.",
    img: cohorte,
    border: "border-yellow-200",
    titleClass: "text-black",
  },
  {
    title: "NUESTRO ENFOQUE",
    text: "La trayectoria profesional de cada persona es única. Nuestras sesiones de asesoramiento personalizadas están diseñadas para comprender sus aspiraciones, puntos fuertes y valores, ajustándonos a sus objetivos personales.",
    img: analyze,
    border: "border-red-200",
    titleClass: "text-black",
  },
  {
    title: "TÉCNICA DIANA",
    text: "Desarrollado para simplificar la toma de decisiones en la planificación de la carrera profesional. Esta técnica le ayuda a visualizar sus objetivos y a identificar sistemáticamente los pasos necesarios para alcanzarlos.",
    img: "",
    border: "border-blue-200",
    titleClass: "text-black",
    arrow: true,
  },
];

const AboutSection: React.FC = () => (
  <section id="conocenos" className="w-full flex flex-col items-center gap-6 py-8">
    {/* Primera fila: Card 1 y Card 2 */}
    <div className="flex flex-col md:flex-row w-full max-w-7xl gap-6">
      {/* Card 1 */}
      <div className="flex flex-1 flex-row items-center justify-center bg-white rounded-3xl border-2 border-career shadow-md p-8 min-h-[260px] gap-6 transition-all">
        <img src={cards[0].img} alt={cards[0].title} className="w-60 h-70 object-contain" />
        <div className="flex-1 flex flex-col justify-center items-end text-end">
          <h3 className="font-bold text-2xl mb-2 text-black">{cards[0].title}</h3>
          <p className="text-m text-black max-w-md">{cards[0].text}</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-1 flex-row items-center justify-center bg-white rounded-3xl border-2 border-gray-200 shadow-md p-8 min-h-[260px] gap-6 transition-all">
        <img src={cards[1].img} alt={cards[1].title} className="w-70 h-60 object-contain" />
        <div className="flex-1 flex flex-col justify-center items-end text-end">
          <h3 className="font-bold text-2xl mb-2 text-black">{cards[1].title}</h3>
          <p className="text-m text-black">{cards[1].text}</p>
        </div>
      </div>
    </div>
    {/* Segunda fila: Card 3 y Card 4 */}
    <div className="flex flex-col md:flex-row w-full max-w-7xl gap-6">
      {/* Card 3 */}
      <div className="flex flex-1 flex-row items-center justify-center bg-white rounded-3xl border-2 border-yellow-200 shadow-md p-8 min-h-[260px] gap-6 transition-all">
        <img src={cards[2].img} alt={cards[2].title} className="w-60 h-60 object-contain" />
        <div className="flex-1 flex flex-col justify-center items-end text-end">
          <h3 className="font-bold text-2xl mb-2 text-black">{cards[2].title}</h3>
          <p className="text-m text-black max-w-md">{cards[2].text}</p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="flex flex-1 flex-row items-center justify-center bg-white rounded-3xl border-2 border-red-200 shadow-md p-8 min-h-[260px] gap-6 transition-all">
        <img src={cards[3].img} alt={cards[3].title} className="w-60 h-60 object-contain" />
        <div className="flex-1 flex flex-col justify-center items-end text-end">
          <h3 className="font-bold text-2xl mb-2 text-black">{cards[3].title}</h3>
          <p className="text-m text-black">{cards[3].text}</p>
        </div>
      </div>
    </div>
    {/* Última fila: Card 5 centrada */}
    <Link to={"/tecnica-diana"}>
    <div className="flex w-full max-w-8xl justify-center relative">
  {/* Sombra personalizada detrás */}
  <div className="absolute top-2 w-full md:w-2/3 h-full rounded-3xl bg-[#85A9D2] z-0"></div>

  {/* Tarjeta principal */}
  
  <div className="relative z-10 flex flex-row items-center bg-white rounded-3xl border-2 border-blue-200 shadow-sm p-8 min-h-[120px] gap-6 transition-all w-full md:w-2/3">
    <div className="flex-1 flex flex-col justify-end h-full text-right">
      <h3 className="font-bold text-2xl mb-2 text-black flex items-center justify-end">
        {cards[4].title}
        {cards[4].arrow && <span className="ml-2 text-blue-500 text-2xl">→</span>}
      </h3>
      <p className="text-m text-black">{cards[4].text}</p>
    </div>
  </div>
</div>
</Link>

  </section>
);

export default AboutSection; 