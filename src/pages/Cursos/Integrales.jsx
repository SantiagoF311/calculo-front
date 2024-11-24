// Integrales.jsx
import Sidebar from "../../components/cursos/integrales/Sidebar";
import Content from "../../components/cursos/integrales/Content";

export default function Integrales() {
  return (
    <div className="min-h-screen flex">
      <Sidebar /> {/* Sidebar con el menú */}
      <div className="w-px mx-4 my-2 py-6 bg-gray-300"></div> {/* Separador */}
      <Content /> {/* Contenido del curso con las rutas anidadas */}
    </div>
  );
}
