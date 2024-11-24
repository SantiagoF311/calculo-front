import React, { useEffect } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const RevolucionDeSolidos = () => {
  // Configuración de MathJax para procesar las fórmulas matemáticas
  const mathJaxConfig = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$']],
    },
  };

  // Efecto para procesar las fórmulas matemáticas al montar el componente
  useEffect(() => {
    const procesarMathJax = () => {
      if (window.MathJax) {
        window.MathJax.typeset();  // Procesa todas las fórmulas matemáticas
      }
    };

    procesarMathJax();  // Llamamos a la función para procesar las fórmulas al inicio

    // Revisa cada medio segundo para procesar nuevas fórmulas si es necesario
    const intervalo = setInterval(procesarMathJax, 500);

    return () => clearInterval(intervalo);  // Limpiar el intervalo al desmontar el componente
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div className="p-6 max-w-4xl text-left">
        {/* Título principal */}
        <h2 className="text-2xl font-semibold mb-6">Revolución de Sólidos</h2>

        {/* Sección: Introducción */}
        <section className="mb-8">
          <p className="mb-4">
            La revolución de sólidos es un método para calcular volúmenes de cuerpos generados por la rotación de una región limitada por dos curvas alrededor de un eje. En este caso, se toma el área entre dos funciones \( f(x) \) y \( g(x) \) en el intervalo \( [a, b] \), y al girar esta área alrededor del eje \( x \), se genera un sólido de revolución.
          </p>
          <p className="mb-4">
            El volumen del sólido generado por la rotación de esta región se calcula con la siguiente fórmula:
          </p>
          <MathJax className="text-center">{'$$ V = \\pi \\int_{a}^{b} \\left( f(x)^2 - g(x)^2 \\right) \, dx $$'}</MathJax>
          <p className="mt-4">
            Esta integral nos da el volumen del sólido generado por la rotación del área entre las curvas \( f(x) \) y \( g(x) \) alrededor del eje \( x \), desde el punto \( a \) hasta el punto \( b \).
          </p>
        </section>

        {/* Sección: Interpretación Gráfica */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Interpretación Gráfica</h3>
          <p className="mb-4">
            Cuando una región entre dos curvas gira alrededor de un eje, se genera un sólido tridimensional. Este proceso se puede imaginar como apilar discos infinitesimales de grosor \( dx \), cada uno con el área del anillo formado por la diferencia de los radios \( f(x) \) y \( g(x) \).
          </p>
          <p className="mb-4">
            En este caso, el volumen del sólido generado se obtiene integrando el área de los discos a lo largo del intervalo \( [a, b] \), lo que da lugar a la fórmula de volumen descrita anteriormente.
          </p>

          {/* Sección: Imagen representativa */}
          <div className="w-full mb-6">
            <img
              src="https://www.neurochispas.com/wp-content/uploads/2022/10/Ejemplo-de-volumen-de-revolucion-con-area-entre-dos-curvas.png"
              alt="Revolución de sólidos"
              className="w-full h-auto"
            />
          </div>

          <p className="mb-4">
            La imagen muestra el área entre dos curvas \( f(x) \) y \( g(x) \) que se rota alrededor del eje \( x \). El volumen generado por la rotación de esta región se calcula utilizando la integral mostrada anteriormente, considerando la diferencia de áreas entre las dos curvas.
          </p>
        </section>

        {/* Sección: Ejemplo específico */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Ejemplo de Revolución de un Sólido</h3>
          <p className="mb-4">
            Supongamos que tenemos las funciones \( f(x) = x^2 \) y \( g(x) = x \) generando un sólido cuando se rotan alrededor del eje \( x \) entre \( x = 0 \) y \( x = 1 \). El volumen del sólido generado se calcula con la siguiente fórmula:
          </p>
          <MathJax className="text-center">{'$$ V = \\pi \\int_{0}^{1} \\left( x^4 - x^2 \\right) \, dx $$'}</MathJax>
          <p className="mt-4">
            Resolver esta integral nos da el volumen del sólido generado por la rotación de la región entre las curvas \( f(x) = x^2 \) y \( g(x) = x \) alrededor del eje \( x \).
          </p>
        </section>
      </div>
    </MathJaxContext>
  );
};

export default RevolucionDeSolidos;
