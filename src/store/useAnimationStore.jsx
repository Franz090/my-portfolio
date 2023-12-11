import { create } from 'zustand';

const useAnimationStore = create((set) => ({
  startAnimation: false,
  stopAnimation: false,
  isJumping: false,
  homeLinkClicked: false,
  showImage: false,
  currentPage: '/',
  setStartAnimation: (value) => set({ startAnimation: value }),
  setStopAnimation: (value) => set({ stopAnimation: value }),
  setIsJumping: (value) => set({ isJumping: value }),
  setHomeLinkClicked: (value) => set({ homeLinkClicked: value }),
  setShowImage: (value) => set({ showImage: value }), // Adding setShowImage function
  setCurrentPage: (value) => {
    set({ currentPage: value });

    if (value === '/') {
      set({ showImage: true });
    } else {
      set({ showImage: false });
    }
  },
}));

export default useAnimationStore;
