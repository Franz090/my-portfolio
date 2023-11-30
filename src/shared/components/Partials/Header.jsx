import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import Hamburger from './Hamburger';
import useHeaderStore from '../../../store/useHeaderStore';
import useHeaderhook from '../../../hooks/useHeaderhook';

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

  return <li className={linkClassName}>{linkText}</li>;
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
 

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
    setProgress, // Add Zustand setter for progress
  } = useHeaderStore();
        // Use the custom hook to handle location changes
        useHeaderhook(setActiveLink, setScreenWidth);
        const scrollToContact = () => {
          const contactElement = document.getElementById('contact');
          if (contactElement) {
            scrollTo(contactElement.getBoundingClientRect().top + window.scrollY);
          }
        };
        const scrollTo = (targetY, duration = 500, shouldScrollTop = true) => {
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
};

      
        useEffect(() => {
          // Check if the URL contains '#contact' on page load
          if (window.location.hash === '#contact') {
            // Set 'Contact' as active
            setActiveLink('#contact');
            scrollToContact();
          } else {
            // If the URL doesn't contain '#contact', scroll to the top
            scrollTo(0);
            setActiveLink('/'); // Set the active link to home or another default link
          }
          
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []); // Run this effect only once on initial mount

        useEffect(() => {
          // Update active link based on the location pathname
          const path = location.pathname;
          setActiveLink(path); // Set the active link based on the path
        }, [location.pathname]);
        

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
    const loadingAnimationActive = document.querySelector('.loading-container');
  
    if (to === '#contact') {
      scrollToContact();
      window.history.pushState({}, '', '#contact');
      closeMenu();
      clearDelayedNavigation();
    } else {
      if (activeLink === to) {
        // If the clicked link is already active, scroll to the top
        scrollTo(0, 500, true); // true means scroll to top
      } else {
        setActiveLink(to);
        closeMenu();
        clearDelayedNavigation();
  
        // Remove the hash from the URL if navigating away from the contact section
        if (window.location.hash === '#contact') {
          window.history.pushState({}, '', window.location.pathname); // Remove the hash
        }
  
        // Show the progress bar when navigating away from the current link
        if (!loadingAnimationActive && activeLink !== to) {
          setShowProgressBar(true);
        }
  
        const timeout = setTimeout(() => {
          // Update shouldScrollTop based on the condition
          scrollTo(0, 500, window.location.pathname !== to);
          navigate(to);
          setShowProgressBar(false);
        }, 2000);
        setDelayedNavigation(timeout);
      }
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
  const headerClass = menuOpen ? 'header-open' : '';

  return (
    <div className={`Header pb-28 ${headerClass}`}>
      {showProgressBar && (
        <div className="progress-bar" style={{ width: `${progress * 100}%` }} />
      )}
      <nav className=" pt-7 pb-7 p-5 fixed top-0 left-0 right-0 z-10 lg:flex lg:items-center md:justify-between">
        <div className="md:container mx-auto xl:px-24 md:px-1 sm:px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between space-x-2 ">
              <span className="text-4xl lg:text-4xl  cursor-pointer ">
                <Link to="/" onClick={() => handleLinkClick('/')}>
                  <div className='logo-name'>
                    <span className=' tracking-wider leading-[0rem] lg:text-[38px] md:text-[35px] text-[35px]  font-extrabold  first-letter'>F</span>

                    <span className='uppercase text-5xl  leading-[0rem] third'>rancis</span>
                  </div>
                </Link>
              </span>
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
                {linksData.map((link, index) => (
                  <HeaderLink
                  key={index}
                  to={link.to}
                  text={link.text}
                  isActive={activeLink === link.to}
                  onClick={(event) => handleLinkClick(link.to, event)} // Pass the event argument here
                  screenWidth={screenWidth}
                  isContact={link.isContact}
                />
                ))}
                {screenWidth >= 1024 && (
                  <div className='ml-5 dark-mode-toggle visible '>
                    <DarkModeToggle id={2} />
                  </div>
                )}
              </ul>
            ) : (
              <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full right-0 lg:w-auto lg:py-0 py-4  lg:pr-0 pr-7 nav-links">
                {linksData.map((link, index) => (
                  <HeaderLink
                  key={index}
                  to={link.to}
                  text={link.text}
                  isActive={activeLink === link.to}
                  onClick={(event) => handleLinkClick(link.to, event)} // Pass the event argument here
                  screenWidth={screenWidth}
                  isContact={link.isContact}
                />
                ))}
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