import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


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
  <li>
    <Link to={to} onClick={onClick} className={isActive ? 'active-link link' : 'link'}>
      {text}
    </Link>
  </li>
);



const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToTop = () => {
    scrollTo(0);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // Use useEffect to update the activeLink state when the location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);


  const handleLinkClick = (to) => {
    scrollTo(0);
    setActiveLink(to);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <div className="Header pb-28">
      <nav className={`bg-primary-450 pt-4 text-white p-9 fixed top-0 left-0 right-0 z-10 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      {/* Add hamburger icon */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></div>
      </div>
      <div className="flex  items-center justify-between">
      <li>
        {/* Apply scrollToTop function to the logo link */}
        <Link to="/" className='logo-name container mx-auto' onClick={scrollToTop}>
                FRANCIS
              </Link>
            </li>
            <ul className={`flex  nav-mobile items-center justify-between ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <div className=" flex pt-39 pr-44  nav-color">
              <HeaderLink to="/" text="HOME" isActive={activeLink === '/'} onClick={() => handleLinkClick('/')} />
              <HeaderLink to="/about" text="ABOUT" isActive={activeLink === '/about'} onClick={() => handleLinkClick('/about')} />
              <HeaderLink to="/resume" text="RESUME" isActive={activeLink === '/resume'} onClick={() => handleLinkClick('/resume')} />
              <HeaderLink to="/skills" text="SKILLS" isActive={activeLink === '/skills'} onClick={() => handleLinkClick('/skills')} />
              <HeaderLink to="/project" text="PROJECT" isActive={activeLink === '/project'} onClick={() => handleLinkClick('/project')} />
         <li>
          <a href="#contact" onClick={() => {handleLinkClick('#contact');scrollTo(document.getElementById("contact").getBoundingClientRect().top + window.scrollY); }} className={`link ${activeLink === '#contact' ? 'active-link' : ''}`}>CONTACT</a>
          </li>
        
          </div>
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
