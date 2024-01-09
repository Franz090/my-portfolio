import React from 'react';

const ProjectCard = ({ project, backgroundColor, textColor, transitionDuration }) => {
  const { cover, title, tools } = project;

  return (
    <div className="max-w-sm border-t rounded-lg shadow relative" style={{ backgroundColor, transition: `background-color ${transitionDuration}` }}>
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
      {/* Centered text within the black and red div elements */}
      <div className="absolute bottom-0 left-0 w-full flex">
        <div className="flex-1 border-t-1 font-normal antialiased border-gray-300 bg-blue-custom h-12 rounded-bl-md w-full flex items-center justify-center text-white">
          View
        </div>
        <div className="flex-1 border-t-1 font-normal antialiased border-gray-300 bg-slate-200 h-12 rounded-br-md w-full flex items-center justify-center text-black ">
          Source Code
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
