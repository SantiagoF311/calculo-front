import React, { useEffect } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registramos los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RiemannIntegralDefinition = () => {
  const mathJaxConfig = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$']],
    },
  };

  useEffect(() => {
    // Esta función asegura que MathJax procese el contenido después del renderizado
    const processMathJax = () => {
      if (window.MathJax) {
        window.MathJax.typeset();  // Procesa todas las fórmulas matemáticas
      }
    };

    processMathJax();  // Llamamos a la función para procesar las fórmulas al inicio

    // Establecemos un intervalo para procesar las fórmulas en cada renderizado
    const interval = setInterval(processMathJax, 500);  // Revisa cada medio segundo

    // Cleanup cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  // Datos para la gráfica
  const data = {
    labels: Array.from({ length: 21 }, (_, i) => i * 0.5),  // X: puntos de 0 a 10
    datasets: [
      {
        label: 'f(x) = x^2',
        data: Array.from({ length: 21 }, (_, i) => Math.pow(i * 0.5, 2)),  // Y: f(x) = x^2
        fill: true,  // Rellenar el área bajo la curva
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Color del área debajo de la curva
        borderColor: 'rgba(75, 192, 192, 1)',  // Color de la línea
        borderWidth: 2,
      },
    ],
  };

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div className="p-6 max-w-4xl text-left">
        {/* Título principal */}
        <h2 className="text-2xl font-semibold mb-6">Definición de la Integral de Riemann</h2>

        {/* Sección: Introducción */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">¿Qué es la Integral de Riemann?</h3>
          <p className="mb-4">
            La integral de Riemann es una forma de definir la integral definida de una función sobre un intervalo cerrado \([a, b]\).
            Esta integral se define como el límite de una suma de Riemann, que aproxima el área bajo la curva de la función en intervalos finitos.
          </p>
          <p className="mb-4">
            Formalmente, la integral de Riemann de una función \(f(x)\) sobre el intervalo \([a, b]\) se define como el límite de las sumas de Riemann cuando la partición del intervalo se hace infinitesimal:
          </p>
          <MathJax className="text-center">{'$$\\int_{a}^{b} f(x) \, dx = \\lim_{||P|| \\to 0} \\sum_{i=1}^{n} f(x_i^*) (x_i - x_{i-1})$$'}</MathJax>
          <p className="mt-4">
            Aquí, \(P\) es una partición del intervalo \([a, b]\), \(x_i^*\) son puntos de muestra en cada subintervalo y \(||P||\) es el ancho máximo de los subintervalos.
          </p>
        </section>

        {/* Sección: Propiedades clave de la Integral de Riemann */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Propiedades Clave</h3>
          <p className="mb-4">Algunas propiedades importantes de la integral de Riemann son:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Linealidad:</strong> La integral de una suma de funciones es la suma de las integrales:
              <MathJax className="block mt-1">{'$$\\int_{a}^{b} (f(x) + g(x)) \, dx = \\int_{a}^{b} f(x) \, dx + \\int_{a}^{b} g(x) \, dx$$'}</MathJax>
            </li>
            <li>
              <strong>Escalabilidad:</strong> La integral de una constante multiplicada por una función es la constante multiplicada por la integral:
              <MathJax className="block mt-1">{'$$\\int_{a}^{b} c f(x) \, dx = c \\int_{a}^{b} f(x) \, dx$$'}</MathJax>
            </li>
            <li>
              <strong>Adición de intervalos:</strong> Si el intervalo \([a, b]\) se divide en dos subintervalos \([a, c]\) y \([c, b]\), entonces:
              <MathJax className="block mt-1">{'$$\\int_{a}^{b} f(x) \, dx = \\int_{a}^{c} f(x) \, dx + \\int_{c}^{b} f(x) \, dx$$'}</MathJax>
            </li>
          </ul>
        </section>

        {/* Sección: Interpretación Gráfica */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Interpretación Gráfica</h3>
          <p className="mb-4">
            Geométricamente, la integral de Riemann corresponde al área bajo la curva de la función \(f(x)\) sobre el intervalo \([a, b]\), si la función es positiva en dicho intervalo.
          </p>
          <p className="mb-4">
            Si la función es negativa, la integral representa el área por debajo del eje \(x\), pero con signo negativo.
          </p>
          <MathJax className="text-center">{'$$\\text{Área} = \\int_{a}^{b} f(x) \, dx$$'}</MathJax>
          <div className="my-6">
            <Line data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>
        </section>
      </div>
    </MathJaxContext>
  );
};

export default RiemannIntegralDefinition;
