// animationStore.js
import { create } from 'zustand';

const useAnimationStore = create((set) => ({
  startAnimation: false,
  stopAnimation: false, // Add stopAnimation state
  setStartAnimation: (value) => set({ startAnimation: value }),
  setStopAnimation: (value) => set({ stopAnimation: value }), // Add setter for stopAnimation
}));

export default useAnimationStore;
