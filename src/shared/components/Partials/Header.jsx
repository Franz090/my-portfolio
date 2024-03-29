import { useState, useEffect } from 'react';
import { useModalContext } from '../Partials/ModalContext';
import { useSpring, animated,useTrail } from '@react-spring/web';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import Hamburger from './Hamburger';
import useHeaderStore from '../../../store/useHeaderStore';
import useHeaderhook from '../../../hooks/useHeaderhook';
import useAnimationStore from '../../../store/useAnimationStore';
const scrollTo = (targetY, duration = 500) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const scroll = (timestamp) => {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (targetY - start) * progress);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const HeaderLink = ({ to, text, isActive, onClick, screenWidth, isContact }) => {
  const linkClasses = isActive ? 'active-link link text-md hover:text-secondary-text' : 'link';

  const handleLinkClick = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();

      if (isContact) {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          scrollTo(contactElement.getBoundingClientRect().top + window.scrollY);
        }
      }

      onClick(to);
    }
  };

  const linkText = isContact ? (
    <a href="#contact" onClick={handleLinkClick} className={linkClasses}>
      {text}
    </a>
  ) : (
    <Link to={to} onClick={handleLinkClick} className={linkClasses}>
      {text}
    </Link>
  );

  const linkClassName = `lg:mx-3 my-4 lg:my-0 font-montserrat font-semibold ${
    screenWidth <= 1024 ? 'mobile-link' : 'desktop-link'
  }`;

  return (
    <div className={linkClassName}>
      {linkText}
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setStopAnimation, setIsJumping,setHomeLinkClicked, setShowImage,shouldStopAnimation, setShouldStopAnimation } = useAnimationStore(); 
  const [showLogo, setShowLogo] = useState(false);
  const [isPageReloaded, setIsPageReloaded] = useState(false);
  const { modalOpen, setModalOpen } = useModalContext();
  



  useEffect(() => {
    // Close the modal when the header is mounted
    setModalOpen(false);
  }, [setModalOpen]);



  
 

  const {
    activeLink,
    setActiveLink,
    menuOpen,
    setMenuOpen,
    screenWidth,
    setScreenWidth,
    delayedNavigation, // Add Zustand state for delayedNavigation
    showProgressBar, // Add Zustand state for showProgressBar
    progress, // Add Zustand state for progress
    setDelayedNavigation, // Add Zustand setter for delayedNavigation
    setShowProgressBar, // Add Zustand setter for showProgressBar
    setProgress, 
    loadingAnimationActive,
    setLoadingAnimationActive,
    windowWidth, 
    setWindowWidth
  } = useHeaderStore();
        // Use the custom hook to handle location changes
        useHeaderhook(setActiveLink, setScreenWidth);
        const scrollToContact = () => {
          const contactElement = document.getElementById('contact');
          if (contactElement) {
            scrollTo(contactElement.getBoundingClientRect().top + window.scrollY);
          }
        };
        const scrollTo = (targetY, duration = 500, shouldScrollTop = true, shouldUpdateURL = true) => {
          const start = window.scrollY;
          const startTime = performance.now();
        
          const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          };
        
          const scroll = (timestamp) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutQuad(elapsed, start, targetY - start, duration);
            window.scrollTo(0, ease);
        
            if (progress < 1) {
              requestAnimationFrame(scroll);
            }
          };
        
          requestAnimationFrame(scroll);
        
          if (shouldScrollTop) {
            // Scroll to the top only if shouldScrollTop is true
            window.scrollTo(0, 0);
          }
        
          // Update URL hash if scrolling to the top and shouldUpdateURL is true
          if (shouldScrollTop && shouldUpdateURL) {
            window.history.pushState({}, '', window.location.pathname); // Remove the hash
          }
        };
        const logoAnimation = useSpring({
        opacity: showLogo ? 1 : 0,
        transform: showLogo ? 'translateY(0)' : 'translateY(-120px)',
        
        });
        
        useEffect(() => {
        setShowLogo(true);
        }, []);

        useEffect(() => {
          // Check if the URL contains '#contact' on page load
          if (window.location.hash === '#contact') {
            // Set 'Contact' as active
            setActiveLink('#contact');
            scrollToContact();
            window.history.pushState({}, '', '#contact');
          } else {
            // If the URL doesn't contain '#contact', scroll to the top
            scrollTo(0);
            setActiveLink('/'); // Set the active link to home or another default link
          }
          
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []); // Run this effect only once on initial mount

        useEffect(() => {
          const isReloadedOnContact = window.location.hash === '#contact';

          if (isReloadedOnContact) {
            // If the page is reloaded on the contact page, set 'Contact' as active link
            setActiveLink('#contact');
          } else {
            // If not on the contact page, set the active link based on the pathname
            const path = location.pathname;
            setActiveLink(path);
          } 
        }, [location.pathname]);
        useEffect(() => {
          const timer = setInterval(() => {
            setProgress((prevProgress) => {
              const updatedProgress = prevProgress + 0.01;
              if (updatedProgress >= 1) {
                clearInterval(timer);
                setShowProgressBar(false);
              }
              return updatedProgress;
            });
          }, 50);
          return () => clearInterval(timer);
       }, []);
        

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Toggle the class to control the animation
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-links-open');
  };

  const closeMenu = () => {
    setMenuOpen(false);
  
    // Remove the 'nav-links-open' class to close the menu
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('nav-links-open');
  };
   const clearDelayedNavigation = () => {
    if (delayedNavigation) {
      clearTimeout(delayedNavigation);
      setDelayedNavigation(null);
    }
  };
  

  const handleLinkClick = (to, event) => {
    const excludedPages = ['/about', '/resume', '/skills', '/project'];
    const loadingAnimationActive = document.querySelector('.loading-container');
    const isScrollingToContact = to === '#contact';

 
  
    if (isScrollingToContact) {
      scrollToContact();
      setActiveLink('#contact');
      if (!menuOpen) {
        window.history.pushState({}, '', '#contact');
      } else {
        window.history.pushState({}, '', window.location.pathname);
        setActiveLink('#contact');
      }
      window.location.hash = '#contact';
      closeMenu();
      clearDelayedNavigation();
    } else {
      if (activeLink === to) {
        // If the clicked link is already active, scroll to the top immediately without delay or progress bar
        scrollTo(0, 500); 
        setShowProgressBar(false);
        closeMenu(); // Close the menu
        return;
        
      }else {
        setActiveLink(to);
        closeMenu();
        clearDelayedNavigation();
        
        if (to === '/') {
          setStopAnimation(true);
          setLoadingAnimationActive(true);
          setIsJumping(true);
          setHomeLinkClicked(true);
          setShowImage(true);
        } else {
          useAnimationStore.getState().setCurrentPage(to);
          setLoadingAnimationActive(false); 
          setStopAnimation(false);
          setIsJumping(false);
          setHomeLinkClicked(false);
          setShowImage(false);
        }
        if (excludedPages.includes(to)) {
          useAnimationStore.getState().setIsJumping(false);
          useAnimationStore.getState().setStopAnimation(true);
          useAnimationStore.getState().setHomeLinkClicked(true);
          useAnimationStore.getState().setShowImage(true);
        }
        if (window.location.hash === '#contact') {
          window.history.pushState({}, '', window.location.pathname);
        }
  if (!loadingAnimationActive && activeLink !== to && activeLink !== '#contact') {
  setShowProgressBar(true);
}
  
if (location.pathname !== to) {
  setShowProgressBar(true);
}
        const shouldScrollTopImmediately = window.location.pathname === to && !loadingAnimationActive;
        const delayTime = shouldScrollTopImmediately ? 0 : 1000; // Set delay time based on conditions
        const timeout = setTimeout(() => {
          scrollTo(0, 500, window.location.pathname !== to, false);
          navigate(to);
          setShowProgressBar(false);
        }, delayTime);
        setDelayedNavigation(timeout);
      }
    }
  };
  const handleLogoClick = (event) => {
    event.preventDefault();
    const currentPath = window.location.pathname;
  
    // Check if the current path is already the home page
    if (currentPath === '/') {
      // If already on the home page, set the active link to '/' immediately
      setActiveLink('/');
      scrollTo(0, 500); // Scroll to top without delay or progress bar
      closeMenu();
      
    } else {
      // If not on the home page, navigate to the home page and set active link after a delay
      setActiveLink('/'); // Set the active link to '/' immediately
      setShowProgressBar(true); // Show progress bar when navigating to home
  
      const timeout = setTimeout(() => {
        scrollTo(0, 500, true); // Scroll to top after a delay
        navigate('/'); // Navigate to the home page
  
        // Perform other actions specific to navigating to the home page
        setStopAnimation(true);
        setIsJumping(true);
        setHomeLinkClicked(true);
        setShowImage(true);
  
        setShowProgressBar(false); // Hide progress bar after navigation
        closeMenu();
      }, 1000); // 2-second delay before navigation
  
      setDelayedNavigation(timeout);
    }
  };
  
  
  
  const performTask = async () => {
    // Simulate performing a task (replace this with your actual task logic)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate some asynchronous task
  };
  useEffect(() => {
    const calculateProgress = async () => {
      const totalTasks = 5; // Set the total number of tasks
      let completedTasks = 0;
  
      for (let i = 0; i < totalTasks; i++) {
        await performTask(); // Simulate performing tasks (use your actual tasks here)
        completedTasks++;
  
        const calculatedProgress = completedTasks / totalTasks;
        setProgress(calculatedProgress); // Update progress state
      }
  
      // Finish the progress bar after 1 second (1000 milliseconds)
      setTimeout(() => {
        setShowProgressBar(false); // Hide progress bar when tasks are completed
      }, 1000);
    };
  
    setShowProgressBar(true); // Show progress bar when starting loading
    calculateProgress();
  }, []);
  useEffect(() => {
  const isPageReloaded = sessionStorage.getItem('isPageReloaded');

  if (!isPageReloaded) {
    // Set sessionStorage to indicate the page has been loaded
    sessionStorage.setItem('isPageReloaded', 'true');
  } else {
    setShowLogo(true); // Assuming 'showLogo' controls the animation
    setIsPageReloaded(true);
    setShowProgressBar(false); // Hide the progress bar on reload
  }

  // Other logic as needed
}, []);

  

