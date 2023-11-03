import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const facebookUrl = 'https://www.facebook.com/dOBLEangtama';
  const linkedinUrl = 'https://www.linkedin.com/in/oblepiasfrancisp2000';
  const githubUrl = 'https://github.com/Franz090';


  const currentYear = new Date().getFullYear();

  return (
    <div className='pt-12 pb-12 text-center px-10'>
      <h1 className="text-[22px] pb-2 font-semibold font-montserrat text-custom-gray">
        Connect with me on
      </h1>
      <div className='inline-flex space-x-3 pb-2'>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <div className="border border-color p-2 rounded-full w-10 h-10">
            <FontAwesomeIcon icon={faFacebookF} className='text-[22px]' />
          </div>
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <div className="border border-color p-2 rounded-full w-10 h-10">
            <FontAwesomeIcon icon={faLinkedinIn} className='text-[22px]' />
          </div>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <div className="border border-color p-2 rounded-full w-10 h-10">
            <FontAwesomeIcon icon={faGithub} className='text-[22px]' />
          </div>
        </a>
      </div>
      <p className='text-custom-gray font-semibold 
      text-[16px]  tracking-tighter'>&copy; {currentYear} Francis. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;