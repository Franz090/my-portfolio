import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

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
  <li className="mx-3 my-12 lg:my-0">
    <Link
      to={to}
      onClick={() => onClick(to)}
      className={`${
        isActive
          ? 'active-link link text-md hover:text-secondary-text duration-500'
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      <nav className="bg-primary-450 pt-6 pb-6 p-9 fixed top-0 left-0 right-0 z-10 lg:flex lg:items-center md:justify-between">
        <div className="flex container mx-auto justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <Link
              to="/"
              className="logo-name h-10 inline duration-500"
              onClick={() => handleLinkClick('/')}
            >
              FRANCIS
            </Link>
          </span>
          <div
            className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className={`bar bar1 ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar bar2 ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar bar3 ${menuOpen ? 'open' : ''}`}></div>
          </div>
          {menuOpen || window.innerWidth === 1024 ? (
            <ul className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full right-0 lg:w-auto lg:py-0 py-4  lg:pr-0 pr-7 lg:opacity-100  transition-all ease-in mobile-menu open nav-color ">
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
              <li className="mx-3 my-4 md:my-0 ">
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
              <div className="text-white font-[Poppins] duration-500 rounded">
                <DarkModeToggle />
              </div>
            </ul>
          ) : (
            <ul className="hidden lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full right-0 lg:w-auto lg:py-0 py-4  lg:pr-0 pr-7 lg:opacity-100  transition-all ease-in mobile-menu open nav-color ">
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
              <li className="mx-3 my-4 md:my-0  ">
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
              <div className="text-white font-[Poppins] duration-500 rounded">
                <DarkModeToggle />
              </div>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
