import { useState } from "react";
import { Link } from "react-router-dom"
import questions from "../data/questions";
import { ButtonLink } from "../../../components/ButtonLink";




export default function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const currentQuestion = questions[currentIndex];

  const handleSelect = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
     <ButtonLink to="/">Ir atras</ButtonLink>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Test de orientación laboral</h1>

      {currentIndex < questions.length ? (
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          <p className="mb-6 text-lg font-semibold">{currentQuestion.question}</p>

          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option) => (
              <label
                key={option.id}
                className={`cursor-pointer rounded-md border p-4 flex items-center
                ${
                  answers[currentQuestion.id] === option.id
                    ? "bg-[#ffb7a1] border-[#ed7a6b] text-white"
                    : "bg-white border-gray-300 hover:bg-gray-100"
                }
              `}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.id}
                  checked={answers[currentQuestion.id] === option.id}
                  onChange={() => handleSelect(option.id)}
                  className="mr-4"
                />
                {option.text}
              </label>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-md font-semibold transition
              ${
                currentIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }
              `}
            >
              Anterior
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(questions.length)}
                disabled={!answers[currentQuestion.id]}
                className={`px-4 py-2 rounded-md font-semibold transition 
                ${
                  answers[currentQuestion.id]
                    ? "bg-[#ed7a6b] hover:bg-[#ffb7a1] text-white"
                    : "bg-gray-300 cursor-not-allowed"
                }
                `}
              >
                Finalizar
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className={`px-4 py-2 rounded-md font-semibold transition 
                ${
                  answers[currentQuestion.id]
                    ? "bg-[#ed7a6b] hover:bg-[#ffb7a1] text-white"
                    : "bg-gray-300 cursor-not-allowed"
                }
                `}
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">¡Test completado!</h2>
          <p className="mb-6">Tus respuestas:</p>
          <ul className="text-left max-w-md mx-auto">
            {questions.map((q) => (
              <li key={q.id} className="mb-2">
                <strong>{q.question}</strong>: {answers[q.id]?.toUpperCase() || "No respondido"}
              </li>
            ))}
          </ul>
          <button
            onClick={handleRestart}
            className="mt-6 px-6 py-3 bg-[#ffb7a1] hover:bg-[#ed7a6b] rounded-lg font-semibold text-white transition"
          >
            Reiniciar Test
          </button>
        </div>
      )}
    </div>
  );
}
