import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-80 bg-white text-gray-800 p-4 pt-6"> {/* Aumenté el ancho a w-80 */}
      <h2 className="text-xl font-semibold mb-6">Curso de Integrales</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/integrales/introduccion" className="block text-gray-500 hover:text-black">
            Introducción
          </Link>
        </li>
        <li>
          <Link to="/integrales/definicion" className="block text-gray-500 hover:text-black">
            Definición de Integral
          </Link>
        </li>
        <li>
          <Link to="/integrales/tipos" className="block text-gray-500 hover:text-black">
            Tipos de Integrales
          </Link>
        </li>
        <li>
          <Link to="/integrales/area-bajo-curva" className="block text-gray-500 hover:text-black">
            Área Bajo la Curva
          </Link>
        </li>
        <li>
          <Link to="/integrales/riemann" className="block text-gray-500 hover:text-black">
            Sumas de Riemann
          </Link>
        </li>
        <li>
          <Link to="/integrales/solidos-revolucion" className="block text-gray-500 hover:text-black">
            Sólidos de Revolución
          </Link>
        </li>
      </ul>
    </div>
  );
}
