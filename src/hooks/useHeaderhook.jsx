import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHeaderhook = (setActiveLink, setScreenWidth) => {
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname, setActiveLink]);

  // Update the screen width state when the window size changes
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setScreenWidth]);
};

export default useHeaderhook;