// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Include selectedProject state

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen, selectedProject, setSelectedProject }}>
      {children}
    </ModalContext.Provider>
  );
};
