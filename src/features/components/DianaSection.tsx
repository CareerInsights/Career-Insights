import React from 'react';
import { Link } from "react-router-dom";

const DianaSection = () => {
  return (
    <section className="px-4 py-12 md:px-12 bg-white">
      {/* Encabezado */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-yellow-600 text-3xl md:text-4xl font-bold mb-4">
            ¿QUÉ ES LA TÉCNICA DIANA?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            La Técnica Diana es un modelo de visualización inspirado en la estructura de un objetivo. Te ayuda a organizar tus ambiciones y a dar pasos realistas y factibles para alcanzarlas. <br /><br />
            En el centro de la diana está tu objetivo ideal, ya sea un trabajo concreto, un estilo de vida o incluso un sueño a largo plazo. A partir de ese centro se dibujan círculos concéntricos donde se incluyen factores clave como el tiempo, la ubicación y los requisitos. <br /><br />
            La belleza de esta técnica reside en su flexibilidad. Puedes empezar por algo pequeño y realista, ampliando gradualmente su alcance a medida que ganas confianza y recursos o vas cumpliendo los requisitos que planteaste en los círculos. <br /><br />
            Esta herramienta puede usarse de manera global y reducir tu enfoque a medida que te acercas a tu diana.
          </p>
        </div>
        <div className="flex-1">
          <img src="/assets/goal-setting.svg" alt="Ilustración Técnica Diana" className="w-full max-w-sm mx-auto" />
        </div>
      </div>

      {/* Título sección de pasos */}
      <h3 className="text-center text-xl font-bold mb-10">
        Desglosemos paso a paso cómo funciona
      </h3>

      {/* Tarjetas de pasos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Paso 1 */}
        <div className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start">
          <img src="/assets/define-objective.svg" alt="Define tu objetivo ideal" className="w-24" />
          <div>
            <h4 className="font-bold mb-2">DEFINE TU OBJETIVO IDEAL</h4>
            <p className="text-gray-700 text-sm">
              Piensa en lo que realmente quieres. Escríbelo y colócalo en el centro de tu diana. Sé lo más específico posible. Por ejemplo, si estás buscando trabajo, tu objetivo podría ser: “un trabajo remoto como Desarrollador Full Stack con horario flexible dentro de Madrid en los próximos 6 meses.”
            </p>
          </div>
        </div>

        {/* Paso 2 */}
        <div className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start">
          <img src="/assets/add-circle.svg" alt="Añade el siguiente círculo" className="w-24" />
          <div>
            <h4 className="font-bold mb-2">AÑADE EL SIGUIENTE CÍRCULO</h4>
            <p className="text-gray-700 text-sm">
              Rodea tu objetivo con círculos que indiquen los factores que influyen en él. <br />
              <strong>Tiempo</strong>: ¿Cuánto tiempo estás dispuesto a esperar o a trabajar para conseguir ese objetivo? <br />
              <strong>Lugar</strong>: ¿Estás dispuesto a trasladarte o a trabajar a distancia? <br />
              <strong>Requisitos</strong>: ¿Necesitas habilidades, certificaciones o experiencia específicas?
            </p>
          </div>
        </div>

        {/* Paso 3 */}
        <div className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start">
          <img src="/assets/start-here.svg" alt="Empieza donde estás" className="w-24" />
          <div>
            <h4 className="font-bold mb-2">EMPIEZA DONDE ESTÁS</h4>
            <p className="text-gray-700 text-sm">
              Empieza estableciendo objetivos pequeños y alcanzables en el corto plazo. Por ejemplo: postular a 3 empleos al día en un puesto de desarrollador remoto, hacer networking con 2 personas a la semana en LinkedIn o actualizar tu perfil de LinkedIn.
            </p>
          </div>
        </div>

        {/* Paso 4 */}
        <div className="bg-white rounded-2xl shadow p-6 flex gap-4 items-start">
          <img src="/assets/expand.svg" alt="Amplía tu alcance" className="w-24" />
          <div>
            <h4 className="font-bold mb-2">AMPLÍA TU ALCANCE</h4>
            <p className="text-gray-700 text-sm">
              A medida que vayas alcanzando hitos o te sientas con más confianza, puedes ampliar tu búsqueda o tus propuestas de trabajo en función de tu objetivo ideal. Esto te ayuda a mantener la motivación y ganar nuevas competencias para aumentar tu competitividad.
            </p>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-white rounded-2xl shadow p-6 mt-16 max-w-4xl mx-auto text-center">
        <h4 className="font-bold mb-4 text-lg">¡DA EL PRIMER PASO!</h4>
        <p className="text-gray-700 mb-6 text-sm">
          La Técnica Diana no sólo te ayuda a alcanzar objetivos, sino también en definir lo que realmente deseas y qué estás dispuesto a hacer para conseguirlo, teniendo en cuenta tu contexto y tus opciones reales. <br /><br />
          Una vez que definas tu objetivo en el siguiente paso, practica esta técnica en conjunto con tus intereses y habilidades. Me encantará ver cómo estructuras tus objetivos. ¡Me cuentas!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700">
            LINKEDIN <span>→</span>
          </a>
          <a href="#" className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800">
            TIKTOK <span>→</span>
          </a>
          <a href="#" className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-600">
            EMAIL <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DianaSection;
