import React from "react";
import { useNavigate } from "react-router-dom";

// Importa tus imágenes
import SesionImg from "../assets/image/Face to face-amico.svg";
import OrientacionImg from "../assets/image/User research-bro.svg";
import TalleresImg from "../assets/image/Seminar-bro.svg";

const sessions = [
  {
    title: (
      <>
        SESION <br /> 1 TO 1
      </>
    ),
    img: SesionImg,
    alt: "Sesión 1 a 1",
    onClick: "/sesion-1a1",
  },
  {
    title: (
      <>
        ORIENTACIÓN <br /> LABORAL
      </>
    ),
    img: OrientacionImg,
    alt: "Orientación laboral",
    onClick: "test",
  },
  {
    title: (
      <>
        TALLERES & <br /> CHARLAS
      </>
    ),
    img: TalleresImg,
    alt: "Talleres y charlas",
    onClick: undefined,
  },
];

const SessionSelector: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="servicios" className="w-full flex flex-col items-center py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-quicksand">
        Reserva la sesión que encaja mejor contigo
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
        {sessions.map((session, idx) => (
          <div
            key={idx}
            className={
              `bg-white rounded-2xl border border-color-logo-tres flex flex-col items-center p-8 w-80 cursor-pointer transition-shadow duration-300 font-ubuntu-regular shadow-md hover:shadow-[8px_8px_0_0_var(--color-logo-tres)]`
            }
            style={{ borderColor: "var(--color-logo-tres)" }}
            onClick={session.onClick ? () => navigate(session.onClick) : undefined}
          >
            <img src={session.img} alt={session.alt} className="mb-6 h-48" />
            <div className="text-xl font-bold text-center font-quicksand">{session.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SessionSelector; 