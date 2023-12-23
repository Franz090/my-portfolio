import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useDarkModeStore from '../../../store/useDarkModeStore'; // Import your dark mode store

const FixedIcon = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hideBorder, setHideBorder] = useState(false);
  const { isDarkMode } = useDarkModeStore(); // Get dark mode state from your store

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const handleHoverLeave = () => {
    setHoveredItem(null);
  };

  const getHoverSpring = (item) => {
    return {
      width: hoveredItem === item ? '190px' : '59px',
      backgroundColor: isDarkMode ? '#fffafa' : '#181818', // Set background color based on dark mode
      config: { duration: 300 },
    };
  };

  const springProps1 = useSpring(getHoverSpring(1));
  const springProps2 = useSpring(getHoverSpring(2));
  const springProps3 = useSpring(getHoverSpring(3));

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
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={handleHoverLeave}
        style={{
          ...springProps1,
          border: hideBorder ? 'none' : '', // Conditionally set border style
        }}
        className="transform -translate-y-1/2 h-16  flex justify-center items-center  rounded-tr-full rounded-br-full text-black mb-2"
      >
        1
      </animated.div>
      <animated.div
        onMouseEnter={() => handleHover(2)}
        onMouseLeave={handleHoverLeave}
        style={{
          ...springProps2,
          border: hideBorder ? 'none' : '', // Conditionally set border style
        }}
        className="transform -translate-y-1/2 h-16   flex justify-center items-center  rounded-tr-full rounded-br-full text-black mb-2 "
      >
        2
      </animated.div>
      <animated.div
        onMouseEnter={() => handleHover(3)}
        onMouseLeave={handleHoverLeave}
        style={{
          ...springProps3,
          border: hideBorder ? 'none' : '', // Conditionally set border style
        }}
        className="transform -translate-y-1/2 h-16  flex justify-center items-center  rounded-tr-full rounded-br-full text-black mb-2"
      >
        3
      </animated.div>
    </div>
  );
};

export default FixedIcon;
