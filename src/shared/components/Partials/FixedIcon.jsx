import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useDarkModeStore from '../../../store/useDarkModeStore'; // Import your dark mode store

const FixedIcon = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hideBorder, setHideBorder] = useState(false);
  const { isDarkMode } = useDarkModeStore(); // Get dark mode state from your store
  const [isHoveringBorder1, setIsHoveringBorder1] = useState(false);
const [isHoveringBorder2, setIsHoveringBorder2] = useState(false);
const [isHoveringBorder3, setIsHoveringBorder3] = useState(false);

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const handleHoverLeave1 = () => {
    setHoveredItem(null);
    handleBorderHover1(true);
  };
  
  const handleHoverLeave2 = () => {
    setHoveredItem(null);
    handleBorderHover2(true);
  };
  
  const handleHoverLeave3 = () => {
    setHoveredItem(null);
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

  const getHoverSpring = (item) => {
    return {
      width: hoveredItem === item ? '190px' : '59px',
      backgroundColor: isDarkMode ? '#fffafa' : '#181818',
      config: { duration: 300 },
    };
  };

  const springProps1 = useSpring(getHoverSpring(1));
  const springProps2 = useSpring(getHoverSpring(2));
  const springProps3 = useSpring(getHoverSpring(3));

  const slideGridSpring1 = useSpring({
    transform: isHoveringBorder1 ? 'translateX(-100%)' : 'translateX(0%)',
    opacity: isHoveringBorder1 ? 0 : 1,
    config: { duration: 300 },
  });
  
  const slideGridSpring2 = useSpring({
    transform: isHoveringBorder2 ? 'translateX(-100%)' : 'translateX(0%)',
    opacity: isHoveringBorder2 ? 0 : 1,
    config: { duration: 300 },
  });
  
  const slideGridSpring3 = useSpring({
    transform: isHoveringBorder3 ? 'translateX(-100%)' : 'translateX(0%)',
    opacity: isHoveringBorder3 ? 0 : 1,
    config: { duration: 300 },
  });

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
          setIsHoveringBorder1(false);// Reset the border hover state when entering
        }}
        onMouseLeave={handleHoverLeave1} // Set the border hover state when leaving
        style={{
          ...springProps1,
          border: hideBorder ? 'none' : '',
          color: isDarkMode ? '#181818' : '#fffafa',
        }}
        className="transform -translate-y-1/2 h-14  flex justify-center items-center  rounded-tr-full rounded-br-full  mb-2"
      >
        <animated.div style={{ ...slideGridSpring1 }}>
          <div class="grid grid-cols-3 gap-4">
            <animated.div style={{ ...slideGridSpring1 }} class="col-span-2 ">
              FACEBOOK
            </animated.div>
            <div class="...">1</div>
          </div>
        </animated.div>
      </animated.div>
      <animated.div
       onMouseEnter={() => {
        handleHover(2);
        handleBorderHover2(false);
        setIsHoveringBorder2(false); // Reset the border hover state when entering
      }}
        onMouseLeave={handleHoverLeave2}
        style={{
          ...springProps2,
          border: hideBorder ? 'none' : '',
          color: isDarkMode ? '#181818' : '#fffafa',
          
        }}
        className="transform -translate-y-1/2 h-14   flex justify-center items-center  rounded-tr-full rounded-br-full  mb-2 "
      >
         <animated.div style={{ ...slideGridSpring2 }}>
        <div class="grid grid-cols-3 gap-4">
            <animated.div style={{ ...slideGridSpring2 }} class="col-span-2 ">
              LINKEDIN
            </animated.div>
            <div class="...">2</div>
          </div>
          </animated.div>
      </animated.div>
      <animated.div
       onMouseEnter={() => {
        handleHover(3);
        handleBorderHover3(false);
        setIsHoveringBorder3(false);// Reset the border hover state when entering
      }}
        onMouseLeave={handleHoverLeave3}
        style={{
          ...springProps3,
          border: hideBorder ? 'none' : '',
          color: isDarkMode ? '#181818' : '#fffafa',
          
        }}
        className="transform -translate-y-1/2 h-14   flex justify-center items-center  rounded-tr-full rounded-br-full  mb-2 "
      >
         <animated.div style={{ ...slideGridSpring3 }}>
        <div class="grid grid-cols-3 gap-4">
            <animated.div style={{ ...slideGridSpring3 }} class="col-span-2 ">
             GITHUB
            </animated.div>
            <div class="...">3</div>
          </div>
          </animated.div>
      </animated.div>
    </div>
  );
};

export default FixedIcon;