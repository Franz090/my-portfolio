import React from 'react'
import { Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="Header">
      <Link to = "/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/project">Projects</Link>
      <Link to="/contact">Contacts</Link>
    </div>
  )
}

export default Header