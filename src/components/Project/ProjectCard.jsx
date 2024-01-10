// ProjectCard.js
import React, { useState } from 'react';
import { useModalContext } from '../../shared/components/Partials/ModalContext';

const ProjectCard = ({ project, backgroundColor, textColor, backgroundModal,transitionDuration }) => {
  const { cover, title, tools, githubLink } = project;
  const [redirecting, setRedirecting] = useState(false);
  const { modalOpen, setModalOpen, selectedProject, setSelectedProject } = useModalContext();

  const handleRedirect = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.open(githubLink, '_blank');
      setTimeout(() => {
        setRedirecting(false);
      }, 100);
    }, 2000);
  };

  const openModal = () => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div className=" border-t rounded-lg shadow relative max-w-xs" style={{ backgroundColor, transition: `background-color ${transitionDuration}` }}>
      <img className="rounded-t-md w-full h-44 object-cover mb-1" src={cover} alt={title} />
      <div className="p-4">
        <h1 className="text-blue-custom md:text-lg font-normal subpixel-antialiased mb-3">{title}</h1>
        <p className="text-md mb-1 antialiased" style={{ color: textColor, transition: `background-color ${transitionDuration}` }}>Tools & Technologies</p>
        <ul className="list-disc pl-9 mb-14 text-[0.8em] text-custom-gray antialiased">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex">
        <div onClick={openModal} className="flex-1 border-t-1  border-gray-400 font-normal antialiased leading-relaxed bg-blue-custom h-12 rounded-bl-md w-full flex items-center justify-center text-white cursor-pointer hover:bg-cyan-800/100">
          View
        </div>
        <div onClick={handleRedirect} className="flex-1 border-t-1 font-normal antialiased border-gray-300 hover:bg-slate-300 bg-slate-200 h-12 rounded-br-md w-full flex items-center justify-center text-black cursor-pointer">
          {redirecting ? 'Redirecting...' : 'Source Code'}
        </div>
      </div>
      {modalOpen && selectedProject && selectedProject === project && (
  <>
    <div className="fixed inset-0 z-50 bg-black opacity-60"></div>
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center">
      <div style={{background:  backgroundModal }} className=" mt-5 mb-5 p-3 rounded-lg shadow-md max-w-screen-lg">
        <h2 className="text-2xl text-blue-custom p-3 mb-4 font-normal antialiased">{title}</h2>
        <div className="flex flex-col justify-center items-center">
          {selectedProject.images.map((image, index) => (
            <img
              key={index}
              className="w-full p-3 h-auto object-cover mb-2 rounded-md"
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
        <button onClick={closeModal} className="px-4 py-2 bg-blue-custom text-white rounded-md mt-4">Close</button>
      </div>
    </div>
  </>
)}


    </div>
  );
};

export default ProjectCard;
