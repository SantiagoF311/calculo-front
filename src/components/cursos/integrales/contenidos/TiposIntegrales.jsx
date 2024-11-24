import React, { useEffect } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Registramos los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function TiposIntegrales() {
  const mathJaxConfig = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$']],
    },
  };

  // Forzar renderizado de MathJax
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typeset();
    }
  }, []);

  // Datos para la gráfica de Integral Indefinida (f(x) = x²)
  const dataIndefinida = {
    labels: Array.from({ length: 11 }, (_, i) => i), // Valores de 0 a 10
    datasets: [
      {
        label: 'f(x) = x²',
        data: Array.from({ length: 11 }, (_, i) => Math.pow(i, 2)), // f(x) = x^2
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4, // Tensión de la línea
        borderWidth: 2,
      },
    ],
  };

  // Datos para la gráfica de Integral Definida (f(x) = x², entre 0 y 2)
  const dataDefinida = {
    labels: Array.from({ length: 11 }, (_, i) => i),
    datasets: [
      {
        label: 'f(x) = x²',
        data: Array.from({ length: 11 }, (_, i) => Math.pow(i, 2)),
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.4)', // Área sombreada
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  // Opciones de configuración para las gráficas
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de la Función f(x) = x²',
      },
      tooltip: {
        callbacks: {
          // Redondear el valor del tooltip
          label: function(tooltipItem) {
            const value = tooltipItem.raw;
            return `f(x) = ${value.toFixed(1)}`;  // Redondeamos a un decimal
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'x',
        },
        ticks: {
          stepSize: 1, // Espaciado de los ticks
        },
      },
      y: {
        title: {
          display: true,
          text: 'f(x)',
        },
        ticks: {
          stepSize: 10, // Ajustamos el paso para el eje Y
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <MathJaxContext config={mathJaxConfig}>
      <section id="tipos" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tipos de Integrales</h2>
        <p className="mb-4">
          Existen diversos tipos de integrales, tales como integrales indefinidas y definidas, que se utilizan en diferentes contextos.
        </p>

        {/* Sección: Integral Indefinida */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Integral Indefinida</h3>
          <p className="mb-4">
            La integral indefinida, representada como \( \int f(x) \, dx \), calcula la antiderivada de una función \( f(x) \).
          </p>
          <MathJax className="text-center">{'$$\\int f(x) \\, dx = F(x) + C$$'}</MathJax>
          <p className="mb-4">
            Algunos ejemplos generales de integrales indefinidas son:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <MathJax>{'$$\\int x^2 \\, dx = \\frac{x^3}{3} + C$$'}</MathJax>
            </li>
            <li>
              <MathJax>{'$$\\int \\sin(x) \\, dx = -\\cos(x) + C$$'}</MathJax>
            </li>
          </ul>
          
          {/* Gráfico de Integral Indefinida */}
          <h4 className="text-lg font-semibold mb-4">Gráfico de la Integral Indefinida (f(x) = x²)</h4>
          <Line data={dataIndefinida} options={options} />
        </section>

        {/* Sección: Integral Definida */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Integral Definida</h3>
          <p className="mb-4">
            La integral definida evalúa el área bajo la curva de \( f(x) \) entre dos límites \( a \) y \( b \):
          </p>
          <MathJax className="text-center">{'$$\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)$$'}</MathJax>
          <p className="mb-4">
            Es especialmente útil en aplicaciones como el cálculo de áreas, volúmenes y acumulación de cantidades.
          </p>
          <p className="mb-4">
            Algunos ejemplos generales de integrales definidas son:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <MathJax>{'$$\\int_{0}^{2} x^2 \\, dx = \\left[ \\frac{x^3}{3} \\right]_0^2 = \\frac{8}{3}$$'}</MathJax>
            </li>
            <li>
              <MathJax>{'$$\\int_{1}^{2} \\sin(x) \\, dx = \\left[ -\\cos(x) \\right]_1^2 = -\\cos(2) + \\cos(1)$$'}</MathJax>
            </li>
          </ul>
          
          {/* Gráfico de Integral Definida */}
          <h4 className="text-lg font-semibold mb-4">Gráfico de la Integral Definida (f(x) = x², entre 0 y 2)</h4>
          <Line data={dataDefinida} options={options} />
        </section>
      </section>
    </MathJaxContext>
  );
}
