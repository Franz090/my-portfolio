import { create } from 'zustand';

const useDarkModeStore = create((set) => ({
  isDarkMode: localStorage.getItem('darkMode') === 'true' || false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));


export default useDarkModeStore;