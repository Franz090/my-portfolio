import {create} from 'zustand';

const useStarrySkyStore = create((set) => ({
  isLoaded: false,
  setIsLoaded: (value) => set({ isLoaded: value }),
}));
export default useStarrySkyStore;