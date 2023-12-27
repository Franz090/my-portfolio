import {create }from 'zustand';

const useFixedIconStore = create((set) => ({
  facebookHovered: false,
  linkedinHovered: false,
  githubHovered: false,
  setFacebookHovered: (value) => set({ facebookHovered: value }),
  setLinkedinHovered: (value) => set({ linkedinHovered: value }),
  setGithubHovered: (value) => set({ githubHovered: value }),
}));

export default useFixedIconStore;
