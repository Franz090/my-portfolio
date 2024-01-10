import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import useDarkModeStore from '../../../store/useDarkModeStore';
import useFixedIconStore from '../../../store/useFixedIconStore';
import { useModalContext } from '../Partials/ModalContext';

const SlideFixIcon = () => {
  const { 
    facebookHovered, linkedinHovered, githubHovered,
    setFacebookHovered, setLinkedinHovered, setGithubHovered 
  } = useFixedIconStore(); 
  const { isDarkMode } = useDarkModeStore();
  const { modalOpen } = useModalContext();

  const getSpringProps = (hovered) => useSpring({
    width: hovered ? 185 : 53,
    config: {
      duration: hovered ? 500 : 300,
      easing: hovered ? (t) => (-Math.cos(t * Math.PI) / 2) + 0.5 : undefined,
    },
  });
  

  const textColor = isDarkMode ? '#181818' : '#fffafa';
  const iconColor = isDarkMode ? '#fffafa' : '#181818';

  const renderAnimatedDiv = (text, icon, hovered, setHovered, url) => {
    const slideProps = getSpringProps(hovered);

    const handleBorderClick = (event) => {
      if (!modalOpen) {
        window.open(url, '_blank');
      } else {
        event.preventDefault(); // Prevent the default behavior (opening the link)
      }
    };
  
    const handleMouseEnter = () => {
      if (!modalOpen) {
        setHovered(true);
      }
    };
  
    const handleMouseLeave = () => {
      if (!modalOpen) {
        setHovered(false);
      }
    };

    

    return (
      <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleBorderClick}
      style={{ pointerEvents: modalOpen ? 'none' : 'auto' }} // Disable pointer events when modal is open
    >
      <animated.div
        className="rounded-tr-full rounded-br-full p-3 border-l-4 border-none mb-1 overflow-hidden flex justify-end items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...slideProps,
          overflow: 'hidden',
          backgroundColor: isDarkMode ? '#fffafa' : '#181818',
          cursor: modalOpen ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.5s',
        }}
      >
        <div className="flex items-center">
          <span
            className="mr-8"
            style={{
              color: textColor,
              transition: 'background-color 0.3s',
            }}
          >
            {text}
          </span>

          <FontAwesomeIcon
            icon={icon}
            style={{
              color: iconColor,
              transition: 'transform 0.5s, background-color 0.3s', 
              transform: hovered ? 'rotate(360deg)' : 'rotate(0)', // Rotate effect on hover
              backgroundColor: isDarkMode ? '#181818' : '#fffafa',
            }}
            className="ml-1 p-2 rounded-full h-[20px] w-[20px]"
          />
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
