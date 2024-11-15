import { create } from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
  checkAuth: () => boolean;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: document.cookie.includes('accessToken'),

  checkAuth: () => {
    const hasAuthCookie = document.cookie.includes('accessToken');
    set({ isAuthenticated: hasAuthCookie });
    return hasAuthCookie;
  },
}));

export default useAuthStore;
