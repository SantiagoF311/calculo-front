import { useEffect, useState } from "react";

export default function QuizTimer({ onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="timer text-xl font-semibold mb-6 text-center">
      <p>Tiempo restante: {timeLeft}s</p>
    </div>
  );
}
