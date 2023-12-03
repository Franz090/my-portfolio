// animationStore.js
import {create} from 'zustand';

const useAnimationStore = create((set) => ({
  startAnimation: false,
  setStartAnimation: (value) => set({ startAnimation: value }),
}));

export default useAnimationStore;
