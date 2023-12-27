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
    width: hovered ? 178 : 55,
    config: { duration: 300 , tension: 120},
  });

  const textColor = isDarkMode ? '#181818' : '#fffafa';

  const renderAnimatedDiv = (text, icon, hovered, setHovered, url) => {
    const slideProps = getSpringProps(hovered);

    const handleBorderClick = () => {
      window.open(url, '_blank');
      // or use window.location.href = url; if you want to navigate in the same tab
    };

    return (
      <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleBorderClick}>
        <animated.div
          className="bg-white rounded-tr-full rounded-br-full p-4 border-l-4 border-none mb-2 overflow-hidden flex justify-end items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            ...slideProps,
            overflow: 'hidden',
            backgroundColor: isDarkMode ? '#fffafa' : '#181818',
            cursor: 'pointer', // Change cursor to indicate clickability
          }}
        >
          <span className="mr-10" style={{ color: textColor }}>{text}</span>
          <FontAwesomeIcon icon={icon} style={{ color: textColor }} className="mr-2"/>
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
