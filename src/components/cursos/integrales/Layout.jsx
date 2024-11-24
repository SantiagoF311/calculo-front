import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'; // Importa desde la nueva ubicación

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Definir las rutas y su orden con el prefijo 'integrales'
  const sections = [
    { path: "introduccion", label: "Introducción" },
    { path: "definicion", label: "Definición de Integral" },
    { path: "tipos", label: "Tipos de Integrales" },
    { path: "area-bajo-curva", label: "Área Bajo la Curva" },
    { path: "riemann", label: "Suma de Riemann" },
    { path: "solidos-revolucion", label: "Sólidos de Revolución" },
  ];

  // Encontrar la sección actual (por índice)
  const currentSectionIndex = sections.findIndex(section => location.pathname.includes(section.path));

  // Función para retroceder
  const handlePrev = () => {
    if (currentSectionIndex > 0) {
      navigate(`/integrales/${sections[currentSectionIndex - 1].path}`);
      window.scrollTo(0, 0);  // Desplazar al principio de la página
    }
  };

  // Función para avanzar
  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      navigate(`/integrales/${sections[currentSectionIndex + 1].path}`);
      window.scrollTo(0, 0);  // Desplazar al principio de la página
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* El contenido de las rutas se renderiza aquí */}
      <div className="p-8">
        <Outlet /> {/* Aquí es donde se renderiza el contenido de las rutas hijas */}
      </div>

      {/* Botones de navegación (Solo mostrar si habilitado) */}
      <div className="flex justify-end p-4 pr-10 space-x-4">
        {/* Botón Anterior */}
        {currentSectionIndex > 0 && (
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600"
          >
            <ArrowLeftIcon className="h-8 w-8" />
          </button>
        )}

        {/* Botón Siguiente */}
        {currentSectionIndex < sections.length - 1 && (
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600"
          >
            <ArrowRightIcon className="h-8 w-8" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Layout;
