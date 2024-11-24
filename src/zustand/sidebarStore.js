import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isSidebarVisible: false,
  showSidebar: () => set({ isSidebarVisible: true }),
  hideSidebar: () => set({ isSidebarVisible: false }),
}));
