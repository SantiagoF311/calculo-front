import { useState } from "react";
import Question from "../../components/quizz/Question";
import QuizResults from "../../components/quizz/QuizResults";
import QuizTimer from "../../components/quizz/QuizTimer";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false); // Agregado para controlar el estado de inicio

  const questions = [
    {
      question: "¿Qué es la integral definida?",
      options: [
        "El área bajo la curva de una función entre dos puntos",
        "La suma infinita de áreas",
        "La derivada de una función",
        "La tangente de una curva",
      ],
      correctAnswer: "El área bajo la curva de una función entre dos puntos",
    },
    {
      question: "¿Cuál es la fórmula para la integral de x^2?",
      options: [
        "x^3/3 + C",
        "x^3 + C",
        "x^2 + C",
        "x^2/2 + C",
      ],
      correctAnswer: "x^3/3 + C",
    },
    {
      question: "¿Qué método se usa para aproximar áreas bajo una curva?",
      options: [
        "Suma de Riemann",
        "Derivada de la función",
        "Teorema fundamental del cálculo",
        "Regla de L'Hopital",
      ],
      correctAnswer: "Suma de Riemann",
    },
    {
      question: "¿Cuál de las siguientes es una aplicación de las integrales?",
      options: [
        "Encontrar el área bajo una curva",
        "Calcular derivadas",
        "Hallazgo de límites",
        "Encontrar tangentes",
      ],
      correctAnswer: "Encontrar el área bajo una curva",
    },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
    setQuizStarted(false); // Resetea el estado de inicio
  };

  const startQuiz = () => {
    setQuizStarted(true); // Comienza el quiz
  };

  const handleTimeUp = () => {
    setIsQuizCompleted(true);
  };

  return (
    <div className="quiz-container p-8 max-w-3xl mx-auto">
      {!quizStarted ? (
        <div className="start-quiz flex justify-center items-center h-screen">
          <button 
            onClick={startQuiz} 
            className="start-btn bg-blue-500 text-white py-4 px-8 text-2xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
          >
            Comenzar el Quiz
          </button>
        </div>
      ) : (
        <>
          <QuizTimer onTimeUp={handleTimeUp} />
          {/* Aquí agregamos el margen superior para separar el contenido del temporizador */}
          <div className="quiz-content mt-8">
            {!isQuizCompleted ? (
              <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
              />
            ) : (
              <QuizResults score={score} totalQuestions={questions.length} resetQuiz={resetQuiz} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
