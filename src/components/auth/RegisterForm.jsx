import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

export default function RegisterForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el usuario ya existe
    if (users.some((user) => user.username === formData.username)) {
      setErrorMessage("El usuario ya está registrado.");
      return;
    }

    // Guardar el nuevo usuario
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    // Navegar al login después del registro
    navigate("/login");
  };

  return (
    <AuthForm
      title="Registro"
      buttonText="Registrarse"
      onSubmit={handleRegister}
      errorMessage={errorMessage}
    />
  );
}
