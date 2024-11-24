import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar con fondo claro */}
      <Navbar />

      {/* Contenido de la página con fondo claro */}
      <main className="flex-grow text-gray-900">
        {children}
      </main>

      {/* Footer con fondo claro */}
      <Footer />
    </div>
  );
}
