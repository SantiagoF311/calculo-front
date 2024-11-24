import React, { useEffect } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Registramos los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const AreaBajoLaCurva = () => {
  const mathJaxConfig = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$']],
    },
  };

  useEffect(() => {
    const processMathJax = () => {
      if (window.MathJax) {
        window.MathJax.typeset();
      }
    };

    processMathJax();

    const interval = setInterval(processMathJax, 500);

    return () => clearInterval(interval);
  }, []);

  // Datos de la gráfica (ejemplo de la función f(x) = x²)
  const data = {
    labels: Array.from({ length: 11 }, (_, i) => i), // Genera los valores de 0 a 10
    datasets: [
      {
        label: 'f(x) = x²',
        data: Array.from({ length: 11 }, (_, i) => Math.pow(i, 2)), // f(x) = x^2
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.4)', // Color del área bajo la curva
        borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
        tension: 0.1,
        pointRadius: 0, // Ocultar los puntos de la línea
        borderWidth: 2, // Grosor de la línea
        cubicInterpolationMode: 'monotone', // Suaviza la curva
      },
      // Marcadores para resaltar el área
      {
        label: 'Área Bajo la Curva',
        data: Array.from({ length: 11 }, (_, i) => Math.pow(i, 2)),
        fill: true,
        backgroundColor: 'rgba(0, 123, 255, 0.3)', // Color más destacado para el área
        borderColor: 'transparent', // No mostrar borde
        borderWidth: 0,
      },
    ],
  };

  // Opciones de configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Área Bajo la Curva de f(x) = x²',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `f(x) = ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'x',
        },
      },
      y: {
        title: {
          display: true,
          text: 'f(x)',
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
      <div className="p-6 max-w-4xl text-left">
        {/* Título principal */}
        <h2 className="text-2xl font-semibold mb-6">Área Bajo la Curva</h2>

        {/* Sección: Introducción al área bajo la curva */}
        <section className="mb-8">
          <p className="mb-4">
            El área bajo una curva representa la integral definida de una función entre dos puntos, y se interpreta como la acumulación de valores sobre el intervalo de integración.
          </p>
          <p className="mb-4">
            Matemáticamente, el área bajo la curva de una función \(f(x)\) entre los límites \(a\) y \(b\) se expresa como:
          </p>
          <MathJax className="text-center">{'$$\\int_{a}^{b} f(x) \\, dx$$'}</MathJax>
          <p className="mt-4">
            Esta integral nos da la acumulación de valores de \(f(x)\) desde el punto \(a\) hasta \(b\), representando el área bajo la curva de la función en ese intervalo.
          </p>
        </section>

        {/* Sección: Gráfico del área bajo la curva */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Gráfico de Área Bajo la Curva</h3>
          <div className="mb-4">
            <Line data={data} options={options} />
          </div>
        </section>

        {/* Sección: Interpretación gráfica */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Interpretación Gráfica</h3>
          <p className="mb-4">
            Visualmente, el área bajo la curva de \(f(x)\) es el área encerrada entre la función y el eje \(x\), desde \(x = a\) hasta \(x = b\). Esto se representa de la siguiente forma:
          </p>
          <MathJax className="text-center">{'$$\\text{Área} = \\int_{a}^{b} f(x) \\, dx$$'}</MathJax>
        </section>

        {/* Sección: Propiedades clave */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Propiedades Clave</h3>
          <p className="mb-4">Algunas propiedades importantes de la integral definida son:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              Linealidad: 
              <MathJax className="block mt-1">{'$$\\int (af(x) + bg(x)) \\, dx = a \\int f(x) \\, dx + b \\int g(x) \\, dx$$'}</MathJax>
            </li>
            <li>
              Cambio de límites:
              <MathJax className="block mt-1">{'$$\\int_{a}^{b} f(x) \\, dx = -\\int_{b}^{a} f(x) \\, dx$$'}</MathJax>
            </li>
            <li>
              Adición de intervalos:
              <MathJax className="block mt-1">{'$$\\int_{a}^{c} f(x) \\, dx + \\int_{c}^{b} f(x) \\, dx = \\int_{a}^{b} f(x) \\, dx$$'}</MathJax>
            </li>
          </ul>
        </section>
      </div>
    </MathJaxContext>
  );
};

export default AreaBajoLaCurva;
