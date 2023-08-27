import React from 'react'
import {Link} from 'react-router-dom'

const scrollToContact = (event) => {
  event.preventDefault(); // Prevent the default anchor behavior

  // Find the target element with the id "contact"
  const contactElement = document.getElementById("contact");

  // Use smooth scrolling to scroll to the target element
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
}


const Header = () => {
  return (
    
    <div className="Header">
      
       <nav className='container mx-auto '>
        <ul className="flex space-x-4  ">
        <li>
            <Link to="/" className="text-gray hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <a href="#contact" onClick={scrollToContact}>Contact</a>
          </li>
        </ul>
      </nav>
     
    </div>
  )
}

export default Header