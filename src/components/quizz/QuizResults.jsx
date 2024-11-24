export default function QuizResults({ score, totalQuestions, resetQuiz }) {
  return (
    <div className="results-container bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">¡Quiz Completado!</h2>
      <p className="text-xl">Tu puntaje es: {score} de {totalQuestions}</p>
      <button
        onClick={resetQuiz}
        className="retry-btn mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
      >
        Volver a intentar
      </button>
    </div>
  );
}
