import {create} from 'zustand';

const useHomeStore = create((set) => ({
  shouldAnimate: true,
  checkAnimation: () => {
    const hasAnimated = localStorage.getItem('hasAnimated');
    if (hasAnimated) {
      set({ shouldAnimate: false });
    } else {
      localStorage.setItem('hasAnimated', 'true');
    }
  },
}));

export default useHomeStore;
