import {create} from 'zustand';

// Create a Zustand store
const useHomeAnimationStore = create((set) => ({
  index: 0,
  completedAnimations: 0,
  startAnimation: false,
  setIndex: (newIndex) => set({ index: newIndex }),
  setCompletedAnimations: (count) => set({ completedAnimations: count }),
  setStartAnimation: (value) => set({ startAnimation: value }),
}));

export default useHomeAnimationStore;