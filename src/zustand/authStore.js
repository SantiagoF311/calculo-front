import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: !!localStorage.getItem("user"), 
  login: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ isAuthenticated: false });
  },
}));
