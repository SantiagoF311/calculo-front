import { Link } from "react-router-dom";
import { useAuthStore } from "../../zustand/authStore";  // Importamos el store de autenticación
import { useSidebarStore } from "../../zustand/sidebarStore";  // Importamos el store del sidebar

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();  // Usamos el store de autenticación
  const { isSidebarVisible, showSidebar, hideSidebar } = useSidebarStore();  // Usamos el store del sidebar

  let sidebarTimer;

  // Mostrar el sidebar cuando el ratón está sobre el título
  const handleMouseEnterTitle = () => {
    if (isAuthenticated) {  // Solo mostrar el sidebar si el usuario está logeado
      showSidebar();
    }
  };

  // Ocultar el sidebar cuando el ratón sale completamente del área de título y sidebar
  const handleMouseLeaveSidebar = () => {
    if (isAuthenticated) {  // Solo ocultar el sidebar si el usuario está logeado
      sidebarTimer = setTimeout(() => hideSidebar());
    }
  };

  const handleMouseEnterSidebar = () => {
    // Evitar que el sidebar se cierre cuando el ratón entra al sidebar
    if (isAuthenticated) {
      clearTimeout(sidebarTimer);
    }
  };

  const handleMouseLeaveTitle = () => {
    if (isAuthenticated) {  // Solo manejar la salida del título si el usuario está logeado
      if (!isSidebarVisible) {
        handleMouseLeaveSidebar();
      }
    }
  };

  // Función para manejar el clic en los enlaces del sidebar
  const handleLinkClick = () => {
    if (isAuthenticated) {
      hideSidebar();  // Ocultar el sidebar al hacer clic en un enlace
    }
  };

  return (
    <header className="bg-white text-gray-900 border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Nombre de la página como enlace */}
        <div
          className="text-lg font-bold text-gray-800 cursor-pointer"
          onMouseEnter={handleMouseEnterTitle}  // Mostrar sidebar al pasar el ratón por el título
          onMouseLeave={handleMouseLeaveTitle}  // Verifica si el ratón sale del título
        >
          <Link to="/">Nombre de la Página</Link>
        </div>

        {/* Sidebar que aparece en hover solo si el usuario está logeado */}
        {isAuthenticated && (
          <div
            className={`fixed top-0 left-0 w-72 h-full bg-gray-800 text-white z-50 transition-transform duration-300 ${
              isSidebarVisible ? "translate-x-0" : "translate-x-[-100%]"
            }`}
            onMouseEnter={handleMouseEnterSidebar}  // Detecta si el ratón está sobre el sidebar
            onMouseLeave={handleMouseLeaveSidebar}  // Detecta si el ratón sale completamente del sidebar
          >
            <div className="p-4">
              {/* Título del sidebar como enlace */}
              <Link to="/" className="font-semibold text-xl hover:text-blue-400 mb-4">
                Nombre de la Página
              </Link>
              <ul className="space-y-4 mt-4">
                <li><Link to="/integrales/introduccion" className="hover:text-blue-400" onClick={handleLinkClick}>Integrales</Link></li>
                <li><Link to="/quiz" className="hover:text-blue-400" onClick={handleLinkClick}>Quiz</Link></li>
                <li><Link to="/calculator" className="hover:text-blue-400" onClick={handleLinkClick}>Calculadora</Link></li>
              </ul>
            </div>
          </div>
        )}

        {/* Botones de navegación */}
        <div className="space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                  Acceder
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition-colors duration-300">
                  Crear cuenta
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
