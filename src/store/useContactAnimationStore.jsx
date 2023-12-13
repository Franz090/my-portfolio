import {create} from 'zustand';

const useContactAnimationStore = create((set) => ({
  showText: false,
  animateText: true,
  setShowText: (value) => set({ showText: value }),
  setAnimateText: (value) => set({ animateText: value }),
}));

export default useContactAnimationStore;
