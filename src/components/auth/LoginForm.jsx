import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/authStore";
import AuthForm from "./AuthForm";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar credenciales
    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (!user) {
      setErrorMessage("Usuario o contraseña incorrectos.");
      return;
    }

    // Simular inicio de sesión
    login(user);
    navigate("/dashboard");
  };

  return (
    <AuthForm
      title="Iniciar Sesión"
      buttonText="Ingresar"
      onSubmit={handleLogin}
      errorMessage={errorMessage}
    />
  );
}
