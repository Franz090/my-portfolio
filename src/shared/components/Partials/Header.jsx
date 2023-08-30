import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
  const [activeLink, setActiveLink] = useState('');
  const scrollToTop = () => {
    scrollTo(0);
  };

  const handleLinkClick = (to) => {
    scrollTo(0);
    setActiveLink(to);
  };

  return (
    <div className="Header pb-28">
      <nav className=' bg-primary-450 text-white p-9 fixed top-0 left-0 right-0 z-10 '>
        <ul className="flex space-x-10 items-center justify-between">
          <div className="flex items-center">
            <li>
              {/* Apply scrollToTop function to the logo link */}
              <Link to="/" className='logo-name container mx-auto px-26' onClick={scrollToTop}>
                FRANCIS
              </Link>
            </li>
          </div>
          <div className="flex space-x-8 items-center px-28 nav-color">
          <HeaderLink to="/" text="HOME" isActive={activeLink === '/'} onClick={() => handleLinkClick('/')} />
          <HeaderLink to="/about" text="ABOUT" isActive={activeLink === '/about'} onClick={() => handleLinkClick('/about')} />
         <HeaderLink to="/resume" text="RESUME" isActive={activeLink === '/resume'} onClick={() => handleLinkClick('/resume')} />
         <HeaderLink to="/skills" text="SKILLS" isActive={activeLink === '/skills'} onClick={() => handleLinkClick('/skills')} />
         <HeaderLink to="/project" text="PROJECT" isActive={activeLink === '/project'} onClick={() => handleLinkClick('/project')} />

            <li>
            <a href="#contact" onClick={() => scrollTo(document.getElementById("contact").getBoundingClientRect().top + window.scrollY)} className={`link ${activeLink === '#contact' ? 'active-link' : ''}`}>
  CONTACT
</a>

              
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
