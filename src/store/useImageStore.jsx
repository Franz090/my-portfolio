import { create } from 'zustand';

const useImageStore = create((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
  imageLoaded: false,
  setImageLoaded: (imageLoaded) => set({ imageLoaded }),
  isVisible: false, // Adding isVisible to the store
  setIsVisible: (isVisible) => set({ isVisible }), // Setter for isVisible
}));

export default useImageStore;
