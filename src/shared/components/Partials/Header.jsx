import React from 'react';
import { Link } from 'react-router-dom';

const scrollToContact = (event) => {
  event.preventDefault();

  const contactElement = document.getElementById("contact");
  const start = window.scrollY;
  const target = contactElement.getBoundingClientRect().top + window.scrollY;
  const duration = 300;
  const startTime = performance.now();

  const scroll = (timestamp) => {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (target - start) * progress);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const scrollUpToTop = () => {
  const start = window.scrollY;
  const target = 0; // Scroll to the top
  const duration = 300;
  const startTime = performance.now();

  const scroll = (timestamp) => {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (target - start) * progress);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const Header = () => {
  return (
    <div className="Header">
      <nav className='container mx-auto bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10 '>
        <ul className="flex space-x-4  ">
          <li>
            <Link to="/" className="text-gray hover:text-gray-300" onClick={scrollUpToTop}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={scrollUpToTop}>About</Link>
          </li>
          <li>
            <Link to="/resume" onClick={scrollUpToTop}>Resume</Link>
          </li>
          <li>
            <Link to="/skills" onClick={scrollUpToTop}>Skills</Link>
          </li>
          <li>
            <Link to="/project" onClick={scrollUpToTop}>Project</Link>
          </li>
          <li>
            <a href="#contact" onClick={scrollToContact}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
