import useDarkModeStore from '../store/useDarkModeStore';
import ProjectCard from '../components/Project/ProjectCard'; 
import mehrCover from '../assets/images/project/cover/mehr.png';
import munisipyoCover from '../assets/images/project/cover/munisipyo.png';
import waterstationCover from '../assets/images/project/cover/waterstation.png';
const projectsData = [
  {
    cover: mehrCover,
    title: 'Maternity Health Monitoring Record System',
    tools: ['HTML', 'CSS', 'JAVASCRIPT/JQUERY','AJAX', 'PHP', 'BOOTSTRAP 5'],
  },
  {
    cover: munisipyoCover,
    title: 'Municipal Treasury Office Record Management System',
    tools: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'BOOTSTRAP 5'],
  },
  {
    cover: waterstationCover,
    title: 'Water Refilling Station Reservation System',
    tools: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP'],
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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
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