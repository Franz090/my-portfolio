import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
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
  const [hoveredSkill, setHoveredSkill] = useState('');
  const [currentSkillLevel, setCurrentSkillLevel] = useState(0);
  const [showSkills, setShowSkills] = useState(false);
  const { isDarkMode } = useDarkModeStore();
  const intervalRef = React.useRef(null);

  const backgroundColor = isDarkMode ? '#181818' : '#fffafa';
  const barColor = isDarkMode ? '#fffafa' : '#181818';
  const percentColor = isDarkMode ? '#181818' : '#fffafa';
 
 
  const skillsAnimation = useSpring({
    opacity: showSkills ? 1 : 0,
    transform: showSkills ? 'translateY(0)' : 'translateY(30px)',
    config: { duration: 800 },
  });

  // Function to trigger the animation
  const animateSkills = () => {
    setShowSkills(true);
  };

  // Trigger the animation when the component mounts
  React.useEffect(() => {
    animateSkills();
  }, []);

  const handleSkillHover = (skillTitle) => {
  const skill = skillsList.find((skill) => skill.title === skillTitle);
  setHoveredSkill(skill.title);

  // Clear any previous intervals
  clearInterval(intervalRef.current);

  // Calculate the increment value for smooth animation
  const increment = skill.level / 100; // Adjust increment based on your preference
  let currentPercentage = 0;

  // Incrementally update the currentSkillLevel state
  const interval = setInterval(() => {
    if (currentPercentage >= skill.level) {
      clearInterval(interval);
    } else {
      currentPercentage += increment;
      setCurrentSkillLevel(Math.floor(currentPercentage));
    }
  }, 10); // Adjust the interval duration for smoother animation
  
  // Save the interval reference to clear it later
  intervalRef.current = interval;
};

  

 const handleSkillLeave = () => {
    setHoveredSkill('');
    setCurrentSkillLevel(0);
 };
 
     
  const skillsList = [
    { src: HTML, alt: 'HTML Logo', title: 'HTML', level: 100},
    { src: CSS, alt: 'CSS Logo', title: 'CSS', level: 100 },
    { src: JAVASCRIPT, alt: 'JAVASCRIPT Logo', title: 'JAVASCRIPT', level: 100 },
    { src: REACTJS, alt: 'REACTJS Logo', title: 'REACTJS', level: 95 },
    { src: MYSQL, alt: 'MYSQL Logo', title: 'MYSQL', level: 85 },
    { src: AJAX, alt: 'AJAX Logo', title: 'AJAX', level: 84 },
    { src: JQUERY, alt: 'JQERY Logo', title: 'JQUERY', level: 82 },
    { src: JSON, alt: 'JSON Logo', title: 'JSON', level: 65 },
    { src: NODEJS, alt: 'NODEJS Logo', title: 'NODEJS', level: 78 },
    { src: PHP, alt: 'PHP Logo', title: 'PHP', level: 82 },
    { src: ADOBEXD, alt: 'ADOBEXD Logo', title: 'ADOBEXD', level: 100 },
    { src: FIGMA, alt: 'FIGMA Logo', title: 'FIGMA', level: 84  },
    { src: PHOTOSHOP, alt: 'PHOTOSHOP Logo', title: 'PHOTOSHOP', level: 97  },
    { src: GIT, alt: 'GIT Logo', title: 'GIT', level: 95 },
    { src: VITE, alt: 'VITE Logo', title: 'VITE', level: 96 },
    { src: REDUX, alt: 'REDUX Logo', title: 'REDUX', level: 86 },
    { src: TAILWIND, alt: 'TAILWIND Logo', title: 'TAILWIND', level: 99 },
    { src: BOOTSTRAP, alt: 'BOOTSTRAP Logo', title: 'BOOTSTRAP', level: 100 },
    { src: SASS, alt: 'SASS Logo', title: 'SASS', level: 90 },
    { src: THREEJS, alt: 'THREEJS Logo', title: 'THREEJS', level: 83 },
    
  ];

  return (
    <animated.div  style={skillsAnimation} className="md:px-10 sm:px-10 xl:px-36 pb-12 pt-7">
      <h1 className="lg:text-[27px] md:text-[27px] sm:text-[27px] text-2xl mb-5 tracking-wide capitalize font-semibold">
        Skills
      </h1>
      <p className="mb-7 px-3 text-left antialiased">These are the technologies I've worked with</p>
      <div className="grid grid-flow-row lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 justify-items-center w-100">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-end transition-all duration-500 transform  lg:hover:scale-105 md:hover:scale-105 sm:hover:scale-105 hover:scale-100"
            onMouseEnter={() => handleSkillHover(skill.title)}
            onMouseLeave={handleSkillLeave}
          >
            <div
              className={`border-none rounded-lg flex flex-col justify-center items-center lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-34 sm:h-34 w-40 h-40 shadow-md skills-responsive `}
              style={{
                backgroundColor,
                borderWidth: hoveredSkill === skill.title ? '2px' : '0px',
                transition: 'background-color 0.5s'
              }}
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="object-contain lg:h-16 lg:w-16 md:h-16 md:w-16 sm:h-14 sm:w-14 h-12 w-12"
              />
              <span className="whitespace-nowrap text-center antialiased tracking-wide font-normal text-sm">
                {skill.title}
              </span>
              {hoveredSkill === skill.title && ( // Show percentage bar on hover
                <div className="w-full px-2  mt-2 rounded-lg">
                  <div
                    className="bg-blue-custom tracking-tightest  leading-none px-1 rounded-lg text-right text-[11px] h-3 font-light subpixel-antialiased"
                    style={{
                      width: `${currentSkillLevel}%`,
                      backgroundColor: barColor,
                      color: percentColor,
                     
                    }}
                  >
                    {`${currentSkillLevel}%`}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Skills;