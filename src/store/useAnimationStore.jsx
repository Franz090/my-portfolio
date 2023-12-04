import { create } from 'zustand';

const useAnimationStore = create((set) => ({
  startAnimation: false,
  stopAnimation: false,
  isJumping: false,
  homeLinkClicked: false, // New state for tracking home link click
  setStartAnimation: (value) => set({ startAnimation: value }),
  setStopAnimation: (value) => set({ stopAnimation: value }),
  setIsJumping: (value) => set({ isJumping: value }),
  setHomeLinkClicked: (value) => set({ homeLinkClicked: value }), // Setter for homeLinkClicked state
}));

export default useAnimationStore;
