import gifImage from '../assets/videos/about.gif';
import useLinkStore from '../store/useLinkStore';
import React, { useRef, useEffect, useState } from 'react';

const AboutPage = () => {
  const { redirecting, setRedirecting } = useLinkStore();
  const buttonRef = useRef(null);
  const [imagePosition, setImagePosition] = useState('top-7'); // Initial position

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      // For smaller screens, adjust image position
      setImagePosition('top-0');
    } else {
      setImagePosition('top-7');
    }
  };

  useEffect(() => {
    // Call handleResize on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCVClick = (e) => {
    e.preventDefault();
    setRedirecting(true);
    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1KIPHhD4NUwrarBw2Vdm20zKHV149VczI/view?usp=sharing",
        "_blank"
      );
      setRedirecting(false);
    }, 2000); // 2 seconds delay
  };
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:flex lg:mt-1  lg:pb-10 pb-2 lg:pt-6 md:pt-3 pt-4 md:px-9  xl:px-36 lg:px-20 space-x-3">
      <div className="col-span-1 lg:flex lg:items-start lg:justify-start xl:w-7/12 flex-col">
        <h1 className="text-[27px] mb-2 tracking-wide capitalize font-semibold ">About Me</h1>
        <h2 className="text-2xl  font-light tracking-wide mb-4">I'm a Front End Developer and UI Designer</h2>
        <p className="text-custom-gray text-[16px] font-light mb-3 tracking-tightest antialiased text-justify">
        My name is Francis, and my path in the realm of web development and design has been quite an extraordinary one. Throughout my journey, I've had the privilege of expanding my skills beyond just front-end development and UI design. I've always had a deep-seated passion for creating captivating and immersive digital experiences, and it has been a humbling and fulfilling experience to be able to pursue this passion in my career.
        </p>
        <p className="text-custom-gray text-[16px] font-light tracking-tightest mb-3 antialiased text-justify">
        I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding, and I always strive for elegance in efficient code, whether it's in HTML, CSS, or ReactJS. Additionally, I can convert Adobe XD designs to HTML and create responsive designs. I'm passionate about continuous improvement and am enthusiastic about learning from senior developers to enhance my skills and knowledge
          </p>
        <p className="text-custom-gray text-[16px] font-light tracking-tight mb-3 subpixel-antialiased text-justify">
          Here is my CV. It contains detailed information about my education,skills, work experience, and projects.
        </p>
        {/* Add the "View CV" button with oblong border radius */}
        <button
  ref={buttonRef}
  className="bg-zinc-600 hover:bg-zinc-500 hover:gray-blue-600 text-white font-light py-2 px-5 rounded-full oblong-button subpixel-antialiased pt-2 pb-2 transition duration-300 ease-in-out transform hover:scale-95  " 
  onClick={handleCVClick}
>
  {redirecting ? 'Redirecting...' : 'View CV'}
</button>

      </div>
      <div className={`col-span-1 lg:flex relative ${imagePosition} pb-7 lg:items-center lg:justify-center xl:w-5/12`}>
        <div className=" hidden lg:block"> {/* Display only on large screens (lg) */}
          {/* add gif here  */}
          <img src={gifImage} alt="Your GIF" className='rounded-lg max-w-sm ' />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
