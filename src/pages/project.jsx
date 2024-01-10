import useDarkModeStore from '../store/useDarkModeStore';
import ProjectCard from '../components/Project/ProjectCard'; 
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
import munisipyo7 from '../assets/images/project/munisipyo/7.png'
import munisipyo8 from '../assets/images/project/munisipyo/8.png'
import munisipyo9 from '../assets/images/project/munisipyo/9.png'
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
    githubLink: 'https://github.com/Franz090/Municipal',
    images: [
      munisipyo1,
      munisipyo2,
      munisipyo3,
      munisipyo4,
      munisipyo5,
      munisipyo6,
      munisipyo7,
      munisipyo8,
      munisipyo9
    ]
  },
  {
    cover: waterstationCover,
    title: 'Water Refilling Station Reservation System',
    tools: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP'],
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
            transitionDuration={'0.5s'}
          />
        
        ))}
      </div>
    </div>
  );
};

export default MyProject;