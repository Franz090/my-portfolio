import { create } from 'zustand';

const useImageStore = create((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
  imageLoaded: false, // Add the imageLoaded state
  setImageLoaded: (imageLoaded) => set({ imageLoaded }), // Add a setter for imageLoaded
}));

export default useImageStore;