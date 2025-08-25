import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("blog-token"),
  setToken: (token) => {
    localStorage.setItem("blog-token", token);
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem("blog-token");
    set({ token: null });
  },
}));

export default useAuthStore;
