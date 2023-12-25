import {create} from 'zustand';

const useFixedIconStore = create((set) => ({
  isHoveringBorder1: false,
  isHoveringBorder2: false,
  isHoveringBorder3: false,
  icon1: 'ml-7',
  icon2: 'ml-7',
  icon3: 'ml-7',
  setIsHoveringBorder1: (isHovering) => set({ isHoveringBorder1: isHovering }),
  setIsHoveringBorder2: (isHovering) => set({ isHoveringBorder2: isHovering }),
  setIsHoveringBorder3: (isHovering) => set({ isHoveringBorder3: isHovering }),
  setIcon1: (position) => set({ icon1: position }),
  setIcon2: (position) => set({ icon2: position }),
  setIcon3: (position) => set({ icon3: position }),
}));

export default useFixedIconStore;
