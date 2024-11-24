import { useState } from "react";

export default function AuthForm({ title, buttonText, onSubmit, errorMessage }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col w-1/3 gap-4">
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          className="p-2 border border-gray-300 rounded"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="p-2 border border-gray-300 rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
