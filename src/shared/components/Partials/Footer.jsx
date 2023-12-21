import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerPosition < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const animation = useSpring({
    opacity: hasAnimated || isVisible ? 1 : 0,
    transform: hasAnimated || isVisible ? 'translateY(0)' : 'translateY(20%)',
    config: {
      duration: 500 // Duration of 800 milliseconds
    },

    onRest: () => {
      if (!hasAnimated) {
        setHasAnimated(true);
      }
    },
  });

  const facebookUrl = 'https://www.facebook.com/dOBLEangtama';
  const linkedinUrl = 'https://www.linkedin.com/in/oblepiasfrancisp2000';
  const githubUrl = 'https://github.com/Franz090';

  const currentYear = new Date().getFullYear();

  return (
    <animated.div className="footer pt-12 pb-12 text-center px-10" style={animation}>
      <h1 className="text-[22px] pb-2 font-semibold font-montserrat text-custom-gray">
        Connect with me on
      </h1>
      <div className="inline-flex space-x-3 pb-2">
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <div className="bg-footer border border-color p-2 rounded-full w-10 h-10">
            <FontAwesomeIcon icon={faFacebookF} className="text-[22px]" />
          </div>
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <div className="bg-footer border border-color p-2 rounded-full w-10 h-10">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-[22px]" />
          </div>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <div className="bg-footer border border-color p-2 rounded-full w-10 h-10">
            <FontAwesomeIcon icon={faGithub} className="text-[22px]" />
          </div>
        </a>
      </div>
      <p className="text-custom-gray font-medium font-montserrat text-[16px] tracking-tight subpixel-antialiased">
        &copy; {currentYear} Francis. All Rights Reserved.
      </p>
    </animated.div>
  );
};

export default Footer;