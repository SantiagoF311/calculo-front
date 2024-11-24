import React, { useEffect } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const Introduccion = () => {
  const mathJaxConfig = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$']],
    },
  };

  useEffect(() => {
    // Asegurarse de que MathJax esté completamente cargado antes de llamar a typeset
    const processMathJax = () => {
      if (window.MathJax && window.MathJax.Hub) {
        // Usamos Queue en lugar de typeset
        window.MathJax.Hub.Queue(["Typeset", window.MathJax]);
      }
    };

    // Llamamos a la función al inicio para procesar el contenido
    processMathJax();

    // Hacemos un efecto para actualizar las fórmulas en cada renderizado
    const interval = setInterval(processMathJax, 500);  // Revisamos cada medio segundo

    // Cleanup cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);  // Solo se ejecuta una vez cuando se monta el componente

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div className="p-6 max-w-4xl text-left">
        {/* Título principal */}
        <h2 className="text-2xl font-semibold mb-6">Introducción a las Integrales</h2>

        {/* Sección: Introducción general */}
        <section className="mb-8">
          <p className="mb-6">
            Las integrales son una parte esencial del cálculo y se utilizan para resolver diversos problemas en matemáticas, física y otras ciencias aplicadas. En términos simples, una integral puede interpretarse como una forma de calcular áreas, pero su utilidad va mucho más allá de esto.
          </p>
        </section>

        {/* Sección: ¿Qué es una Integral? */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">¿Qué es una Integral?</h3>
          <p className="mb-6">
            Una integral es una operación matemática que se usa para calcular el área bajo una curva, o la acumulación de una cantidad a lo largo de un intervalo. Las integrales también están relacionadas con el concepto de derivadas, ya que son el proceso inverso de derivar una función.
          </p>
          <p className="mb-6">
            En este curso, exploraremos las integrales en dos grandes categorías:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Integral definida:</strong> Calcula áreas bajo curvas en un intervalo específico.</li>
            <li><strong>Integral indefinida:</strong> Encuentra la función original de una derivada.</li>
          </ul>
        </section>

        {/* Sección: Ejemplo de Integral Definida */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Ejemplo de Integral Definida</h3>
          <p className="mb-6">
            Supongamos que deseamos calcular el área bajo la curva de la función \(f(x) = x^2\) entre los puntos \(a = 0\) y \(b = 2\). La integral definida sería:
          </p>
          <MathJax className="bg-gray-100 p-4 rounded-md mb-6 text-center">{'$$\\int_{0}^{2} x^2 \\, dx$$'}</MathJax>
          <p className="mb-6">
            Resolviendo esta integral, obtenemos un valor que representa el área bajo la curva en ese intervalo.
          </p>
        </section>

        {/* Sección: Importancia de las Integrales */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">¿Por qué son Importantes las Integrales?</h3>
          <p className="mb-6">
            Las integrales no solo sirven para calcular áreas, sino que también tienen aplicaciones importantes en física, economía, biología, ingeniería y otras disciplinas. Algunas de sus aplicaciones más comunes incluyen:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Cálculo de áreas y volúmenes de figuras geométricas complejas.</li>
            <li>Determinación de distancias recorridas y trabajo realizado en física.</li>
            <li>Modelado de fenómenos naturales y económicos, como el crecimiento de poblaciones o el cálculo de ganancias.</li>
          </ul>
        </section>

        {/* Sección: Próximos pasos */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Próximos pasos</h3>
          <p className="mb-6">
            En la siguiente sección, profundizaremos en las propiedades de las integrales definidas y su aplicación en problemas matemáticos más complejos.
          </p>
        </section>
      </div>
    </MathJaxContext>
  );
};

export default Introduccion;
