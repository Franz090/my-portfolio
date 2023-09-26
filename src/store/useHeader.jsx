import { create } from 'zustand';

const useHeader = create((set) => ({
  activeLink: '', // Initialize it as an empty string
  menuOpen: false,
  screenWidth: window.innerWidth,
  setActiveLink: (link) => set({ activeLink: link }),
  setMenuOpen: (isOpen) => set({ menuOpen: isOpen }),
  setScreenWidth: (width) => set({ screenWidth: width }),
}));

export default useHeader;