// AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Integrales from "../pages/Cursos/Integrales"; // Página de Integrales
import Quiz from "../pages/Quiz/Quiz";
import Calculator from "../pages/Calc/Calculator";
import ProtectedRoute from "../auth/ProtectedRoute";
import Layout from "../layouts/Layout";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas privadas */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/integrales/*" // Asegúrate de usar "/*" para manejar las rutas anidadas
            element={
              <ProtectedRoute>
                <Integrales />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz" // Asegúrate de usar "/*" para manejar las rutas anidadas
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calculator" // Asegúrate de usar "/*" para manejar las rutas anidadas
            element={
              <ProtectedRoute>
                <Calculator />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}
