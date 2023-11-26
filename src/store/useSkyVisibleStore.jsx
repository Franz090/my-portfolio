import {create} from 'zustand';

const useSkyVisible = create((set) => ({
  isSkyVisible: false,
  setIsSkyVisible: (value) => set({ isSkyVisible: value }),
}));

export default useSkyVisible;
