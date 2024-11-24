import { Navigate } from "react-router-dom";
import { useAuthStore } from "../zustand/authStore";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/" />;
}
