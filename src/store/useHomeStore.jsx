import { create } from 'zustand';

const useHomeStore = create((set) => ({
  shouldAnimate: true,
  shineEffect: false, // New state for shine effect
  checkAnimation: () => {
    const hasAnimated = localStorage.getItem('hasAnimated');
    if (hasAnimated) {
      set({ shouldAnimate: false });
    } else {
      localStorage.setItem('hasAnimated', 'true');
    }
  },
  setShineEffect: (shine) => set({ shineEffect: shine }), // Function to set shine effect
}));

export default useHomeStore;
