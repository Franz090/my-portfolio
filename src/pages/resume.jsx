import { Carousel } from "../components/Resume/carousel";
import React, { useState, useEffect } from 'react';

import pic1 from "../assets/images/carousel/1.png";
import pic2 from "../assets/images/carousel/2.png";
import pic3 from "../assets/images/carousel/3.png";
import pic4 from "../assets/images/carousel/4.png";
import pic5 from "../assets/images/carousel/5.png";
import pic6 from "../assets/images/carousel/6.png";
import pic7 from "../assets/images/carousel/7.png";
import pic8 from "../assets/images/carousel/8.png";

const ResumePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showBackgroundGradient, setShowBackgroundGradient] = useState(true);

  useEffect(() => {
    const isPageReloaded = localStorage.getItem('isLoading');
    const storedShowText = localStorage.getItem('showText');

    if (isPageReloaded && isPageReloaded === 'false') {
      setIsLoading(false);
    } else {
      simulateLoading();
    }

    if (storedShowText === 'true') {
      setShowText(true);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsCarouselHovered(true);
    setShowBackgroundGradient(false);
    setShowText(false);
  };

  const handleMouseLeave = () => {
    setIsCarouselHovered(false);
    setShowBackgroundGradient(true);
    setShowText(true);
    localStorage.setItem('showText', 'true');
  };

  const simulateLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('isLoading', 'false'); // Set in localStorage
    }, 2000);
  };

  useEffect(() => {
    const isPageReloaded = localStorage.getItem('isLoading');
    if (isPageReloaded && isPageReloaded === 'false') {
      setIsLoading(false);
    } else {
      simulateLoading();
    }
  }, []);
 
  const gradientTop = {
    position: 'absolute',
 
    top: 0,
    left: 0,
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1))',

  };
  const gradientBottom = {
    position: 'absolute',

    bottom: 0,
    left: 0,

    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1))',

  };

  const data = {
    slides: [
      { src: pic1, alt: "Image 1 for carousel" },
      { src: pic2, alt: "Image 2 for carousel" },
      { src: pic3, alt: "Image 3 for carousel" },
      { src: pic4, alt: "Image 4 for carousel" },
      { src: pic5, alt: "Image 5 for carousel" },
      { src: pic6, alt: "Image 6 for carousel" },
      { src: pic7, alt: "Image 7 for carousel" },
      { src: pic8, alt: "Image 8 for carousel" },
    ],
  };
  const responsibilities = [
    "Creating the user interface (UI) design for adding, viewing, and printing data through Excel on the official website. I also handle hosting and deployment using local network hosting.",
    "We utilized the system to encode and view data for both accounts payable and non-accounts payable.",
  ];

  return (
    <div className="md:px-10 sm:px-10 xl:px-36 pb-8 pt-7">
      <h1 className="text-[27px] mb-5 tracking-wide capitalize font-semibold ">
        Working Experience
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <div className="col-span-1 md:col-span-1  p-4 resume resume-border ">
       

          {/* Add border class and padding class */}
          <div className="px-5">
      
          {isLoading ? (
          <div className="animate-pulse h-2.5 w-40 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (

          <h2 className='text-lg mt-5 mb-2 text-blue-custom font-bold tracking-wide antialiased'>
              Front-End Developer
            </h2>
            )}
            <div className="m-0 justify-between">
              <div className="m- row-auto leading-7 ">
              {isLoading ? (
          <div className="animate-pulse h-2.5 w-40 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p className="text-md antialiased font-normal">
                  Municipality of Santa Cruz Laguna at the Office of Municipal
                  Treasury - Internship
                </p>
                )}
              </div>
              <div className="m-1 text-custom-gray mt-4">
              {isLoading ? (
          <div className="animate-pulse h-2.5 w-40 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p>February 2023 - May 2023 | Front End Developer</p>     
                )}
                {isLoading ? (
          <div className="animate-pulse h-2.5 w-40 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p>Santa Cruz, Laguna</p>
                )}
           
              </div>
              {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
              <hr className="my-2 border-t-1 border-custom-gray" />
              )}
              
              <div className="text-custom-gray">
              {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p className="text-md antialiased ">
                  An official website has been developed to facilitate data
                  record evaluation. It includes features for encoding all data,
                  adding, viewing, printing, and creating backups through Excel
                  in case of important data loss, for both accounts payable and
                  non-accounts payable records.
                </p>
               )}
               {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <b className="text-md">Responsibilities</b>
                )}
                {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                
                <ul className="list-disc pl-5 ml-4">
                  {responsibilities.map((item, index) => (
                    <li key={index}> {item} </li>
                  ))}
                </ul>
                 )}
                 
              </div> 
          </div>
            </div> 
        </div>
        <div className="col-span-1 md:col-span-1   p-4 resume resume-border">
          {/* Add border class and padding class */}
           {isLoading ? (
          <div role="status" className="p-4 rounded shadow animate-pulse md:p-6 dark:border-gray-700 ">
            <div className="flex items-center justify-center h-96 mb-4 bg-custom-gray rounded dark:bg-gray-700 ">
        <svg className="w-10 h-10 text-gray-200 w-100 h-100 dark:text-gray-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    
          </div>
              ) : (
                <div 
                className="relative overflow-hidden flex justify-center items-center w-100 h-100 md:w-600 md:h-400 lg:w-4/7"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  opacity: isCarouselHovered ? '1' : '0.5',
                  transition: 'opacity 0.5s ease', // Add transition property
                  position: 'relative', // Set position to relative
                }}>
                  {showBackgroundGradient && (
          <>
          <div className="absolute top-0 left-0 w-full h-1/4" style={gradientTop}></div>
          <div className="absolute bottom-0 left-0 w-full h-1/4" style={gradientBottom}></div>
          </>
          )}
                  {showText && (
                  <h1 className="absolute top-16 lg:top-12 md:top-7 text-2xl mb-2 text-gray-custom font-bold tracking-wide antialiased" >
                   Internship Highlights</h1>
                   )}
                   <Carousel data={data.slides} />
                   {showText && (
                   <p className="absolute bottom-14 lg:bottom-12 md:bottom-7 text-sm mb-2 text-gray-custom  text-center font-bold tracking-wide antialiased ">Explore the highlights of my impactful projects and contributions during my internship experience. </p>
                   )}
          </div> )}
        </div>
      </div>

      <h1 className='text-[27px] mb-5 tracking-wide capitalize font-semibold'>
        Educational Background
      </h1>
      <div  className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

        <div className="col-span-1 md:col-span-1 p-4 resume resume-border">
       
          <div className="px-5">
          {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
            <h2 className="text-lg mt-5 mb-2  font-bold tracking-wide antialiased">
              Bachelor's/College Degree in Information Technology
            </h2>
              )}
            <div className="m-0 justify-between">
              <div className="m-1 text-custom-gray mt-4">
              {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p>Laguna State Polytechnic University</p>    
                )}
                {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p>Santa Cruz, Laguna</p>
              )}
              {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p>2019 - 2023</p>
              )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1  p-4 resume resume-border">
          {/* Add border class and padding class */}
          <div className="px-5">
            {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
            <h2 className="text-lg mt-5 mb-2  font-bold tracking-wide antialiased">
              TVL - Information and Communication Technology
            </h2>
              )}
            <div className="m-0 justify-between">
              <div className="m-1 text-custom-gray mt-4">
                {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p>AMA Santa Cruz Campus</p>
              )}
              {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p>Santa Cruz, Laguna</p>
              )}
              {isLoading ? (
          <div className="animate-pulse h-2.5 w-100 bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
              ) : (
                <p>2017 - 2019</p>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumePage;
