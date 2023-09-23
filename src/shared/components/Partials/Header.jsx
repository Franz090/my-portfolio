import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import Hamburger from './Hamburger'
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

const HeaderLink = ({ to, text, isActive, onClick }) => (
  <li className="mx-4 my-12 lg:my-0">
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
  </li>
);

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
  };

  const handleLinkClick = (to) => {
    scrollTo(0);
    setActiveLink(to);
    closeMenu(0);
    if (menuOpen) {
      toggleMenu();
    }
  };

  const headerClass = menuOpen ? 'header-open' : '';

  return (
    <div className={`Header pb-28 ${headerClass}`}>
      <nav className="bg-primary-450 pt-8 pb-8 p-5 fixed top-0 left-0 right-0 z-10 lg:flex lg:items-center md:justify-between">
      <div className="md:container mx-auto xl:px-24 md:px-1 sm:px-4">
        <div className="flex justify-between items-center">
        <div className="flex items-center justify-between space-x-2">
          <span className="text-2xl  cursor-pointer">
            <Link
              to="/"
              className="logo-name h-10 inline "
              onClick={() => handleLinkClick('/')}
            >
              FRANCIS
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
              />
              <HeaderLink
                to="/about"
                text="ABOUT"
                isActive={activeLink === '/about'}
                onClick={() => handleLinkClick('/about')}
              />
              <HeaderLink
                to="/resume"
                text="RESUME"
                isActive={activeLink === '/resume'}
                onClick={() => handleLinkClick('/resume')}
              />
              <HeaderLink
                to="/skills"
                text="SKILLS"
                isActive={activeLink === '/skills'}
                onClick={() => handleLinkClick('/skills')}
              />
              <HeaderLink
                to="/project"
                text="PROJECT"
                isActive={activeLink === '/project'}
                onClick={() => handleLinkClick('/project')}
              />
              <li>
                <a
                  href="#contact"
                  onClick={() => {
                    handleLinkClick('#contact');
                    scrollTo(
                      document.getElementById('contact').getBoundingClientRect()
                        .top + window.scrollY
                    );
                  }}
                  className={`link ${
                    activeLink === '#contact' ? 'active-link' : ''
                  }`}
                >
                  CONTACT
                </a>
              </li>
              {screenWidth >= 1024 &&  (
         <div className='ml-5 dark-mode-toggle'>
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
              />
              <HeaderLink
                to="/about"
                text="ABOUT"
                isActive={activeLink === '/about'}
                onClick={() => handleLinkClick('/about')}
              />
              <HeaderLink
                to="/resume"
                text="RESUME"
                isActive={activeLink === '/resume'}
                onClick={() => handleLinkClick('/resume')}
              />
              <HeaderLink
                to="/skills"
                text="SKILLS"
                isActive={activeLink === '/skills'}
                onClick={() => handleLinkClick('/skills')}
              />
              <HeaderLink
                to="/project"
                text="PROJECT"
                isActive={activeLink === '/project'}
                onClick={() => handleLinkClick('/project')}
              />
              <li >
                <a
                  href="#contact"
                  onClick={() => {
                    handleLinkClick('#contact');
                    scrollTo(
                      document.getElementById('contact').getBoundingClientRect()
                        .top + window.scrollY
                    );
                  }}
                  className={`link ${
                    activeLink === '#contact' ? 'active-link' : ''
                  }`}
                >
                  CONTACT
                </a>
              </li>
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
