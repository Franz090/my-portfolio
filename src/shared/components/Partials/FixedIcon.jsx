import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useDarkModeStore from '../../../store/useDarkModeStore';
import useFixedIconStore from '../../../store/useFixedIconStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const FixedIcon = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hideBorder, setHideBorder] = useState(false);
  const isFirstMount = useRef(true); // Use ref to track initial mount

  

  const { isDarkMode } = useDarkModeStore();
  const facebookUrl = 'https://www.facebook.com/dOBLEangtama';
  const linkedinUrl = 'https://www.linkedin.com/in/oblepiasfrancisp2000';
  const githubUrl = 'https://github.com/Franz090';
  const {
    isHoveringBorder1,
    isHoveringBorder2,
    isHoveringBorder3,
    setIsHoveringBorder1,
    setIsHoveringBorder2,
    setIsHoveringBorder3,
    icon1,
    icon2,
    icon3,
    setIcon1,
    setIcon2,
    setIcon3,
  } = useFixedIconStore();

  const handleHover = (item) => {
    setHoveredItem(item);
    setIcon1(item === 1 ? 'ml-3' : 'ml-7'); 
    setIcon2(item === 2 ? 'ml-3' : 'ml-7'); 
    setIcon3(item === 3 ? 'ml-3' : 'ml-7'); 
  };

  const handleHoverLeave1 = () => {
    setHoveredItem(null);
    setIcon1('ml-7'); // Reset position on hover out
    handleBorderHover1(true);
  };
  
  const handleHoverLeave2 = () => {
    setHoveredItem(null);
    setIcon2('ml-7'); // Reset position on hover out
    handleBorderHover2(true);
  };
  
  const handleHoverLeave3 = () => {
    setHoveredItem(null);
    setIcon3('ml-7'); // Reset position on hover out
    handleBorderHover3(true);
  };


  const handleBorderHover1 = (isHovering) => {
    setIsHoveringBorder1(isHovering);
  };
  const handleBorderHover2 = (isHovering) => {
    setIsHoveringBorder2(isHovering);
  };
  const handleBorderHover3 = (isHovering) => {
    setIsHoveringBorder3(isHovering);
  };
  

  useEffect(() => {
    // Only trigger animation on subsequent renders (not on initial mount)
    if (!isFirstMount.current) {
      setIsHoveringBorder1(true);
      setIsHoveringBorder2(true);
      setIsHoveringBorder3(true);
    } else {
      isFirstMount.current = false; // Update the flag after initial mount
    }
  }, []);

  const getHoverSpring = (item) => {
    return {
      width: hoveredItem === item ? '180px' : '59px',
      backgroundColor: isDarkMode ? '#fffafa' : '#181818',
      config: { duration: 300 },
    };
  };

  const springProps1 = useSpring(getHoverSpring(1));
  const springProps2 = useSpring(getHoverSpring(2));
  const springProps3 = useSpring(getHoverSpring(3));

  const slideGridSpring1 = useSpring({
    transform: isHoveringBorder1 ? 'translateX(-100%)' : 'translateX(0%)',
    opacity: isHoveringBorder1 ? 1 : 1,
    config: { duration: 300 },
  });
  
  const slideGridSpring2 = useSpring({
    transform: isHoveringBorder2 ? 'translateX(-100%)' : 'translateX(0%)',
    opacity: isHoveringBorder2 ? 1 : 1,
    config: { duration: 300 },
  });
  
  const slideGridSpring3 = useSpring({
    transform: isHoveringBorder3 ? 'translateX(-100%)' : 'translateX(0%)',
    opacity: isHoveringBorder3 ? 1 : 1,
    config: { duration: 300 },
  });
  useEffect(() => {
    // Function to trigger slide animation on page load
    const slideToLeft = () => {
      setIsHoveringBorder1(true);
      setIsHoveringBorder2(true);
      setIsHoveringBorder3(true);
    };

    // Trigger the slide animation after a delay to ensure the initial render is complete
    const delay = setTimeout(() => {
      slideToLeft();
    }); // Adjust the delay as needed

    return () => clearTimeout(delay); // Clear the timeout on component unmount
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setHideBorder(window.innerWidth <= 1024);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="lg:fixed lg:top-64 lg:left-0">
       <animated.div
        onMouseEnter={() => {
          handleHover(1);
          handleBorderHover1(false);
          setIsHoveringBorder1(false); // Reset the border hover state when entering
        }}
        onMouseLeave={handleHoverLeave1} // Set the border hover state when leaving
        style={{
          ...springProps1,
          border: hideBorder ? 'none' : '',
          color: isDarkMode ? '#181818' : '#fffafa',
        }}
        className="transform -translate-y-1/2 h-14  flex justify-center items-center  rounded-tr-full rounded-br-full  mb-2 cursor-pointer"
      >
        <animated.div style={{ ...slideGridSpring1 }}>
          <div className="grid grid-cols-3 gap-4">
            <animated.div style={{ ...slideGridSpring1 }} className="col-span-2 ">
              FACEBOOK
            </animated.div>
            <div className={icon1}>
            <FontAwesomeIcon icon={faFacebookF} className="text-[22px]" />
              </div> 
          </div>
        </animated.div>
      </animated.div>
      <animated.div
        onMouseEnter={() => {
          handleHover(2);
          handleBorderHover2(false);
          setIsHoveringBorder2(false); // Reset the border hover state when entering
        }}
        onMouseLeave={handleHoverLeave2} // Set the border hover state when leaving
        style={{
          ...springProps2,
          border: hideBorder ? 'none' : '',
          color: isDarkMode ? '#181818' : '#fffafa',
        }}
        className="transform -translate-y-1/2 h-14  flex justify-center items-center  rounded-tr-full rounded-br-full  mb-2 cursor-pointer"
      >
        <animated.div style={{ ...slideGridSpring2 }}>
          <div className="grid grid-cols-3 gap-4">
            <animated.div style={{ ...slideGridSpring2 }} className="col-span-2 ">
              LINKEDIN
            </animated.div>
            <div className={icon2}>222</div> {/* Adjust position dynamically */}
          </div>
        </animated.div>
      </animated.div>
      <animated.div
        onMouseEnter={() => {
          handleHover(3);
          handleBorderHover3(false);
          setIsHoveringBorder3(false); // Reset the border hover state when entering
        }}
        onMouseLeave={handleHoverLeave3} // Set the border hover state when leaving
        style={{
          ...springProps3,
          border: hideBorder ? 'none' : '',
          color: isDarkMode ? '#181818' : '#fffafa',
        }}
        className="transform -translate-y-1/2 h-14  flex justify-center items-center  rounded-tr-full rounded-br-full  mb-2 cursor-pointer"
      >
        <animated.div style={{ ...slideGridSpring3 }}>
          <div className="grid grid-cols-3 gap-4">
            <animated.div style={{ ...slideGridSpring3 }} className="col-span-2 ">
              GITHUB
            </animated.div>
            <div className={icon3}>333</div> {/* Adjust position dynamically */}
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default FixedIcon;