import { useAuthStore } from "../../zustand/authStore";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold">Panel de Control</h1>
    </div>
  );
}