const linksData = [
  { to: '/', text: 'HOME' },
  { to: '/about', text: 'ABOUT' },
  { to: '/resume', text: 'RESUME' },
  { to: '/skills', text: 'SKILLS' },
  { to: '/project', text: 'PROJECT' },
  { to: '#contact', text: 'CONTACT', isContact: true },
];
const excludedPages = ['/','/about', '/resume', '/skills', '/project', '#contact'];

useEffect(() => {
  if (excludedPages.includes(location.pathname)) {
    setShouldStopAnimation(true);
  } else {
    setShouldStopAnimation(false);
  }
}, [location.pathname]);

const linksTrail = useTrail(linksData.length, {
  opacity: shouldStopAnimation ? 1 : 0,
  transform: shouldStopAnimation ? 'translateY(0)' : 'translateY(-20px)',
  from: {
    opacity: shouldStopAnimation ? 0 : 1,
    transform: location.pathname === '/' ? 'translateY(-20px)' : 'translateY(0)',
  },
  delay: shouldStopAnimation ? 0 : 0,
});
useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth); // Update windowWidth in the store on resize
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [setWindowWidth]);

  const headerClass = menuOpen ? 'header-open' : '';
  const modalOpenClass = modalOpen && windowWidth >= 1024 ? 'pointer-events-none' : '';
  

  return (
    <div className={`Header pb-28 ${headerClass}`}>
      {showProgressBar && (
        <div className="progress-bar" style={{ width: `${progress * 100}%` }} />
      )}
        <nav className={`pt-7 pb-7 p-5 fixed top-0 left-0 right-0 z-10 lg:flex lg:items-center md:justify-between ${modalOpenClass}`}>
        <div className="md:container mx-auto xl:px-24 md:px-1 sm:px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between space-x-2 ">
            <animated.span
            style={
              isPageReloaded !== ['/about', '/resume', '/skills', '/project', '#contact'].includes(window.location.pathname)
              ? logoAnimation : { opacity: 1, transform: 'translateY(0)' }}
              className="text-4xl lg:text-4xl  cursor-pointer ">
              <Link to="/" onClick={handleLogoClick}>
              <div className='logo-name tracking-wider'>
              <span className='uppercase text-5xl  leading-[0rem] third'>francis</span>
              </div>
              </Link>
              </animated.span>
              {screenWidth <= 1024 && (
                <div className='fix-dark '>
                  <DarkModeToggle id={1} />
                </div>
              )}
            </div>
            {/* Hamburger Menu */}
            <Hamburger toggleMenu={toggleMenu} isOpen={menuOpen} />

            {menuOpen || window.innerWidth > 1024 ? (
              <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full right-0 lg:w-auto lg:py-0 py-4  lg:pr-0 pr-7 nav-links">
                {linksTrail.map((style, index) => {
    const linkClassName = `lg:mx-1 my-4 lg:my-0 font-montserrat font-semibold ${
      screenWidth <= 1024 ? 'mobile-link' : 'desktop-link'
    }`;
    return (
      <animated.li key={index} style={style} className={linkClassName}>
      <HeaderLink
        to={linksData[index].to}
        text={linksData[index].text}
        isActive={activeLink === linksData[index].to}
        onClick={(event) => handleLinkClick(linksData[index].to, event)}
        screenWidth={screenWidth}
        isContact={linksData[index].isContact}
      />
    </animated.li>
  );
})}
                {screenWidth >= 1024 && (
                  <div className='ml-5 dark-mode-toggle visible '>
                    <DarkModeToggle id={2} />
                  </div>
                )}
              </ul>
            ) : (
              <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full right-0 lg:w-auto lg:py-0 py-4  lg:pr-0 pr-7 nav-links">
               {linksTrail.map((style, index) => {
    const linkClassName = `lg:mx-1 my-4 lg:my-0 font-montserrat font-semibold ${
      screenWidth <= 1024 ? 'mobile-link' : 'desktop-link'
    }`;
    return (
      <animated.li key={index} style={style} className={linkClassName}>
      <HeaderLink
        to={linksData[index].to}
        text={linksData[index].text}
        isActive={activeLink === linksData[index].to}
        onClick={(event) => handleLinkClick(linksData[index].to, event)}
        screenWidth={screenWidth}
        isContact={linksData[index].isContact}
      />
    </animated.li>
  );
})}
                <div className='ml-2'>
                  <DarkModeToggle id={3} />
                </div>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;