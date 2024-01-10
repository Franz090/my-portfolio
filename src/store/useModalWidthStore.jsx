import {create} from 'zustand';

const useModalWidthStore = create((set) => ({
  modalWidth: localStorage.getItem('modalWidth') || 'max-w-screen-lg',
  setModalWidth: (width) => set({ modalWidth: width }),
}));

export default useModalWidthStore;
