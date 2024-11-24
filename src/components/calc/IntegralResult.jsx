import React, { useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function IntegralResult({ result }) {
  useEffect(() => {
    const processMathJax = () => {
      if (window.MathJax) {
        window.MathJax.typeset();  // Procesa las fórmulas matemáticas de LaTeX
      }
    };

    processMathJax();  // Llamamos a la función para procesar las fórmulas al inicio

    const interval = setInterval(processMathJax, 500);  // Revisa cada medio segundo

    return () => clearInterval(interval);  // Cleanup
  }, [result]);  // Ejecutar solo cuando el resultado cambia

  return (
    <MathJaxContext>
      <div className="integral-result mt-6 text-center">
        <h2 className="text-2xl font-semibold">Resultado de la Integral</h2>
        <div className="mt-4 text-xl">
          {/* Renderizamos el resultado pasado a MathJax, asegurándonos de que esté dentro de \\( ... \\) */}
          <MathJax>{`La integral es: \\(${result}\\)`}</MathJax>
        </div>
      </div>
    </MathJaxContext>
  );
}
