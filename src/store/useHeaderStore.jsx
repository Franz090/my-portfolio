import { create } from 'zustand';

const useHeaderStore = create((set) => ({
  activeLink: '',
  menuOpen: false,
  screenWidth: window.innerWidth,
  delayedNavigation: null, // Add delayedNavigation to store
  showProgressBar: false, // Add showProgressBar to store
  loadingAnimationActive: false,
  progress: 0, // Add progress to store
  setActiveLink: (link) => set({ activeLink: link }),
  setMenuOpen: (isOpen) => set({ menuOpen: isOpen }),
  setScreenWidth: (width) => set({ screenWidth: width }),
  setDelayedNavigation: (delayedNav) => set({ delayedNavigation: delayedNav }), // New setter for delayedNavigation
  setShowProgressBar: (showProgress) => set({ showProgressBar: showProgress }), // New setter for showProgressBar
  setLoadingAnimationActive: (isActive) => set({ loadingAnimationActive: isActive }), // Setter for loadingAnimationActive
  setProgress: (prog) => set({ progress: prog }), // New setter for progress
}));

export default useHeaderStore;
