import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import Hamburger from './Hamburger';
import useHeaderStore from '../../../store/useHeaderStore';
import useHeaderhook from '../../../hooks/useHeaderhook';

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
  <li className={`lg:mx-3 my-4 lg:my-0 font-montserrat font-semibold ${screenWidth <= 1024 ? 'mobile-link' : 'desktop-link'}`}>
    {isContact ? (
      <a
        href="#contact"
        onClick={() => {
          onClick('#contact');
          scrollTo(document.getElementById('contact').getBoundingClientRect().top + window.scrollY);
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
    const { activeLink, 
          setActiveLink, 
          menuOpen, 
          setMenuOpen, 
          screenWidth, 
          setScreenWidth 
        } = useHeaderStore();
        // Use the custom hook to handle location changes
        useHeaderhook(setActiveLink, setScreenWidth);

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

   // Handle link clicks
   const handleLinkClick = (to) => {
    scrollTo(0);
    setActiveLink(to); // Update activeLink directly
    closeMenu();
  };
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
      <nav className="bg-primary-450 pt-7 pb-7 p-5 fixed top-0 left-0 right-0 z-10 lg:flex lg:items-center md:justify-between">
        <div className="md:container mx-auto xl:px-24 md:px-1 sm:px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between space-x-2">
              <span className="text-4xl lg:text-4xl  cursor-pointer ">
                <Link to="/" onClick={() => handleLinkClick('/')}>
                  <div className='logo-name'>
                    <span className=' leading-[0rem] text-5xl font-extrabold  first-letter'>F</span>
                    <span className='uppercase multi-color'>r</span>
                    <span className='uppercase text-5xl  leading-[0rem] third'>ancis</span>
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
                    onClick={() => handleLinkClick(link.to)}
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
                    onClick={() => handleLinkClick(link.to)}
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