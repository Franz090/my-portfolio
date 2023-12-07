import { create } from 'zustand';

const useAnimationStore = create((set) => ({
  startAnimation: false,
  stopAnimation: false,
  isJumping: false,
  homeLinkClicked: false,
  showImage: false, // Include the showImage state
  setStartAnimation: (value) => set({ startAnimation: value }),
  setStopAnimation: (value) => set({ stopAnimation: value }),
  setIsJumping: (value) => set({ isJumping: value }),
  setHomeLinkClicked: (value) => set({ homeLinkClicked: value }),
  setShowImage: (value) => set({ showImage: value }), 
}));

export default useAnimationStore;
