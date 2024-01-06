import React from 'react';
import HTML from '../assets/images/skills/HTML.png';
import CSS from '../assets/images/skills/CSS.png';
import JAVASCRIPT from '../assets/images/skills/JAVASCRIPT.png';
import REACTJS from '../assets/images/skills/REACT-JS.png';
import MYSQL from '../assets/images/skills/MYSQL.png';
import AJAX from '../assets/images/skills/AJAX.png';
import JQUERY from '../assets/images/skills/JQUERY.png';
import JSON from '../assets/images/skills/JSON-API.png';
import NODEJS from '../assets/images/skills/NODEJS.png';
import PHP from '../assets/images/skills/PHP.png';
import ADOBEXD from '../assets/images/skills/ADOBEXD.png';
import FIGMA from '../assets/images/skills/FIGMA.png';
import PHOTOSHOP from '../assets/images/skills/PHOTOSHOP.png';
import GIT from '../assets/images/skills/GIT.png';
import VITE from '../assets/images/skills/VITE.png';
import REDUX from '../assets/images/skills/REDUX.png';
import TAILWIND from '../assets/images/skills/TAILWIND.png';
import BOOTSTRAP from '../assets/images/skills/BOOTSTRAP.png';
import SASS from '../assets/images/skills/SASS.png';
import THREEJS from '../assets/images/skills/THREEJS.png';
import useDarkModeStore from '../store/useDarkModeStore';


const Skills = () => {
  const { isDarkMode } = useDarkModeStore();
  const backgroundColor = isDarkMode ? '#181818' : '#fffafa';

 
  const skillsList = [
    { src: HTML, alt: 'HTML Logo', title: 'HTML' },
    { src: CSS, alt: 'CSS Logo', title: 'CSS' },
    { src: JAVASCRIPT, alt: 'JAVASCRIPT Logo', title: 'JAVASCRIPT' },
    { src: REACTJS, alt: 'REACTJS Logo', title: 'REACT JS' },
    { src: MYSQL, alt: 'MYSQL Logo', title: 'MYSQL' },
    { src: AJAX, alt: 'AJAX Logo', title: 'AJAX' },
    { src: JQUERY, alt: 'JQERY Logo', title: 'JQUERY' },
    { src: JSON, alt: 'JSON Logo', title: 'JSON' },
    { src: NODEJS, alt: 'NODEJS Logo', title: 'NODE JS' },
    { src: PHP, alt: 'PHP Logo', title: 'PHP' },
    { src: ADOBEXD, alt: 'ADOBEXD Logo', title: 'ADOBE XD' },
    { src: FIGMA, alt: 'FIGMA Logo', title: 'FIGMA' },
    { src: PHOTOSHOP, alt: 'PHOTOSHOP Logo', title: 'PHOTOSHOP' },
    { src: GIT, alt: 'GIT Logo', title: 'GIT' },
    { src: VITE, alt: 'VITE Logo', title: 'VITE' },
    { src: REDUX, alt: 'REDUX Logo', title: 'REDUX' },
    { src: TAILWIND, alt: 'TAILWIND Logo', title: 'TAILWIND' },
    { src: BOOTSTRAP, alt: 'BOOTSTRAP Logo', title: 'BOOTSTRAP' },
    { src: SASS, alt: 'SASS Logo', title: 'SASS' },
    { src: THREEJS, alt: 'THREEJS Logo', title: 'THREE JS' },
    
  ];

  return (
    <div className="md:px-10 sm:px-10 xl:px-36 pb-12 pt-7">
      <h1 className="lg:text-[27px] md:text-[27px] sm:text-[27px] text-2xl mb-5 tracking-wide capitalize font-semibold">
        Technical Skills
      </h1>
      <p className="mb-7">These are the technologies I've worked with</p>
      <div className="grid grid-flow-row lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 justify-items-center">
        {skillsList.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-end">
            <div
              className={`border-none rounded-lg flex flex-col justify-center items-center p-10 lg:w-[150px] lg:h-[150px] md:w-[130px] md:h-[130px] sm:w-[130px] sm:h-[130px] w-28 h-28 transition-all duration-500 shadow-md`}
              style={{
                backgroundColor,
              }}
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="object-contain w-full h-full"
              />
              <span className="flex justify-center items-center text-center mt-auto">
                <p className="whitespace-nowrap text-center antialiased tracking-wide font-normal text-sm">
                  {skill.title}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;