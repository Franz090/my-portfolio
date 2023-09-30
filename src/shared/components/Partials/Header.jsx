import React, {useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import Hamburger from './Hamburger';
import useHeader from '../../../store/useHeader';
const scrollTo = (targetY, duration = 300) => {
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

const HeaderLink = ({ to, text, isActive, onClick, screenWidth, isContact }) => (
  <li className={`lg:mx-3  my-4 lg:my-0 font-montserrat font-semibold ${screenWidth <= 1024 ? 'mobile-link' : 'desktop-link'} `}>
    {isContact ? (
      <a
        href="#contact"
        onClick={() => {
          onClick('#contact');
          scrollTo(
            document.getElementById('contact').getBoundingClientRect().top + window.scrollY
          );
        }}
        className={`${
          isActive
            ? 'active-link link text-md hover:text-secondary-text'
            : 'link'
        }`}
      >
        {text}
      </a>
    ) : (
      <Link
        to={to}
        onClick={() => onClick(to)}
        className={`${
          isActive
            ? 'active-link link text-md hover:text-secondary-text'
            : 'link'
        }`}
      >
        {text}
      </Link>
    )}
  </li>
);

const Header = () => {
  const location = useLocation();
  const { activeLink, 
          setActiveLink, 
          menuOpen, 
          setMenuOpen, 
          screenWidth, 
          setScreenWidth 
        } = useHeader();

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

  const handleLinkClick = (to) => {
    scrollTo(0);
    useHeader.setState({ activeLink: to }); // Update activeLink in the Zustand store
    closeMenu(); // Remove the argument, no need to pass 0 here
    if (menuOpen) {
      setMenuOpen();
    }
  };
  const headerClass = menuOpen ? 'header-open' : '';

  return (
    <div className={`Header pb-28 ${headerClass}`}>
      <nav className="bg-primary-450 pt-7 pb-7 p-5 fixed top-0 left-0 right-0 z-10 lg:flex lg:items-center md:justify-between">
      <div className="md:container mx-auto xl:px-24 md:px-1 sm:px-4">
        <div className="flex justify-between items-center">
        <div className="flex items-center justify-between space-x-2">
          <span className="text-4xl lg:text-4xl  cursor-pointer ">
            <Link
              to="/"
              onClick={() => handleLinkClick('/')}
            >
              <div className='logo-name'>
              <span className=' leading-[0rem] text-5xl font-extrabold  first-letter'>F</span>
              <span className='uppercase multi-color'>r</span>
              <span className='uppercase text-5xl  leading-[0rem] third'>ancis</span>
              </div>
            </Link>
          </span>
          {screenWidth <= 1024 &&  (
         <div className='fix-dark '>
          <DarkModeToggle id={1} />
          </div>
          )}
          </div>
          {/* Hamburger Menu */}
          <Hamburger toggleMenu={toggleMenu} isOpen={menuOpen} />
         
          {menuOpen || window.innerWidth > 1024 ? (
            <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full right-0 lg:w-auto lg:py-0 py-4  lg:pr-0 pr-7 nav-links">

              <HeaderLink
                to="/"
                text="HOME"
                isActive={activeLink === '/'}
                onClick={() => handleLinkClick('/')}
                screenwidth={screenWidth} 
              />
              <HeaderLink
                to="/about"
                text="ABOUT"
                isActive={activeLink === '/about'}
                onClick={() => handleLinkClick('/about')}
                screenwidth={screenWidth}  
              />
              <HeaderLink
                to="/resume"
                text="RESUME"
                isActive={activeLink === '/resume'}
                onClick={() => handleLinkClick('/resume')}
                screenwidth={screenWidth} 
              />
              <HeaderLink
                to="/skills"
                text="SKILLS"
                isActive={activeLink === '/skills'}
                onClick={() => handleLinkClick('/skills')}
                screenwidth={screenWidth} 
              />
              <HeaderLink
                to="/project"
                text="PROJECT"
                isActive={activeLink === '/project'}
                onClick={() => handleLinkClick('/project')}
                screenwidth={screenWidth} 
              />
              <HeaderLink
                to="#contact"
                text="CONTACT"
                isActive={activeLink === '#contact'}
                onClick={() => handleLinkClick('#contact')}
                screenWidth={screenWidth}
                isContact={true} 
              />
              {screenWidth >= 1024 &&  (
         <div className='ml-5 dark-mode-toggle visible '>
          <DarkModeToggle id={2} />
          </div>
          )}
            </ul>
          ) : (
            <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full right-0 lg:w-auto lg:py-0 py-4  lg:pr-0 pr-7 nav-links">
              <HeaderLink
                to="/"
                text="HOME"
                isActive={activeLink === '/'}
                onClick={() => handleLinkClick('/')}
                screenwidth={screenWidth} 
              />
              <HeaderLink
                to="/about"
                text="ABOUT"
                isActive={activeLink === '/about'}
                onClick={() => handleLinkClick('/about')}
                screenwidth={screenWidth} 
              />
              <HeaderLink
                to="/resume"
                text="RESUME"
                isActive={activeLink === '/resume'}
                onClick={() => handleLinkClick('/resume')}
                screenwidth={screenWidth} 
              />
              <HeaderLink
                to="/skills"
                text="SKILLS"
                isActive={activeLink === '/skills'}
                onClick={() => handleLinkClick('/skills')}
                screenwidth={screenWidth} 
              />
              <HeaderLink
                to="/project"
                text="PROJECT"
                isActive={activeLink === '/project'}
                onClick={() => handleLinkClick('/project')}
                screenwidth={screenWidth} 
              />
             <HeaderLink
                to="#contact"
                text="CONTACT"
                isActive={activeLink === '#contact'}
                onClick={() => handleLinkClick('#contact')}
                screenWidth={screenWidth}
                isContact={true} 
              />
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
