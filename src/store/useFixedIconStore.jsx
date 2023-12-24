import {create} from 'zustand';

const useFixedIconStore = create((set) => ({
  isHoveringBorder1: false,
  isHoveringBorder2: false,
  isHoveringBorder3: false,
  setIsHoveringBorder1: (isHovering) => set({ isHoveringBorder1: isHovering }),
  setIsHoveringBorder2: (isHovering) => set({ isHoveringBorder2: isHovering }),
  setIsHoveringBorder3: (isHovering) => set({ isHoveringBorder3: isHovering }),
}));

export default useFixedIconStore;
