import useDarkModeStore from '../store/useDarkModeStore';
import ProjectCard from '../components/Project/ProjectCard'; 
import React, { useEffect } from 'react';
import { useModalContext } from '../shared/components/Partials/ModalContext';
import mehrCover from '../assets/images/project/cover/mehr.png';
import munisipyoCover from '../assets/images/project/cover/munisipyo.png';
import waterstationCover from '../assets/images/project/cover/waterstation.png';
import mehr1 from '../assets/images/project/mehr/1.png';
import mehr2 from '../assets/images/project/mehr/2.png';
import mehr3 from '../assets/images/project/mehr/3.png';
import mehr4 from '../assets/images/project/mehr/4.png';
import mehr5 from '../assets/images/project/mehr/5.png';
import mehr6 from '../assets/images/project/mehr/6.png';
import mehr7 from '../assets/images/project/mehr/7.png';
import mehr8 from '../assets/images/project/mehr/8.png';
import mehr9 from '../assets/images/project/mehr/9.png';
import mehr10 from '../assets/images/project/mehr/10.png';
import mehr11 from '../assets/images/project/mehr/11.png';
import munisipyo1 from '../assets/images/project/munisipyo/1.png'
import munisipyo2 from '../assets/images/project/munisipyo/2.png'
import munisipyo3 from '../assets/images/project/munisipyo/3.png'
import munisipyo4 from '../assets/images/project/munisipyo/4.png'
import munisipyo5 from '../assets/images/project/munisipyo/5.png'
import munisipyo6 from '../assets/images/project/munisipyo/6.png'
import waterstation1 from '../assets/images/project/water-station/1.png'
import waterstation2 from '../assets/images/project/water-station/2.png'
import waterstation3 from '../assets/images/project/water-station/3.png'
import waterstation4 from '../assets/images/project/water-station/4.png'
import waterstation5 from '../assets/images/project/water-station/5.png'
import waterstation6 from '../assets/images/project/water-station/6.png'





const projectsData = [
  {
    cover: mehrCover,
    title: 'Maternity Health Monitoring Record System',
    tools: ['HTML', 'CSS', 'JAVASCRIPT/JQUERY','AJAX', 'PHP', 'BOOTSTRAP 5'],
    nameText:  ['Home Page', 'Login Page', 'Dashboard','Change Password', 'View Midwife', 'View Barangay','Consultations','View Patients','Patient Profile','Calendar','Appointment Logs'],
    githubLink: 'https://github.com/Franz090/mehrsystem',
    images: [
      mehr1,
      mehr2,
      mehr3,
      mehr4,
      mehr5,
      mehr6,
      mehr7,
      mehr8,
      mehr9,
      mehr10,
      mehr11  
    ]
  },
  {
    cover: munisipyoCover,
    title: 'Municipal Treasury Office Record Management System',
    tools: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'BOOTSTRAP 5'],
    nameText:  ['Login Page', 'Summary Report','Department' , 'Add Department', 'View Department','Print Total Department'],
    githubLink: 'https://github.com/Franz090/Municipal',
    images: [
      munisipyo1,
      munisipyo2,
      munisipyo3,
      munisipyo4,
      munisipyo5,
      munisipyo6,
    ]
  },
  {
    cover: waterstationCover,
    title: 'Water Refilling Station Reservation System',
    tools: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP'],
    nameText:  ['Login Page', 'List of Deliveries', 'List of Reservations','List of Transactions' , 'List of Products','New Product'],
    githubLink: 'https://github.com/Franz090/water-refilling-station',
    images: [
      waterstation1,
      waterstation2,
      waterstation3,
      waterstation4,
      waterstation5, 
      waterstation6  
    ]
  },
];

const MyProject = () => {
  const { isDarkMode } = useDarkModeStore();
  const backgroundColor = isDarkMode ? '#fffafa' : '#181818';
  const textColor = isDarkMode ? '#181818' : '#fffafa';
  const backgroundModal = isDarkMode ? '#fffafa' : '#181818';
  const lineModal = isDarkMode ? '#fffafa' : '#181818';
  const imageText = isDarkMode ? '#fffafa' : '#181818';
  const { modalOpen } = useModalContext();

  useEffect(() => {
    // Prevent scrolling when the modal is open
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Revert to allow scrolling when the modal is closed
      document.body.style.overflow = 'visible';
    }
    // Clean up the effect
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [modalOpen]);

  return (
    <div className="md:px-10 sm:px-10 xl:px-36 pb-12 pt-7">
      <h1 className="lg:text-[27px] md:text-[27px] sm:text-[27px] text-2xl mb-5 tracking-wide capitalize font-semibold">
        Project
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center ">
        {projectsData.map((project, index) => (
        
          <ProjectCard
            key={index}
            project={project}
            backgroundColor={backgroundColor}
            textColor={textColor}
            imageText={imageText}
            lineModal={lineModal}
            backgroundModal={backgroundModal}
            transitionDuration={'0.5s'}
          />
        
        ))}
      </div>
    </div>
  );
};

export default MyProject;