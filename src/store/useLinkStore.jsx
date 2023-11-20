import {create} from 'zustand';

const useLinkStore = create((set) => ({
  redirecting: false,
  setRedirecting: (value) => set({ redirecting: value }),
}));

export default useLinkStore;
