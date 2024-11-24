import React, { useState } from "react";
import IntegralInput from "./IntegralInput";
import IntegralResult from "./IntegralResult";
import { evaluateIntegral } from "../../utils/integralUtils";
import { Line } from "react-chartjs-2";
import nerdamer from "nerdamer";
import "nerdamer/Calculus"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function IntegralCalculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isDefinite, setIsDefinite] = useState(false);
  const [lowerLimit, setLowerLimit] = useState("");
  const [upperLimit, setUpperLimit] = useState("");
  const [chartData, setChartData] = useState(null);

  const handleCalculate = () => {
    if (!expression.trim()) {
      setError("Por favor, ingresa una expresión.");
      setResult(null);
      setChartData(null);
      return;
    }

    try {
      if (isDefinite && (lowerLimit === "" || upperLimit === "")) {
        setError("Por favor, ingresa los límites de la integral definida.");
        setResult(null);
        setChartData(null);
        return;
      }

      const lower = isDefinite ? parseFloat(lowerLimit) : -10;
      const upper = isDefinite ? parseFloat(upperLimit) : 10;

      const integralResult = evaluateIntegral(expression, isDefinite, lower, upper);
      setResult(integralResult);
      setError("");

      const data = generateChartData(expression, lower, upper);
      setChartData(data);
    } catch (err) {
      setError(err.message || "Error al calcular la integral. Revisa la expresión.");
      setResult(null);
      setChartData(null);
    }
  };

  const generateChartData = (expression, lower, upper) => {
    const xValues = [];
    const yValues = [];
    for (let x = lower; x <= upper; x += 0.1) {
      xValues.push(parseFloat(x.toFixed(1))); // Evitar problemas de precisión flotante
      try {
        const y = nerdamer(expression, { x }).evaluate().text(); // Evaluar la función
        const parsedY = parseFloat(y); // Convertir a número real
        if (!isNaN(parsedY)) {
          yValues.push(parsedY);
        } else {
          yValues.push(null); // Si no es un número válido
        }
      } catch (err) {
        console.error(`Error evaluando la función en x = ${x}:`, err.message);
        yValues.push(null); // Si ocurre un error, mantener consistencia
      }
    }
  
    return {
      labels: xValues,
      datasets: [
        {
          label: `Gráfico de ${expression}`,
          data: yValues,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  };
  
  

  return (
    <div className="integral-calculator p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Calculadora de Integrales</h1>

      <div className="flex justify-center gap-6 mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isDefinite}
            onChange={() => setIsDefinite(!isDefinite)}
            className="mr-2"
          />
          <label className="text-lg">Integral Definida</label>
        </div>
      </div>

      <IntegralInput expression={expression} setExpression={setExpression} />

      {isDefinite && (
        <div className="mt-4 flex justify-center gap-4">
          <input
            type="number"
            placeholder="Límite inferior"
            value={lowerLimit}
            onChange={(e) => setLowerLimit(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            placeholder="Límite superior"
            value={upperLimit}
            onChange={(e) => setUpperLimit(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
      )}

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600"
        >
          Calcular Integral
        </button>
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {result && <IntegralResult result={result} />}

      {chartData && chartData.datasets[0].data.length > 0 && (
        <div className="mt-6">
          <h3 className="text-center text-xl font-semibold">Gráfico de la Integral</h3>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}
