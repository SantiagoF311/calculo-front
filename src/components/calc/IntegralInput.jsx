export default function IntegralInput({ expression, setExpression }) {
    const handleInputChange = (e) => {
      // Reemplazar cualquier carácter no permitido en tiempo real
      const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9+\-*/().^ ]/g, "");
      setExpression(sanitizedValue);
    };

    return (
      <div className="integral-input flex flex-col items-center mb-4">
        <input
          type="text"
          value={expression}
          onChange={handleInputChange}
          placeholder="Ingresa una expresión (ej: x^2)"
          className="w-full max-w-xl p-2 border border-gray-300 rounded-lg shadow-md"
        />
      </div>
    );
}
