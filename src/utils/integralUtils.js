import nerdamer from "nerdamer/all";
import "nerdamer/Algebra";

export function evaluateIntegral(expression, isDefinite, lowerLimit, upperLimit) {
  try {
    console.log("Expresión recibida para integrar:", expression);

    const integral = nerdamer.integrate(expression, "x");

    if (isDefinite) {
      const evaluatedResult = parseFloat(
        nerdamer(integral, { x: upperLimit }).evaluate().text()
      ) - parseFloat(nerdamer(integral, { x: lowerLimit }).evaluate().text());

      return evaluatedResult.toFixed(6); // Resultado numérico con 6 decimales
    } else {
      let result = integral.toString();
      result = result.replace(/(\d+)\/(\d+)/g, "\\frac{$1}{$2}");
      return result + " + C"; // Devuelve la integral indefinida con la constante de integración
    }
  } catch (error) {
    console.error("Error al calcular la integral:", error);
    throw new Error("Hubo un error al calcular la integral. Verifica la expresión.");
  }
}
