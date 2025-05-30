type Question = {
  id: number;
  question: string;
  options: { id: string; text: string }[];
};

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál de estas actividades disfrutas más?",
    options: [
      { id: "a", text: "Hablar y comunicar ideas" },
      { id: "b", text: "Resolver problemas y analizar datos" },
      { id: "c", text: "Crear cosas nuevas y diseñar" },
    ],
  },
  {
    id: 2,
    question: "¿Prefieres trabajar en un ambiente:",
    options: [
      { id: "a", text: "Dinámico y cambiante" },
      { id: "b", text: "Organizado y estructurado" },
      { id: "c", text: "Flexible y creativo" },
    ],
  },
  {
    id: 3,
    question: "¿Cómo te describirías mejor?",
    options: [
      { id: "a", text: "Extrovertido y sociable" },
      { id: "b", text: "Analítico y detallista" },
      { id: "c", text: "Imaginativo y curioso" },
    ],
  },
  {
    id: 4,
    question: "¿Qué prefieres hacer en un proyecto?",
    options: [
      { id: "a", text: "Coordinar y comunicar con el equipo" },
      { id: "b", text: "Planificar y controlar los detalles" },
      { id: "c", text: "Diseñar y proponer ideas nuevas" },
    ],
  },
  {
    id: 5,
    question: "¿Qué te motiva más en el trabajo?",
    options: [
      { id: "a", text: "Interacción con personas" },
      { id: "b", text: "Resolución de problemas complejos" },
      { id: "c", text: "Innovación y creatividad" },
    ],
  },
  {
    id: 6,
    question: "¿Cómo prefieres aprender?",
    options: [
      { id: "a", text: "Hablando con otros y practicando" },
      { id: "b", text: "Estudiando teoría y datos" },
      { id: "c", text: "Experimentando y creando" },
    ],
  },
  {
    id: 7,
    question: "¿Qué te resulta más atractivo?",
    options: [
      { id: "a", text: "Liderar grupos y proyectos" },
      { id: "b", text: "Investigar y analizar información" },
      { id: "c", text: "Desarrollar nuevas ideas o productos" },
    ],
  },
  {
    id: 8,
    question: "¿Qué te importa más en un trabajo?",
    options: [
      { id: "a", text: "Relaciones interpersonales" },
      { id: "b", text: "Estabilidad y orden" },
      { id: "c", text: "Libertad para innovar" },
    ],
  },
  {
    id: 9,
    question: "¿Cómo te ves en 5 años?",
    options: [
      { id: "a", text: "Como un comunicador o líder" },
      { id: "b", text: "Como un experto técnico o analista" },
      { id: "c", text: "Como un creativo o emprendedor" },
    ],
  },
  {
    id: 10,
    question: "¿Qué tipo de tareas prefieres?",
    options: [
      { id: "a", text: "Interacción y trabajo en equipo" },
      { id: "b", text: "Análisis y planificación detallada" },
      { id: "c", text: "Diseño y creación de cosas nuevas" },
    ],
  },
  {
    id: 11,
    question: "¿Cuál es tu estilo de trabajo?",
    options: [
      { id: "a", text: "Activo y orientado a las personas" },
      { id: "b", text: "Metódico y basado en datos" },
      { id: "c", text: "Explorador y experimental" },
    ],
  },
  {
    id: 12,
    question: "¿Qué disfrutas hacer en tu tiempo libre?",
    options: [
      { id: "a", text: "Socializar y participar en eventos" },
      { id: "b", text: "Leer y aprender cosas nuevas" },
      { id: "c", text: "Crear arte, música o proyectos" },
    ],
  },
  {
    id: 13,
    question: "¿Qué te atrae más de un proyecto?",
    options: [
      { id: "a", text: "Trabajar con gente y liderar" },
      { id: "b", text: "Resolver problemas técnicos" },
      { id: "c", text: "Proponer ideas y cambios" },
    ],
  },
  {
    id: 14,
    question: "¿Qué prefieres en la rutina diaria?",
    options: [
      { id: "a", text: "Variedad y contacto con personas" },
      { id: "b", text: "Estructura y claridad" },
      { id: "c", text: "Flexibilidad para experimentar" },
    ],
  },
  {
    id: 15,
    question: "¿Cuál de estas frases te describe mejor?",
    options: [
      { id: "a", text: "Me gusta ayudar y colaborar" },
      { id: "b", text: "Me gusta entender y analizar" },
      { id: "c", text: "Me gusta inventar y crear" },
    ],
  },
  {
    id: 16,
    question: "¿Qué tipo de ambiente prefieres para trabajar?",
    options: [
      { id: "a", text: "Social y comunicativo" },
      { id: "b", text: "Calmado y organizado" },
      { id: "c", text: "Innovador y flexible" },
    ],
  },
  {
    id: 17,
    question: "¿Cómo afrontas los desafíos?",
    options: [
      { id: "a", text: "Busco ayuda y colaboración" },
      { id: "b", text: "Analizo y planifico soluciones" },
      { id: "c", text: "Busco nuevas formas y enfoques" },
    ],
  },
  {
    id: 18,
    question: "¿Qué te gusta más hacer en un equipo?",
    options: [
      { id: "a", text: "Comunicar y motivar" },
      { id: "b", text: "Organizar y controlar" },
      { id: "c", text: "Proponer ideas y mejoras" },
    ],
  },
  {
    id: 19,
    question: "¿Qué te resulta más gratificante?",
    options: [
      { id: "a", text: "Ver que las personas se entienden" },
      { id: "b", text: "Resolver problemas complejos" },
      { id: "c", text: "Crear algo nuevo y original" },
    ],
  },
  {
    id: 20,
    question: "¿Cuál es tu forma preferida de trabajo?",
    options: [
      { id: "a", text: "Colaborativa y social" },
      { id: "b", text: "Independiente y analítica" },
      { id: "c", text: "Flexible y creativa" },
    ],
  },
];

export default questions;
