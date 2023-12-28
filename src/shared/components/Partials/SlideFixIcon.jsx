import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import useDarkModeStore from '../../../store/useDarkModeStore';
import useFixedIconStore from '../../../store/useFixedIconStore';

const SlideFixIcon = () => {
  const { 
    facebookHovered, linkedinHovered, githubHovered,
    setFacebookHovered, setLinkedinHovered, setGithubHovered 
  } = useFixedIconStore(); 
  const { isDarkMode } = useDarkModeStore();

  const getSpringProps = (hovered) => useSpring({
    width: hovered ? 177 : 53,
    config: { duration: 300 },
  });

  const textColor = isDarkMode ? '#181818' : '#fffafa';
  const iconColor = isDarkMode ? '#fffafa' : '#181818';

  const renderAnimatedDiv = (text, icon, hovered, setHovered, url) => {
    const slideProps = getSpringProps(hovered);

    const handleBorderClick = () => {
      window.open(url, '_blank');
      // or use window.location.href = url; if you want to navigate in the same tab
    };

    

    return (
      <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleBorderClick}>
        <animated.div
          className="rounded-tr-full rounded-br-full p-3 border-l-4 border-none mb-1 overflow-hidden flex justify-end items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            ...slideProps,
            overflow: 'hidden',
            backgroundColor: isDarkMode ? '#fffafa' : '#181818',
            cursor: 'pointer',
            transition: 'background-color 0.5s',
          }}
        >
          <div className="flex items-center"><span className="mr-8" 
          style={{ 
            color: textColor ,
            transition: 'background-color 0.5s',      
            }}>{text}</span>
          
            <FontAwesomeIcon icon={icon} 
            style={{ 
              color: iconColor,   
              transition: 'background-color 0.5s',
              backgroundColor: isDarkMode ? '#181818' : '#fffafa', }} className="ml-1  p-2 rounded-full h-[20px] w-[20px] " />
            
          </div>
        </animated.div>
      </a>
    );
  };

  const facebookUrl = 'https://www.facebook.com/dOBLEangtama';
  const linkedinUrl = 'https://www.linkedin.com/in/oblepiasfrancisp2000';
  const githubUrl = 'https://github.com/Franz090';

  return (
    <div className="lg:fixed lg:top-2/4 lg:left-0 flex flex-col">
      {renderAnimatedDiv('FACEBOOK', faFacebookF, facebookHovered, setFacebookHovered, facebookUrl)}
      {renderAnimatedDiv('LINKEDIN', faLinkedinIn, linkedinHovered, setLinkedinHovered, linkedinUrl)}
      {renderAnimatedDiv('GITHUB', faGithub, githubHovered, setGithubHovered, githubUrl)}
    </div>
  );
};

export default SlideFixIcon;
