export default function Question({ question, options, onAnswer }) {
  return (
    <div className="question-container bg-white p-6 rounded-lg shadow-md">
      <h2 className="question-text text-xl font-semibold mb-4">{question}</h2>
      <div className="options space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="option-btn w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
