// AreaBajoLaCurva.jsx
import React, { useEffect } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const AreaBajoLaCurva = () => {
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
