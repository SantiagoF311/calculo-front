export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-8 px-12 mt-12 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* Logo */}
        <div className="flex justify-center sm:justify-start mb-6 sm:mb-0 lg:col-span-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Logo_de_la_Santo_Tom%C3%A1s.svg/2560px-Logo_de_la_Santo_Tom%C3%A1s.svg.png"
            alt="Universidad Santo Tomás"
            className="h-24"
          />
        </div>

        {/* Bloque con 3 columnas: Profesor, Integrantes, Redes Sociales */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bloque Profesor */}
          <div className="sm:text-left">
            <h4 className="font-semibold text-xl text-gray-800 mb-2">Profesor</h4>
            <p className="text-gray-600 text-base opacity-70">David Ramirez</p>
          </div>

          {/* Bloque Integrantes */}
          <div className="sm:text-left">
            <h4 className="font-semibold text-xl text-gray-800 mb-2">Integrantes</h4>
            <div className="space-y-1">
              <p className="text-gray-600 text-base opacity-70">Santiago Fonseca</p>
              <p className="text-gray-600 text-base opacity-70">Jonathan Panesso</p>
              <p className="text-gray-600 text-base opacity-70">Jorge Mojica</p>
              <p className="text-gray-600 text-base opacity-70">Daniel Lopez</p>
            </div>
          </div>

          {/* Bloque Redes Sociales */}
          <div className="sm:text-left">
            <h4 className="font-semibold text-xl text-gray-800 mb-2">Redes Sociales</h4>
            <a
              href="https://github.com/SantiagoF311/calculo-front"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.799 8.205 11.387.6.111.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.085 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.306-5.467-1.334-5.467-5.932 0-1.31.467-2.38 1.235-3.22-.124-.304-.535-1.527.116-3.18 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.003.403 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.876.118 3.18.77.84 1.233 1.91 1.233 3.22 0 4.608-2.807 5.623-5.48 5.921.43.37.814 1.096.814 2.212 0 1.597-.014 2.885-.014 3.276 0 .319.19.694.8.577C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

